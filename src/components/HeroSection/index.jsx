"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HeroSectionImage, leftArrowIcon } from "../../../public";
import Button from "../Button";

const slides = [
  {
    id: 1,
    title: "The new\nera of luxury",
    subtitle: "KHAWAJA YANNI",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
    image: HeroSectionImage,
  },
  {
    id: 2,
    title: "Experience\nExcellence",
    subtitle: "FINE DINING",
    description:
      "Discover an unforgettable culinary journey in our exclusive venue.",
    image: HeroSectionImage,
  },
  {
    id: 3,
    title: "Memorable\nMoments",
    subtitle: "SPECIAL EVENTS",
    description: "Create lasting memories in our stunning environment.",
    image: HeroSectionImage,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={`image`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute  inset-0 flex items-center">
              <div className="mx-auto relative w-full max-w-[1088px] px-4">
              <div className="overlay-section" />

                <div className="max-w-2xl relative top-0 left-0 mt-[99.5px]">
                  <h2 className="text-[13px] tracking-[2.6px] leading-[23px] font-medium">
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-[50px] !font-playfair md:text-[68px] leading-[58px] md:leading-[76px] font-serif mt-[16.73px] md:mt-[18px] whitespace-pre-line">
                    {slide.title}
                  </h1>
                  <p className="text-[15px] leading-[23px] w-full max-w-[399px] mt-[22.73px] md:mt-[27px] min-h-[42px]">
                    {slide.description}
                  </p>{" "}
                  <Button
                    icon={
                      <Image
                        src={leftArrowIcon}
                        alt="leftArrowIcon"
                        className="w-[26.28px] h-[19.39px]"
                      />
                    }
                    text={"Book reservation now"}
                    className="mt-[64.54px] md:mt-[45px] btn flex justify-between px-5 leading-[29px] text-[15px] md:text-[17px]  items-center rounded-2xl w-full max-w-[279px] sm:max-w-[299px] min-h-[55px] text-white gap-2"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-end px-4 lg:px-0 sm:justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-[11px] h-[11px] rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-[11px] h-[11px]"
                  : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
