import { ContentProjects, ContentTec, PositionIcons } from "./TecStyled";
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
import { motion } from "framer-motion";

export default (Tecnologia) => {
  return (
    <>
      <ContentTec>
        <AlignText>
          <h2>Tecnologias.</h2>
        </AlignText>
        <ContentProjects>
          <div>
            <p>Esses foram os meus aprendizados durante 2 anos de estudos</p>
          </div>
          <PositionIcons>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 3, delay: 0.1 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              <SiHtml5 size={90} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 3, delay: 0.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              <SiCss3 size={90} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 3, delay: 0.3 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              <SiJavascript size={90} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 3, delay: 0.4 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              <SiReact size={90} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 3, delay: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              <SiBootstrap size={90} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 3, delay: 0.6 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              <SiStyledcomponents size={90} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 3, delay: 0.7 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              <SiMysql size={90} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 3, delay: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              <SiNodedotjs size={90} />
            </motion.div>
          </PositionIcons>
        </ContentProjects>
      </ContentTec>
    </>
  );
};
