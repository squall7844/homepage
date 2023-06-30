import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
<<<<<<< HEAD
import { Response } from "src/components/Response";
import { NoFallbackError } from "next/dist/server/base-server";
=======

>>>>>>> parent of 0e96949 (全体的に変更)

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handlAdd } = useInputArray();

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
<<<<<<< HEAD
      <Response />
=======

      {/* レスポンシブわかるようにするやつ */}
      <div className="fixed right-0  m-8 flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 p-3 font-mono text-xs text-white sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500">
        <div className="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
        <div className="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
        <div className="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
        <div className="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
      </div>

>>>>>>> parent of 0e96949 (全体的に変更)
      <div className={styles.container}>
        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>カウント</button>
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handlAdd}>追加</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <Main page="Index(ホーム)" />
      </div>
      <Footer />
    </div>
  );
}
