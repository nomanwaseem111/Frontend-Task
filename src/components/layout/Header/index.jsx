import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BellIcon,
  InstagramIcon,
  Logo,
  TikTokIcon,
  TwitterIcon,
} from "../../../../public";
import { MobileMenu } from "@/components/MobileMenu";
import LanguageSelector from "@/components/LanguageSelector";
import Button from "@/components/Button";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="w-full">
        <div className="flex items-center max-w-[1088px] mx-auto px-4 justify-between py-[21px]">
          <Link href="/">
            <Image
              src={Logo}
              alt="The Groves"
              className="w-[189px] h-[43px] lg:w-[220px] lg:h-[50px]"
            />
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-[25.94px]">
              <Link href="#" className="text-white hover:text-gold">
                <Image
                  src={TikTokIcon}
                  alt="TikTokIcon"
                  className="md:w-[19.06px] md:h-[21.62px]"
                />
              </Link>
              <Link href="#" className="text-white hover:text-gold">
                <Image
                  src={InstagramIcon}
                  alt="InstagramIcon"
                  className="md:w-[21.37px] md:h-[21.37px]"
                />
              </Link>
              <Link href="#" className="text-white hover:text-gold">
                <Image
                  src={TwitterIcon}
                  alt="TwitterIcon"
                  className="md:w-[21.12px] md:h-[21.62px]"
                />
              </Link>
              <Link href="#" className="text-white hover:text-gold">
                <Image
                  src={BellIcon}
                  alt="BellIcon"
                  className="md:w-[21.64px] md:h-[20.37px]"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button
                text="Log in"
                className="text-[15px] btn text-white w-[142px] leading-[23px] h-[48px] rounded-2xl"
              />

              <LanguageSelector />
            </div>

            <MobileMenu />
          </div>
        </div>

        <nav className="hidden lg:block border-t border-white border-b py-[13.5px]">
          <ul className="flex justify-between max-w-[1088px] mx-auto px-4 gap-8 text-sm font-medium">
            {[
              "DINE WITH US",
              "PLAN YOUR VISIT",
              "EVENTS",
              "VIEW GROVES MAP",
              "OUR STORY",
              "CONTACT US",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="text-white text-[13px] tracking-[2.6px] leading-[23px] hover:text-[#C5A572] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
