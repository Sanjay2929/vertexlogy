import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contact from "./components/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigationBar from "./components/NavigationBar";
import { Nisi } from "./components/Nisi";
import { Portfolios } from "./components/Portfolios";
import HeroSec from "./components/HeroSec";

function App() {
  return (
    <div className=" overflow-hidden">
      <HeroSec />
      <Nisi />
      <Portfolios />
      <Contact />
    </div>
  );
}

export default App;
