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
            gap: "2rem",
          }}
        >
          <TextAbout>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 3 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              Olá, meu nome é Gabriel e sou apaixonado por Desenvolvimento Web.
              Atualmente, estou cursando Análise e Desenvolvimento de Sistemas,
              buscando constantemente aprimorar minhas habilidades e
              conhecimentos na área de tecnologia.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 3 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              Com uma base sólida em diversas tecnologias, desde o uso do
              Next.js e React.js para criação de interfaces dinâmicas até o
              trabalho com bancos de dados MySQL, tenho experiência em HTML,
              CSS, JavaScript, TypeScript, Tailwind CSS, Styled-Components,
              Bootstrap 5, AWS, Express e Node.js.
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
