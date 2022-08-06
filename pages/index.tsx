import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import { ECategory } from '../components/types'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState<ECategory>();
  return (
    <div className={styles.container}>
      <Head>
        <title>Product Editor</title>
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Product list</h1>
        <CategoryList activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        <ProductList activeCategory={activeCategory}/>
      </main>
    </div>
  )
}

export default Home
