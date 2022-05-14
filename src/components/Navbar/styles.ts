import styled, { keyframes } from "styled-components";
import typography from "@styles/typography.json";
import colors from "@styles/colors.json";

export const Container = styled.nav<{theme?: string}>`
    padding: 0 5%;
    border-bottom: 1px rgba(0,0,0,0.2) solid;
    box-shadow: 0px 0px 10px -5px #000000;
    position: fixed;
    width: 90%;
    background-color: ${props =>
        props.theme == "Light" && colors.neutral100
        ||
        props.theme == "Dark" && colors.neutral900
    };
    transition-duration: 250ms;
    transition-property: background;
`

const LogoAnimation = keyframes`
    0% {
            content: 'ra.';
        }
        10% {
            content: 'ra.';
        }
        11% {
            content: 'ra';
        }
        12% {
            content: 'r';
        }
        13% {
            content: '';
        }
        14% {
            content: 'R';
        }
        15% {
            content: 'Ra';
        }
        16% {
            content: 'Raf';
        }
        17% {
            content: 'Rafa';
        }
        18% {
            content: 'Rafae';
        }
        19% {
            content: 'Rafael';
        }
        29% {
            content: 'Rafael';
        }
        30% {
            content: 'Rafae';
        }
        31% {
            content: 'Rafa';
        }
        32% {
            content: 'Raf';
        }
        33% {
            content: 'Ra';
        }
        34% {
            content: 'R';
        }
        35% {
            content: '';
        }
        36% {
            content: 'A';
        }
        37% {
            content: 'Ar';
        }
        38% {
            content: 'Ara';
        }
        39% {
            content: 'Arau';
        }
        40% {
            content: 'Arauj';
        }
        41% {
            content: 'Araujo';
        }
        51% {
            content: 'Araujo';
        }
        52% {
            content: 'Arauj';
        }
        53% {
            content: 'Arau';
        }
        54% {
            content: 'Ara';
        }
        55% {
            content: 'Ar';
        }
        56% {
            content: 'A';
        }
        57% {
            content: '';
        }
        58% {
            content: 'r';
        }
        59% {
            content: 'ra';
        }
        60% {
            content: 'ra.';
        }
`

const CursorAnimation = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

export const Logo = styled.div<{theme?: string}>`
    font-family: "Inter", sans-serif;
    font-size: ${typography.title3.fontSize};
    font-weight: ${typography.title3.fontWeight.medium};
    color: ${props =>
        props.theme == "Light" && colors.neutral900
        ||
        props.theme == "Dark" && colors.neutral100
    };
    transition-duration: 250ms;
    transition-property: color;
    line-height: ${typography.title3.lineHeight};
    &:before {
        animation: ${LogoAnimation} 10s ease infinite;
        content: 'ra.';
    }
    &:after {
        content: '|';
        font-weight: 400;
        font-size: ${typography.title4.fontSize};
        animation: ${CursorAnimation} .5s ease-in-out infinite alternate;
    }
`

export const Desk = styled.div<{theme?: string}>`
    @media (max-width: 767px) {
        display: none;
    }
    max-width: 1240px;
    margin: auto;
    padding: 0 0 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
        font-family: "DM Sans", sans-serif;
        display: flex;
        column-gap: 30px;
        font-size: ${typography.title5.fontSize};
        font-weight: ${typography.title5.fontWeight.medium};
        line-height: ${typography.title5.lineHeight};

        li, a {
            cursor: pointer;
            color: ${props =>
                props.theme == "Light" && colors.neutral900
                ||
                props.theme == "Dark" && colors.neutral100
            };
            border-bottom: 2px solid transparent;
            transition-property: color, border;
            transition-duration: 250ms;
        }

        li:hover {
            border-bottom: 2px solid ${props =>
                props.theme == "Light" && colors.neutral900
                ||
                props.theme == "Dark" && colors.neutral100
            };
        }
    }
`

export const Mobile = styled.div`
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) {
        display: none;
    }
`

export const NavToggle = styled.div<{theme?: string}>`  
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: fixed;
    right: 20px;
    transform: translateY(10px);
    z-index: 100;
    & span:after,
    & span:before {
        content: "";
        position: absolute;
        left: 0;
        top: -9px;
    }
    & span:after{
        top: 9px;
    }
    & span {
        position: relative;
        display: block;
        top: 15px;
        
    }
    & span,
    & span:after,
    & span:before {
        width: 100%;
        height: 3px;
        background-color: ${props =>
            props.theme == "Light" && colors.neutral900
            ||
            props.theme == "Dark" && colors.neutral100
        };
        transition: all 0.3s;
        backface-visibility: hidden;
        border-radius: 2px;
    }
    &.on span {
        background-color: transparent;
        transform: translateY(0);
    }
    &.on span:before {
        transform: rotate(45deg) translate(7px, 6px);
    }
    &.on span:after {
        transform: rotate(-45deg) translate(6px, -6px);
    }
    &.on + #menu {
        opacity: 1;
        visibility: visible;
    }
    @media (min-width: 769px) {
        display: none;
    }
`

export const NavContainer = styled.div<{theme?: string}>`
    position: fixed;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 99;
    transition-property: opacity;
    transition-duration: 200ms;
    &.off {
        z-index: -1;
        opacity: 0;
        ul {
            transform: translateX(100%);
        }
    }
    &.on {
        z-index: 99;
        opacity: 1;

        ul {
            transform: translateX(0%);
        }
    }
    span {
        position: fixed;
        background-color: red;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.25);
    }

    ul {
        z-index: 100;
        background-color: ${props =>
            props.theme == "Light" && colors.neutral100
            ||
            props.theme == "Dark" && colors.neutral900
        };
        display: flex;
        flex-direction: column;
        position: fixed;
        right: 0;
        padding: 80px 20px 40px 40px;
        text-align: right;
        display: flex;
        row-gap: 30px;
        height: 100%;
        max-height: calc(100vh - 120px);
        overflow: auto;
        transition-property: transform, background;
        transition-duration: 250ms;
        li, a {
            color: ${props =>
                props.theme == "Light" && colors.neutral900
                ||
                props.theme == "Dark" && colors.neutral100
            };
            transition-property: color;
            transition-duration: 250ms;
            font-size: ${typography.title3.fontSize};
        }
        li:hover {
            text-decoration: underline;
        }
    }
`

export const Controller = styled.div<{theme?: string}>`
    @media (max-width: 768px) { display: none; }
    max-width: 1240px;
    margin: auto;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    column-gap: 20px;
    margin-top: 10px;
    color: ${props =>
        props.theme == "Light" && colors.neutral900
        ||
        props.theme == "Dark" && colors.neutral100
    };
    transition-duration: 250ms;
    transition-property: color;
    button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 4px 12px;
        border-radius: 40px;
        background: none;
        border: none;
        color: ${props =>
            props.theme == "Light" && colors.neutral900
            ||
            props.theme == "Dark" && colors.neutral100
        };
        cursor: pointer;
        font-family: "Inter", sans-serif;
        font-size: ${typography.captions.fontSize};
        font-weight: ${typography.captions.fontWeight.strong};
        transition-duration: 250ms;
        transition-property: background, color;
    }

    button:hover {
        background-color: ${props =>
            props.theme == "Light" && colors.neutral300
            ||
            props.theme == "Dark" && colors.neutral800
        };
    }
`