import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify technical test</title>
        <meta name="description" content="Spotify technical test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Here we are...</h1>
    </div>
  )
}
