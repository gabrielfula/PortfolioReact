import {
  ContentIcons,
  ContentProjects,
  ContentTec,
  PositionIcons,
} from "./TecStyled";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiStyledcomponents,
  SiMysql,
  SiNodedotjs,
} from "react-icons/si";
import { AlignText } from "../Projetos/ProjetoStyled";

export default (Tecnologia) => {
  return (
    <>
      <ContentTec id="tecnologia">
        <AlignText>
          <h2>Tecnologias.</h2>
        </AlignText>
        <ContentProjects>
          <div>
            <p>Esses foram os meus aprendizados durante 2 anos de estudos</p>
          </div>
          <PositionIcons data-aos="fade-right">
            <ContentIcons>
              <SiHtml5 size={90} />
            </ContentIcons>
            <ContentIcons>
              <SiCss3 size={90} />
            </ContentIcons>
            <ContentIcons>
              <SiJavascript size={90} />
            </ContentIcons>
            <ContentIcons>
              <SiReact size={90} />
            </ContentIcons>
            <ContentIcons>
              <SiBootstrap size={90} />
            </ContentIcons>
            <ContentIcons>
              <SiStyledcomponents size={90} />
            </ContentIcons>
            <ContentIcons>
              <SiMysql size={90} />
            </ContentIcons>
            <ContentIcons>
              <SiNodedotjs size={90} />
            </ContentIcons>
          </PositionIcons>
        </ContentProjects>
      </ContentTec>
    </>
  );
};
