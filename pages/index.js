import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Coming soom !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Faïçal Sawadogo" />
        <p className="description">
          Faïçal Sawadogo
        </p>
      </main>

      <Footer />
    </div>
  )
}
