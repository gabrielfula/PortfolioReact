import Inicio from "./components/Inicio/Inicio";
import Navbar from "./components/Navbar/Navbar";
import Tecnologia from "./components/Tecnologias/Tecnologia";
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projetos";
import Footer from "./components/Footer/Footer";

// Effects to apper
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {

  


  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

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
