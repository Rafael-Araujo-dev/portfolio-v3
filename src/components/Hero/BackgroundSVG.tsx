import type { NextPage } from "next";
import { useThemeState } from "@context/theme";

import styled from "styled-components";
import colors from "@styles/colors.json";

const Desk = styled.svg`
  @media (max-width: 767px) {
    display: none;
  }
`;

const Mobile = styled.svg`
  @media (min-width: 768px) {
    display: none;
  }
`;

const BackgroundSVG: NextPage = () => {
  const [theme, setTheme] = useThemeState();

  return (
    <>
      <Desk
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="1920"
        height="1080"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
      >
        <g mask='url("#SvgjsMask1016")' fill="none">
          <rect
            width="1920"
            height="1080"
            x="0"
            y="0"
            // fill={theme == "Light" ? "red" : "blue"}
          ></rect>
          <path
            d="M-103.18 701.02L-103.18 701.02"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-103.18 701.02L-86.67 852.2"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-103.18 701.02L75.58 697.41"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-103.18 701.02L64.79 809.72"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-103.18 701.02L-110.5 976.77"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-86.67 852.2L-86.67 852.2"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-86.67 852.2L-110.5 976.77"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-86.67 852.2L64.79 809.72"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-86.67 852.2L70.18 984.59"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-110.5 976.77L-110.5 976.77"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-110.5 976.77L-59.76 1104.75"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-110.5 976.77L70.18 984.59"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-110.5 976.77L64.79 809.72"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-59.76 1104.75L-59.76 1104.75"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-59.76 1104.75L76.92 1149.93"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-82.79 1293.88L-82.79 1293.88"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-82.79 1293.88L89.14 1247.61"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-82.79 1293.88L-59.76 1104.75"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-82.79 1293.88L76.92 1149.93"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-82.79 1293.88L192.54 1150.04"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-82.79 1293.88L-110.5 976.77"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M75.58 697.41L75.58 697.41"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M75.58 697.41L64.79 809.72"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M75.58 697.41L236.53 661.8"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M64.79 809.72L64.79 809.72"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M64.79 809.72L189.99 861.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M64.79 809.72L70.18 984.59"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M70.18 984.59L70.18 984.59"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M70.18 984.59L76.92 1149.93"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M70.18 984.59L189.99 861.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M76.92 1149.93L76.92 1149.93"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M76.92 1149.93L89.14 1247.61"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M76.92 1149.93L192.54 1150.04"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M89.14 1247.61L89.14 1247.61"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M89.14 1247.61L192.54 1150.04"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M89.14 1247.61L241.72 1266.34"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M236.53 661.8L236.53 661.8"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M236.53 661.8L364.17 656.29"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M189.99 861.21L189.99 861.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M189.99 861.21L251.57 971.1"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M189.99 861.21L75.58 697.41"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M189.99 861.21L236.53 661.8"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M189.99 861.21L409.12 993"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M251.57 971.1L251.57 971.1"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M251.57 971.1L409.12 993"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M251.57 971.1L70.18 984.59"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M251.57 971.1L192.54 1150.04"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M251.57 971.1L390.75 1150.51"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M192.54 1150.04L192.54 1150.04"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M192.54 1150.04L241.72 1266.34"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M241.72 1266.34L241.72 1266.34"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M241.72 1266.34L395.14 1273.17"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M241.72 1266.34L390.75 1150.51"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M241.72 1266.34L76.92 1149.93"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M364.17 656.29L364.17 656.29"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M364.17 656.29L507.42 681.25"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M364.17 656.29L526.57 829.2"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M364.17 656.29L189.99 861.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M409.12 993L409.12 993"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M409.12 993L390.75 1150.51"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M409.12 993L542.99 1091.54"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M409.12 993L526.57 829.2"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M390.75 1150.51L390.75 1150.51"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M390.75 1150.51L395.14 1273.17"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M395.14 1273.17L395.14 1273.17"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M395.14 1273.17L529.02 1289.98"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M395.14 1273.17L542.99 1091.54"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M507.42 681.25L507.42 681.25"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M507.42 681.25L526.57 829.2"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M507.42 681.25L682.73 680.4"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M507.42 681.25L641.71 555.98"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M507.42 681.25L673.22 861.27"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M526.57 829.2L526.57 829.2"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M526.57 829.2L673.22 861.27"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M526.57 829.2L682.73 680.4"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M542.99 1091.54L542.99 1091.54"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M542.99 1091.54L672.66 1109.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M542.99 1091.54L390.75 1150.51"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M542.99 1091.54L529.02 1289.98"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M529.02 1289.98L529.02 1289.98"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M529.02 1289.98L652.97 1303.39"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M529.02 1289.98L390.75 1150.51"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M529.02 1289.98L672.66 1109.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M529.02 1289.98L241.72 1266.34"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M641.71 555.98L641.71 555.98"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M641.71 555.98L682.73 680.4"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M641.71 555.98L802.16 505.98"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M641.71 555.98L812.87 642.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M682.73 680.4L682.73 680.4"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M682.73 680.4L812.87 642.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M682.73 680.4L673.22 861.27"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M682.73 680.4L834.02 820.7"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M673.22 861.27L673.22 861.27"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M673.22 861.27L834.02 820.7"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M673.22 861.27L847.99 940.51"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M672.66 1109.57L672.66 1109.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M672.66 1109.57L814.1 1156.25"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M672.66 1109.57L652.97 1303.39"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M652.97 1303.39L652.97 1303.39"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M802.16 505.98L802.16 505.98"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M802.16 505.98L812.87 642.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M802.16 505.98L953.33 521.27"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M802.16 505.98L962.01 410.77"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M802.16 505.98L682.73 680.4"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M812.87 642.21L812.87 642.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M812.87 642.21L968.99 639.69"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M812.87 642.21L834.02 820.7"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M812.87 642.21L953.33 521.27"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M834.02 820.7L834.02 820.7"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M834.02 820.7L847.99 940.51"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M834.02 820.7L993.38 853.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M847.99 940.51L847.99 940.51"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M847.99 940.51L1005.61 975.97"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M847.99 940.51L993.38 853.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M814.1 1156.25L814.1 1156.25"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M814.1 1156.25L835.67 1248.81"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M814.1 1156.25L652.97 1303.39"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M835.67 1248.81L835.67 1248.81"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M835.67 1248.81L981.39 1307.01"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M835.67 1248.81L652.97 1303.39"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M835.67 1248.81L672.66 1109.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M962.01 410.77L962.01 410.77"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M962.01 410.77L953.33 521.27"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M962.01 410.77L1103.37 349.18"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M962.01 410.77L1107.02 541.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M962.01 410.77L968.99 639.69"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M953.33 521.27L953.33 521.27"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M953.33 521.27L968.99 639.69"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M953.33 521.27L1107.02 541.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M953.33 521.27L1098.86 692.19"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M968.99 639.69L968.99 639.69"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M968.99 639.69L1098.86 692.19"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M968.99 639.69L1107.02 541.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M993.38 853.45L993.38 853.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M993.38 853.45L1005.61 975.97"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M993.38 853.45L1124.93 799.83"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1005.61 975.97L1005.61 975.97"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1005.61 975.97L1155.7 940.44"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1005.61 975.97L1089.15 1109.52"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M981.39 1307.01L981.39 1307.01"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M981.39 1307.01L1104.28 1280"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M981.39 1307.01L1089.15 1109.52"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1103.37 349.18L1103.37 349.18"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1103.37 349.18L1107.02 541.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1103.37 349.18L1303.04 403.71"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1103.37 349.18L1259.64 490.09"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1107.02 541.57L1107.02 541.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1107.02 541.57L1098.86 692.19"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1107.02 541.57L1259.64 490.09"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1098.86 692.19L1098.86 692.19"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1098.86 692.19L1124.93 799.83"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1098.86 692.19L993.38 853.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1124.93 799.83L1124.93 799.83"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1124.93 799.83L1155.7 940.44"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1124.93 799.83L1283.09 812.05"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1124.93 799.83L1292.38 702.58"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1155.7 940.44L1155.7 940.44"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1155.7 940.44L1289.77 1006.1"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1155.7 940.44L1283.09 812.05"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1089.15 1109.52L1089.15 1109.52"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1089.15 1109.52L1104.28 1280"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1089.15 1109.52L1155.7 940.44"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1089.15 1109.52L1289.57 1145.67"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1104.28 1280L1104.28 1280"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1104.28 1280L1257.05 1246.5"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1307.32 -79.14L1307.32 -79.14"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1307.32 -79.14L1412.48 -49.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1307.32 -79.14L1303.15 75.19"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1307.32 -79.14L1390.26 105.84"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1307.32 -79.14L1539.72 -106.32"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1307.32 -79.14L1278.63 204.37"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1307.32 -79.14L1559.14 97.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1303.15 75.19L1303.15 75.19"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1303.15 75.19L1390.26 105.84"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1303.15 75.19L1278.63 204.37"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1278.63 204.37L1278.63 204.37"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1278.63 204.37L1390.26 105.84"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1278.63 204.37L1449.55 212.62"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1278.63 204.37L1303.04 403.71"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1278.63 204.37L1433.57 370.33"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1303.04 403.71L1303.04 403.71"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1303.04 403.71L1259.64 490.09"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1259.64 490.09L1259.64 490.09"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1259.64 490.09L1435.19 510.9"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1292.38 702.58L1292.38 702.58"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1292.38 702.58L1389.42 693.08"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1292.38 702.58L1283.09 812.05"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1292.38 702.58L1431.83 802.35"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1283.09 812.05L1283.09 812.05"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1283.09 812.05L1431.83 802.35"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1283.09 812.05L1389.42 693.08"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1283.09 812.05L1289.77 1006.1"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1289.77 1006.1L1289.77 1006.1"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1289.77 1006.1L1403.45 996.98"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1289.77 1006.1L1289.57 1145.67"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1289.57 1145.67L1289.57 1145.67"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1289.57 1145.67L1257.05 1246.5"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1289.57 1145.67L1417.32 1161.58"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1289.57 1145.67L1403.45 996.98"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1289.57 1145.67L1462.16 1261.09"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1257.05 1246.5L1257.05 1246.5"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1257.05 1246.5L1417.32 1161.58"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1257.05 1246.5L1462.16 1261.09"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1257.05 1246.5L1089.15 1109.52"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1412.48 -49.57L1412.48 -49.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1412.48 -49.57L1539.72 -106.32"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1390.26 105.84L1390.26 105.84"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1390.26 105.84L1449.55 212.62"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1390.26 105.84L1412.48 -49.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1390.26 105.84L1559.14 97.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1449.55 212.62L1449.55 212.62"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1449.55 212.62L1586.03 240.2"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1449.55 212.62L1433.57 370.33"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1449.55 212.62L1559.14 97.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1433.57 370.33L1433.57 370.33"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1433.57 370.33L1303.04 403.71"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1433.57 370.33L1435.19 510.9"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1433.57 370.33L1605.09 395.81"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1435.19 510.9L1435.19 510.9"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1435.19 510.9L1571.1 521.04"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1435.19 510.9L1303.04 403.71"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1389.42 693.08L1389.42 693.08"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1389.42 693.08L1431.83 802.35"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1389.42 693.08L1568.88 710.63"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1389.42 693.08L1435.19 510.9"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1431.83 802.35L1431.83 802.35"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1431.83 802.35L1566.61 856.58"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1431.83 802.35L1568.88 710.63"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1403.45 996.98L1403.45 996.98"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1403.45 996.98L1417.32 1161.58"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1403.45 996.98L1431.83 802.35"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1417.32 1161.58L1417.32 1161.58"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1417.32 1161.58L1462.16 1261.09"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1417.32 1161.58L1576.8 1137.37"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1462.16 1261.09L1462.16 1261.09"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1462.16 1261.09L1580.63 1291.95"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1462.16 1261.09L1576.8 1137.37"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1462.16 1261.09L1403.45 996.98"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1539.72 -106.32L1539.72 -106.32"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1539.72 -106.32L1724.86 -104.75"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1539.72 -106.32L1559.14 97.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1539.72 -106.32L1716.63 40.76"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1539.72 -106.32L1390.26 105.84"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1559.14 97.21L1559.14 97.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1559.14 97.21L1586.03 240.2"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1559.14 97.21L1716.63 40.76"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1586.03 240.2L1586.03 240.2"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1586.03 240.2L1605.09 395.81"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1605.09 395.81L1605.09 395.81"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1605.09 395.81L1697.34 392.64"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1605.09 395.81L1571.1 521.04"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1571.1 521.04L1571.1 521.04"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1571.1 521.04L1715.48 541.52"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1568.88 710.63L1568.88 710.63"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1568.88 710.63L1566.61 856.58"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1568.88 710.63L1735.1 647.79"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1566.61 856.58L1566.61 856.58"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1566.61 856.58L1760.58 821.04"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1566.61 856.58L1717.29 998.5"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1566.61 856.58L1403.45 996.98"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1576.8 1137.37L1576.8 1137.37"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1576.8 1137.37L1730.06 1122.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1576.8 1137.37L1580.63 1291.95"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1580.63 1291.95L1580.63 1291.95"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1724.86 -104.75L1724.86 -104.75"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1724.86 -104.75L1716.63 40.76"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1724.86 -104.75L1894.99 -41.78"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1716.63 40.76L1716.63 40.76"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1697.34 392.64L1697.34 392.64"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1697.34 392.64L1837.72 374.16"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1697.34 392.64L1715.48 541.52"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1697.34 392.64L1571.1 521.04"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1715.48 541.52L1715.48 541.52"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1715.48 541.52L1735.1 647.79"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1715.48 541.52L1874.49 515.87"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1715.48 541.52L1605.09 395.81"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1735.1 647.79L1735.1 647.79"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1735.1 647.79L1894.93 683.7"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1760.58 821.04L1760.58 821.04"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1760.58 821.04L1867.22 846.87"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1760.58 821.04L1735.1 647.79"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1760.58 821.04L1717.29 998.5"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1760.58 821.04L1894.93 683.7"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1760.58 821.04L1863.51 1007.3"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1717.29 998.5L1717.29 998.5"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1717.29 998.5L1730.06 1122.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1717.29 998.5L1863.51 1007.3"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1717.29 998.5L1576.8 1137.37"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1730.06 1122.57L1730.06 1122.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1759.39 1256.16L1759.39 1256.16"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1759.39 1256.16L1730.06 1122.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1759.39 1256.16L1907.02 1238.75"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1759.39 1256.16L1580.63 1291.95"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1759.39 1256.16L1889.11 1115.02"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1759.39 1256.16L1576.8 1137.37"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1894.99 -41.78L1894.99 -41.78"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1894.99 -41.78L1893.53 93.95"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1894.99 -41.78L2026.15 -87.34"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1893.53 93.95L1893.53 93.95"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1893.53 93.95L2009.71 62.48"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1893.53 93.95L1846.25 247.47"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1893.53 93.95L1716.63 40.76"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1846.25 247.47L1846.25 247.47"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1846.25 247.47L1837.72 374.16"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1846.25 247.47L2047.92 231.67"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1846.25 247.47L1697.34 392.64"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1846.25 247.47L1716.63 40.76"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1837.72 374.16L1837.72 374.16"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1837.72 374.16L1874.49 515.87"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1837.72 374.16L2034.47 403.5"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1837.72 374.16L1715.48 541.52"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1837.72 374.16L2011.51 490.39"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1874.49 515.87L1874.49 515.87"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1874.49 515.87L2011.51 490.39"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1874.49 515.87L1894.93 683.7"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1874.49 515.87L1735.1 647.79"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1894.93 683.7L1894.93 683.7"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1894.93 683.7L1867.22 846.87"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1894.93 683.7L2061.01 662.68"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1894.93 683.7L2019.67 798.73"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1867.22 846.87L1867.22 846.87"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1867.22 846.87L2019.67 798.73"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1867.22 846.87L1863.51 1007.3"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1863.51 1007.3L1863.51 1007.3"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1863.51 1007.3L1889.11 1115.02"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1863.51 1007.3L2030.49 1002.76"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1863.51 1007.3L1730.06 1122.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1889.11 1115.02L1889.11 1115.02"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1889.11 1115.02L1907.02 1238.75"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1889.11 1115.02L1730.06 1122.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1907.02 1238.75L1907.02 1238.75"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1907.02 1238.75L2049.98 1260.71"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M1907.02 1238.75L2059.48 1124.26"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2026.15 -87.34L2026.15 -87.34"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2026.15 -87.34L2009.71 62.48"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2026.15 -87.34L1893.53 93.95"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2009.71 62.48L2009.71 62.48"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2047.92 231.67L2047.92 231.67"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2047.92 231.67L2034.47 403.5"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2047.92 231.67L2009.71 62.48"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2034.47 403.5L2034.47 403.5"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2034.47 403.5L2011.51 490.39"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2034.47 403.5L1874.49 515.87"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2011.51 490.39L2011.51 490.39"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2011.51 490.39L2061.01 662.68"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2011.51 490.39L1894.93 683.7"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2011.51 490.39L2047.92 231.67"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2061.01 662.68L2061.01 662.68"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2061.01 662.68L2019.67 798.73"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2061.01 662.68L1874.49 515.87"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2061.01 662.68L2034.47 403.5"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2019.67 798.73L2019.67 798.73"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2019.67 798.73L2030.49 1002.76"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2019.67 798.73L1760.58 821.04"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2030.49 1002.76L2030.49 1002.76"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2030.49 1002.76L2059.48 1124.26"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2059.48 1124.26L2059.48 1124.26"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2059.48 1124.26L2049.98 1260.71"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M2049.98 1260.71L2049.98 1260.71"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <circle r="5" cx="-103.18" cy="701.02" fill="transparent"></circle>
          <circle r="5" cx="-86.67" cy="852.2" fill="transparent"></circle>
          <circle r="5" cx="-110.5" cy="976.77" fill="transparent"></circle>
          <circle r="5" cx="-59.76" cy="1104.75" fill="transparent"></circle>
          <circle r="5" cx="-82.79" cy="1293.88" fill="transparent"></circle>
          <circle r="5" cx="75.58" cy="697.41" fill="transparent"></circle>
          <circle r="5" cx="64.79" cy="809.72" fill="transparent"></circle>
          <circle r="5" cx="70.18" cy="984.59" fill="transparent"></circle>
          <circle r="5" cx="76.92" cy="1149.93" fill="transparent"></circle>
          <circle r="5" cx="89.14" cy="1247.61" fill="transparent"></circle>
          <circle r="5" cx="236.53" cy="661.8" fill="transparent"></circle>
          <circle r="5" cx="189.99" cy="861.21" fill="transparent"></circle>
          <circle r="5" cx="251.57" cy="971.1" fill="transparent"></circle>
          <circle r="5" cx="192.54" cy="1150.04" fill="transparent"></circle>
          <circle r="5" cx="241.72" cy="1266.34" fill="transparent"></circle>
          <circle r="5" cx="364.17" cy="656.29" fill="transparent"></circle>
          <circle r="5" cx="409.12" cy="993" fill="transparent"></circle>
          <circle r="5" cx="390.75" cy="1150.51" fill="transparent"></circle>
          <circle r="5" cx="395.14" cy="1273.17" fill="transparent"></circle>
          <circle r="5" cx="507.42" cy="681.25" fill="transparent"></circle>
          <circle r="5" cx="526.57" cy="829.2" fill="transparent"></circle>
          <circle r="5" cx="542.99" cy="1091.54" fill="transparent"></circle>
          <circle r="5" cx="529.02" cy="1289.98" fill="transparent"></circle>
          <circle r="5" cx="641.71" cy="555.98" fill="transparent"></circle>
          <circle r="5" cx="682.73" cy="680.4" fill="transparent"></circle>
          <circle r="5" cx="673.22" cy="861.27" fill="transparent"></circle>
          <circle r="5" cx="672.66" cy="1109.57" fill="transparent"></circle>
          <circle r="5" cx="652.97" cy="1303.39" fill="transparent"></circle>
          <circle r="5" cx="802.16" cy="505.98" fill="transparent"></circle>
          <circle r="5" cx="812.87" cy="642.21" fill="transparent"></circle>
          <circle r="5" cx="834.02" cy="820.7" fill="transparent"></circle>
          <circle r="5" cx="847.99" cy="940.51" fill="transparent"></circle>
          <circle r="5" cx="814.1" cy="1156.25" fill="transparent"></circle>
          <circle r="5" cx="835.67" cy="1248.81" fill="transparent"></circle>
          <circle r="5" cx="962.01" cy="410.77" fill="transparent"></circle>
          <circle r="5" cx="953.33" cy="521.27" fill="transparent"></circle>
          <circle r="5" cx="968.99" cy="639.69" fill="transparent"></circle>
          <circle r="5" cx="993.38" cy="853.45" fill="transparent"></circle>
          <circle r="5" cx="1005.61" cy="975.97" fill="transparent"></circle>
          <circle r="5" cx="981.39" cy="1307.01" fill="transparent"></circle>
          <circle r="5" cx="1103.37" cy="349.18" fill="transparent"></circle>
          <circle r="5" cx="1107.02" cy="541.57" fill="transparent"></circle>
          <circle r="5" cx="1098.86" cy="692.19" fill="transparent"></circle>
          <circle r="5" cx="1124.93" cy="799.83" fill="transparent"></circle>
          <circle r="5" cx="1155.7" cy="940.44" fill="transparent"></circle>
          <circle r="5" cx="1089.15" cy="1109.52" fill="transparent"></circle>
          <circle r="5" cx="1104.28" cy="1280" fill="transparent"></circle>
          <circle r="5" cx="1307.32" cy="-79.14" fill="transparent"></circle>
          <circle r="5" cx="1303.15" cy="75.19" fill="transparent"></circle>
          <circle r="5" cx="1278.63" cy="204.37" fill="transparent"></circle>
          <circle r="5" cx="1303.04" cy="403.71" fill="transparent"></circle>
          <circle r="5" cx="1259.64" cy="490.09" fill="transparent"></circle>
          <circle r="5" cx="1292.38" cy="702.58" fill="transparent"></circle>
          <circle r="5" cx="1283.09" cy="812.05" fill="transparent"></circle>
          <circle r="5" cx="1289.77" cy="1006.1" fill="transparent"></circle>
          <circle r="5" cx="1289.57" cy="1145.67" fill="transparent"></circle>
          <circle r="5" cx="1257.05" cy="1246.5" fill="transparent"></circle>
          <circle r="5" cx="1412.48" cy="-49.57" fill="transparent"></circle>
          <circle r="5" cx="1390.26" cy="105.84" fill="transparent"></circle>
          <circle r="5" cx="1449.55" cy="212.62" fill="transparent"></circle>
          <circle r="5" cx="1433.57" cy="370.33" fill="transparent"></circle>
          <circle r="5" cx="1435.19" cy="510.9" fill="transparent"></circle>
          <circle r="5" cx="1389.42" cy="693.08" fill="transparent"></circle>
          <circle r="5" cx="1431.83" cy="802.35" fill="transparent"></circle>
          <circle r="5" cx="1403.45" cy="996.98" fill="transparent"></circle>
          <circle r="5" cx="1417.32" cy="1161.58" fill="transparent"></circle>
          <circle r="5" cx="1462.16" cy="1261.09" fill="transparent"></circle>
          <circle r="5" cx="1539.72" cy="-106.32" fill="transparent"></circle>
          <circle r="5" cx="1559.14" cy="97.21" fill="transparent"></circle>
          <circle r="5" cx="1586.03" cy="240.2" fill="transparent"></circle>
          <circle r="5" cx="1605.09" cy="395.81" fill="transparent"></circle>
          <circle r="5" cx="1571.1" cy="521.04" fill="transparent"></circle>
          <circle r="5" cx="1568.88" cy="710.63" fill="transparent"></circle>
          <circle r="5" cx="1566.61" cy="856.58" fill="transparent"></circle>
          <circle r="5" cx="1576.8" cy="1137.37" fill="transparent"></circle>
          <circle r="5" cx="1580.63" cy="1291.95" fill="transparent"></circle>
          <circle r="5" cx="1724.86" cy="-104.75" fill="transparent"></circle>
          <circle r="5" cx="1716.63" cy="40.76" fill="transparent"></circle>
          <circle r="5" cx="1697.34" cy="392.64" fill="transparent"></circle>
          <circle r="5" cx="1715.48" cy="541.52" fill="transparent"></circle>
          <circle r="5" cx="1735.1" cy="647.79" fill="transparent"></circle>
          <circle r="5" cx="1760.58" cy="821.04" fill="transparent"></circle>
          <circle r="5" cx="1717.29" cy="998.5" fill="transparent"></circle>
          <circle r="5" cx="1730.06" cy="1122.57" fill="transparent"></circle>
          <circle r="5" cx="1759.39" cy="1256.16" fill="transparent"></circle>
          <circle r="5" cx="1894.99" cy="-41.78" fill="transparent"></circle>
          <circle r="5" cx="1893.53" cy="93.95" fill="transparent"></circle>
          <circle r="5" cx="1846.25" cy="247.47" fill="transparent"></circle>
          <circle r="5" cx="1837.72" cy="374.16" fill="transparent"></circle>
          <circle r="5" cx="1874.49" cy="515.87" fill="transparent"></circle>
          <circle r="5" cx="1894.93" cy="683.7" fill="transparent"></circle>
          <circle r="5" cx="1867.22" cy="846.87" fill="transparent"></circle>
          <circle r="5" cx="1863.51" cy="1007.3" fill="transparent"></circle>
          <circle r="5" cx="1889.11" cy="1115.02" fill="transparent"></circle>
          <circle r="5" cx="1907.02" cy="1238.75" fill="transparent"></circle>
          <circle r="5" cx="2026.15" cy="-87.34" fill="transparent"></circle>
          <circle r="5" cx="2009.71" cy="62.48" fill="transparent"></circle>
          <circle r="5" cx="2047.92" cy="231.67" fill="transparent"></circle>
          <circle r="5" cx="2034.47" cy="403.5" fill="transparent"></circle>
          <circle r="5" cx="2011.51" cy="490.39" fill="transparent"></circle>
          <circle r="5" cx="2061.01" cy="662.68" fill="transparent"></circle>
          <circle r="5" cx="2019.67" cy="798.73" fill="transparent"></circle>
          <circle r="5" cx="2030.49" cy="1002.76" fill="transparent"></circle>
          <circle r="5" cx="2059.48" cy="1124.26" fill="transparent"></circle>
          <circle r="5" cx="2049.98" cy="1260.71" fill="transparent"></circle>
          <path
            d="M-54.72 1103.68L-54.72 1103.68"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-54.72 1103.68L-38.49 989.97"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-54.72 1103.68L65.76 1138.76"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-54.72 1103.68L-57.67 1301.14"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-54.72 1103.68L62.46 1282.95"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-54.72 1103.68L262.33 1096.69"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-54.72 1103.68L210.03 1305.39"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M551.65 862.31L551.65 862.31"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M551.65 862.31L522.71 1001.43"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M551.65 862.31L709.14 799.23"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M551.65 862.31L705.11 1009.89"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M551.65 862.31L352.04 991.86"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M522.71 1001.43L522.71 1001.43"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M522.71 1001.43L519.48 1151.71"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M522.71 1001.43L352.04 991.86"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M522.71 1001.43L365.23 1092.48"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M519.48 1151.71L519.48 1151.71"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M519.48 1151.71L553.54 1248.01"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M519.48 1151.71L663.91 1125.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M519.48 1151.71L397.86 1252"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M519.48 1151.71L639.4 1260.77"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M519.48 1151.71L365.23 1092.48"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M553.54 1248.01L553.54 1248.01"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M553.54 1248.01L639.4 1260.77"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M553.54 1248.01L397.86 1252"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M553.54 1248.01L663.91 1125.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M553.54 1248.01L793.4 1259.93"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M553.54 1248.01L365.23 1092.48"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M984.71 815.8L984.71 815.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M984.71 815.8L968.57 956.7"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M984.71 815.8L1127.93 813.25"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M984.71 815.8L987.89 667.17"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M984.71 815.8L789.22 829.27"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M984.71 815.8L1152.44 692.82"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M977.67 1116.25L977.67 1116.25"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M977.67 1116.25L977.85 1261.53"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M977.67 1116.25L968.57 956.7"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M977.67 1116.25L797.85 1125.42"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M977.67 1116.25L1131.87 1004.81"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M977.67 1116.25L837.04 965.31"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1131.87 1004.81L1131.87 1004.81"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1131.87 1004.81L1260.34 1113.71"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1131.87 1004.81L968.57 956.7"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1131.87 1004.81L1302.83 943.54"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1131.87 1004.81L1127.93 813.25"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1393.35 382.48L1393.35 382.48"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1393.35 382.48L1389.29 497.96"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1393.35 382.48L1283.01 544.57"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1393.35 382.48L1592.15 340.23"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1393.35 382.48L1608.29 506.96"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1393.35 382.48L1584.8 223.51"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1571.38 45.14L1571.38 45.14"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1571.38 45.14L1582.73 -81.56"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1571.38 45.14L1725.07 72.33"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1571.38 45.14L1584.8 223.51"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1584.8 223.51L1584.8 223.51"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1584.8 223.51L1592.15 340.23"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1584.8 223.51L1735.09 258.07"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1727.76 804.29L1727.76 804.29"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1727.76 804.29L1841.08 798.37"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1727.76 804.29L1745.59 653.66"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1727.76 804.29L1580.86 848.73"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1727.76 804.29L1569.16 684.06"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1722.4 1296.17L1722.4 1296.17"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1722.4 1296.17L1848.98 1266.72"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1856.5 42.97L1856.5 42.97"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1856.5 42.97L1891.4 -64.29"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1856.5 42.97L1725.07 72.33"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1856.5 42.97L1709.4 -82.94"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1856.5 42.97L2043.06 104.41"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1862.76 255.88L1862.76 255.88"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1862.76 255.88L1735.09 258.07"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1862.76 255.88L1993.74 226.78"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1862.76 255.88L1862.4 394.18"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1862.76 255.88L2007.28 370.3"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1841.08 798.37L1841.08 798.37"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1841.08 798.37L1880.44 655.36"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1841.08 798.37L1745.59 653.66"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1841.08 798.37L2058.34 846.3"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1841.08 798.37L2022.19 952.57"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1891.87 1161.75L1891.87 1161.75"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1891.87 1161.75L1848.98 1266.72"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1891.87 1161.75L2049.39 1147.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1891.87 1161.75L1995.04 1297.04"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1891.87 1161.75L1735.18 1094"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1891.87 1161.75L1722.4 1296.17"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1891.87 1161.75L1714.22 1009.98"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2039.21 637.9L2039.21 637.9"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2039.21 637.9L2047.68 507.33"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2039.21 637.9L1880.44 655.36"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-38.49 989.97L-38.49 989.97"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-38.49 989.97L65.76 1138.76"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-38.49 989.97L252.58 944.6"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-38.49 989.97L62.46 1282.95"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-38.49 989.97L-57.67 1301.14"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-38.49 989.97L262.33 1096.69"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-57.67 1301.14L-57.67 1301.14"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-57.67 1301.14L62.46 1282.95"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-57.67 1301.14L65.76 1138.76"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-57.67 1301.14L210.03 1305.39"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-57.67 1301.14L262.33 1096.69"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M65.76 1138.76L65.76 1138.76"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M62.46 1282.95L62.46 1282.95"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M62.46 1282.95L65.76 1138.76"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M252.58 944.6L252.58 944.6"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M252.58 944.6L352.04 991.86"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M262.33 1096.69L262.33 1096.69"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M262.33 1096.69L365.23 1092.48"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M262.33 1096.69L352.04 991.86"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M262.33 1096.69L252.58 944.6"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M262.33 1096.69L65.76 1138.76"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M262.33 1096.69L397.86 1252"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M262.33 1096.69L210.03 1305.39"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M210.03 1305.39L210.03 1305.39"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M210.03 1305.39L62.46 1282.95"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M210.03 1305.39L397.86 1252"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M210.03 1305.39L65.76 1138.76"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M210.03 1305.39L365.23 1092.48"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M352.04 991.86L352.04 991.86"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M352.04 991.86L365.23 1092.48"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M352.04 991.86L519.48 1151.71"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M365.23 1092.48L365.23 1092.48"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M365.23 1092.48L397.86 1252"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M397.86 1252L397.86 1252"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M709.14 799.23L709.14 799.23"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M709.14 799.23L789.22 829.27"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M705.11 1009.89L705.11 1009.89"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M705.11 1009.89L663.91 1125.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M705.11 1009.89L837.04 965.31"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M705.11 1009.89L797.85 1125.42"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M705.11 1009.89L522.71 1001.43"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M705.11 1009.89L789.22 829.27"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M663.91 1125.8L663.91 1125.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M663.91 1125.8L797.85 1125.42"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M663.91 1125.8L639.4 1260.77"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M663.91 1125.8L793.4 1259.93"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M639.4 1260.77L639.4 1260.77"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M639.4 1260.77L793.4 1259.93"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M789.22 829.27L789.22 829.27"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M789.22 829.27L837.04 965.31"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M837.04 965.31L837.04 965.31"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M837.04 965.31L968.57 956.7"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M837.04 965.31L797.85 1125.42"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M797.85 1125.42L797.85 1125.42"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M797.85 1125.42L793.4 1259.93"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M793.4 1259.93L793.4 1259.93"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M793.4 1259.93L977.85 1261.53"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M987.89 667.17L987.89 667.17"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M968.57 956.7L968.57 956.7"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M968.57 956.7L1127.93 813.25"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M977.85 1261.53L977.85 1261.53"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M977.85 1261.53L1157.2 1258.42"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M977.85 1261.53L797.85 1125.42"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M977.85 1261.53L1131.87 1004.81"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M977.85 1261.53L968.57 956.7"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1152.44 692.82L1152.44 692.82"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1152.44 692.82L1127.93 813.25"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1152.44 692.82L1267.82 643.09"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1152.44 692.82L987.89 667.17"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1152.44 692.82L1253.68 848"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1127.93 813.25L1127.93 813.25"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1127.93 813.25L1253.68 848"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1157.2 1258.42L1157.2 1258.42"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1157.2 1258.42L1310.85 1311.54"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1157.2 1258.42L1260.34 1113.71"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1283.01 544.57L1283.01 544.57"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1283.01 544.57L1267.82 643.09"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1267.82 643.09L1267.82 643.09"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1253.68 848L1253.68 848"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1253.68 848L1302.83 943.54"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1253.68 848L1416.68 835.84"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1253.68 848L1131.87 1004.81"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1302.83 943.54L1302.83 943.54"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1302.83 943.54L1418.04 970.85"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1302.83 943.54L1416.68 835.84"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1260.34 1113.71L1260.34 1113.71"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1310.85 1311.54L1310.85 1311.54"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1310.85 1311.54L1409.67 1242.98"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1389.29 497.96L1389.29 497.96"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1389.29 497.96L1283.01 544.57"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1389.29 497.96L1267.82 643.09"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1389.29 497.96L1442.64 688.46"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1389.29 497.96L1608.29 506.96"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1389.29 497.96L1592.15 340.23"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1442.64 688.46L1442.64 688.46"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1442.64 688.46L1569.16 684.06"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1442.64 688.46L1416.68 835.84"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1442.64 688.46L1267.82 643.09"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1416.68 835.84L1416.68 835.84"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1416.68 835.84L1418.04 970.85"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1418.04 970.85L1418.04 970.85"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1418.04 970.85L1576.63 957.3"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1418.04 970.85L1580.86 848.73"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1418.04 970.85L1253.68 848"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1409.67 1242.98L1409.67 1242.98"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1409.67 1242.98L1546.3 1274.49"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1409.67 1242.98L1260.34 1113.71"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1409.67 1242.98L1583.71 1134.21"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1409.67 1242.98L1157.2 1258.42"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1582.73 -81.56L1582.73 -81.56"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1582.73 -81.56L1709.4 -82.94"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1582.73 -81.56L1725.07 72.33"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1582.73 -81.56L1856.5 42.97"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1582.73 -81.56L1584.8 223.51"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1592.15 340.23L1592.15 340.23"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1592.15 340.23L1704.27 358.9"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1592.15 340.23L1735.09 258.07"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1592.15 340.23L1608.29 506.96"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1608.29 506.96L1608.29 506.96"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1608.29 506.96L1761.62 539.54"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1608.29 506.96L1704.27 358.9"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1608.29 506.96L1569.16 684.06"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1608.29 506.96L1745.59 653.66"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1569.16 684.06L1569.16 684.06"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1569.16 684.06L1580.86 848.73"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1580.86 848.73L1580.86 848.73"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1580.86 848.73L1576.63 957.3"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1580.86 848.73L1416.68 835.84"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1580.86 848.73L1714.22 1009.98"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1576.63 957.3L1576.63 957.3"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1576.63 957.3L1714.22 1009.98"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1583.71 1134.21L1583.71 1134.21"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1583.71 1134.21L1546.3 1274.49"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1583.71 1134.21L1735.18 1094"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1583.71 1134.21L1576.63 957.3"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1546.3 1274.49L1546.3 1274.49"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1546.3 1274.49L1722.4 1296.17"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1546.3 1274.49L1310.85 1311.54"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1546.3 1274.49L1735.18 1094"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1546.3 1274.49L1848.98 1266.72"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1709.4 -82.94L1709.4 -82.94"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1709.4 -82.94L1725.07 72.33"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1709.4 -82.94L1891.4 -64.29"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1709.4 -82.94L1571.38 45.14"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1709.4 -82.94L2016.57 -83.38"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1725.07 72.33L1725.07 72.33"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1725.07 72.33L1735.09 258.07"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1725.07 72.33L1584.8 223.51"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1735.09 258.07L1735.09 258.07"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1735.09 258.07L1704.27 358.9"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1704.27 358.9L1704.27 358.9"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1704.27 358.9L1862.4 394.18"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1704.27 358.9L1584.8 223.51"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1704.27 358.9L1862.76 255.88"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1761.62 539.54L1761.62 539.54"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1761.62 539.54L1874.28 522.98"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1761.62 539.54L1745.59 653.66"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1761.62 539.54L1880.44 655.36"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1761.62 539.54L1862.4 394.18"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1745.59 653.66L1745.59 653.66"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1745.59 653.66L1880.44 655.36"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1714.22 1009.98L1714.22 1009.98"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1714.22 1009.98L1735.18 1094"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1714.22 1009.98L1583.71 1134.21"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1735.18 1094L1735.18 1094"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1735.18 1094L1722.4 1296.17"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1891.4 -64.29L1891.4 -64.29"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1891.4 -64.29L2016.57 -83.38"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1891.4 -64.29L1725.07 72.33"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1862.4 394.18L1862.4 394.18"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1862.4 394.18L1874.28 522.98"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1862.4 394.18L2007.28 370.3"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1874.28 522.98L1874.28 522.98"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1874.28 522.98L1880.44 655.36"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1880.44 655.36L1880.44 655.36"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1880.44 655.36L1727.76 804.29"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1848.98 1266.72L1848.98 1266.72"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2016.57 -83.38L2016.57 -83.38"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2016.57 -83.38L2043.06 104.41"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2016.57 -83.38L1856.5 42.97"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2016.57 -83.38L1993.74 226.78"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2016.57 -83.38L1725.07 72.33"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2043.06 104.41L2043.06 104.41"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2043.06 104.41L1993.74 226.78"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1993.74 226.78L1993.74 226.78"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1993.74 226.78L2007.28 370.3"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1993.74 226.78L1862.4 394.18"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2007.28 370.3L2007.28 370.3"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2007.28 370.3L2047.68 507.33"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2047.68 507.33L2047.68 507.33"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2047.68 507.33L1874.28 522.98"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2058.34 846.3L2058.34 846.3"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2058.34 846.3L2022.19 952.57"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2058.34 846.3L2039.21 637.9"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2058.34 846.3L1880.44 655.36"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2022.19 952.57L2022.19 952.57"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2022.19 952.57L2049.39 1147.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2049.39 1147.8L2049.39 1147.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2049.39 1147.8L1995.04 1297.04"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M2049.39 1147.8L1848.98 1266.72"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1995.04 1297.04L1995.04 1297.04"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1995.04 1297.04L1848.98 1266.72"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1995.04 1297.04L1722.4 1296.17"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1995.04 1297.04L1735.18 1094"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M1995.04 1297.04L2022.19 952.57"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <circle r="25" cx="-54.72" cy="1103.68"></circle>
          <circle r="25" cx="551.65" cy="862.31" fill="transparent"></circle>
          <circle r="25" cx="522.71" cy="1001.43" fill="transparent"></circle>
          <circle r="25" cx="519.48" cy="1151.71" fill="transparent"></circle>
          <circle r="25" cx="553.54" cy="1248.01" fill="transparent"></circle>
          <circle r="25" cx="984.71" cy="815.8" fill="transparent"></circle>
          <circle r="25" cx="977.67" cy="1116.25" fill="transparent"></circle>
          <circle r="25" cx="1131.87" cy="1004.81" fill="transparent"></circle>
          <circle r="25" cx="1393.35" cy="382.48" fill="transparent"></circle>
          <circle r="25" cx="1571.38" cy="45.14" fill="transparent"></circle>
          <circle r="25" cx="1584.8" cy="223.51" fill="transparent"></circle>
          <circle r="25" cx="1727.76" cy="804.29" fill="transparent"></circle>
          <circle r="25" cx="1722.4" cy="1296.17" fill="transparent"></circle>
          <circle r="25" cx="1856.5" cy="42.97" fill="transparent"></circle>
          <circle r="25" cx="1862.76" cy="255.88" fill="transparent"></circle>
          <circle r="25" cx="1841.08" cy="798.37" fill="transparent"></circle>
          <circle r="25" cx="1891.87" cy="1161.75" fill="transparent"></circle>
          <circle r="25" cx="2039.21" cy="637.9" fill="transparent"></circle>
          <circle
            r="5"
            cx="-38.49"
            cy="989.97"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="-57.67"
            cy="1301.14"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="65.76"
            cy="1138.76"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="62.46"
            cy="1282.95"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="252.58"
            cy="944.6"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="262.33"
            cy="1096.69"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="210.03"
            cy="1305.39"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="352.04"
            cy="991.86"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="365.23"
            cy="1092.48"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="397.86"
            cy="1252"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="709.14"
            cy="799.23"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="705.11"
            cy="1009.89"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="663.91"
            cy="1125.8"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="639.4"
            cy="1260.77"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="789.22"
            cy="829.27"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="837.04"
            cy="965.31"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="797.85"
            cy="1125.42"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="793.4"
            cy="1259.93"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="987.89"
            cy="667.17"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="968.57"
            cy="956.7"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="977.85"
            cy="1261.53"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1152.44"
            cy="692.82"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1127.93"
            cy="813.25"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1157.2"
            cy="1258.42"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1283.01"
            cy="544.57"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1267.82"
            cy="643.09"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1253.68"
            cy="848"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1302.83"
            cy="943.54"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1260.34"
            cy="1113.71"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1310.85"
            cy="1311.54"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1389.29"
            cy="497.96"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1442.64"
            cy="688.46"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1416.68"
            cy="835.84"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1418.04"
            cy="970.85"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1409.67"
            cy="1242.98"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1582.73"
            cy="-81.56"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1592.15"
            cy="340.23"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1608.29"
            cy="506.96"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1569.16"
            cy="684.06"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1580.86"
            cy="848.73"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1576.63"
            cy="957.3"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1583.71"
            cy="1134.21"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1546.3"
            cy="1274.49"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1709.4"
            cy="-82.94"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1725.07"
            cy="72.33"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1735.09"
            cy="258.07"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1704.27"
            cy="358.9"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1761.62"
            cy="539.54"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1745.59"
            cy="653.66"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1714.22"
            cy="1009.98"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1735.18"
            cy="1094"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1891.4"
            cy="-64.29"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1862.4"
            cy="394.18"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1874.28"
            cy="522.98"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1880.44"
            cy="655.36"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1848.98"
            cy="1266.72"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="2016.57"
            cy="-83.38"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="2043.06"
            cy="104.41"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1993.74"
            cy="226.78"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="2007.28"
            cy="370.3"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="2047.68"
            cy="507.33"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="2058.34"
            cy="846.3"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="2022.19"
            cy="952.57"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="2049.39"
            cy="1147.8"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="1995.04"
            cy="1297.04"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
        </g>
        <defs>
          <mask id="SvgjsMask1016">
            <rect width="1920" height="1080" fill="#ffffff"></rect>
          </mask>
        </defs>
      </Desk>
      <Mobile
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="400"
        height="768"
        preserveAspectRatio="none"
        viewBox="0 0 400 768"
      >
        <g mask='url("#SvgjsMask1074")' fill="none">
          <rect width="400" height="768" x="0" y="0" fill="transparent"></rect>
          <path
            d="M-44.54 524.9L-44.54 524.9"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-44.54 524.9L-35.05 634.19"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-44.54 524.9L69.52 536.82"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-44.54 524.9L66.67 637.8"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-44.54 524.9L132.18 542.25"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-35.05 634.19L-35.05 634.19"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-35.05 634.19L66.67 637.8"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-35.05 634.19L43.47 721.01"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-35.44 811.43L-35.44 811.43"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-35.44 811.43L70.33 805.74"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-35.44 811.43L43.47 721.01"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-35.44 811.43L-35.05 634.19"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-35.44 811.43L165.72 802.56"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M-35.44 811.43L66.67 637.8"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M69.52 536.82L69.52 536.82"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M69.52 536.82L132.18 542.25"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M69.52 536.82L66.67 637.8"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M69.52 536.82L139.73 638.43"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M69.52 536.82L127.55 416.01"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M69.52 536.82L-35.05 634.19"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M66.67 637.8L66.67 637.8"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M66.67 637.8L139.73 638.43"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M66.67 637.8L43.47 721.01"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M43.47 721.01L43.47 721.01"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M43.47 721.01L70.33 805.74"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M43.47 721.01L148.79 729.69"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M70.33 805.74L70.33 805.74"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M70.33 805.74L165.72 802.56"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M127.55 416.01L127.55 416.01"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M127.55 416.01L221 421.94"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M127.55 416.01L132.18 542.25"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M127.55 416.01L263.95 325.9"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M132.18 542.25L132.18 542.25"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M132.18 542.25L139.73 638.43"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M132.18 542.25L66.67 637.8"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M139.73 638.43L139.73 638.43"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M139.73 638.43L148.79 729.69"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M139.73 638.43L235.11 613.19"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M148.79 729.69L148.79 729.69"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M148.79 729.69L165.72 802.56"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M148.79 729.69L237.8 732.28"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M165.72 802.56L165.72 802.56"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M165.72 802.56L237.8 732.28"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M165.72 802.56L43.47 721.01"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M257.49 43.82L257.49 43.82"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M257.49 43.82L339.61 25.34"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M257.49 43.82L245.57 140.01"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M257.49 43.82L323.96 141.07"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M257.49 43.82L348.06 -63.37"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M257.49 43.82L416.71 -47.18"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M257.49 43.82L428.59 128.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M245.57 140.01L245.57 140.01"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M245.57 140.01L323.96 141.07"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M245.57 140.01L218.79 246.62"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M218.79 246.62L218.79 246.62"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M218.79 246.62L263.95 325.9"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M218.79 246.62L356.24 263.52"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M218.79 246.62L320.35 347.35"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M218.79 246.62L323.96 141.07"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M218.79 246.62L221 421.94"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M263.95 325.9L263.95 325.9"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M263.95 325.9L320.35 347.35"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M263.95 325.9L221 421.94"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M221 421.94L221 421.94"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M221 421.94L260.53 534.69"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M221 421.94L320.35 347.35"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M260.53 534.69L260.53 534.69"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M260.53 534.69L235.11 613.19"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M260.53 534.69L357.41 545.23"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M260.53 534.69L342.69 450.85"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M260.53 534.69L132.18 542.25"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M260.53 534.69L348.57 633.79"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M235.11 613.19L235.11 613.19"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M237.8 732.28L237.8 732.28"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M237.8 732.28L314.38 732.69"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M348.06 -63.37L348.06 -63.37"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M348.06 -63.37L416.71 -47.18"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M339.61 25.34L339.61 25.34"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M339.61 25.34L348.06 -63.37"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M339.61 25.34L416.71 -47.18"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M339.61 25.34L323.96 141.07"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M339.61 25.34L453.6 50.79"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M339.61 25.34L428.59 128.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M323.96 141.07L323.96 141.07"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M356.24 263.52L356.24 263.52"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M356.24 263.52L420.13 218.63"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M356.24 263.52L417.48 328.96"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M356.24 263.52L320.35 347.35"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M356.24 263.52L263.95 325.9"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M356.24 263.52L323.96 141.07"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M320.35 347.35L320.35 347.35"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M320.35 347.35L417.48 328.96"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M342.69 450.85L342.69 450.85"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M342.69 450.85L415.79 431.12"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M342.69 450.85L357.41 545.23"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M342.69 450.85L320.35 347.35"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M342.69 450.85L423.52 543.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M357.41 545.23L357.41 545.23"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M357.41 545.23L423.52 543.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M357.41 545.23L348.57 633.79"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M348.57 633.79L348.57 633.79"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M348.57 633.79L421.77 626.09"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M348.57 633.79L314.38 732.69"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M348.57 633.79L235.11 613.19"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M348.57 633.79L423.52 543.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M314.38 732.69L314.38 732.69"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M314.38 732.69L317.27 827.97"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M317.27 827.97L317.27 827.97"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M317.27 827.97L409.44 815.22"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M317.27 827.97L237.8 732.28"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M416.71 -47.18L416.71 -47.18"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M416.71 -47.18L453.6 50.79"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M453.6 50.79L453.6 50.79"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M453.6 50.79L517.34 43.07"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M453.6 50.79L428.59 128.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M453.6 50.79L543.85 122.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M428.59 128.45L428.59 128.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M428.59 128.45L420.13 218.63"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M428.59 128.45L323.96 141.07"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M420.13 218.63L420.13 218.63"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M417.48 328.96L417.48 328.96"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M417.48 328.96L517.96 327.15"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M417.48 328.96L415.79 431.12"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M417.48 328.96L420.13 218.63"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M415.79 431.12L415.79 431.12"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M415.79 431.12L423.52 543.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M415.79 431.12L534.09 439.12"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M423.52 543.21L423.52 543.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M423.52 543.21L421.77 626.09"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M421.77 626.09L421.77 626.09"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M421.77 626.09L452.21 698.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M421.77 626.09L518.74 600.34"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M452.21 698.45L452.21 698.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M452.21 698.45L505.33 714.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M452.21 698.45L518.74 600.34"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M452.21 698.45L348.57 633.79"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M452.21 698.45L409.44 815.22"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M409.44 815.22L409.44 815.22"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M409.44 815.22L520.04 837.36"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M409.44 815.22L314.38 732.69"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M409.44 815.22L505.33 714.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M409.44 815.22L421.77 626.09"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M549.89 -64.47L549.89 -64.47"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M549.89 -64.47L517.34 43.07"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M549.89 -64.47L416.71 -47.18"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M549.89 -64.47L453.6 50.79"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M549.89 -64.47L543.85 122.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M517.34 43.07L517.34 43.07"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M517.34 43.07L543.85 122.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M543.85 122.57L543.85 122.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M543.85 122.57L428.59 128.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M535.11 251.66L535.11 251.66"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M535.11 251.66L517.96 327.15"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M535.11 251.66L420.13 218.63"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M535.11 251.66L543.85 122.57"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M517.96 327.15L517.96 327.15"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M534.09 439.12L534.09 439.12"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M534.09 439.12L516.53 544.29"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M534.09 439.12L517.96 327.15"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M534.09 439.12L423.52 543.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M534.09 439.12L417.48 328.96"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M534.09 439.12L518.74 600.34"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M516.53 544.29L516.53 544.29"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M516.53 544.29L518.74 600.34"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M516.53 544.29L423.52 543.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M516.53 544.29L421.77 626.09"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M518.74 600.34L518.74 600.34"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M518.74 600.34L423.52 543.21"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M518.74 600.34L505.33 714.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M505.33 714.45L505.33 714.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M505.33 714.45L421.77 626.09"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M505.33 714.45L520.04 837.36"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M520.04 837.36L520.04 837.36"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <path
            d="M520.04 837.36L452.21 698.45"
            stroke="transparent"
            strokeWidth="1.5"
          ></path>
          <circle r="5" cx="-44.54" cy="524.9" fill="transparent"></circle>
          <circle r="5" cx="-35.05" cy="634.19" fill="transparent"></circle>
          <circle r="5" cx="-35.44" cy="811.43" fill="transparent"></circle>
          <circle r="5" cx="69.52" cy="536.82" fill="transparent"></circle>
          <circle r="5" cx="66.67" cy="637.8" fill="transparent"></circle>
          <circle r="5" cx="43.47" cy="721.01" fill="transparent"></circle>
          <circle r="5" cx="70.33" cy="805.74" fill="transparent"></circle>
          <circle r="5" cx="127.55" cy="416.01" fill="transparent"></circle>
          <circle r="5" cx="132.18" cy="542.25" fill="transparent"></circle>
          <circle r="5" cx="139.73" cy="638.43" fill="transparent"></circle>
          <circle r="5" cx="148.79" cy="729.69" fill="transparent"></circle>
          <circle r="5" cx="165.72" cy="802.56" fill="transparent"></circle>
          <circle r="5" cx="257.49" cy="43.82" fill="transparent"></circle>
          <circle r="5" cx="245.57" cy="140.01" fill="transparent"></circle>
          <circle r="5" cx="218.79" cy="246.62" fill="transparent"></circle>
          <circle r="5" cx="263.95" cy="325.9" fill="transparent"></circle>
          <circle r="5" cx="221" cy="421.94" fill="transparent"></circle>
          <circle r="5" cx="260.53" cy="534.69" fill="transparent"></circle>
          <circle r="5" cx="235.11" cy="613.19" fill="transparent"></circle>
          <circle r="5" cx="237.8" cy="732.28" fill="transparent"></circle>
          <circle r="5" cx="348.06" cy="-63.37" fill="transparent"></circle>
          <circle r="5" cx="339.61" cy="25.34" fill="transparent"></circle>
          <circle r="5" cx="323.96" cy="141.07" fill="transparent"></circle>
          <circle r="5" cx="356.24" cy="263.52" fill="transparent"></circle>
          <circle r="5" cx="320.35" cy="347.35" fill="transparent"></circle>
          <circle r="5" cx="342.69" cy="450.85" fill="transparent"></circle>
          <circle r="5" cx="357.41" cy="545.23" fill="transparent"></circle>
          <circle r="5" cx="348.57" cy="633.79" fill="transparent"></circle>
          <circle r="5" cx="314.38" cy="732.69" fill="transparent"></circle>
          <circle r="5" cx="317.27" cy="827.97" fill="transparent"></circle>
          <circle r="5" cx="416.71" cy="-47.18" fill="transparent"></circle>
          <circle r="5" cx="453.6" cy="50.79" fill="transparent"></circle>
          <circle r="5" cx="428.59" cy="128.45" fill="transparent"></circle>
          <circle r="5" cx="420.13" cy="218.63" fill="transparent"></circle>
          <circle r="5" cx="417.48" cy="328.96" fill="transparent"></circle>
          <circle r="5" cx="415.79" cy="431.12" fill="transparent"></circle>
          <circle r="5" cx="423.52" cy="543.21" fill="transparent"></circle>
          <circle r="5" cx="421.77" cy="626.09" fill="transparent"></circle>
          <circle r="5" cx="452.21" cy="698.45" fill="transparent"></circle>
          <circle r="5" cx="409.44" cy="815.22" fill="transparent"></circle>
          <circle r="5" cx="549.89" cy="-64.47" fill="transparent"></circle>
          <circle r="5" cx="517.34" cy="43.07" fill="transparent"></circle>
          <circle r="5" cx="543.85" cy="122.57" fill="transparent"></circle>
          <circle r="5" cx="535.11" cy="251.66" fill="transparent"></circle>
          <circle r="5" cx="517.96" cy="327.15" fill="transparent"></circle>
          <circle r="5" cx="534.09" cy="439.12" fill="transparent"></circle>
          <circle r="5" cx="516.53" cy="544.29" fill="transparent"></circle>
          <circle r="5" cx="518.74" cy="600.34" fill="transparent"></circle>
          <circle r="5" cx="505.33" cy="714.45" fill="transparent"></circle>
          <circle r="5" cx="520.04" cy="837.36" fill="transparent"></circle>

          <path
            d="M227.85 605.2L234.91 742.47"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M227.85 605.2L120.22 721.09"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M227.85 605.2L358.6 708.68"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M315.83 150.45L315.83 150.45"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M315.83 150.45L326.81 233.93"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M315.83 150.45L424.99 149.05"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M315.83 150.45L336.35 24.66"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M315.83 150.45L351.9 313.19"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M314.48 519.53L314.48 519.53"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M314.48 519.53L326.58 620.54"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M314.48 519.53L414.91 545.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M314.48 519.53L326.37 408.48"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M358.6 708.68L358.6 708.68"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M358.6 708.68L428.57 728.27"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M358.6 708.68L326.58 620.54"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M325 813.36L325 813.36"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M325 813.36L416.4 805.57"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M325 813.36L227.79 837.83"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M325 813.36L358.6 708.68"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M325 813.36L234.91 742.47"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M325 813.36L428.57 728.27"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M325 813.36L159.09 794.9"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M414.82 317.87L414.82 317.87"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M414.82 317.87L351.9 313.19"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M414.82 317.87L509.43 353.95"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M414.82 317.87L417.15 433.6"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M414.82 317.87L326.81 233.93"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M414.82 317.87L326.37 408.48"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M414.91 545.8L414.91 545.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M414.91 545.8L445.8 641.3"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M445.8 641.3L445.8 641.3"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M445.8 641.3L428.57 728.27"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M445.8 641.3L546.63 607.24"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M416.4 805.57L416.4 805.57"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M416.4 805.57L428.57 728.27"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M416.4 805.57L358.6 708.68"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M522.26 -65.51L522.26 -65.51"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M522.26 -65.51L432.97 -63.89"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M522.26 -65.51L439.15 30.84"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M522.26 -65.51L542.63 61.55"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M522.26 -65.51L336.35 24.66"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M516.21 165.15L516.21 165.15"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M516.21 165.15L424.99 149.05"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M516.21 165.15L542.63 61.55"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M516.21 165.15L439.15 30.84"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M516.21 165.15L414.82 317.87"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M509.43 353.95L509.43 353.95"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M509.43 353.95L504.32 420.37"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M509.43 353.95L417.15 433.6"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M504.32 420.37L504.32 420.37"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M504.32 420.37L417.15 433.6"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M504.32 420.37L550.13 545.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M549.42 708.38L549.42 708.38"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M549.42 708.38L546.63 607.24"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M549.42 708.38L428.57 728.27"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M549.42 708.38L445.8 641.3"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M549.42 708.38L550.13 545.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M549.42 708.38L416.4 805.57"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-46.47 629.5L-46.47 629.5"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-46.47 629.5L24.6 646.66"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-46.47 629.5L27.41 734.53"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-46.47 629.5L-38.31 813.28"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M-46.47 629.5L120.22 721.09"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M24.6 646.66L24.6 646.66"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M27.41 734.53L27.41 734.53"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M27.41 734.53L24.6 646.66"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M27.41 734.53L120.22 721.09"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M27.41 734.53L32.64 830.77"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M32.64 830.77L32.64 830.77"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M32.64 830.77L159.09 794.9"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M32.64 830.77L120.22 721.09"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M32.64 830.77L24.6 646.66"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M120.22 721.09L120.22 721.09"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M120.22 721.09L159.09 794.9"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M120.22 721.09L234.91 742.47"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M120.22 721.09L24.6 646.66"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M159.09 794.9L159.09 794.9"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M159.09 794.9L227.79 837.83"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M159.09 794.9L234.91 742.47"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M159.09 794.9L27.41 734.53"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M242.84 418.36L242.84 418.36"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M242.84 418.36L326.37 408.48"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M242.84 418.36L314.48 519.53"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M242.84 418.36L351.9 313.19"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M242.84 418.36L417.15 433.6"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M242.84 418.36L227.85 605.2"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M234.91 742.47L234.91 742.47"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M234.91 742.47L227.79 837.83"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M234.91 742.47L358.6 708.68"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M227.79 837.83L227.79 837.83"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M227.79 837.83L120.22 721.09"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M227.79 837.83L358.6 708.68"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M227.79 837.83L416.4 805.57"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M336.35 24.66L336.35 24.66"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M336.35 24.66L439.15 30.84"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M336.35 24.66L432.97 -63.89"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M336.35 24.66L424.99 149.05"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M326.81 233.93L326.81 233.93"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M326.81 233.93L351.9 313.19"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M351.9 313.19L351.9 313.19"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M351.9 313.19L326.37 408.48"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M351.9 313.19L417.15 433.6"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M326.37 408.48L326.37 408.48"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M326.37 408.48L417.15 433.6"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M326.58 620.54L326.58 620.54"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M432.97 -63.89L432.97 -63.89"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M432.97 -63.89L439.15 30.84"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M432.97 -63.89L542.63 61.55"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M432.97 -63.89L424.99 149.05"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M432.97 -63.89L516.21 165.15"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M439.15 30.84L439.15 30.84"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M439.15 30.84L542.63 61.55"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M439.15 30.84L424.99 149.05"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M424.99 149.05L424.99 149.05"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M424.99 149.05L326.81 233.93"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M417.15 433.6L417.15 433.6"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M417.15 433.6L414.91 545.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M417.15 433.6L314.48 519.53"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M428.57 728.27L428.57 728.27"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M542.63 61.55L542.63 61.55"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M542.63 61.55L424.99 149.05"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M550.13 545.8L550.13 545.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M550.13 545.8L546.63 607.24"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M546.63 607.24L546.63 607.24"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M546.63 607.24L414.91 545.8"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <path
            d="M546.63 607.24L428.57 728.27"
            stroke={theme == "Light" ? colors.neutral900 : colors.neutral100}
            strokeWidth="1.5"
          ></path>
          <circle
            r="25"
            cx="-38.31"
            cy="813.28"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="227.85"
            cy="605.2"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="315.83"
            cy="150.45"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="314.48"
            cy="519.53"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="358.6"
            cy="708.68"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="325"
            cy="813.36"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="414.82"
            cy="317.87"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="414.91"
            cy="545.8"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="445.8"
            cy="641.3"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="25"
            cx="416.4"
            cy="805.57"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="25"
            cx="522.26"
            cy="-65.51"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="25"
            cx="516.21"
            cy="165.15"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="25"
            cx="509.43"
            cy="353.95"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="25"
            cx="504.32"
            cy="420.37"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="25"
            cx="549.42"
            cy="708.38"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="-46.47"
            cy="629.5"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="24.6"
            cy="646.66"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="27.41"
            cy="734.53"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="32.64"
            cy="830.77"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="120.22"
            cy="721.09"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="159.09"
            cy="794.9"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="242.84"
            cy="418.36"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="234.91"
            cy="742.47"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="227.79"
            cy="837.83"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="336.35"
            cy="24.66"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="326.81"
            cy="233.93"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="351.9"
            cy="313.19"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="326.37"
            cy="408.48"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="326.58"
            cy="620.54"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="432.97"
            cy="-63.89"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="439.15"
            cy="30.84"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="424.99"
            cy="149.05"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="417.15"
            cy="433.6"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="428.57"
            cy="728.27"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="542.63"
            cy="61.55"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="550.13"
            cy="545.8"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
          <circle
            r="5"
            cx="546.63"
            cy="607.24"
            fill={theme == "Light" ? colors.neutral900 : colors.neutral100}
          ></circle>
        </g>
      </Mobile>
    </>
  );
};

export default BackgroundSVG;
