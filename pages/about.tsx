/* Components */
import Head from 'next/head'
import Layout from '../components/layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>关于 - 浪漫发生器</title>
      </Head>
      <div className={`min-h-screen my-8`}>
      </div>
    </Layout>
  )
}

export default Home