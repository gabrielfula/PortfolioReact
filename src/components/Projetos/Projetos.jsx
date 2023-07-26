import { Button, Container } from "../../styles/Styled";
import TodoList from "/imagens/Todo.jpg";
import Calculadora from "/imagens/calculadora.jpg";
import Apple from "/imagens/apple.png";
import Ecommerce from "/imagens/ecomerce.png";
import Weather from "/imagens/weather.png";
import {
  AlignText,
  ContentProjetos,
  ProjetosGrid,
  ButtonPosition,
} from "./ProjetoStyled";
import { motion } from "framer-motion";

import { useState } from "react";
import ModalTodo from "../Modal/Todo/ModalTodo";
import ModalWeather from "../Modal/weather/ModalWeather";
import ModalCalculo from "../Modal/calculos/ModalCalculo";
import ModalApple from "../Modal/apple/ModalApple";
import ModalEcommerce from "../Modal/ecommerce/ModalEcommerce";

export default function Projetos() {
  const [modalTodo, setModalTodo] = useState(false);

  const [modalWeather, setModalWeather] = useState(false);

  const [modalCalculo, setModalCalculo] = useState(false);

  const [modalApple, setModalApple] = useState(false);

  const [modalEcommerce, setmodalEcommerce] = useState(false);

  return (
    <>
      <Container id="projetos">
        <ContentProjetos>
          <AlignText>
            <h2>Projetos.</h2>
          </AlignText>
          <div>
            <p>
              Esses foram alguns projetos realizados no meu período de estudo.
            </p>
          </div>
          <ProjetosGrid>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <div>
                <h3>E-commerce</h3>
              </div>
              <img src={Ecommerce} alt="Imagem Web Ecommerce" />
              <ModalEcommerce
                isOpen={modalEcommerce}
                setCloseModal={() => setmodalEcommerce(!modalEcommerce)}
              />

              <ButtonPosition>
                <Button onClick={() => setmodalEcommerce(true)}>Projeto</Button>
              </ButtonPosition>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
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
            </motion.div>
          </ProjetosGrid>
        </ContentProjetos>
      </Container>
    </>
  );
}
