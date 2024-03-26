import "./sobre.css";
import neves from "./neves.jpeg";

const sobre = () => {
  return (
    <div className="sobre-container">
      <div className="texto-container">
        <h2>Sobre Nós</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          justo sed metus fringilla fermentum. Integer sollicitudin sit amet
          nunc id commodo.
        </p>
      </div>
      <div className="imagem-container">
        <img src={neves} alt="foto da estação" />
      </div>
    </div>
  );
};

export default sobre;
