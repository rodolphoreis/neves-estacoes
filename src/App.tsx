import "./App.css";
import Header from "./components/header/header";
import Slideshow from "./components/slideshow/Slideshow";
import SobreNeves from "./components/sobre/SobreNeves";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="slideshow-container">
          <Slideshow />
        </div>
        <SobreNeves />
      </div>
    </>
  );
}

export default App;
