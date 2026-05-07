import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import ProximosTratamientos from "@/components/ProximosTratamientos";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Courses />
        <ProximosTratamientos />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
