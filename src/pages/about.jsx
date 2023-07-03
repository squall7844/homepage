import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Response } from "src/components/Response";
import styles from "src/styles/Home.module.css";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Response />

      <div className={styles.container}>test</div>
      <Footer />
    </div>
  );
}
