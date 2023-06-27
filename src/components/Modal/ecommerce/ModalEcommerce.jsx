import React from "react";
import { Button } from "../../../styles/Styled";
import {
  ButtonModal,
  ContentApi,
  ContentModal,
  ModalStyle,
} from "../ModalStyled";
import { data } from "../../../service/api";

export default function ModalEcommerce({ isOpen, setCloseModal }) {
  if (isOpen) {
    return (
      <ModalStyle>
        <ContentModal>
          <ContentApi>
            <h2>{data[4].title}</h2>
            <section>
              <div>
                <img src={data[4].image}></img>
              </div>
              <div>
                <p>{data[4].desc}</p>
              </div>
            </section>
          </ContentApi>
          <ButtonModal>
            <Button
              href="https://github.com/gabrielfula/ecommerce"
              target="_blank"
            >
              Repósitorio
            </Button>
            <Button
              href="https://gabrielfula-ecommerce.netlify.app"
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
