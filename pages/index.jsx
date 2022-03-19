/* Components */
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout.jsx'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='z-10 relative flex flex-col items-center px-4 pt-56 h-screen sm:pt-52 md:pt-44 lg:pt-32'>
        <h1 className='mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-gray-900 text-center leading-snug sm:leading-snug md:leading-snug lg:leading-snug break-words'>
          完全看不出来
          <br/>
          这是一个
          <br className='sm:hidden'/>
          <span className='sm:pl-4 underline decoration-emerald-200 decoration-wavy underline-offset-auto rounded-sm'>
            个人博客
          </span>
        </h1>
        <p className='mb-8 text-xl text-gray-900 text-opacity-60 text-center leading-relaxed'>
          一些有关于网页开发、UI设计的天马行空
          <br/>
          正在这里发生
        </p>
        <div className='flex flex-col items-center sm:flex-row'>
          <div className='button-primary' onClick={() => router.push('/showcase')}>作品</div>
          <div className='button' onClick={() => router.push('/blog')}>博客</div>
        </div>
      </div>
    </Layout>
  )
}

export default Home