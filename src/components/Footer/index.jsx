import classes from "src/components/Footer/Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.outer}></div>
      <div className={classes.inner}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thanks by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={classes.logo} />
        </a>
        <div>tets</div>
      </div>
      <div className={classes.outer}></div>
    </footer>
  );
}
