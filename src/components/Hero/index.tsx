import type { NextPage } from "next";

import { useLanguageState } from "@context/language";
import { useThemeState } from "@context/theme";

import { Container, Wrapper } from "./styles";

interface Properties {
  props: {
    title: string;
    description: string;
  };
}

const Hero: NextPage<Properties> = ({ props }) => {
  const [language, setLanguage] = useLanguageState();
  const [theme, setTheme] = useThemeState();

  return (
    <Container theme={theme}>
      <Wrapper theme={theme}>
        <div data-aos="fade-up">{props.title}</div>
        <div data-aos="fade-up">{props.description}</div>
      </Wrapper>
    </Container>
  );
};

export default Hero;
