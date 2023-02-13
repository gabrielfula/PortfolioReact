import { ContentAbout, TextAbout, Title, Animation } from "./SobreStyled";
import { Container } from "../../styles/Styled";

export default (Sobre) => {
  return (
    <>
      <Container id="sobre">
        <ContentAbout>
          <Title>
            <h2>Sobre.</h2>
          </Title>
          <Title>
            <h5>Educação e Cursos adicionais</h5>
          </Title>
          <TextAbout>
            <p>
              Meu nome é Gabriel, sou desenvolvedor Front End, tenho 18 anos,
              nasci e moro Campinas. Eu terminei o Ensino Médio ano passado, e
              estou no terceiro módulo do meu Curso Técnico de Informática na
              ETEC. Desde que eu entrei no curso me apaixonei por programação,
              principalmente pelo desenvolvimento Web. Eu adoro aprender e
              aumentar meu conhecimento, principalmente na área que eu gosto. No
              curso Técnico eu sempre gostei de trabalhar em equipe e sempre
              tive uma ótima comunicação para conseguir concluir os projetos e
              lições.
            </p>
          </TextAbout>
          <section>
            <Animation data-aos="zoom-in">
              <h5>
                <p>Ensino Médio</p>
                <span>Completo - (2022)</span>
              </h5>
            </Animation>

            <Animation data-aos="zoom-in">
              <h5>
                <p>Curso Técnico de Informática na ETEC </p>

                <span>Em andamento - ( 2023 )</span>
              </h5>
            </Animation>

            <Animation data-aos="zoom-in">
              <h5>
                <p>Curso CC50 de Ciência da Computação de Harvard </p>

                <span>Concluído - ( 2022 )</span>
              </h5>
            </Animation>
            <Animation data-aos="zoom-in">
              <h5>
                <p>Curso Dominando o React da Dev Samurai </p>
                <span>Em andamento - ( 2023 )</span>
              </h5>
            </Animation>
          </section>
        </ContentAbout>
      </Container>
    </>
  );
};
