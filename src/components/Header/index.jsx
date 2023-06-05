import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

const ITEMS = [
  {
    href: "/",
    title: "Index",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/test",
    title: "Test",
  },
  {
    href: "/",
    title: "ここに文字を入力",
  },
  {
    href: "/",
    title: "ここに文字を入力",
  },
  {
    href: "/",
    title: "ここに文字を入力",
  },
];

export function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.outer}></div>
      <div className={classes.inner}>
        <nav>
          {ITEMS.map((item) => {
            return (
              <Link key={item.href} className={classes.text} href={item.href}>
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className={classes.outer}></div>
    </header>
  );
}
