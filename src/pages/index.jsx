import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { Response } from "src/components/Response";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Response />
      <div className={styles.container}>
        <Main page="Index(ホーム)" />
      </div>
      <Footer />
    </div>
  );
}
