import type { NextPage } from "next";

import { useLanguageState } from "@context/language";
import { useThemeState } from "@context/theme";

import { Container, Wrapper, Background } from "./styles";

import BackgroundSVG from "./BackgroundSVG";

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
    <Container id="home">
      <Wrapper theme={theme}>
        <div data-aos="fade-right">{props.title}</div>
        <div data-aos="fade-left">{props.description}</div>
      </Wrapper>

      <Background theme={theme}>
        <BackgroundSVG />
      </Background>
    </Container>
  );
};

export default Hero;
