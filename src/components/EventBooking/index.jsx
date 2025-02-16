import Image from "next/image";
import {
  CuisineImage1,
  CuisineImage2,
  CuisineImage3,
  CuisineImage4,
  HawanimImage,
  leftArrowIcon,
  littleKrazyImage,
  LucaworldImage,
  PicnicMarketImage,
} from "../../../public";
import Button from "../Button";

const restaurants = [
  {
    name: "Vida Vera",
    image: CuisineImage1,
    price: "100 SR PER GUEST",
  },
  {
    name: "Zama Zulu",
    image: CuisineImage2,
    price: "100 SR PER GUEST",
  },
  {
    name: "Khawaja Yamni",
    image: CuisineImage3,
    price: "100 SR PER GUEST",
  },
  {
    name: "Yamagata",
    image: CuisineImage4,
    price: "100 SR PER GUEST",
  },
];

export default function EventBooking() {
  return (
    <div className="overflow-hidden  p-4 md:p-8 lg:p-12 mb-12">
      <div className="mx-auto max-w-6xl mt-[47px] md:mt-0 text-white ">
        <div className="mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl !font-playfair max-w-[695px] md:text-4xl lg:text-5xl mb-4">
              Book General Access ticket and enjoy the attractions for free
            </h1>
            <Button
              text="Book General Access Ticket"
              icon={
                <Image
                  src={leftArrowIcon}
                  alt="leftArrowIcon"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              }
              className="btn mt-[38px] flex justify-between px-5 text-nowrap  items-center rounded-2xl w-full max-w-[306px] sm:max-w-[349px] min-h-[55px] text-white gap-2"
            />
          </div>
        </div>
      </div>

      <div className="flex sm:items-center pl-[calc((100%-72rem)/2)] overflow-x-auto cards-scroll  gap-[25px]">
        <div className="min-w-[215px] sm:min-w-[385px]">
          <Image
            src={littleKrazyImage}
            alt="littleKrazyImage"
            className="w-[215px] sm:min-w-[385px]"
          />
          <h3 className="text-[30px] mt-[22px] text-[#FFFFFF] !font-playfair text-center">
            Little Krazy
          </h3>
        </div>

        <div className="min-w-[215px] sm:w-[228px]">
          <Image
            src={HawanimImage}
            alt="HawanimImage"
            className="w-[215px] sm:w-[228px]"
          />
          <h3 className="text-[30px] mt-[22px] text-[#FFFFFF] !font-playfair text-center">
            Hawanim Groves City
          </h3>
        </div>

        <div className="min-w-[215px] sm:min-w-[385px]">
          <Image
            src={PicnicMarketImage}
            alt="PicnicMarketImage"
            className="w-[215px] sm:min-w-[385px]"
          />
          <h3 className="text-[30px] mt-[22px] text-[#FFFFFF] !font-playfair text-center">
            Picnic Market
          </h3>
        </div>

        <div className="min-w-[215px] sm:min-w-[228px]">
          <Image
            src={LucaworldImage}
            alt="littleKrazyImage"
            className="w-[215px] sm:min-w-[228px]"
          />
          <h3 className="text-[30px] mt-[22px] text-[#FFFFFF] !font-playfair text-center">
            Lucaworld
          </h3>
        </div>
      </div>
    </div>
  );
}
