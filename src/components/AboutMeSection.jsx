import "../styles/AboutMeSection.css";

const AboutMeSection = () => {
  return (
    <>
      <section className="about-me" id="AboutMeSection">
        <div className="about-me-container container">
          <h2 className="title-section">Sobre Mim</h2>
          <h3 className="destaque-text">Um pouco sobre mim</h3>
          <p className="paragraph">
            Meu nome é João Victor e estou em busca de um estágio em 2024, sou
            estudande de Tecnologia na USJT, e esse portifolio é meu primeiro
            projeto criado sozinho. <br />
            Atualmente estou cursando Engenharia da Computação, e decidi trilhar
            o caminho da programação na area de front-end. Estou focando meu
            estudo em React, Typescript e JavaScript
          </p>
          <h3 className="destaque-text">Tecnologias e Ferramentas</h3>
          <p className="paragraph">
            Usando uma combinação de tecnologias de ponta, crio websites e
            aplicações de alto desempenho.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMeSection;
