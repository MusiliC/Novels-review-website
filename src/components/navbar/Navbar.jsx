"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TbLetterX } from "react-icons/tb";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

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

  const { data: session } = useSession();

  const router = useRouter();

  const activeLink = usePathname();

  const handleSignOut = () => {
    signOut();
    router?.push("/dashboard/login");
  };

  const handleSignOutPhone = () => {
    signOut();
    setToggleMenu((prev) => !prev);
    router?.push("/dashboard/login");
  };

  const handleMenuClick = () => {
    setToggleMenu((prev) => !prev);
  };

  let userProfile = session?.user.email.charAt(0).toUpperCase();

  return (
    <section className="w-full">
      <div className="flex justify-between items-center h-[80px] w-[90%] mx-auto">
        <Link href={"/"} className="font-bold tracking-widest text-lg">
          C-Tech
        </Link>

        {session?.user && (
          <div className=" h-[45px] rounded-full w-[45px] p-1">
            {session.user.image ? (
              <Image
                src={session.user.image}
                alt="U"
                className="rounded-full"
                width={45}
                height={45}
              />
            ) : (
              <div className="bg-yellow-200 w-full h-full rounded-full flex justify-center items-center">
                <p className="font-semibold md:text-lg">{userProfile}</p>
              </div>
            )}
          </div>
        )}

        {/* large screens */}

        <div className="hidden lg:flex gap-7 items-center">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`${
                activeLink === link.url
                  ? "border-b-[3px] border-primary-100"
                  : ""
              } text-sm`}
            >
              {link.title}
            </Link>
          ))}

          {session?.user ? (
            <button
              onClick={handleSignOut}
              className="px-3.5 cursor-pointer border-none py-2 hover:bg-primary-100 outline hover:outline-none outline-1 hover:text-gray-100 rounded-2xl"
            >
              Sign Out
            </button>
          ) : (
            <Link
              type="button"
              className="px-3.5 cursor-pointer border-none py-2 hover:bg-primary-100 outline hover:outline-none outline-1 hover:text-gray-100 rounded-2xl"
              href="/dashboard/login"
            >
              Sign In
            </Link>
          )}
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
                    className={`${
                      activeLink === link.url
                        ? "border-b-[3px] border-primary-100"
                        : ""
                    } text-sm my-3`}
                  >
                    {link.title}
                  </Link>
                ))}

                {session?.user ? (
                  <button
                    className="px-3.5 mt-3 cursor-pointer border-none py-2 hover:bg-primary-100 outline hover:outline-none outline-1 hover:text-gray-100 rounded-2xl"
                    onClick={handleSignOutPhone}
                  >
                    Sign Out
                  </button>
                ) : (
                  <>
                    <Link
                      type="button"
                      className="px-3.5 mt-3 cursor-pointer border-none py-2 hover:bg-primary-100 outline hover:outline-none outline-1 hover:text-gray-100 rounded-2xl"
                      href="/dashboard/login"
                      onClick={() => setToggleMenu((prev) => !prev)}
                    >
                      Sign In
                    </Link>
                  </>
                )}
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
