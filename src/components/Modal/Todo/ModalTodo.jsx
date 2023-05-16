import React from "react";
import { Button } from "../../../styles/Styled";
import {
  ButtonModal,
  ContentApi,
  ContentModal,
  ModalStyle,
} from "../ModalStyled";
import { data } from "../../../service/api";

export default function ModalTodo({ isOpen, setCloseModal }) {
  if (isOpen) {
    return (
      <ModalStyle>
        <ContentModal>
          <ContentApi>
            <h2>{data[0].title}</h2>
            <section>
              <div>
                <video src={data[0].video} autoPlay loop></video>
              </div>
              <div>
                <p>{data[0].desc}</p>
              </div>
            </section>
          </ContentApi>
          <ButtonModal>
            <Button href="https://github.com/gabrielfula/ToDo" target="_blank">
              Repósitorio
            </Button>
            <Button href="https://listagabrielfula.netlify.app" target="_blank">
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
