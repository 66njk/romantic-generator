/* Components */
import Head from 'next/head'
import Layout from '../../components/layout'
import toast, { Toaster } from 'react-hot-toast'
import renderers from '../../lib/post-render'
/* Keystone */
import { query } from '.keystone/api'
import { DocumentRenderer } from '@keystone-6/document-renderer'
import dayjs from 'dayjs'
/* SVG Icon */
import PaperClip from '../../public/svg/Icon/paper-clip.svg'
import copy from 'copy-text-to-clipboard'

export async function getStaticPaths() {
  const posts = (await query.Post.findMany({
    query: `slug`,
  })) as { slug: string }[]

  const paths = posts
    .filter(({ slug }) => !!slug)
    .map(({ slug }) => `/posts/${slug}`)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = (await query.Post.findOne({
    where: { slug: params!.slug as string },
    query: `title id content{ document } createAt`
  })) as PostProps['post'] | null

  if (!post) {
    return { notFound: true }
  }

  post.createAt = dayjs(post.createAt).format('YYYY-MM-DD HH:mm')

  return {
    props: {
      post
    }
  }
}

type PostProps = {
  post: {
    id: string
    title: string
    content: {
      document: any
    }
    createAt: string
  }
}

const Post: React.FC<PostProps> = ({ post }) => {

  const notify = () => {
    copy(window.location.href)
    toast.success('链接已粘贴至剪切板✨')
  }

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className={`max-w-screen-md min-h-screen mx-auto px-5`}>
        <div className='flex flex-col mt-12 mb-4 lg:mb-8'>
          {/* 标题 */}
          <h1 className='mb-5 text-gray-900 dark:text-white font-bold leading-snug lg:leading-snug text-4xl lg:text-5xl'>
            {post.title}
          </h1>
          {/* 日期 */}
          <small className='mb-5 tracking-wider text-gray-900 font-semibold dark:text-white text-opacity-40 dark:text-opacity-40 text-base'>
            {post.createAt || '--'}
          </small>
          <div className='flex flex-wrap mb-4'>
            <div className='share-button cursor-copy' onClick={notify}>
              <PaperClip className='w-5 h-5 mr-1 fill-current' />
              复制链接
            </div>
          </div>
        </div>
        <div className='
          mb-12 max-w-none prose prose-stone dark:prose-invert
          prose-blockquote:not-italic prose-blockquote:font-normal 
          prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-700 
          dark:prose-blockquote:border-gray-500 prose-blockquote:py-1 
          prose-code:font-normal prose-pre:bg-gray-100 prose-pre:bg-opacity-6 
          prose-pre:text-gray-800 prose-pre:overflow-scroll prose-pre:scroll-smooth
          prose-a:text-emerald-500 prose-a:no-underline prose-strong:text-inherit
          prose-code:bg-gray-100 prose-code:prose-pre:bg-opacity-60 
          prose-code:p-0.5 prose-code:mx-0.5 prose-code:rounded-sm
          prose-p:text-justify prose-li:text-justify
        '
        >
          {post.content?.document && (
            <DocumentRenderer
              document={post.content.document}
              renderers={renderers}
            />
          )}
        </div>
      </article>
      <Toaster
        position='bottom-center'
        containerStyle={{ bottom: 40 }}
        toastOptions={{style: {
          padding: '16px',
          color: '#fff',
          backgroundColor: '#171717',
          boxShadow: 'none'
        }}}
      />
    </Layout>
  )
}

export default Post