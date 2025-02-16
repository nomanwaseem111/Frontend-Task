import Image from "next/image";
import {
  CircleImage,
  GrovesImage,
  leftArrowIcon,
  PlayIcon,
} from "../../../public";

export default function EventPromoSection() {
  return (
    <div className="min-h-screen  text-white px-4 py-20 md:py-[64px]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col text-center justify-center items-center space-y-4">
          <h1 className="text-[36px] !font-playfair md:text-[50px] w-full max-w-[296px] md:max-w-[641px] min-h-[92px] md:min-h-[67px] leading-[44px] md:leading-[64px]">
            Mall Of: Endless Possibilities
          </h1>
          <p className="text-[15px] w-full max-w-[775px] min-h-[65px] leading-[23px] mx-auto text-[#FFFFFF]">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="relative aspect-video w-full mt-[44px] md:mt-[59px] max-w-4xl mx-auto group">
          <Image
            src={GrovesImage}
            alt="The Groves Mall entrance with golden architectural elements"
            fill
            className="object-cover relative"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image src={CircleImage} alt="CircleImage" />
            <Image
              src={PlayIcon}
              alt="PlayIcon"
              className="absolute top-1/2 left-1/2 -translate-x-[10px] -translate-y-1/2"
            />
          </div>
        </div>

        <div className="relative max-w-[904px] h-[235px] mx-auto">
          <div
            className="block p-6 rounded-[25px] cta-section min-h-[235px] mt-5  hover:bg-[#344526] 
                     transition-colors duration-300  group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[13px] tracking-[2.6px] leading-[23px] text-[#FFFFFF]">
                25 SR/GUEST
              </span>
            </div>

            <div className="flex justify-between mt-[25px] items-center">
              <h2 className="text-[25px] !font-playfair w-full max-w-[262px] sm:max-w-[486px] md:text-[30px] leading-[38px]">
                Get your General Access Ticket
              </h2>
              <Image src={leftArrowIcon} alt="leftArrowIcon" className="md:flex hidden" />
            </div>

            <p className="text-[15px] leading-[23px] w-full max-w-[611px] text-gray-300 mt-[17px]">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry&apos;s standard dummy
              text e
            </p>
<div className="md:hidden flex mt-[30px] justify-end">
<Image src={leftArrowIcon} alt="leftArrowIcon"  />

</div>
          </div>
        </div>
      </div>
    </div>
  );
}
