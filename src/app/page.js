import EventBooking from "@/components/EventBooking";
import EventPromoSection from "@/components/EventPromoSection";
import Experience from "@/components/Experience/page";
import FeaturedRestaurant from "@/components/FeaturedRestaurant";
import HeroSection from "@/components/HeroSection";
import MapExplorerSection from "@/components/MapExplorerSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EventPromoSection />
      <EventBooking />
      <FeaturedRestaurant />
      <Experience />
      <MapExplorerSection />
    </main>
  );
}
