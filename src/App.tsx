import "./App.css";
import Capa from "./components/capa/Capa";
import Header from "./components/header/header";
import Qualidade from "./components/qualidade/Qualidade";
import SobreNeves from "./components/sobre/SobreNeves";
/* import Slideshow from "./components/slideshow/Slideshow"; */
/* import SobreNeves from "./components/sobre/SobreNeves"; */

function App() {
  return (
    <>
      <div className="container">
        <Header />
        {/* <div className="slideshow-container">
          <Slideshow />
        </div> */}
        <Capa />
        <SobreNeves />
        <Qualidade />
        {/* <SobreNeves /> */}
      </div>
    </>
  );
}

export default App;
