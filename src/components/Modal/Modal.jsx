import { data } from "../../service/api";
import { Button } from "../../styles/Styled";
import { ContentModal, ModalStyle } from "./ModalStyled";

export default function Modal({ isOpen, children, setCloseModal }) {
  if (isOpen) {
    return (
      <ModalStyle>
        <ContentModal>
          {children}
          <div>
            <Button onClick={setCloseModal}>Fechar</Button>
          </div>
        </ContentModal>
      </ModalStyle>
    );
    return null;
  }
}
