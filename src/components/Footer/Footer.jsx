import { ContentFooter } from "./FooterStyled";
import { Button } from "../../styles/Styled";

export default (Footer) => {
  return (
    <>
      <ContentFooter id="contato">
        <div>
          <h2>Me chame para conversarmos !</h2>
        </div>
        <div>
          <Button
            href="https://wa.me/5519987319069?text=Ol%C3%A1%2C+visualizei+seu+portf%C3%B3lio.+Gostaria+de+entrar+em+contato+%21"
            target={"_blank"}
          >
            Contato
          </Button>
        </div>
      </ContentFooter>
    </>
  );
};
