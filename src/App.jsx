import Inicio from "./components/Inicio/Inicio";
import Navbar from "./components/Navbar/Navbar";
import Tecnologia from "./components/Tecnologias/Tecnologia";
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projetos";
import Footer from "./components/Footer/Footer";
import { Container } from "./styles/Styled";

export default function App() {
  return (
    <>
      <Container>
        <section>
          <Navbar />
          <Inicio />
        </section>
        <section>
          <Sobre />
        </section>
        <section>
          <Projetos />
        </section>
        <Container>
          <Tecnologia />
        </Container>
        <Footer />
      </Container>
    </>
  );
}
