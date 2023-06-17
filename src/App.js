import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigationBar from "./components/NavigationBar";
import { Nisi } from "./components/Nisi";
import { Portfolios } from "./components/Portfolios";

function App() {
  return (
    <div className=" overflow-hidden">
      <NavigationBar />
      <Nisi />
      <Portfolios />
    </div>
  );
}

export default App;
