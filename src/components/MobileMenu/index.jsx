"use client";

import { useState } from "react";
import {
  BellIcon,
  InstagramIcon,
  Logo,
  MenuCloseIcon,
  MenuIcon,
  TikTokIcon,
  TwitterIcon,
} from "../../../public";
import Image from "next/image";
import LanguageSelector from "../LanguageSelector";
import Link from "next/link";
import Button from "../Button";

const menuItems = [
  "DINE WITH US",
  "PLAN YOUR VISIT",
  "EVENTS",
  "VIEW GROVES MAP",
  "OUR STORY",
  "CONTACT US",
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        variant="ghost"
        size="icon"
        className="text-white z-50 relative"
        onClick={() => setIsOpen(true)}
      >
        <Image src={MenuIcon} alt="MenuIcon" />
      </button>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 bottom-0 w-full sm:w-[360px] MobileMenu z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="border-b border-white/10 p-4 flex justify-between items-center">
            <Image src={Logo} alt="The Groves" className="h-10 w-auto" />
            <button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              <Image src={MenuCloseIcon} alt="MenuCloseIcon" />
            </button>
          </div>

          <nav className="flex-1">
            <ul className="divide-y divide-white/10">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block px-6 py-4 text-white text-[13px] tracking-[2.6px] leading-[23px] hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto border-t border-white/10 p-6 space-y-4">
              <LanguageSelector />
              <Button
                text="Log in"
                className="max-w-[142px] w-full rounded-[20px] min-h-[48px] bg-[#C5A572]  text-white hover:bg-[#B39461]"
              />
            </div>
            <div className="absolute bottom-0 flex items-center gap-6 p-6">
              <Link href="#" className="text-white hover:text-gold">
                <Image src={TikTokIcon} alt="TikTokIcon" />
              </Link>
              <Link href="#" className="text-white hover:text-gold">
                <Image src={InstagramIcon} alt="InstagramIcon" />
              </Link>
              <Link href="#" className="text-white hover:text-gold">
                <Image src={TwitterIcon} alt="TwitterIcon" />
              </Link>
              <Link href="#" className="text-white hover:text-gold">
                <Image src={BellIcon} alt="BellIcon" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
