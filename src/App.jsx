import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Packages from "./components/Packages";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Packages />
      <Brands/>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}