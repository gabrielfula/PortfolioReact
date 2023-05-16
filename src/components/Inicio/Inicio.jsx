import { Button, Container } from "../../styles/Styled";
import PersonalImage from "/imagens/ImagePerson.jpeg";
import { ContentInitial, Icons } from "./InicioStyled";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

export default (Inicio) => {
  return (
    <>
      <Container data-aos="fade-down">
        <ContentInitial>
          <div>
            <h1>
              Meu nome é Gabriel <span>Fulaneto!</span>
            </h1>
            <h3>Web Developer Front-End</h3>
            <Icons>
              <a href="https://github.com/gabrielfula" target="_blank">
                <AiOutlineGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-fulaneto-9b3863232/"
                target="_blank"
              >
                <AiFillLinkedin size={30} />
              </a>
              <Button
                href="/curriculoGabrielFulaneto.pdf"
                type="application/pdf"
                download={"curriculoGabriel.pdf"}
              >
                Baixar CV
              </Button>
            </Icons>
          </div>
          <div>
            <img src={PersonalImage} alt="Imagem Pessoal" />
          </div>
        </ContentInitial>
      </Container>
    </>
  );
};
