import { Button, Container } from "../../styles/Styled";
import PersonalImage from "/imagens/ImagePerson.jpeg";
import { TextInicio, Content, Icons } from "./styles";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Inicio() {
  return (
    <>
      <Content id="inicio">
        <TextInicio>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 3 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            <h1>
              Meu nome é Gabriel <span>Fulaneto!</span>
            </h1>
            <h3>Web Developer Front-End</h3>
            <Icons>
              <a href="https://github.com/gabrielfula" target="_blank">
                <AiOutlineGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-fulaneto-9b3863232/"
                target="_blank"
              >
                <AiFillLinkedin size={30} />
              </a>
              <Button
                href="/CurriculoGabrielFulaneto.pdf"
                type="application/pdf"
                download={"curriculoGabriel.pdf"}
              >
                Baixar CV
              </Button>
            </Icons>
          </motion.div>
        </TextInicio>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
        >
          <img src={PersonalImage} alt="Imagem Pessoal" />
        </motion.div>
      </Content>
    </>
  );
}
