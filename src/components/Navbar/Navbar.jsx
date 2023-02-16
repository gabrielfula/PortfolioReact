import { Hamburguer, Logo, MenuStyled, Nav } from "./NavbarStyled";
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from "react";
import { useEffect } from "react";

export default (Navbar) => {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    document.body.style.overflowY = show ? "hidden" : "auto";
  }, [show]);

  return (
    <>
      <Nav data-aos="fade-right">
        <Logo href="#">
          {"<"} Fula {"/>"}
        </Logo>
        <MenuStyled show={show}>
          <a href="#" onClick={Toggle}>
            Inicio
          </a>
          <a href="#sobre" onClick={Toggle}>
            Sobre
          </a>
          <a href="#projetos" onClick={Toggle}>
            Projetos
          </a>
          <a href="#tecnologia" onClick={Toggle}>
            Tecnologias
          </a>
          <a href="#contato" onClick={Toggle}>
            Contato
          </a>
        </MenuStyled>
        <Hamburguer>
          <CgMenuRightAlt size={30} onClick={Toggle} />
        </Hamburguer>
      </Nav>
    </>
  );
};
