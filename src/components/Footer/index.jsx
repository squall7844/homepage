import classes from "src/components/Footer/Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.outer}></div>
      <div className={classes.inner}>
        <div>住所</div>
        <div> Thanks by </div>
        <div>tets</div>
      </div>
      <div className={classes.outer}></div>
    </footer>
  );
}
