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
      <ContentTec id="tecnologia">
        <div className="align-text">
          <h2>Tecnologias.</h2>
        </div>
        <section className="content-projetos">
          <div className="left-text">
            <h4>Esses foram os meus aprendizados durante 2 anos de estudos</h4>
          </div>
          <div className="icons">
            <div className="content-icons" data-aos="fade-right">
              <SiHtml5 size={90} />
            </div>
            <div className="content-icons" data-aos="fade-right">
              <SiCss3 size={90} />
            </div>
            <div className="content-icons" data-aos="fade-right">
              <SiJavascript size={90} />
            </div>
            <div className="content-icons" data-aos="fade-right">
              <SiReact size={90} />
            </div>
            <div className="content-icons" data-aos="fade-right">
              <SiBootstrap size={90} />
            </div>
            <div className="content-icons" data-aos="fade-right">
              <SiStyledcomponents size={90} />
            </div>
            <div className="content-icons" data-aos="fade-right">
              <SiMysql size={90} />
            </div>
          </div>
        </section>
      </ContentTec>
    </>
  );
};
