import { Button } from "../../../styles/Styled";
import {
  ButtonModal,
  ContentApi,
  ContentModal,
  ModalStyle,
} from "../ModalStyled";
import { data } from "../../../service/api";

export default function ModalMotivational({ isOpen, setCloseModal }) {
  if (isOpen) {
    return (
      <ModalStyle>
        <ContentModal>
          <ContentApi>
            <h3>{data[5].title}</h3>
            <section>
              <div>
                <video src={data[5].video} autoPlay loop></video>
              </div>
              <div>
                <p>{data[5].desc}</p>
              </div>
            </section>
          </ContentApi>
          <ButtonModal>
            <Button
              href="https://github.com/gabrielfula/generator-motivational"
              target="_blank"
            >
              Repósitorio
            </Button>
            <Button
              href="https://generator-motivational.netlify.app"
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
