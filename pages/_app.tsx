/* Style */
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import '../styles/global.css'
import '../styles/style-components.css'
import '../styles/nprogress.css'
import '../styles/md-highlight.css'

function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', (url) => {
      NProgress.start()
    })
    router.events.on('routeChangeComplete', () => {
      NProgress.done()
    })
    router.events.on('routeChangeError', () => {
      NProgress.done()
    })
  }, [router])

  return (
    <Component {...pageProps} />
  )
}

export default App