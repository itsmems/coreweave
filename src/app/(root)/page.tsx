import OurServices from "@/components/OurServices";
import HeroSection from "@/components/HeroSection";
import ContactUs from "@/components/ContactUs";
import Categories from "@/components/Categories";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurServices />
      <Categories />
      <TestimonialCard />
      <ContactUs />
    </>
  );
}
