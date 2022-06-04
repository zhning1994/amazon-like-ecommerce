import { Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ning Style EShop</title>
        <meta name="description" content="Ecommerce app using Nextjs and Sanity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant='h1' >Ning EShop</Typography>
    </div>
  )
}
