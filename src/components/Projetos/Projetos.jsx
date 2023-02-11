import { Button, Container } from "../../styles/HomeStyled";
import TodoList from "/imagens/Todo.jpg";
import Calculos from "/imagens/matematicos.jpg";
import Apple from "/imagens/apple.png";
import Ecomerce from "/imagens/ecomerce.png";
import { ContentProjetos, ProjetosGrid, SpaceImage } from "./ProjetoStyled";

export default (Projetos) => {
  return (
    <>
      <Container id="projetos">
        <ContentProjetos>
          <div className="align-text">
            <h2>Projetos.</h2>
          </div>
          <div className="position-desc-projetos">
            <p>
              Esses foram alguns projetos realizados durante meu Curso Técnico e
              cursos adicionais
            </p>
          </div>

          <ProjetosGrid data-aos="fade-right">
            <SpaceImage>
              <div className="text-image">
                <h3>To Do List</h3>
              </div>
              <img src={TodoList} alt="Imagem Web Todo" />
              <div className="position-button">
                <Button
                  href="https://github.com/gabrielfula/ToDo"
                  target={"_blank"}
                >
                  Repositório
                </Button>
                <Button
                  href="https://listagabrielfula.netlify.app"
                  target={"_blank"}
                >
                  Projeto
                </Button>
              </div>
            </SpaceImage>

            <SpaceImage>
              <div className="text-image">
                <h3>E-commerce</h3>
              </div>
              <img src={Ecomerce} alt="Imagem Web E-commerce" />
              <div className="position-button">
                <Button>Repositório</Button>
                <Button>Projeto</Button>
              </div>
            </SpaceImage>

            <SpaceImage>
              <div className="text-image">
                <h3>Cálculos</h3>
              </div>
              <img src={Calculos} alt="Imagem Web Calculos" />
              <div className="position-button">
                <Button
                  href="https://github.com/gabrielfula/Calculos"
                  target={"_blank"}
                >
                  Repositório
                </Button>
                <Button
                  href="https://gabrielfula.github.io/Calculos/"
                  target={"_blank"}
                >
                  Projeto
                </Button>
              </div>
            </SpaceImage>

            <SpaceImage>
              <div className="text-image">
                <h3>Apple Clone</h3>
              </div>
              <img src={Apple} alt="Imagem Web Apple Clone" />
              <div className="position-button">
                <Button
                  href="https://github.com/gabrielfula/AppleFake"
                  target={"_blank"}
                >
                  Repositório
                </Button>
                <Button
                  href="https://gabrielfula.github.io/AppleFake/"
                  target={"_blank"}
                >
                  Projeto
                </Button>
              </div>
            </SpaceImage>
          </ProjetosGrid>
        </ContentProjetos>
      </Container>
    </>
  );
};
