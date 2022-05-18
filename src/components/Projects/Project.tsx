import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useLanguageState } from "@context/language";
import { useThemeState } from "@context/theme";
import { useState } from "react";

import {
  Container,
  Wrapper,
  Title,
  Description,
  Technologies,
  Thumbnail,
  Separator,
  Links,
} from "./styles";

interface Properties {
  props?: {
    thumbnail?: { photo?: string; video?: string };
    title?: string;
    description?: string;
    technologies?: Array<{ name?: string; link?: string }>;
    links?: Array<{ text?: string; link?: string }>;
  };
  id: number;
}

const Projects: NextPage<Properties> = ({ props, id }) => {
  const [language, setLanguage] = useLanguageState();
  const [theme, setTheme] = useThemeState();
  const [isThumbnailActive, setThumbnailActive] = useState(false);

  return (
    <Container theme={theme}>
      {props && (
        <>
          <Wrapper data-aos="fade-up" theme={theme}>
            <div>
              <div>
                <Title>
                  {id + 1 < 10 ? "0" + (id + 1) : id + 1} / {props.title}
                </Title>
                {props.thumbnail && props.thumbnail.photo && (
                  <Image
                    src={
                      props.thumbnail.video
                        ? isThumbnailActive
                          ? props.thumbnail.video
                          : props.thumbnail.photo
                        : props.thumbnail.photo
                    }
                    alt="Foto do projeto"
                    width={"100%"}
                    height={"100%"}
                    layout={"responsive"}
                    quality={100}
                    unoptimized={true}
                    onMouseEnter={() => setThumbnailActive(true)}
                    onMouseLeave={() => setThumbnailActive(false)}
                  />
                )}
                <Description>{props.description}</Description>

                <Technologies>
                  <p>
                    {language == "PT"
                      ? "Tecnologias utilizadas:"
                      : "Used Technologies"}
                  </p>
                  {props.technologies &&
                    props.technologies.map((tech, index) => {
                      return (
                        <li key={index}>
                          <Link
                            href={tech.link ? tech.link : "#" + tech.name}
                            key={index}
                          >
                            <a target="_blank">{tech.name}</a>
                          </Link>
                        </li>
                      );
                    })}
                </Technologies>
              </div>
              <Links>
                {props.links &&
                  props.links.map((link, index) => {
                    return (
                      <Link
                        href={link.link ? link.link : "#" + link.text}
                        key={index}
                      >
                        <a target="_blank">{link.text}</a>
                      </Link>
                    );
                  })}
              </Links>
            </div>
            <div>
              {props.thumbnail && props.thumbnail.photo && (
                <Image
                  src={
                    props.thumbnail.video
                      ? isThumbnailActive
                        ? props.thumbnail.video
                        : props.thumbnail.photo
                      : props.thumbnail.photo
                  }
                  alt={"Foto do projeto " + props.title}
                  width={"100%"}
                  height={"100%"}
                  layout={"responsive"}
                  quality={100}
                  unoptimized={true}
                  onMouseEnter={() => setThumbnailActive(true)}
                  onMouseLeave={() => setThumbnailActive(false)}
                />
              )}
            </div>
          </Wrapper>
          <Separator theme={theme} />
        </>
      )}
    </Container>
  );
};

export default Projects;
