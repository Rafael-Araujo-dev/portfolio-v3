import type { NextPage } from "next";
import Image from "next/image";
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
    <Container theme={theme}>
      <Wrapper data-aos="fade-up" theme={theme}>
        <div>
          <div>
            <Title>
              {id + 1 < 10 ? "0" + (id + 1) : id + 1} / {props.title}
            </Title>
            <Image
              src={props.thumbnail}
              alt="Foto do projeto"
              width={"100%"}
              height={"100%"}
              layout={"responsive"}
              quality={100}
            />
            <Description>{props.description}</Description>
            <Technologies>{props.technologies}</Technologies>
          </div>
          <MoreAbout href={props.moreAbout.link} tabIndex={0}>
            {props.moreAbout.text}
          </MoreAbout>
        </div>
        <div>
          <Image
            src={props.thumbnail}
            alt={"Foto do projeto " + props.title}
            width={"100%"}
            height={"100%"}
            layout={"responsive"}
            quality={100}
          />
        </div>
      </Wrapper>
      <Separator theme={theme} />
    </Container>
  );
};

export default Projects;
