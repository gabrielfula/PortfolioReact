import { Button, Container } from "../../styles/HomeStyled";
import PersonalImage from "/imagens/PersonalImage.jfif";
import { ContentInitial } from "./InicioStyled";

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
            <div className="icons-position">
              <a href="https://github.com/gabrielfula">
                <AiOutlineGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/gabriel-fulaneto-9b3863232/">
                <AiFillLinkedin size={30} />
              </a>
              <Button
                className="button"
                href="../../../public/CurriculoGabrielFulaneto.pdf"
                download={"GabrielFulanetoCurriculo.pdf"}
                type="application/pdf"
              >
                Baixar CV
              </Button>
            </div>
          </div>

          <div>
            <img src={PersonalImage} alt="Imagem Pessoal" />
          </div>
        </ContentInitial>
      </Container>
    </>
  );
};
