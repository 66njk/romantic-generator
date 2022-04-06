/* Components */
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { useRouter } from 'next/router'
import IconBlog from '../public/svg/icon/blog.svg'
import IconStar from '../public/svg/icon/star.svg'

const Home: React.FC = () => {
  const router = useRouter()

  return (
    <Layout isHyaline>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='z-10 relative container px-5 pt-40 h-screen sm:pt-44'>
        <h1 className='mb-8 lg:mb-14 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 leading-tight break-words'>
          Web, design,
          <br/>
          <span className='text-emerald-500'>&</span> web design.
        </h1>
        <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4'>
          <div className='button border border-gray-900 text-white bg-gray-800 hover:text-gray-900 hover:bg-gray-200' onClick={() => router.push('/posts')}>
            <IconBlog className='w-6 h-6 fill-current' />
            <span>博客</span>
          </div>
          <div className='button border border-gray-900 text-gray-900 bg-white hover:bg-gray-200' onClick={() => router.push('/showcase')}>
            <IconStar className='w-6 h-6 fill-current' />
            <span>作品</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home