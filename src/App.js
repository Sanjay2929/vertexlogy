import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nisi } from "./components/Nisi";
import HeroSec from "./components/HeroSec";
import Contact from "./components/Contact";

function App() {
  return (
    <div className=" overflow-hidden">
      <HeroSec />
      <Nisi />
      <Contact />
    </div>
  );
}

export default App;
