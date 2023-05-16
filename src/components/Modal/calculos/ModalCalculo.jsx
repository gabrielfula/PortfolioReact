import { Button } from "../../../styles/Styled";
import {
  ButtonModal,
  ContentApi,
  ContentModal,
  ModalStyle,
} from "../ModalStyled";
import { data } from "../../../service/api";

export default function ModalCalculo({ isOpen, setCloseModal }) {
  if (isOpen) {
    return (
      <ModalStyle>
        <ContentModal>
          <ContentApi>
            <h3>{data[2].title}</h3>
            <section>
              <div>
                <video src={data[2].video} autoPlay loop></video>
              </div>
              <div>
                <p>{data[2].desc}</p>
              </div>
            </section>
          </ContentApi>
          <ButtonModal>
            <Button
              href="https://github.com/gabrielfula/Calculadora"
              target="_blank"
            >
              Repósitorio
            </Button>
            <Button
              href="https://calculadora-gabrielfula.vercel.app"
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