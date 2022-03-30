/* Components */
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export const siteTitle = '浪漫发生器'

type LayoutProps = {
  children: React.ReactNode
  isHyaline?: Boolean
}

const Layout: React.FC<LayoutProps> = ({ children, isHyaline = false }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Romantic Generator" />
        <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header isHyaline={isHyaline} />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout