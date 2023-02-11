import { MenuStyled, Nav } from "./NavbarStyled";
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from "react";

export default (Navbar) => {
  const [show, setShow] = useState();

  const Toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <Nav>
        <a href="#" className="logo">
          {"<"} Fula {"/>"}
        </a>
        <MenuStyled show={show}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#tecnologia">Tecnologias</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </MenuStyled>
        <div className="hamburguer">
          <CgMenuRightAlt size={30} onClick={Toggle} />
        </div>
      </Nav>
    </>
  );
};
