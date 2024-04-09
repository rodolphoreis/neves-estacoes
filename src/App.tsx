import "./App.css";
import Capa from "./components/capa/Capa";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Qualidade from "./components/qualidade/Qualidade";
import Servicos from "./components/servicos/Servicos";
import Slideshow from "./components/slideshow/Slideshow";
import SobreNeves from "./components/sobre/SobreNeves";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Capa />
        <SobreNeves />
        <Qualidade />
        <Slideshow />
        <Servicos />
        <Footer />
      </div>
    </>
  );
}

export default App;
