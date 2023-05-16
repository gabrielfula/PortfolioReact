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
} from "./ProjetoStyled";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { data } from "../../service/api";
import { ContentApi } from "../Modal/ModalStyled";

export default function Projetos() {
  const [modalOpen, setModalOpen] = useState(false);

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
              <Modal
                isOpen={modalOpen}
                setCloseModal={() => setModalOpen(!modalOpen)}
              >
                <ContentApi>
                  <h2>{data[0].title}</h2>
                  <section>
                    <div>
                      <img src={data[0].image}></img>
                    </div>
                    <div>
                      <p>{data[0].desc}</p>
                    </div>
                  </section>
                </ContentApi>
              </Modal>
              <ButtonPosition>
                <Button onClick={() => setModalOpen(true)}>Projeto</Button>
              </ButtonPosition>
            </SpaceImage>

            <SpaceImage>
              <div>
                <h3>E-commerce</h3>
              </div>
              <img src={Ecomerce} alt="Imagem Web E-commerce" />
              <Modal
                isOpen={modalOpen}
                setCloseModal={() => setModalOpen(!modalOpen)}
              >
                <ContentApi>
                  <h2>{data[1].title}</h2>
                  <section>
                    <div>
                      <img src={data[1].image}></img>
                    </div>
                    <div>
                      <p>{data[1].desc}</p>
                    </div>
                  </section>
                </ContentApi>
              </Modal>

              <ButtonPosition>
                <Button onClick={() => setModalOpen(true)}>Projeto</Button>
              </ButtonPosition>
            </SpaceImage>

            <SpaceImage>
              <div>
                <h3>Cálculos</h3>
              </div>
              <img src={Calculadora} alt="Imagem Web Calculos" />
              <Modal
                isOpen={modalOpen}
                setCloseModal={() => setModalOpen(!modalOpen)}
              >
                <ContentApi>
                  <h2>{data[2].title}</h2>
                  <section>
                    <div>
                      <img src={data[2].image}></img>
                    </div>
                    <div>
                      <p>{data[2].desc}</p>
                    </div>
                  </section>
                </ContentApi>
              </Modal>
              <ButtonPosition>
                <Button onClick={() => setModalOpen(true)}>Projeto</Button>
              </ButtonPosition>
            </SpaceImage>

            <SpaceImage>
              <div>
                <h3>Apple Clone</h3>
              </div>
              <img src={Apple} alt="Imagem Web Apple Clone" />
              <Modal
                isOpen={modalOpen}
                setCloseModal={() => setModalOpen(!modalOpen)}
              >
                <ContentApi>
                  <h2>{data[3].title}</h2>
                  <section>
                    <div>
                      <img src={data[3].image}></img>
                    </div>
                    <div>
                      <p>{data[3].desc}</p>
                    </div>
                  </section>
                </ContentApi>
              </Modal>
              <ButtonPosition>
                <Button onClick={() => setModalOpen(true)}>Projeto</Button>
              </ButtonPosition>
            </SpaceImage>
          </ProjetosGrid>
        </ContentProjetos>
      </Container>
    </>
  );
}
