"use client";

import { APP_NAME } from "@/modules/const";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

/**
 * LPのヘッダー
 * @returns
 */
export const LPHeader = () => {
  const links = [
    {
      id: "home",
      label: "ホーム",
    },
    {
      id: "features",
      label: "機能",
    },
  ];
  return (
    <header
      id="home"
      className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16"
    >
      <Link
        href="/"
        className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
      >
        {APP_NAME}
      </Link>

      <nav className="flex gap-12">
        {links.map((link) => (
          <ScrollLink
            key={link.label}
            activeClass="text-indigo-500"
            smooth
            spy
            to={link.id}
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            {link.label}
          </ScrollLink>
        ))}
      </nav>
    </header>
  );
};
