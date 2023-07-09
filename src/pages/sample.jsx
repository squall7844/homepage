import { Link as Scroll } from "react-scroll";
import { Response } from "src/components/Response";
import styles from "src/styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Response />
      <div className={styles.container}>test</div>
      <div className={styles.container}>test</div>
      <Scroll
        to="top"
        smooth={true}
        duration={300}
        className={`animate-roll-in-left fixed -bottom-4 left-4 z-30`}
      >
        <button
          className={`mx-auto mb-7 mt-2 h-8 w-8 rotate-12 transform cursor-pointer border-4 border-double border-blue-400 bg-gray-100 text-center opacity-80 hover:opacity-95 sm:h-10 sm:w-10 `}
        >
          TOP
        </button>
      </Scroll>
    </div>
  );
}
