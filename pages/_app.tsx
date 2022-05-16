
import '../styles/globals.scss'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => (


  <Layout >
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
)
export default MyApp
