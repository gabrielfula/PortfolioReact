import { Hamburguer, Logo, MenuStyled, Nav } from "./NavbarStyled";
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from "react";

export default (Navbar) => {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <Nav data-aos="fade-right">
        <Logo href="#">
          {"<"} Fula {"/>"}
        </Logo>
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
        <Hamburguer>
          <CgMenuRightAlt size={30} onClick={Toggle} />
        </Hamburguer>
      </Nav>
    </>
  );
};
