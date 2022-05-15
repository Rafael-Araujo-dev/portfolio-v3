//Dependencies
import type { NextPage } from "next";
import Head from "next/head";

import { useLanguageState } from "@context/language";

//Components
import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import Project from "@components/Project";
import Footer from "@components/Footer";

interface Properties {
  [key: string]: {
    navbar: Array<{ name: string; link: string }>;
    hero: { title: string; description: string };
    projects: Array<{
      thumbnail: string;
      title: string;
      description: string;
      technologies: string;
      moreAbout: {
        text: string;
        link: string;
      };
    }>;
    footer: Array<{ name: string; link: string }>;
  };
}

const props: Properties = {
  EN: {
    navbar: [
      {
        name: "Home",
        link: "#Home",
      },
      {
        name: "Projects",
        link: "#Projects",
      },
      {
        name: "About",
        link: "#About",
      },
      {
        name: "Playground",
        link: "#Playground",
      },
      {
        name: "Contact",
        link: "#Contact",
      },
    ],
    hero: {
      title: "Hello, I'm Rafael Araujo.",
      description:
        "Front-End developer, student of technology, always looking for new challenges and to specialize in web development.",
    },
    projects: [
      {
        thumbnail: "https://source.unsplash.com/random/1920x1080?developer",
        title: "Project Name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        moreAbout: {
          text: "See More",
          link: "#SeeMore",
        },
      },
      {
        thumbnail: "https://source.unsplash.com/random/1920x1080?coding",
        title: "Project Name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        moreAbout: {
          text: "See More",
          link: "#SeeMore",
        },
      },
      {
        thumbnail: "https://source.unsplash.com/random/1920x1080?userinterface",
        title: "Project Name",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        moreAbout: {
          text: "See More",
          link: "#SeeMore",
        },
      },
    ],
    footer: [
      {
        name: "Projects",
        link: "#Projects",
      },
      {
        name: "LinkedIn",
        link: "#LinkedIn",
      },
      {
        name: "Curriculum",
        link: "#Curriculum",
      },
    ],
  },
  PT: {
    navbar: [
      {
        name: "Home",
        link: "#Home",
      },
      {
        name: "Projetos",
        link: "#Projects",
      },
      {
        name: "Sobre",
        link: "#About",
      },
      {
        name: "Playground",
        link: "#Playground",
      },
      {
        name: "Contato",
        link: "#Contact",
      },
    ],
    hero: {
      title: "Olá, eu sou Rafael Araujo.",
      description:
        "Desenvolvedor Front-End, estudante de tecnologia, sempre buscando novos desafios e especializar-se em desenvolvimento web.",
    },
    projects: [
      {
        thumbnail: "https://source.unsplash.com/random/1920x1080?developer",
        title: "Nome do projeto",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        moreAbout: {
          text: "Ver mais",
          link: "#SeeMore",
        },
      },
      {
        thumbnail: "https://source.unsplash.com/random/1920x1080?coding",
        title: "Nome do projeto",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        moreAbout: {
          text: "Ver mais",
          link: "#SeeMore",
        },
      },
      {
        thumbnail: "https://source.unsplash.com/random/1920x1080?userinterface",
        title: "Nome do projeto",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        moreAbout: {
          text: "Ver mais",
          link: "#SeeMore",
        },
      },
    ],
    footer: [
      {
        name: "Projetos",
        link: "#Projects",
      },
      {
        name: "LinkedIn",
        link: "#LinkedIn",
      },
      {
        name: "Curriculum",
        link: "#Curriculum",
      },
    ],
  },
};

const Home: NextPage = () => {
  const [language, setLanguage] = useLanguageState();

  return (
    <>
      <Head>
        <title>Rafael Araujo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logotype.ico" />
      </Head>

      <Navbar props={props[language].navbar} />

      <Hero props={props[language].hero} />

      <main>
        {props[language].projects.map((project, index: number) => {
          return <Project key={index} props={project} id={index} />;
        })}
      </main>

      <Footer props={props[language].footer} />
    </>
  );
};

export default Home;
