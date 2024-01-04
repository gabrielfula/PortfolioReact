import { AnimatePresence } from "framer-motion";
import { projetos } from "../../utils/projetos";
import Work from "../Work/Work";
import { ContentProjetos, Sticky } from "./styles";

export default function Projetos() {
  return (
    <ContentProjetos>
      <Sticky>
        <h1>Projetos Pessoais</h1>
      </Sticky>
      <div>
        {projetos.map((item) => {
          return (
            <>
              <Work
                key={item.id}
                title={item.title}
                img={item.img}
                desc={item.desc}
                link={item.link}
                github={item.github}
              />
            </>
          );
        })}
      </div>
    </ContentProjetos>
  );
}
