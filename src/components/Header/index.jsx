import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.inner}>
          <Image
            src={"/logo.jpg"}
            alt="画像"
            width={100}
            height={100}
            className={classes.logo}
          />
          {/* ヘッダー */}
          <nav>
            {ITEMS.map((item) => {
              return (
                <Link key={item.href} className={classes.text} href={item.href}>
                  {item.title}
                </Link>
              );
            })}
          </nav>
          {/* メニューボタン（ハンバーガー） */}
          <div>
            <div className={classes.humburger} onClick={() => menuFunction()}>
              <span className={openMenu ? classes.open : undefined}></span>
              <span className={openMenu ? classes.open : undefined}></span>
              <p className={openMenu ? classes.open : undefined}>Menu</p>
            </div>
          </div>
          {/* メニューボタン（ハンバーガー） */}
        </div>
      </header>
      <div className={`${classes.Menu} ${openMenu ? classes.open : undefined}`}>
        <div className={classes.close} onClick={() => menuFunction()}>
          <span></span>
          <span></span>
          <p>Close</p>
        </div>
        <div>
          {/* {ITEMS.map((item) => {
          return (
            <Link key={item.href} href={item.href}>
              {item.title}
            </Link>
          );
        })} */}
        </div>
      </div>
    </div>
  );
}
