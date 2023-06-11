import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

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
    href: "/sample",
    title: "sample",
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
  console.log(openMenu);

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex bg-white">
      {/* ロゴ */}
      <div className="flex-none  sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1 ">
        <Image src="/logo.jpg" alt="logo" width={200} height={100} />
      </div>
      {/* ロゴ */}

      {/* ハンバーガーメニュー起動時 */}
      {openMenu ? (
        <div className="absolute right-0 top-0 z-10 flex min-h-fit  min-w-full flex-row">
          <div className="basis-1/2"></div>

          <div className="basis-1/2 bg-white">
            <ul className=" border-l-2 text-center ">
              <li className="border-b-2 p-2">
                <button onClick={menuFunction} className="font-bold">
                  close
                </button>
              </li>

              {ITEMS.map((item) => {
                return (
                  <li className="border-b-2 p-2 ">
                    <div onClick={menuFunction}>
                      <Link key={item.href} href={item.href}>
                        {item.title}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : undefined}
      {/* ハンバーガーメニュー起動時 */}

      {/* 標準のメニュー */}
      <div className="m-5 flex-initial font-bold text-[#7d5dcf] ">
        <ul className="hidden  flex-initial text-left md:flex">
          <li className="m-5 p-4">
            {ITEMS.map((item) => {
              return (
                <Link key={item.href} href={item.href} className="m-5">
                  {item.title}
                </Link>
              );
            })}
          </li>
        </ul>
      </div>
      <button
        onClick={menuFunction}
        className="absolute right-5 top-5 flex-initial md:hidden"
      >
        <Image src="/bars-solid.svg" alt="menu" width={50} height={50} />
      </button>
      {/* 標準のメニュー */}
    </nav>
  );
}
