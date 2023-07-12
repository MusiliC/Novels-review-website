import React from "react";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="px-5 py-2 bg-secondary-100 rounded-lg  tracking-wider">{text}</button>
    </Link>
  );
};

export default Button;
