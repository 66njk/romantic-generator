/* Components */
import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from '../components/hero'
import Tags, { Tag } from '../components/tags'
import CustomSection from '../components/custom-section'
import Image from 'next/image'
/* Functions */
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { query } from '.keystone/api'
import dayjs from 'dayjs'
import { useTagsController } from '../lib/hooks'

export const getStaticProps: GetStaticProps = async () => {
  const baseTags = await query.PostsTag.findMany({
    query: `id name value`
  })
  const tags = [
    {
      id: '0',
      name: '全部',
      value: 'all'
    },
    ...baseTags
  ]

  const posts = await query.Post.findMany({
    query: `
      id
      title
      slug
      tags {
        name
        value
      }
      preview {
        url
      }
      abstract
      createAt
    `
  }) as PostProps[]

  for (const post of posts) {
    post.createAt = dayjs(post.createAt).format('YYYY/MM/DD')
  }

  return {
    props: {
      tags,
      posts
    }
  }
}

type PostMiniProps = {
  index: number
  id: string
  title: string
  slug: string
  tags: Array<{
    id: string
    name: string
    value: string
  }>
  createAt: string
}

const PostMini: React.FC<PostMiniProps> = ({ index, title, slug, createAt }) => {
  return (
    <article className='flex mb-6 sm:pr-4'>
      <span className='mr-4 text-3xl text-gray-200 font-semibold leading-none select-none'>
        {'0' + (index + 1).toString()}
      </span>
      <div>
        <Link href={`/posts/${slug}`}>
          <h3 className='mb-2 text-lg font-semibold text-gray-900 cursor-pointer leading-tight hover:underline decoration-gray-900 underline-offset-2'>
            {title}
          </h3>
        </Link>
        <small className='text-sm font-semibold tracking-wider text-gray-900 text-opacity-40 leading-none'>
          {createAt}
        </small>
      </div>
    </article>
  )
}

type PostProps = {
  id: string
  title: string
  slug: string
  tags: Array<{
    id: string
    name: string
    value: string
  }>
  preview: { url: string }
  abstract: string
  createAt: string
}

const Post: React.FC<PostProps> = ({ title, slug, preview, abstract, createAt }) => {
  const router = useRouter()
  return (
    <article className='flex flex-col md:flex-row'>
      <div className='relative flex-shrink-0 w-smcreen aspect-40/28 sm:w-160 sm:h-112 md:w-40 md:h-28 mb-4 md:mr-4 bg-gray-100 overflow-hidden'>
        <Image
          className='rounded-sm cursor-pointer hover:scale-110 transition-transform duration-500'
          src={preview.url}
          alt={`${title} 预览图片`}
          layout="fill"
          priority
          onClick={() => router.push(`/posts/${slug}`)}
        />
      </div>
      <div>
        <small className='block text-base font-semibold tracking-wider text-gray-900 text-opacity-20 leading-none'>
          {createAt}
        </small>
        <Link href={`/posts/${slug}`}>
          <h3 className='my-2 text-2xl font-semibold text-gray-900 leading-tight line-clamp-2 cursor-pointer hover:underline decoration-gray-900 underline-offset-2'>
            {title}
          </h3>
        </Link>
        <div className='text-gray-900 text-opacity-50 md:line-clamp-4'>
          {abstract}
        </div>
      </div>
    </article>
  )
}

type BlogProps = {
  posts: Array<PostProps>,
  tags: Array<Tag>
}

const Blog: React.FC<BlogProps> = ({ posts, tags }) => {

  const { displayData, selectedTag, setSelectedTag } = useTagsController(posts)

  return (
    <>
      <Head>
        <title>博客 - {siteTitle}</title>
      </Head>
      <Layout isHyaline>
        <Hero
          title='博客'
          bgColor='bg-white'
        />
        {posts.length > 50 && <CustomSection title='推荐'>
          <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {posts.map((post, index) => (
              <PostMini
                index={index}
                id={post.id}
                key={post.id}
                slug={post.slug}
                title={post.title}
                tags={post.tags}
                createAt={post.createAt || '--'}
              ></PostMini>
            ))}
          </section>
        </CustomSection>}
        <div className='container min-h-screen py-8'>
          <div className='md:hidden'>
            <h2 className='subhead'>分类</h2>
            <Tags tags={tags} state={[selectedTag, setSelectedTag]} />
          </div>
          {posts.length > 0 ?
            <div className='grid grid-cols-12 gap-8'>
              {/* wrap-list */}
              <section className='col-span-12 md:col-span-8 w-smcreen sm:w-160 md:w-auto my-4 space-y-10 lg:space-y-8'>
                {displayData.map((post) => (
                  <Post
                    id={post.id}
                    key={post.id}
                    slug={post.slug}
                    title={post.title}
                    tags={post.tags}
                    preview={post.preview}
                    abstract={post.abstract}
                    createAt={post.createAt || '--'}
                  />
                ))}
              </section>
              {/* aside */}
              <aside className='hidden md:block md:col-span-4'>
                <div className='sticky top-28'>
                  <h2 className='subhead'>分类</h2>
                  <Tags tags={tags} state={[selectedTag, setSelectedTag]} />
                </div>
              </aside>
            </div> :
            <div className='flex justify-center items-center w-full h-40'>
              <div className='text-lg text-gray-900 text-opacity-50'>
                暂无博文
              </div>
            </div>
          }
        </div>
      </Layout>
    </>
  )
}

export default Blog