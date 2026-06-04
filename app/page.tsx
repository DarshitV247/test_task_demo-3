import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ScrollingServices from "./components/ScrollingServices";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedServices from "./components/FeaturedServices";
import Footer from "./components/Footer"
import TestimonialsSection from "./components/TestimonialsSection"


export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
       <ScrollingServices />
       <WhyChooseUs />
       <FeaturedServices/>
       <TestimonialsSection/>
       <Footer/>
    </>
  );
}