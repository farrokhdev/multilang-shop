"use client";

import React, { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import Image from "next/image";
import { Search } from "./Search";
import NavIcons from "./NavIcons";
import {
  darkThemeBg,
  darkthemeText,
  globPadding,
  h3,
  link,
} from "@/styles/global";
import Link from "next/link";
import { Link as TranslateLink } from "@/i18n/routing";

import { useTranslations } from "next-intl";
import { navItems } from "@/sampleApi/NavItems";

type Props = {};

export const Header = (props: Props) => {
  const t = useTranslations("header.nav");
  const [open, setOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const menuTrigger = () => {
    setOpen((prev: boolean) => !prev);
  };
  return (
    <div
      className={`h-20  relative  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ${darkthemeText} ${darkThemeBg}`}
    >
      {/* MOBILE */}
      <div
        className={`h-full flex items-center justify-between md:hidden ${darkthemeText}`}
      >
        <TranslateLink href="/">
          <div className={`${h3} tracking-wide `}>Soheil</div>
        </TranslateLink>
        <MobileMenu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          {/* logo  */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className={`${h3} tracking-wide`}>Soheil</div>
          </Link>
          {/* menu  */}
          <div className="hidden xl:flex gap-4">
            {navItems(t).map((item, i) => {
              return (
                <TranslateLink key={i} className={`${link}`} href={item.url}>
                  {/* {t("homepage")} */}
                  {item.name}
                </TranslateLink>
              );
            })}
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <Search />

          <NavIcons theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </div>
  );
};
