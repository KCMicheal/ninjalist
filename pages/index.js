import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
   <div>
     <h1>Homepage</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora recusandae, veritatis asperiores perspiciatis blanditiis eligendi, dolorum possimus distinctio quas, iusto similique impedit amet consequuntur at illo. Soluta, consequatur necessitatibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora recusandae, veritatis asperiores perspiciatis blanditiis eligendi, dolorum possimus distinctio quas, iusto similique impedit amet consequuntur at illo. Soluta, consequatur necessitatibus.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora recusandae, veritatis asperiores perspiciatis blanditiis eligendi, dolorum possimus distinctio quas, iusto similique impedit amet consequuntur at illo. Soluta, consequatur necessitatibus.</p>
    <Link href="/ninjas">
      <a>See Ninja listing</a>
    </Link>
   </div>
  )
}
