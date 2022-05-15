import type { NextPage } from "next";

import { useLanguageState } from "@context/language";
import { useThemeState } from "@context/theme";

import { Container, Wrapper } from "./styles";

import data from "./data.json";

const Hero: NextPage = () => {
  const [language, setLanguage] = useLanguageState();
  const [theme, setTheme] = useThemeState();

  const dataObj: {
    [key: string]: {
      hero: {
        [key: string]: string;
      };
    };
  } = data;

  return (
    <Container theme={theme}>
      <Wrapper theme={theme}>
        <div>{dataObj[language].hero.hero1}</div>
        <div>{dataObj[language].hero.hero2}</div>
      </Wrapper>
    </Container>
  );
};

export default Hero;
