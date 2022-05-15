import styled from "styled-components";
import colors from "@styles/colors.json";
import typography from "@styles/typography.json";

export const Container = styled.footer<{theme?: string}>`
    padding: 0 5%;
    background-color: ${props =>
        props.theme == "Light" && colors.neutral100
        ||
        props.theme == "Dark" && colors.neutral900
    };
    transition-duration: 250ms;
    transition-property: background;
`
