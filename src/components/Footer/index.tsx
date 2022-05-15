import type { NextPage } from "next";

import { useLanguageState } from "@context/language";
import { useThemeState } from "@context/theme";

import { Container } from "./styles";

const Footer: NextPage = () => {
  const [language, setLanguage] = useLanguageState();
  const [theme, setTheme] = useThemeState();

  return <Container theme={theme}>Footer</Container>;
};

export default Footer;
