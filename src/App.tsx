import "./App.css";
import Header from "./components/header/header";
import Slideshow from "./components/slideshow/Slideshow";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="slideshow-container">
          <Slideshow />
        </div>
        <h2>Olá</h2>
      </div>
    </>
  );
}

export default App;
