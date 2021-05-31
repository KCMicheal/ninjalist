import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninjas | Home</title>
        <meta name="keywords" content="ninjas kicks jabs"/>
      </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora recusandae, veritatis asperiores perspiciatis blanditiis eligendi, dolorum possimus distinctio quas, iusto similique impedit amet consequuntur at illo. Soluta, consequatur necessitatibus.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora recusandae, veritatis asperiores perspiciatis blanditiis eligendi, dolorum possimus distinctio quas, iusto similique impedit amet consequuntur at illo. Soluta, consequatur necessitatibus.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora recusandae, veritatis asperiores perspiciatis blanditiis eligendi, dolorum possimus distinctio quas, iusto similique impedit amet consequuntur at illo. Soluta, consequatur necessitatibus.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja listing</a>
      </Link>
    </div>
   </>
  )
}
