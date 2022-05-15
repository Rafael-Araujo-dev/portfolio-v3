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

interface Properties {
  props: Array<{ name: string; link: string }>;
}

const Navbar: NextPage<Properties> = ({ props }) => {
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
          tabIndex={1}
        >
          <Image
            src={
              theme == "Light"
                ? "/components/navbar/sun-dark.svg"
                : "/components/navbar/moon-light.svg"
            }
            alt={"Ícone de modo " + theme}
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
          tabIndex={2}
        >
          <Image
            src={
              theme == "Light"
                ? "/components/navbar/earth-dark.svg"
                : "/components/navbar/earth-light.svg"
            }
            alt={"Ícone de idioma"}
            width={20}
            height={20}
          />
          {language}
        </button>
      </Controller>
      <Desk theme={theme}>
        <Logo theme={theme} />
        <ul>
          {props.map(
            (item: { name?: string; link?: string }, index: number) => {
              return (
                <li key={index}>
                  <a href={item.link} tabIndex={3 + index}>
                    {item.name}
                  </a>
                </li>
              );
            }
          )}
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
            {props.map(
              (item: { name?: string; link?: string }, index: number) => {
                return (
                  <li key={index}>
                    <a href={item.link} tabIndex={3 + index}>
                      {item.name}
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </NavContainer>
      </Mobile>
    </Container>
  );
};

export default Navbar;
