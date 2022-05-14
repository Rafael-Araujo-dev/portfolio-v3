import styled, { keyframes } from "styled-components";
import typography from "@styles/typography.json";

export const Container = styled.nav`

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

export const Logo = styled.div`
    font-family: "Inter", sans-serif;
    font-size: ${typography.title3.fontSize};
    font-weight: 500;
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