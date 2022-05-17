import type { NextPage } from "next";
import Image from "next/image";

import { useLanguageState } from "@context/language";
import { useThemeState } from "@context/theme";

import styled from "styled-components";
import typography from "@styles/typography.json";
import colors from "@styles/colors.json";

import EarthSVG from "./EarthSVG";

export const Container = styled.div<{ theme?: string }>`
  @media (max-width: 768px) {
    position: absolute;
    right: 70px;
    top: 2.5px;
    column-gap: 5px;
    svg {
      display: none;
    }
    button:first-child {
      font-size: 0px !important;
      gap: 0 !important;
      padding: 5px 8px !important;
    }
  }
  max-width: 1240px;
  margin: auto;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  column-gap: 20px;
  margin-top: 10px;
  color: ${(props) =>
    (props.theme == "Light" && colors.neutral900) ||
    (props.theme == "Dark" && colors.neutral100)};
  transition-duration: 250ms;
  transition-property: color;
  button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 4px 12px;
    border-radius: 40px;
    background: none;
    border: none;
    color: ${(props) =>
      (props.theme == "Light" && colors.neutral900) ||
      (props.theme == "Dark" && colors.neutral100)};
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-size: ${typography.captions.fontSize};
    font-weight: ${typography.captions.fontWeight.strong};
    transition-duration: 250ms;
    transition-property: background, color;
  }

  button:hover {
    background-color: ${(props) =>
      (props.theme == "Light" && colors.neutral300) ||
      (props.theme == "Dark" && colors.neutral800)};
  }

  svg {
    width: 20px;
    height: 20px;
    transition-property: fill;
    transition-duration: 250ms;
  }
`;

const Controller: NextPage = () => {
  const [language, setLanguage] = useLanguageState();
  const [theme, setTheme] = useThemeState();

  return (
    <Container theme={theme}>
      <button
        onClick={() => {
          theme == "Light" ? setTheme("Dark") : setTheme("Light");
        }}
        tabIndex={0}
      >
        <Image
          src={
            theme == "Light"
              ? "/components/navbar/sun-dark.svg"
              : "/components/navbar/moon-light.svg"
          }
          alt={"Ícone de modo " + theme}
          width={"20px"}
          height={"20px"}
          layout={"fixed"}
        />
        {theme}
      </button>
      |
      <button
        onClick={() => {
          language == "PT" ? setLanguage("EN") : setLanguage("PT");
        }}
        tabIndex={0}
      >
        <EarthSVG />
        {language}
      </button>
    </Container>
  );
};

export default Controller;
