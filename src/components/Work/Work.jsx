import { motion } from "framer-motion";
import { Button } from "../../styles/Styled";
import { ContainerProjeto, DescProjeto } from "./styles";

export default function Work({ title, img, desc, link, github }) {
  return (
    <>
      <ContainerProjeto>
        <DescProjeto>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src={img} alt={title} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text"
          >
            <p className="title">{title}</p>
            <p className="desc">{desc}</p>
            <div>
              <Button href={link} target="blank">
                Deploy
              </Button>
              <Button href={github} target="blank">
                Repositório
              </Button>
            </div>
          </motion.div>
        </DescProjeto>
      </ContainerProjeto>
    </>
  );
}
