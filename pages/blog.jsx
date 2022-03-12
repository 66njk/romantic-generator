/* Components */
import Link from "next/link"
import Head from 'next/head'
import Image from "next/image"
import Layout from '../components/layout.jsx'
/* Static */
import template from '../public/images/template.png'
/* Functions */
import { getSortedPostsData } from '../lib/posts.js'
import { getTagColorByName } from "../lib/common.js"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

const Post = ({ id, isLatest, title, date, tags }) => {

  const tagItems = tags.map((tag) => {
    return { tag, colors: getTagColorByName(tag) }
  })

  return (
    <article className={`flex flex-col w-full h-auto border-b border-gray-900 dark:border-white dark:border-opacity-10 border-opacity-10 pb-6 mb-10 ${isLatest ? 'md:col-span-3 md:grid md:grid-cols-2 md:gap-x-12' : ''}`}>
      {/* 预览图 */}
      <Link href={`/posts/${id}`}>
        <div className={`relative mb-6 rounded-sm overflow-hidden cursor-pointer ${isLatest ? 'md:mb-0' : ''}`}>
          <Image src={template} alt='article preview' />
          <div className={`absolute top-0 left-0 flex justify-center items-center w-full h-full bg-emerald-500 bg-opacity-70 opacity-0 hover:opacity-100 transition-all overflow-hidden`}>
            <span className={`text-white text-2xl`}>查看</span>
          </div>
        </div>
      </Link>

      <section className={`flex flex-col justify-between h-40 ${isLatest ? 'md:h-full' : ''}`}>
        <header>
          {/* 标签 */}
          <div className='flex w-full h-auto flex-wrap'>
            {tagItems.map((item, index) => (
              <pre 
                style={{background: item.colors.background, color: item.colors.foreground}}
                className={`flex justify-center items-center text-sm px-2 py-1 mr-2 mb-2 rounded-sm font-semibold select-none cursor-pointer hover:opacity-50`}
                key={index}
              >
                {item.tag}
              </pre>
            ))}
          </div>
          {/* 标题 */}
          <Link href={`/posts/${id}`}>
            <h2 className={`text-2xl font-semibold text-gray-900 dark:text-white overflow-ellipsis line-clamp-2 text-clickable transition-colors ${isLatest ? 'md:text-5xl md:leading-snug' : ''}`}>
              <span>{title}</span>
            </h2>
          </Link>
        </header>
        {/* 注脚 */}
        <div className={`flex justify-between items-center ${isLatest ? 'md:mb-4' : ''}`}>
          <small className='text-base text-gray-900 dark:text-white text-opacity-40 dark:text-opacity-40'>{date || '--'}</small>
        </div>
      </section>
    </article>
  )
}

const Blog = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>博客 - 浪漫发生器</title>
      </Head>
      <Layout>
        <div className={`max-w-cmw min-h-screen mx-auto my-8 px-4`}>
          <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 w-full h-auto'>
            {allPostsData.map(({ id, date, title, tags }, index) => (
              <Post id={id} title={title} date={date} tags={tags} isLatest={index === 0 ? true : false} key={id} />
            ))}
          </section>
        </div>
      </Layout>
    </>
  )
}

export default Blog