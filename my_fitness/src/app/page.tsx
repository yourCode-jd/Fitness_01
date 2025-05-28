import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import { Features } from "@/components/Features/Features";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Features />
    </>
  );
}
