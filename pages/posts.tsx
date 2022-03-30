/* Components */
import Link from "next/link"
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import WelcomeWidget from "../components/welcome"
import Tags from "../components/tags"
import CustomSection from "../components/custom-section"
/* Functions */
import { getSortedPostsData } from '../lib/posts.js'
import { GetStaticProps } from "next"

import { samplePost } from "../lib/sampleData"

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

type PostMiniProps = {
  index: number
  title: String
  date: String
}

const PostMini: React.FC<PostMiniProps> = ({index, title, date}) => {
  return (
    <article className='flex mb-8 sm:pr-4'>
      <span className='mr-4 text-3xl text-gray-200 font-semibold leading-none select-none'>
        {'0' + (index + 1).toString()}
      </span>
      <div>
        <h3 className='mb-2 text-lg font-semibold text-gray-900 cursor-pointer leading-tight hover:underline decoration-gray-900 underline-offset-2'>
          {title}
        </h3>
        <small className='text-sm text-gray-400 leading-none'>{date} · 1123次浏览</small>
      </div>
    </article>
  )
}

type PostProps = {
  id: String
  title: String
  date: String
  tags: Array<String>
}

const Post: React.FC<PostProps> = ({ id, title, date, tags }) => {
  return (
    <article className='mb-12'>
      <div className='flex flex-col justify-between md:justify-center'>
        <Link href={`/posts/${id}`}>
          <h3 className='mb-2 text-2xl font-semibold text-gray-900 leading-tight line-clamp-2 cursor-pointer hover:underline decoration-gray-900 underline-offset-2'>
            {title}
          </h3>
        </Link>
        <p className='mb-3 text-gray-400 md:line-clamp-2 text-justify'>这是一段测试用语，它会有很多字，这是一段测试用语，它会有很多字，这是一段测试用语，它会有很多字，这是一段测试用语，它会有很多字</p>
        <small className='text-sm text-gray-400 leading-none'>{date} · 1113次浏览</small>
      </div>
    </article>
  )
}

type BlogProps = {
  allPostsData: any
}

const Blog: React.FC<BlogProps> = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>博客 - {siteTitle}</title>
      </Head>
      <Layout isHyaline>
        <WelcomeWidget title='Mellotron' bgColor='bg-blue-100'></WelcomeWidget>
        <CustomSection title='推荐'>
          <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {samplePost.map((post, index) => (
              <PostMini key={index} index={index} title={post.title} date={post.date}></PostMini>
            ))}
          </section>
        </CustomSection>
        <CustomSection title='标签' addStyle='md:hidden'>
          <Tags tags={[{
            id: 0,
            name: 'JavaScript'
          }]} />
        </CustomSection>
        <div className='max-w-cmw mx-auto px-4 py-8'>
          <div className='grid grid-cols-12 gap-8'>
            {/* wrap-list */}
            <section className='col-span-12 md:col-span-8 mt-6'>
              {allPostsData.map(({ id, date, title, tags }) => (
                <Post id={id} title={title} date={date} tags={tags} key={id} />
              ))}
            </section>
            {/* aside */}
            <aside className='hidden md:block md:col-span-4'>
              <div className='sticky top-28'>
                <h4 className='subhead'>标签</h4>
                <Tags tags={[{
                  id: 0,
                  name: 'JavaScript'
                }]} />
              </div>
            </aside>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Blog