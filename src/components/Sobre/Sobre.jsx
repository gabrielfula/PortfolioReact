import { ContentAbout, TextAbout, Title } from "./SobreStyled";
import { Container } from "../../styles/Styled";
import { motion } from "framer-motion";

export default (Sobre) => {
  return (
    <>
      <Container id="sobre">
        <Title>
          <h2>Sobre.</h2>
        </Title>
        <Title>
          <h5>Educação e Cursos adicionais</h5>
        </Title>
        <ContentAbout>
          <TextAbout>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 3 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              Meu nome é Gabriel, sou desenvolvedor Front End, tenho 18 anos,
              nasci e moro Campinas. Eu terminei o Ensino Médio ano passado e em
              2023 completei meu curso técnico em Informática na ETEC.
              Atualmente eu estou cursando Análise e Desenvolvimento de Sistemas
              na USF.
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
              <span>Em andamento - (2023)</span>
            </li>

            <li>
              Ensino Médio - SESI
              <span>Completo - (2022)</span>
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
        </ContentAbout>
      </Container>
    </>
  );
};
