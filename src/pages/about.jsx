import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Response } from "src/components/Response";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Response />
      <div className={styles.container}></div>
      <Footer />
    </div>
  );
}
