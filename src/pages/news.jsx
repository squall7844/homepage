import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";
import { Toppage } from "src/components/Toppage";
import Head from "next/head";
import { Response } from "src/components/Response";

export default function Test() {
  return (
    <div>
      <Head>
        <title>News Page</title>
      </Head>
      <Header />
      <Response />
      <div className={styles.container}>NewsPage!!</div>
      <div className={styles.container}>test</div>
      <div className="text-justify text-3xl font-bold underline">
        hell tailwindcss!!!!!sample!
      </div>
      <Toppage />
      <Footer />
    </div>
  );
}
