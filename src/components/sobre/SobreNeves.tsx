import "./sobre.css";

const SobreNeves = () => {
  return (
    <section>
      <div className="sobre-container">
        <div className="texto-container">
          <h2 className="texto_h2" id="sobre">
            Conheça a Neves Estações
          </h2>
          <p>
            Bem-vindo à Neves Estações, onde transformamos eventos especiais em
            momentos inesquecíveis. Fundada pela paixão de Pedro Neves e Evelyn
            Neves por brigadeiros, açaí, milkshakes e celebrações, nossa empresa
            nasceu do desejo de compartilhar essa alegria com o mundo. Em cada
            casamento, festa de aniversário, batizado e evento especial,
            trazemos uma estação de delícias, repletas de sabores que encantam e
            emocionam. Mais do que simplesmente servir brigadeiros na casquinha
            ou taças de açaí, estamos aqui para oferecer amor e felicidade em
            cada mordida e gole. Nossa missão vai além da preparação de doces;
            buscamos criar experiências que deixem memórias duradouras e
            sorrisos sinceros. Na Neves Estações, cada evento é único e
            especial, e nós nos dedicamos a torná-lo ainda mais memorável.
            Junte-se a nós e descubra como nossos doces são o toque perfeito
            para celebrar a vida e espalhar alegria. Seja bem-vindo ao nosso
            mundo doce, onde o amor é o ingrediente principal!
          </p>
        </div>
        <div className="imagem-container">
          <img src="/neves.jpeg" alt="foto da estação" />
        </div>
      </div>
    </section>
  );
};

export default SobreNeves;
