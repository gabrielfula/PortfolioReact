import React from "react";
import { Button } from "../../../styles/Styled";
import {
  ButtonModal,
  ContentApi,
  ContentModal,
  ModalStyle,
} from "../ModalStyled";
import { data } from "../../../service/api";

export default function ModalApple({ isOpen, setCloseModal }) {
  if (isOpen) {
    return (
      <ModalStyle>
        <ContentModal>
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
          <ButtonModal>
            <Button
              href="https://github.com/gabrielfula/AppleFake"
              target="_blank"
            >
              Repósitorio
            </Button>
            <Button
              href="https://gabrielfula.github.io/AppleFake/"
              target="_blank"
            >
              Deploy
            </Button>
            <Button onClick={setCloseModal}>Fechar</Button>
          </ButtonModal>
        </ContentModal>
      </ModalStyle>
    );
  }
  return null;
}
