import { Hamburguer, Logo, MenuStyled, Nav } from "./styles";

import { useState } from "react";

export default (Navbar) => {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <Nav>
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
        <Hamburguer show={show}>
          <div className="line1" onClick={Toggle}></div>
          <div className="line2" onClick={Toggle}></div>
          <div className="line3" onClick={Toggle}></div>
        </Hamburguer>
      </Nav>
    </>
  );
};
