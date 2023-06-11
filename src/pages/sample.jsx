import Link from "next/link";
import Image from "next/image";
import { data } from "autoprefixer";
import React, { useState } from "react";

export default function Sample(props) {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);
  const data = props.list;
  console.log(data);

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="flex bg-gray-50">
      <div className="flex-none  sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1">
        <Image src="/logo.jpg" alt="logo" width={200} height={100} />
      </div>
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
              <li className="border-b-2 p-2">
                <a href="/" onClick={menuFunction}>
                  test
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : undefined}
      <div className="m-5 flex-initial font-bold text-[#abc5c5] ">
        <ul className="hidden  flex-initial text-left md:flex">
          <li className="p-4">
            <a href="/">test </a>
          </li>
        </ul>
      </div>
      <button
        onClick={menuFunction}
        className="absolute right-0 top-0 flex-initial md:hidden"
      >
        <Image src="/" alt="menu" width={50} height={50} />
      </button>
    </nav>
  );
}
