import { ContentTec } from "./TecStyled";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiStyledcomponents,
  SiMysql,
} from "react-icons/si";

export default (Tecnologia) => {
  return (
    <>
      <ContentTec data-aos="zoom-in-up" id="tecnologia">
        <div className="align-text">
          <h2>Tecnologias.</h2>
        </div>
        <section className="content-projetos">
          <div className="left-text">
            <h4>Esses foram os meus aprendizados durante 2 anos de estudos</h4>
          </div>
          <div className="icons">
            <div className="content-icons">
              <SiHtml5 size={90} />
            </div>
            <div className="content-icons">
              <SiCss3 size={90} />
            </div>
            <div className="content-icons">
              <SiJavascript size={90} />
            </div>
            <div className="content-icons">
              <SiReact size={90} />
            </div>
            <div className="content-icons">
              <SiBootstrap size={90} />
            </div>
            <div className="content-icons">
              <SiStyledcomponents size={90} />
            </div>
            <div className="content-icons">
              <SiMysql size={90} />
            </div>
          </div>
        </section>
      </ContentTec>
    </>
  );
};
