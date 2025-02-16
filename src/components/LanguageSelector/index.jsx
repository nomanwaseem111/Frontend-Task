"use client";

import * as React from "react";
import { downArrowIcon } from "../../../public";
import Image from "next/image";
// import { ChevronDown } from "lucide-react"

const languages = [
  {
    name: "English",
    code: "en",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 30"
        width="33"
        height="22"
      >
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path
            d="M0,0 L60,30 M60,0 L0,30"
            clipPath="url(#t)"
            stroke="#C8102E"
            strokeWidth="4"
          />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    ),
  },
  {
    name: "Spanish",
    code: "es",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 750 500"
         width="33"
        height="22"
      >
        <rect width="750" height="500" fill="#c60b1e" />
        <rect width="750" height="250" fill="#ffc400" y="125" />
      </svg>
    ),
  },
  {
    name: "French",
    code: "fr",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3 2"
          width="33"
        height="22"
      >
        <rect width="3" height="2" fill="#ED2939" />
        <rect width="2" height="2" fill="#fff" />
        <rect width="1" height="2" fill="#002395" />
      </svg>
    ),
  },
  {
    name: "German",
    code: "de",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 5 3"
         width="33"
        height="22"
      >
        <rect width="5" height="3" y="0" fill="#000" />
        <rect width="5" height="2" y="1" fill="#D00" />
        <rect width="5" height="1" y="2" fill="#FFCE00" />
      </svg>
    ),
  },
];

export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = React.useState(languages[0]);
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        variant="ghost"
        className="text-white flex items-center gap-[12.76px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={downArrowIcon} alt="downArrowIcon" />

        <span>
          {selectedLang.flag}
        </span>

        <span className="mr-1 text-[15px] leading-[23px]">{selectedLang.name}</span>
      </button>
      {isOpen && (
        <div className="absolute lg:-right-5 z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setSelectedLang(language);
                  setIsOpen(false);
                }}
              >
                <span className="mr-2">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
