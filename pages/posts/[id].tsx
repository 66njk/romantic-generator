/* Components */
import Head from 'next/head'
import Layout from '../../components/layout'
import CodeBlock from '../../components/codeblock'
/* Functions */
import { getAllPostIds, getPostData } from '../../lib/posts'
/* Dependencies */
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeStringify from 'rehype-stringify/lib'
import rehypeFormat from 'rehype-format'

/* 获取路径 */
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

/* 获取Props */
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

type PostProps = {
  postData: {
    title: string,
    date: string,
    markdown: string
  }
}

/* 页面组件 */
const Post: React.FC<PostProps> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={`max-w-screen-md min-h-screen mx-auto my-12 px-4`}>
        <div className='mb-32'>
          {/* 标题 */}
          <h1 className='mb-12 text-gray-900 dark:text-white font-bold leading-snug lg:leading-snug text-4xl lg:text-5xl'>
            {postData.title}
          </h1>
          {/* 日期 */}
          <small className='text-gray-900 dark:text-white text-opacity-40 dark:text-opacity-40 text-base'>
            {postData.date || '--'}
          </small>
        </div>
        {/* Markdown容器 */}
        <div className='prose prose-stone lg:prose-lg dark:prose-invert 
            prose-blockquote:not-italic prose-blockquote:font-normal 
            prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-700 
            dark:prose-blockquote:border-gray-500 prose-blockquote:py-1 
            prose-code:font-normal prose-pre:p-0 lg:prose-pre:p-0'
          >
          <ReactMarkdown
            components={CodeBlock}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeFormat, rehypeStringify]}
          >
            {postData.markdown}
          </ReactMarkdown>
        </div>
      </div>
    </Layout>
  )
}

export default Post