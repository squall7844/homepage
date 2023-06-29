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
      <div className="mt-10 flex justify-center">お問い合わせフォーム</div>
      <div className={styles.container}>
        <div>名前</div>
        <div>メールアドレス</div>
        <div>電話番号</div>
        <div>お問い合わせ内容</div>
      </div>
      <Footer />
    </div>
  );
}
