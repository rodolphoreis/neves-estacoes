import "./sobre.css";

const SobreNeves = () => {
  return (
    <div className="sobre-container">
      <div className="imagem-container">
        <img src="/neves.jpeg" alt="foto da estação" />
      </div>
      <div className="texto-container">
        <h2>Sobre Nós</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          justo sed metus fringilla fermentum. Integer sollicitudin sit amet
          nunc id commodo.
        </p>
      </div>
    </div>
  );
};

export default SobreNeves;
