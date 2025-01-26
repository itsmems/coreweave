import OurServices from "@/components/OurServices";
import HeroSection from "@/components/HeroSection";
import ContactUs from "@/components/ContactUs";
import Categories from "@/components/Categories";
import TestimonialCard from "@/components/TestimonialCard";
// import MessageCard from "@/components/MessageCard";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurServices />
      {/* <MessageCard /> */}
      <Categories />
      <TestimonialCard />
      <ContactUs />
    </>
  );
}
