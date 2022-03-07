/* Components */
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout.jsx'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={`min-h-screen my-8`}>
        
      </div>
    </Layout>
  )
}

export default Home