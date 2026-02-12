import Navbar from "@/app/components/LandingPage/Navbar";
import HeroSection from "@/app/components/LandingPage/HeroSection";
import ServicesSection from "@/app/components/LandingPage/ServicesSection";
import BookingSection from "@/app/components/LandingPage/BookingSection";
import FacilitiesSection from "@/app/components/LandingPage/FacilitiesSection";
import LocationSection from "@/app/components/LandingPage/LocationSection";
import Footer from "@/app/components/LandingPage/Footer";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar />
      <main className="grow">
        <HeroSection />
        <ServicesSection />
        <BookingSection />
        <FacilitiesSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
