import { Button, Container } from "../../styles/Styled";
import TodoList from "/imagens/Todo.jpg";
import Calculadora from "/imagens/calculadora.jpg";
import Apple from "/imagens/apple.png";
import Weather from "/imagens/weather.png";
import {
  AlignText,
  ContentProjetos,
  ProjetosGrid,
  SpaceImage,
  ButtonPosition,
} from "./ProjetoStyled";

import { useState } from "react";
import ModalTodo from "../Modal/Todo/ModalTodo";
import ModalWeather from "../Modal/weather/ModalWeather";
import ModalCalculo from "../Modal/calculos/ModalCalculo";
import ModalApple from "../Modal/apple/ModalApple";

export default function Projetos() {
  const [modalTodo, setModalTodo] = useState(false);

  const [modalWeather, setModalWeather] = useState(false);

  const [modalCalculo, setModalCalculo] = useState(false);

  const [modalApple, setModalApple] = useState(false);

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

              <ModalTodo
                isOpen={modalTodo}
                setCloseModal={() => setModalTodo(!modalTodo)}
              />

              <ButtonPosition>
                <Button onClick={() => setModalTodo(true)}>Projeto</Button>
              </ButtonPosition>
            </SpaceImage>

            <SpaceImage>
              <div>
                <h3>Weather</h3>
              </div>
              <img src={Weather} alt="Imagem Web E-commerce" />

              <ModalWeather
                isOpen={modalWeather}
                setCloseModal={() => setModalWeather(!modalWeather)}
              />

              <ButtonPosition>
                <Button onClick={() => setModalWeather(true)}>Projeto</Button>
              </ButtonPosition>
            </SpaceImage>

            <SpaceImage>
              <div>
                <h3>Cálculos</h3>
              </div>
              <img src={Calculadora} alt="Imagem Web Calculos" />

              <ModalCalculo
                isOpen={modalCalculo}
                setCloseModal={() => setModalCalculo(!modalCalculo)}
              />

              <ButtonPosition>
                <Button onClick={() => setModalCalculo(true)}>Projeto</Button>
              </ButtonPosition>
            </SpaceImage>

            <SpaceImage>
              <div>
                <h3>Apple Clone</h3>
              </div>
              <img src={Apple} alt="Imagem Web Apple Clone" />

              <ModalApple
                isOpen={modalApple}
                setCloseModal={() => setModalApple(!modalApple)}
              />

              <ButtonPosition>
                <Button onClick={() => setModalApple(true)}>Projeto</Button>
              </ButtonPosition>
            </SpaceImage>
          </ProjetosGrid>
        </ContentProjetos>
      </Container>
    </>
  );
}
