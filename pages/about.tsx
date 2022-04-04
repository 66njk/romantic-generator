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
      <div className={`container my-8`}>
        Hey! 这是我的个人主页，这是我与世界建立联系的方式。
      </div>
    </Layout>
  )
}

export default Home