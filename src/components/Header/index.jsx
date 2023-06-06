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
      {/* レスポンシブわかるようにするやつ */}
      <div className="fixed right-0 top-0 m-8 flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 p-3 font-mono text-xs text-white sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500">
        <div className="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
        <div className="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
        <div className="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
        <div className="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
      </div>
      {/* レスポンシブわかるようにするやつ */}

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
        <div>X</div>
      </div>
      <div className={classes.outer}></div>
    </header>
  );
}
