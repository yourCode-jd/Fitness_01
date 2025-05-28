import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import { Features } from "@/components/Features/Features";
import Header from "@/components/Header/Header";
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonial from "@/components/Testimonial/Testimonial";
import TextSlider from "@/components/TextSlider/TextSlider";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Features />
      <Portfolio />
      <Testimonial />
      <TextSlider />
    </>
  );
}
