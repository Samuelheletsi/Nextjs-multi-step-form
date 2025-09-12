"use client";
import React from "react";
import Link from "next/link";

type FooterProps = {
  left?: string;
  right?: string;
  goback?: string;
  link?: string;
};

const Footer: React.FC<FooterProps> = ({
  left = "Back",
  right = "Next",
  goback,
  link,
}) => {
  return (
    <div className="flex justify-between items-center px-5 py-4 bg-white">
      {goback ? (
        <Link
          href={goback}
          className="text-blue-200 font-medium px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          {left}
        </Link>
      ) : (
        <div />
      )}
      {link ? (
        <Link
          href={link}
          className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {right}
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Footer;
