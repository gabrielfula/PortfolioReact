import { ContentAbout, TextAbout, Title } from "./styles";
import { motion } from "framer-motion";

export default (Sobre) => {
  return (
    <>
      <ContentAbout id="sobre">
        <Title>
          <h2>Sobre.</h2>
          <p>Educação e Cursos adicionais</p>
        </Title>
        <div
          style={{
            gap: "5rem",
          }}
        >
          <TextAbout>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 3 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              Meu nome é Gabriel, sou Desenvolvedor Web, Atualmente eu estou
              cursando Análise e Desenvolvimento de Sistemas na USF.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 3 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              Como desenvolvedor web, possuo competências em HTML, CSS e
              Javascript, além de conhecimento em React JS, Styled-Components,
              Bootstrap 5 e MySQL e Node JS com Express. Sou capaz de criar
              sites e aplicações web com design responsivo e interatividade,
              utilizando as tecnologias mais recentes e ferramentas de
              desenvolvimento. Além disso, tenho habilidade para solucionar
              problemas e trabalhar em equipe para entregar projetos de alta
              qualidade.
            </motion.p>
          </TextAbout>

          <motion.ul
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            <li>
              Análise e Desenvolvimento de Sistemas - USF
              <span>Em andamento - ( 2023 - 2025 )</span>
            </li>

            <li>
              Curso Técnico de Informática - ETEC
              <span>Concluído - ( 2023 )</span>
            </li>

            <li>
              Curso AWS - Escola da Nuvem
              <span>Incompleto - (2023)</span>
            </li>

            <li>
              Curso CC50 de Ciência da Computação - Harvard
              <span>Concluído - ( 2022 )</span>
            </li>

            <li>
              Curso Dominando o React - Dev Samurai
              <span>Concluído - ( 2023 )</span>
            </li>
          </motion.ul>
        </div>
      </ContentAbout>
    </>
  );
};
