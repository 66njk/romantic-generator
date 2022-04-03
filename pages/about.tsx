/* Components */
import Head from 'next/head'
import Layout from '../components/layout'
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false })

const Home: React.FC = () => {

  return (
    <Layout>
      <Head>
        <title>关于 - 浪漫发生器</title>
      </Head>
      <div className={`min-h-screen my-8`}>
        <div className='flex justify-between'>
          <Spline id={'spline'} style={{width: '200px', height: '200px'}} scene='https://draft.spline.design/RbGv1TgaYxmRhkuP/scene.spline' />
        </div>
      </div>
    </Layout>
  )
}

export default Home