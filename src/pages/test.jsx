import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";
import Image from "next/image";

export default function Test() {
  return (
    <div>
      <Header />
      <div className={`fixed left-0 top-0 z-[-1] h-screen w-full`}>
        {/* <Image src={'/speace.jpg'} alt="画像" fill={true}  /> */}
      </div>
      {/* レスポンシブわかるようにするやつ */}
      <div className="fixed right-0  m-8 flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 p-3 font-mono text-xs text-white sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500">
        <div className="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
        <div className="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
        <div className="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
        <div className="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
      </div>
      {/* レスポンシブわかるようにするやつ */}
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
