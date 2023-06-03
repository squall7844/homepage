import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";

export default function Test() {
  return (
    <div>
      <Header />
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
