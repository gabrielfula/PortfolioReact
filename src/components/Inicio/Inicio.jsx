import { Button, Container } from "../../styles/Styled";
import PersonalImage from "/imagens/PersonalImage.jfif";
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
              <a href="https://github.com/gabrielfula">
                <AiOutlineGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/gabriel-fulaneto-9b3863232/">
                <AiFillLinkedin size={30} />
              </a>
              <Button
                href="../../../public/CurriculoGabrielFulaneto.pdf"
                type="application/pdf"
                download={"GabrielFulanetoCurriculo.pdf"}
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
