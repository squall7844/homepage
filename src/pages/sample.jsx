import { useEffect, useState } from "react";
import { Response } from "src/components/Response";
import styles from "src/styles/Home.module.css";

export default function Sample() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("hello hooks");
  }, [count]);

  return (
    <div>
      <Response />
      <div className={styles.container}>
        <h1>UseState</h1>
        <button onClick={handleClick}>+</button>
        <p>{count}</p>

        <hr />
        <h1>UseContext</h1>
      </div>
    </div>
  );
}
