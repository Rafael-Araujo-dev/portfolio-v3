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
} from "./styles";

import Controller from "./Controller";

interface Properties {
  props: Array<{ name: string; link: string }>;
}

const Navbar: NextPage<Properties> = ({ props }) => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [language, setLanguage] = useLanguageState();
  const [theme, setTheme] = useThemeState();

  return (
    <Container theme={theme}>
      <Controller />
      <Desk theme={theme}>
        <Logo theme={theme} />
        <ul>
          {props.map(
            (item: { name?: string; link?: string }, index: number) => {
              return (
                <li key={index}>
                  <a href={item.link} tabIndex={0}>
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
                    <a href={item.link} tabIndex={0}>
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
