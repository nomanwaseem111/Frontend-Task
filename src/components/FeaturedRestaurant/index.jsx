import Image from "next/image"
import { CuisineImage1, CuisineImage2, CuisineImage3, CuisineImage4, leftArrowIcon } from "../../../public"
// import { ArrowRight } from "lucide-react"

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
]

export default function FeaturedRestaurant() {
  return (
    <div className="min-h-screen  text-white p-4 md:p-8 lg:p-12">
      <div className="max-w-[1088px] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl !font-playfair mb-4">Experience the Finest Cuisine</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="group cta-section  rounded-3xl max-w-[530px] h-auto overflow-hidden hover:bg-black/30 transition-all duration-300"
            >
              <div className="relative p-[12px]">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                />
              </div>
              <div className="flex items-center justify-between p-4 pb-[21px] lg:pb-[45px]">
                <div>
                  <h2 className="text-xl md:text-2xl !font-playfair mb-2">{restaurant.name}</h2>
                  <span className="text-[13px] text-gray-300 bg-[#AD8749] px-3 py-1 leading-[23px] tracking-[2.6px] rounded-[23px]">{restaurant.price}</span>
                </div>
              <Image src={leftArrowIcon} alt="leftArrowIcon" className="w-[24.72px] h-[18.24px] lg:w-[37.76px] lg:h-[27.85px]"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

