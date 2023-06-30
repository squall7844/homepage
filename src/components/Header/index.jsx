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
    <nav className="sticky top-0 z-50 flex justify-end border-b-2 border-b-black bg-white pb-3">
      {/* ロゴ */}
      <Image
        src="/画像.jpg"
        alt="ロゴ"
        width={200}
        height={200}
        className="absolute left-0 m-1"
      />
      {/* ロゴ */}
      {/* ハンバーガーメニュー起動時 */}
      {openMenu ? (
        <div className="absolute top-0 z-10 flex min-h-fit  min-w-full flex-row lg:hidden">
          <div className="basis-1/2"></div>

          <div className="lef basis-1/2 bg-white">
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
      <div className=" flex  h-40 text-xl font-bold text-[#5d7dcf] ">
        <ul className="hidden  flex-initial text-left lg:flex">
          <li className="mt-16 ">
            {ITEMS.map((item) => {
              return (
                <Link key={item.href} href={item.href} className="  m-10">
                  {item.title}
                </Link>
              );
            })}
          </li>
        </ul>
      </div>
      <button
        onClick={menuFunction}
        className="absolute right-5 top-5 flex-initial lg:hidden"
      >
        <Image src="/bars.svg" alt="menu" width={50} height={50} />
      </button>
      {/* 標準のメニュー */}
    </nav>
  );
}
