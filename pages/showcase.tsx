/* Components */
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

const Showcase: React.FC = () => {
  return (
    <>
      <Head>
        <title>作品 - {siteTitle}</title>
      </Head>
      <Layout isHyaline>
        <div className='w-screen h-screen flex justify-center items-center'>
          <div className='text-lg text-gray-900 text-opacity-50'>
            暂时不需要这个页面，因为暂时没有作品
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Showcase