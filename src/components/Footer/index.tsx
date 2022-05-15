import type { NextPage } from "next";

import { useLanguageState } from "@context/language";
import { useThemeState } from "@context/theme";

import { Container } from "./styles";

import data from "./data.json";

const Footer: NextPage = () => {
  const [language, setLanguage] = useLanguageState();
  const [theme, setTheme] = useThemeState();

  const dataObj: {
    [key: string]: {
      footer: Array<{ name: string; link: string }>;
    };
  } = data;

  return (
    <Container theme={theme}>
      <div>
        <span>Rafael Ribeiro de Araujo - 2022</span>
        <ul role="footer-nav">
          {dataObj[language].footer.map(
            (item: { name: string; link: string }, index: number) => {
              return (
                <li key={index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
