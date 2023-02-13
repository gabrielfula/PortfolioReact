import { Button, Container } from "../../styles/Styled";
import TodoList from "/imagens/Todo.jpg";
import Calculadora from "/imagens/calculadora.jpg";
import Apple from "/imagens/apple.png";
import Ecomerce from "/imagens/ecomerce.png";
import {
  AlignText,
  ContentProjetos,
  ProjetosGrid,
  SpaceImage,
  ButtonPosition,
  TextProjects,
} from "./ProjetoStyled";

export default (Projetos) => {
  return (
    <>
      <Container id="projetos">
        <ContentProjetos>
          <AlignText>
            <h2>Projetos.</h2>
          </AlignText>
          <div>
            <p>
              Esses foram alguns projetos realizados durante meu Curso Técnico e
              cursos adicionais
            </p>
          </div>

          <ProjetosGrid data-aos="fade-right">
            <SpaceImage>
              <div>
                <h3>To Do List</h3>
              </div>
              <img src={TodoList} alt="Imagem Web Todo" />
              <TextProjects>
                <p>
                  To Do List é um projeto web responsivo, realizado com o
                  intuito de criar novas tarefas, sendo possível adicionar,
                  excluir e marcar as tarefas como concluído. O projeto foi
                  desenvolvido com ReactJS para aprimorar meus conhecimentos
                  sobre a tecnologia.
                </p>
              </TextProjects>
              <ButtonPosition>
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
              </ButtonPosition>
            </SpaceImage>

            <SpaceImage>
              <div>
                <h3>E-commerce</h3>
              </div>
              <img src={Ecomerce} alt="Imagem Web E-commerce" />
              <TextProjects>
                <p>
                  E-commerce é um projeto de restaurante totalmente responsivo{" "}
                  <span>em andamento</span> que está sendo desenvolvido com
                  React JS, Typescript, Styled-Components e consumindo uma API
                  de pagamento. Onde é possível adicionar itens no carrinho e
                  realizar pagamentos.
                </p>
              </TextProjects>
              <ButtonPosition>
                <Button>Repositório</Button>
                <Button>Projeto</Button>
              </ButtonPosition>
            </SpaceImage>

            <SpaceImage>
              <div>
                <h3>Cálculos</h3>
              </div>
              <img src={Calculadora} alt="Imagem Web Calculos" />
              <TextProjects>
                <p
                  style={{
                    paddingTop: 10,
                  }}
                >
                  Cálculos é um projeto de mini-calculadora realizado no meu
                  Curso Técnico com o intuito de entender alguns fundamentos do
                  Javascript, sendo ele o primeiro contato meu com a linguagem,
                  foi utilizado HTML, CSS, Javascript. <span>Concluído</span>
                </p>
              </TextProjects>
              <ButtonPosition>
                <Button
                  href="https://github.com/gabrielfula/Calculadora"
                  target={"_blank"}
                >
                  Repositório
                </Button>
                <Button
                  href="https://calculadora-gabrielfula.vercel.app"
                  target={"_blank"}
                >
                  Projeto
                </Button>
              </ButtonPosition>
            </SpaceImage>

            <SpaceImage>
              <div>
                <h3>Apple Clone</h3>
              </div>
              <img src={Apple} alt="Imagem Web Apple Clone" />
              <TextProjects>
                <p>
                  Apple Clone é um projeto que foi desenvolvido para clonar o
                  site da Apple, sendo esse o meu primeiro projeto realizado no
                  Curso Técnico, com ele aprendi diversos fundamentos do
                  Bootstrap e CSS. Foi utilizado HTML, CSS, Bootstrap
                </p>
              </TextProjects>
              <ButtonPosition>
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
              </ButtonPosition>
            </SpaceImage>
          </ProjetosGrid>
        </ContentProjetos>
      </Container>
    </>
  );
};
