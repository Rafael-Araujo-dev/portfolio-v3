import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

import { useLanguageState } from "@context/language";
import { useThemeState } from "@context/theme";

import {
  Container,
  Desk,
  Mobile,
  Logo,
  NavToggle,
  NavContainer,
  Controller,
} from "./styles";

const Navbar: NextPage = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [language, setLanguage] = useLanguageState();
  const [theme, setTheme] = useThemeState();
  return (
    <Container theme={theme}>
      <Controller theme={theme}>
        <button
          onClick={() => {
            theme == "Light" ? setTheme("Dark") : setTheme("Light");
          }}
        >
          <Image
            src={
              theme == "Light"
                ? "/components/navbar/sun-dark.svg"
                : "/components/navbar/moon-light.svg"
            }
            width={20}
            height={20}
          />
          {theme}
        </button>
        |
        <button
          onClick={() => {
            language == "PT" ? setLanguage("EN") : setLanguage("PT");
          }}
        >
          <Image
            src={
              theme == "Light"
                ? "/components/navbar/earth-dark.svg"
                : "/components/navbar/earth-light.svg"
            }
            width={20}
            height={20}
          />
          {language}
        </button>
      </Controller>
      <Desk theme={theme}>
        <Logo theme={theme} />
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
        <Logo theme={theme} />
        <NavToggle
          theme={theme}
          className={isNavActive ? "on" : ""}
          onClick={() => setIsNavActive(!isNavActive)}
        >
          <span />
        </NavToggle>
        <NavContainer theme={theme} className={isNavActive ? "on" : "off"}>
          <span onClick={() => isNavActive && setIsNavActive(false)} />
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
