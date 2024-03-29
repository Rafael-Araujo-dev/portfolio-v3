import styled from "styled-components";
import colors from "@styles/colors.json";
import typography from "@styles/typography.json";

export const Container = styled.section<{theme?: string}>`
    background-color: ${props =>
        props.theme == "Light" && colors.neutral200
        ||
        props.theme == "Dark" && colors.neutral850
    };
    transition-duration: 250ms;
    transition-property: background, color;
    padding: 20px 5%;
    color: ${props =>
        props.theme == "Light" && colors.neutral800
        ||
        props.theme == "Dark" && colors.neutral100
    };
    
    padding: 40px 5% 20px 5%;
    & > section { padding: 20px 0 10px 0; }
    @media (min-width: 768px) {
        padding: 110px 5% 110px 5%;
        & > section { padding: 20px 0 10px 0; }
    }

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

        span {
            margin-bottom: 10px !important;
            max-width: 100% !important;
            max-height: 230px !important;
        }
    }
    & > div:last-child {
        flex: 0.55;

        @media (max-width: 767px) {
            span { 
                display: none !important; 
            }    
        }
        
        span {
            max-height: 364px !important;
         }
    }
    
    @media (min-width: 768px) {
        flex-direction: row;

        & > div:first-child {
            span { 
                display: none !important; 
            }
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

export const Technologies = styled.ul`
    font-family: "Inter", sans-serif;
    font-size: ${typography.paragraph2.fontSize};
    font-weight: ${typography.paragraph2.fontWeight.normal};
    line-height: 1.7rem;
    margin: 20px 0; 
    list-style: disc;
    p {
        font-size: ${typography.paragraph1.fontSize};
        font-weight: ${typography.paragraph1.fontWeight.medium};
        line-height: 2rem;
    }
    li {
        margin-left: 30px;
        a:hover {
            text-decoration: underline;
        }
    }
    @media (min-width: 768px) { margin: 40px 0 20px 0; }

`

export const Links = styled.div`
    font-family: "Inter", sans-serif;
    font-size: ${typography.paragraph1.fontSize};
    font-weight: ${typography.paragraph1.fontWeight.strong};
    text-decoration: underline;
    display: flex;
    flex-direction: row !important;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 10px;
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