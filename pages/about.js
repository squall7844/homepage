import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Links } from "../components/Links";
import { Headline } from "../components/Headline";
import { Main } from "../components/Main";

export default function Home() {
  console.log("test");
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main page="About" />
      <Footer />
    </div>
  );
}
