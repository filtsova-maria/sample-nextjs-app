import type { NextPage } from "next";
import Head from "next/head";
import CategoryList from "../components/Categories/CategoryList";
import ProductList from "../components/Product/ProductList";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Product Editor</title>
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Product list</h1>
        <CategoryList />
        <ProductList />
      </main>
    </div>
  );
};

export default Home;
