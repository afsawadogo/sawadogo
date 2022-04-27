import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Faïçal Sawadogo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Faïçal Sawadogo" />
        <p className="description">
          Coming soom ! 
        </p>
      </main>

      <Footer />
    </div>
  )
}
