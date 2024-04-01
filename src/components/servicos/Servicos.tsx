import "./servicos.css";

const Servicos = () => {
  return (
    <section className="section_servicos">
      <h2 className="titulo_servicos" id="servicos">
        Nossos Serviços
      </h2>
      <div className="servicos_container">
        <div className="servico">
          <img src="/cone.jpeg" alt="Estação de brigadeiro" />
          <p>Casquinha de Brigadeiro</p>
        </div>
        <div className="servico">
          <img src="/copo.jpeg" alt="Milkshake" />
          <p>Taça de Sorvete</p>
        </div>
        <div className="servico">
          <img src="/casquinha.jpeg" alt="Açaí" />
          <p>Açaí</p>
        </div>
        <div className="servico">
          <img src="/milk.jpeg" alt="Outro serviço" />
          <p>milkshake</p>
        </div>
      </div>
      <p className="texto_servicos">
        Somos um casal jovem apaixonados por fazer brigadeiros, milkshakes e
        açaí! Nossa energia e criatividade estão presentes em cada um dos nossos
        serviços, trazendo um toque único e divertido para todos os nossos
        clientes. Experimente nossas delícias e deixe-se surpreender!
      </p>
    </section>
  );
};

export default Servicos;
