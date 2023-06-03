import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.outer}></div>
      <div className={classes.inner}>
        <nav>
          <Link className={classes.text} href="/">
            Index
          </Link>
          <Link className={classes.text} href="/about">
            About
          </Link>
          <Link className={classes.text} href="/test">
            Test
          </Link>
          <Link className={classes.text} href="/">
            文字をここに入力
          </Link>
          <Link className={classes.text} href="/">
            文字をここに入力
          </Link>
          <Link className={classes.text} href="/">
            文字をここに入力
          </Link>
        </nav>
      </div>
      <div className={classes.outer}></div>
    </header>
  );
}
