import styled from "styled-components";
import colors from "@styles/colors.json";
import typography from "@styles/typography.json";

export const Container = styled.section<{theme?: string}>`
    background-color: ${props =>
        props.theme == "Light" && colors.neutral100
        ||
        props.theme == "Dark" && colors.neutral900
    };
    transition-duration: 250ms;
    transition-property: background, color;
    padding: 20px 5%;

    color: ${props =>
        props.theme == "Light" && colors.neutral800
        ||
        props.theme == "Dark" && colors.neutral100
    };

    a {
        color: ${props =>
            props.theme == "Light" && colors.neutral800
            ||
            props.theme == "Dark" && colors.neutral100
        };
        transition-duration: 250ms;
        transition-property: color;
    }
`

export const Wrapper = styled.div`
    max-width: 1240px;
    margin: auto;

    display: flex;
    flex-direction: column;
    column-gap: 20px;

    & > div:first-child {
        flex: 0.45;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
            display: flex;
            flex-direction: column;
        }

        img {
            margin-bottom: 10px;
        }
    }
    & > div:last-child {
        flex: 0.55;

        @media (max-width: 767px) {
            img { display: none;}    
        }
    }
    
    @media (min-width: 768px) {
        flex-direction: row;

        & > div:first-child {
            img { display: none; }
        }
    }
`

export const Title = styled.h2`
    font-family: "Inter", sans-serif;
    font-size: ${typography.title4.fontSize};
    font-weight: ${typography.title4.fontWeight.medium};
    text-transform: uppercase;

    margin-bottom: 10px;

    @media (min-width: 768px) {
        margin-bottom: 20px;
    }
`

export const Description = styled.p`
    font-family: "Inter", sans-serif;
    font-size: ${typography.paragraph1.fontSize};
    font-weight: ${typography.paragraph1.fontWeight.normal};
    line-height: ${typography.paragraph1.lineHeight};
`

export const Technologies = styled.p`
    font-family: "Inter", sans-serif;
    font-size: ${typography.paragraph2.fontSize};
    font-weight: ${typography.paragraph2.fontWeight.normal};
    line-height: ${typography.paragraph2.lineHeight};

    margin: 20px 0; 

    @media (min-width: 768px) { margin: 40px 0 20px 0; }
`

export const MoreAbout = styled.a`
    font-family: "Inter", sans-serif;
    font-size: ${typography.paragraph1.fontSize};
    font-weight: ${typography.paragraph1.fontWeight.strong};
    line-height: ${typography.paragraph1.lineHeight};
    text-decoration: underline;
`

export const Thumbnail = styled.img`
    
`

export const Separator = styled.hr<{theme?: string}>`
    max-width: 1240px;
    margin-top: 40px;
    height: 1.5px;
    border: none;

    background-color: ${props =>
        props.theme == "Light" && colors.neutral800
        ||
        props.theme == "Dark" && colors.neutral100
    };
    transition-duration: 250ms;
    transition-property: background;
`