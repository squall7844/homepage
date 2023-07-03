import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Response } from "src/components/Response";

export default function Inquiry() {
  return (
    <div>
      <Head>
        <title>Inquiry Page</title>
      </Head>
      <Header />
      <Response />
      <div className="mt-10 flex justify-center text-6xl">contact</div>
      <div className={styles.container}>
        <div>contact</div>
        <div>採用担当連絡先</div>
        <div>TEL:000-0000-0000</div>
        <div>mail:test@gmail.co.jp</div>
      </div>
      <Footer />
    </div>
  );
}
