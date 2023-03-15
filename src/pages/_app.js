import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import Layout from '../components/layout'

const App = ({ Component, pageProps }) => {
  return (
    <NextUIProvider >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}

export default App
