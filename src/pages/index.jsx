import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { Response } from "src/components/Response";

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handlAdd } = useInputArray();

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Response />
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
