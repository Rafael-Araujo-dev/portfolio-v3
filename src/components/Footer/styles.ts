import styled from "styled-components";
import colors from "@styles/colors.json";
import typography from "@styles/typography.json";

export const Container = styled.footer<{theme?: string}>`
    padding: 40px 5%;
    background-color: ${props =>
        props.theme == "Light" && colors.neutral100
        ||
        props.theme == "Dark" && colors.neutral900
    };
    transition-duration: 250ms;
    transition-property: background;

    div {
        max-width: 1240px;
        margin: auto;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: 20px;
        @media (min-width: 768px) {
            flex-direction: row;
            justify-content: space-between;
        }
    }

    span {
        font-family: "DM Sans", sans-serif;
        font-size: ${typography.title5.fontSize};
        font-weight: ${typography.title5.fontWeight.medium};
        line-height: ${typography.title5.lineHeight};
        color: ${props =>
            props.theme == "Light" && colors.secondary800
            ||
            props.theme == "Dark" && colors.neutral100
        };
        transition-property: color;
        transition-duration: 250ms;
    }

    ul, ul a {
        font-family: "DM Sans", sans-serif;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 20px;
        font-size: ${typography.title5.fontSize};
        font-weight: ${typography.title5.fontWeight.medium};
        line-height: ${typography.title5.lineHeight};
        color: ${props =>
            props.theme == "Light" && colors.neutral900
            ||
            props.theme == "Dark" && colors.neutral100
        };
        transition-property: color;
        transition-duration: 250ms;
        cursor: pointer;
        
    }
    ul li:hover, ul a:hover {
        text-decoration: underline;
    }
`
