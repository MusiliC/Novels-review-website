import Link from "next/link";
import React from "react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Novels", url: "/novels" },
  { id: 3, title: "Blogs", url: "/blogs" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
];

const Footer = () => {
  return (
    <section className="w-full bg-primary-100 py-10">
      <div className="w-5/6 pb-5 mx-auto gap-y-7 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between">
        <div>
          <p className="text-gray-100 "> Book Website</p>
        </div>
        <div className="flex flex-col gap-2 text-gray-100">
          <h2 className="">Useful Links</h2>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className="text-sm">
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-gray-100">
          <h1 className="">Social Media</h1>
          <p className="text-sm">musilibrian07@gmail.com</p>
          <p className="text-sm">Linkedln</p>
          <p className="text-sm">Instagram</p>
          <p className="text-sm">Twitter</p>
          <p className="text-sm">Facebook</p>
        </div>
      </div>
      <div className="border border-t-gray-100" />

      <div className="w-5/6 mx-auto pt-5 text-gray-100">
        <p className=""> Musili @2023 All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
