"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TbLetterX } from "react-icons/tb";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Novels", url: "/novels" },
  { id: 3, title: "Blogs", url: "/blogs" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const handleMenuClick = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <section className="w-full">
      <div className="flex justify-between items-center h-[80px] w-5/6 mx-auto">
        <Link href={"/"} className="font-bold tracking-widest text-lg">
          C-Tech
        </Link>

        {/* large screens */}

        <div className="hidden lg:flex gap-7 items-center">
          {links.map((link) => (
            <Link key={link.id} href={link.url} className="text-sm">
              {link.title}
            </Link>
          ))}

          <button className="px-3.5 cursor-pointer border-none py-2 bg-primary-100 text-gray-100 rounded-2xl">
            Logout
          </button>
        </div>

        {/* icon */}

        <div className="lg:hidden ">
          <div>
            <button onClick={handleMenuClick}>
              {toggleMenu ? (
                <AiOutlineMenu size={30} />
              ) : (
                <TbLetterX size={30} />
              )}
            </button>
          </div>

          {toggleMenu ? null : (
            <div className="p-6  absolute z-10 top-15 right-0 mx-4 my-2 min-w-[140px] rounded-xl w-1/2  bg-yellow-200 ">
              {/* links in phone */}
              <div className="flex flex-col  items-center justify-end flex-1 list-none">
                {links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.url}
                    onClick={() => setToggleMenu((prev) => !prev)}
                    className="my-3"
                  >
                    {link.title}
                  </Link>
                ))}

                <button className="px-3.5 cursor-pointer mt-3 border-none py-2 bg-primary-100 text-gray-100 rounded-2xl">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* div to display only when menu click is true  */}
      </div>
    </section>
  );
};

export default Navbar;
