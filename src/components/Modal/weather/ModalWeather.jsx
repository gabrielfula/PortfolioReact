import React from "react";
import { Button } from "../../../styles/Styled";
import {
  ButtonModal,
  ContentApi,
  ContentModal,
  ModalStyle,
} from "../ModalStyled";
import { data } from "../../../service/api";

export default function ModalWeather({ isOpen, setCloseModal }) {
  if (isOpen) {
    return (
      <ModalStyle>
        <ContentModal>
          <ContentApi>
            <h2>{data[1].title}</h2>
            <section>
              <div>
                <video src={data[1].video} autoPlay loop></video>
              </div>
              <div>
                <p>{data[1].desc}</p>
              </div>
            </section>
          </ContentApi>
          <ButtonModal>
            <Button
              href="https://github.com/gabrielfula/weather"
              target="_blank"
            >
              Repósitorio
            </Button>
            <Button
              href="https://weather-gabrielfula.netlify.app"
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
