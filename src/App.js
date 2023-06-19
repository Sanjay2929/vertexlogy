import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contact from "./components/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Nisi } from "./components/Nisi";
import { Portfolios } from "./components/Portfolios";
import HeroSec from "./components/HeroSec";
import Preloader from "./components/Preloader";
import TopButton from "./components/TopButton";
import { Footer } from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ once: true, });
    AOS.refresh();
  }, []);
  return (
    <div className=" overflow-hidden">
      <Preloader />
      <HeroSec />
      <Nisi />
      <Portfolios />
      <Contact />
      <TopButton />
      <Footer />
    </div>
  );
}

export default App;
