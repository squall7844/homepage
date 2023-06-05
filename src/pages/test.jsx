import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";
import Image from "next/image";

export default function Test() {
  return (
    <div>
      <Header />
      <div className={`fixed left-0 top-0 z-[-1] h-screen w-full`}>
        <Image src={`/speace.jpg`} alt="画像" fill={true}  />
      </div>

      <div className={styles.container}>test</div>
      <div className={styles.container}>test</div>
      <div className={styles.container}>test</div>
      <div className={styles.container}>test</div>
      <div className={styles.container}>test</div>
      <div className={styles.container}>test</div>
      <div className={styles.container}>test</div>
      <div className={styles.container}>test</div>
      <div className={styles.container}>test</div>
      <div className="text-justify text-3xl font-bold underline">
        hell tailwindcss!!!!!
      </div>
      <Footer />
    </div>
  );
}
