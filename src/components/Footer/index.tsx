import type { NextPage } from "next";

import { useLanguageState } from "@context/language";
import { useThemeState } from "@context/theme";

import { Container } from "./styles";

interface Properties {
  props: Array<{ name: string; link: string }>;
}

const Footer: NextPage<Properties> = ({ props }) => {
  const [language, setLanguage] = useLanguageState();
  const [theme, setTheme] = useThemeState();

  return (
    <Container theme={theme}>
      <div>
        <span>Rafael Ribeiro de Araujo - 2022</span>
        <ul role="navigation">
          {props.map((item: { name: string; link: string }, index: number) => {
            return (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
