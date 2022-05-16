import styled from "styled-components";
import colors from "@styles/colors.json";
import typography from "@styles/typography.json";

export const Container = styled.section`
padding: 60px 5% 0 5%;
    min-height: calc(100vh - 60px);
    display: flex;
    @media (min-width: 768px) {
        padding: 110px 5% 0 5%;
        min-height: calc(100vh - 110px);
    }

    
    `

export const Background = styled.div<{theme?: string}>`

    background-size: cover;
    position: absolute;
    left: 0;
    z-index:-1;
    margin-top: -20px;
    height: calc(100% + 20px);
    width: 100%;
    svg {
        width: 100%;
        height: 100%;
        transition-duration: .250ms;
        transition-property: fill, stroke;
        opacity: 0.15;
    }
    
    rect, path {
        transition-duration: .250ms;
        transition-property: fill, stroke;
    }
    background-color: ${props =>
        props.theme == "Light" && colors.neutral100
        ||
        props.theme == "Dark" && colors.neutral900
    };
    transition-duration: 250ms;
    transition-property: background;
    `

export const Wrapper = styled.div<{theme?: string}>`
    display: flex;
    align-items: center;
    height: 100%;
    column-gap: 20px;
    max-width: 1240px;
    margin: auto;
    justify-content: space-between;
    
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
    
    & > div {
        transition-duration: 250ms;
        transition-property: color;
    }

    & > div:first-child {
        font-family: "DM Sans", sans-serif;
        font-size: ${typography.display2.fontSize};
        font-weight: ${typography.display2.fontWeight.medium};
        line-height: ${typography.display2.lineHeight};
        flex: 1;
        text-align: center;
        margin-bottom: 30px;
        color: ${props =>
            props.theme == "Light" && colors.neutral900
            ||
            props.theme == "Dark" && colors.neutral100
        };

        @media (min-width: 768px) { 
            flex: 0.35;
            text-align: left;
            margin-bottom: 150px;
        }
    }

    & > div:last-child {
        font-family: "DM Sans", sans-serif;
        font-size: ${typography.title3.fontSize};
        font-weight: ${typography.title3.fontWeight.normal};
        flex: 1;
        text-align: center;
        color: ${props =>
            props.theme == "Light" && colors.neutral800
            ||
            props.theme == "Dark" && colors.neutral100
        };
        @media (min-width: 768px) { 
            flex: 0.6;
            text-align: right;
        }
    }
`