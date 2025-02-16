import Image from "next/image";
import Link from "next/link";
import {
  AppStoreImage,
  BellIcon,
  GrovesImage,
  InstagramIcon,
  Logo,
  MaskGroup,
  MasterCardImage,
  PlayStoreImage,
  TikTokIcon,
  TwitterIcon,
  VisaImage,
} from "../../../../public";

export default function Footer() {
  return (
    <div className="text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-24">
          <div className="w-[200px] h-[46px] md:hidden block relative">
            <Image src={Logo} alt="Logo" />
          </div>
          <h1 className="!font-playfair text-4xl mt-[28px] md:mt-0 md:text-5xl lg:text-[50px] w-full max-w-[560px] leading-tight mb-8 md:mb-0">
            Join us for an unforgettable experience
          </h1>
          <div className="flex flex-col items-start md:items-start">
            <p className="text-[13px] leading-[23px] tracking-[2.6px] mb-3">
              DOWNLOAD THE GROVES APP
            </p>
            <div className="flex gap-3">
              <Link href="#" className="w-full min-w-[149px] h-[50px] relative">
                <Image src={AppStoreImage} alt="AppStoreImage" fill />
              </Link>
              <Link href="#" className="h-[50px] w-full min-w-[169px] relative">
                <Image
                  src={PlayStoreImage}
                  alt="PlayStoreImage"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 md:mb-24">
          <div>
            <h2 className="text-[13px] leading-[23px] tracking-[2.6px] mb-6">
              LOCATION
            </h2>
            <div className="space-y-1 text-[15px] text-gray-300">
              <p>Al-Hizam Park</p>
              <p>Al-Semairi, Yanbu Al Bahr 46455</p>
              <p>Riyadh Saudi Arabia</p>
            </div>
          </div>
          <div>
            <h2 className="text-[13px] leading-[23px] tracking-[2.6px] mb-6">
              WORKING HOURS
            </h2>
            <div className="space-y-1 text-[15px] text-gray-300">
              <p>Sun until Thurs: 4:00PM</p>
              <p>Fri & Sat: 2:30PM</p>
              <div className="mt-4 pt-2">
                <p>Gates Close at:</p>
                <p>Sat until Wed: 12:00AM</p>
                <p>Thu & Fri: 12:30AM</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[13px] leading-[23px] tracking-[2.6px] mb-6">
              GUEST SERVICE CALL
            </h2>
            <div className="space-y-1 text-[15px] text-gray-300">
              <p>cc@thegroves-sa.com</p>
              <p>920001672</p>
              <p>+966556631309</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
            <div className="w-[286px] h-[65px] md:block hidden relative">
              <Image src={Logo} alt="Logo" />
            </div>
            <div className="flex items-center gap-[36.21px]">
              <Link href="#" className="text-white hover:opacity-80">
                <Image
                  src={TikTokIcon}
                  alt="TikTokIcon"
                  className="w-[26.6px] h-[30.18px]"
                />
              </Link>
              <Link href="#" className="text-white hover:opacity-80">
                <Image
                  src={InstagramIcon}
                  alt="TikTokIcon"
                  className="w-[29.83px] h-[29.83px]"
                />
              </Link>
              <Link href="#" className="text-white hover:opacity-80">
                <Image
                  src={TwitterIcon}
                  alt="TikTokIcon"
                  className="w-[29.48px] h-[30.18px]"
                />
              </Link>
              <Link href="#" className="text-white hover:opacity-80">
                <Image
                  src={BellIcon}
                  alt="TikTokIcon"
                  className="w-[30.2px] h-[28.43px]"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 md:pt-6">
            <div className="flex flex-col md:flex-row  gap-6 text-sm text-[#fff]">
              <Link href="#" className="hover:text-gray-400">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-gray-400">
                Privacy Policy
              </Link>
              <p className="text-sm text-[#fff]">
                ©2023 The Groves for Entertainment
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <Image
                src={VisaImage}
                alt="VisaImage"
                className="w-[43px] h-[14px]"
              />

              <Image
                src={MasterCardImage}
                alt="MasterCardImage"
                className="w-[31px] h-[31px]"
              />
              <Image
                src={MaskGroup}
                alt="MaskGroup"
                className="w-[26px] h-[26px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
