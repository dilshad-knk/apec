import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import { OurPowers } from "./components/SuperPowers";
import NewsLetter from "./components/NewsLetter";

const App = () => {
  return (
    <div className="bg-[#3d0303]">
      <Navbar />
      <Hero />
      <Services />
      <OurPowers/>
      <Blog />
      <Contact />
      <NewsLetter/>
      <Footer />
    </div>
  );
};

export default App;
// bg-[#1C0C0C]