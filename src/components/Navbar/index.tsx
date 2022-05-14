import type { NextPage } from "next";
import { useState } from "react";

import {
  Container,
  Desk,
  Mobile,
  Logo,
  NavToggle,
  NavContainer,
} from "./styles";

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
        <NavContainer className={isNavActive ? "on" : "off"}>
          <span onClick={() => setIsNavActive(!isNavActive)} />
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
        </NavContainer>
      </Mobile>
    </Container>
  );
};

export default Navbar;
