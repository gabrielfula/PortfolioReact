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
              <div className="desc-projects">
                <p>
                  To Do List é um projeto web responsivo, realizado com o
                  intuito de criar novas tarefas, sendo possível adicionar,
                  excluir e marcar as tarefas como concluído. O projeto foi
                  desenvolvido com ReactJS para aprimorar meus conhecimentos
                  sobre a tecnologia.
                </p>
              </div>
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
              <div className="desc-projects">
                <p>
                  E-commerce é um projeto de restaurante totalmente responsivo
                  em <span>andamento</span> que está sendo desenvolvido com
                  React JS, Typescript, Styled-Components e consumindo uma API
                  de pagamento. Onde é possível adicionar itens no carrinho e
                  realizar pagamentos.
                </p>
              </div>
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
              <div className="desc-projects">
                <p>
                  Cálculos é um projeto de mini-calculadora realizado no meu
                  Curso Técnico com o intuito de entender alguns fundamentos do
                  Javascript, sendo ele o primeiro contato meu com a linguagem ,
                  foi utilizado HTML, CSS, Javascript.
                </p>
              </div>
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
              <div className="desc-projects">
                <p>
                  Apple Clone é um projeto que foi desenvolvido para clonar o
                  site da Apple, sendo esse o meu primeiro projeto realizado no
                  Curso Técnico, com ele aprendi diversos fundamentos do
                  Bootstrap e CSS. Foi utilizado HTML, CSS, Bootstrap
                </p>
              </div>
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
