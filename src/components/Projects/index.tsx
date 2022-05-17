import type { NextPage } from "next";
import { useLanguageState } from "@context/language";
import { useThemeState } from "@context/theme";

import Project from "./Project";

import { Container } from "./styles";

interface Properties {
  props: Array<{
    thumbnail: { photo: string; video: string };
    title: string;
    description: string;
    technologies: Array<string>;
    links: Array<{ text: string; link: string }>;
  }>;
}

const Projects: NextPage<Properties> = ({ props }) => {
  const [language, setLanguage] = useLanguageState();
  const [theme, setTheme] = useThemeState();

  return (
    <Container theme={theme} id="projects">
      {props.map((project, index: number) => {
        return <Project key={index} props={project} id={index} />;
      })}
    </Container>
  );
};

export default Projects;
