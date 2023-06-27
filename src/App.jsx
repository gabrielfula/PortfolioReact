import Inicio from "./components/Inicio/Inicio";
import Navbar from "./components/Navbar/Navbar";
import Tecnologia from "./components/Tecnologias/Tecnologia";
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projetos";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Inicio />
      <Sobre />
      <Projetos />
      <Tecnologia />
      <Footer />
    </>
  );
}
