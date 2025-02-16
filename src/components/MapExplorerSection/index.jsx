import Image from "next/image";
import { leftArrowIcon, MapImage } from "../../../public";
import Button from "../Button";

export default function MapExplorerSection() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 relative w-full aspect-square md:aspect-auto md:h-[600px]">
          <Image
            src={MapImage}
            alt="MapImage"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            priority
          />
        </div>
        <div className="order-1 md:order-2 text-white space-y-6 max-w-xl">
          <p className="text-[13px] uppercase tracking-[2.6px] text-[#fff]">
            Experience the Groves
          </p>
          <h1 className="text-4xl !font-playfair md:text-5xl lg:text-6xl">
            Find your place
          </h1>
          <p className="text-gray-300 text-md max-w-[355px]">
            Our interactive map will show you the way to the shops and
            restaurants that you want to see.
          </p>

          <Button
            className="btn w-full max-w-[232px] min-h-[55px] text-white px-6 py-2 rounded-2xl flex justify-between items-center gap-2 group"
            text="Open the Map"
            icon={
              <Image
                src={leftArrowIcon}
                alt="MapImage"
                className="w-[24.72px] h-[18.24px] "
              />
            }
          />
        </div>
      </div>
    </main>
  );
}
