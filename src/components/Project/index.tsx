import type { NextPage } from "next";
import { useLanguageState } from "@context/language";
import { useThemeState } from "@context/theme";

import {
  Container,
  Wrapper,
  Title,
  Description,
  Technologies,
  MoreAbout,
  Thumbnail,
  Separator,
} from "./styles";

interface Properties {
  props: {
    thumbnail: string;
    title: string;
    description: string;
    technologies: string;
    moreAbout: {
      text: string;
      link: string;
    };
  };
  id: number;
}

const Projects: NextPage<Properties> = ({ props, id }) => {
  const [language, setLanguage] = useLanguageState();
  const [theme, setTheme] = useThemeState();

  return (
    <Container theme={theme} id={"#project-" + (id + 1)}>
      <Wrapper data-aos="fade-up">
        <div>
          <div>
            <Title>
              {id + 1 < 10 ? "0" + (id + 1) : id + 1} / {props.title}
            </Title>
            <Thumbnail
              src={props.thumbnail}
              alt="Foto do projeto"
              width={"100%"}
            />
            <Description>{props.description}</Description>
            <Technologies>{props.technologies}</Technologies>
          </div>
          <MoreAbout href={props.moreAbout.link} tabIndex={7 + id}>
            {props.moreAbout.text}
          </MoreAbout>
        </div>
        <div>
          <Thumbnail
            src={props.thumbnail}
            alt={"Foto do projeto " + props.title}
            width={"100%"}
          />
        </div>
      </Wrapper>
      <Separator theme={theme} />
    </Container>
  );
};

export default Projects;
