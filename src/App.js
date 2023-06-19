import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contact from "./components/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigationBar from "./components/NavigationBar";
import { Nisi } from "./components/Nisi";
import { Portfolios } from "./components/Portfolios";
import HeroSec from "./components/HeroSec";
import Preloader from "./components/Preloader";
import TopButton from "./components/TopButton";

function App() {
  return (
    <div className=" overflow-hidden">
      <Preloader />
      <HeroSec />
      <Nisi />
      <Portfolios />
      <Contact />
      <TopButton />
    </div>
  );
}

export default App;
