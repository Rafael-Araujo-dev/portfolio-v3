import type { NextPage } from "next";
import { useState } from "react";

import { Container, Desk, Mobile, Logo, NavToggle } from "./styles";

const Navbar: NextPage = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  return (
    <Container>
      <Desk>
        <Logo />
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Projects">Projetos</a>
          </li>
          <li>
            <a href="#About">Sobre</a>
          </li>
          <li>
            <a href="#Playground">Playground</a>
          </li>
          <li>
            <a href="#Contact">Contato</a>
          </li>
        </ul>
      </Desk>
      <Mobile>
        <Logo />
        <NavToggle
          className={isNavActive ? "on" : ""}
          onClick={() => setIsNavActive(!isNavActive)}
        >
          <span />
        </NavToggle>
      </Mobile>
    </Container>
  );
};

export default Navbar;
