import Link from "next/link";
import classes from "src/components/Header//Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.outer}></div>
      <div className={classes.inner}>
        <Link className={classes.anchor} href="/">
          Index
        </Link>
        <Link className={classes.anchor} href="/about">
          About
        </Link>
        <div className={classes.anchor}>a</div>
        <div className={classes.anchor}>a</div>
        <div className={classes.anchor}>a</div>
        <div className={classes.anchor}>a</div>
        <div className={classes.anchor}>a</div>
        <div className={classes.anchor}>a</div>
      </div>
      <div className={classes.outer}></div>
    </header>
  );
}
