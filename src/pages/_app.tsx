import type { AppProps } from "next/app";
import GlobalStyled from "@styles/GlobalStyled";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyled bgColor="#F3F3F3" />
    </>
  );
}

export default MyApp;
