import type { AppProps } from "next/app";
import GlobalStyled from "@styles/GlobalStyled";
import { LanguageProvider } from "@context/language";
import { ThemeProvider } from "@context/theme";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      once: true,
    });
  }, []);

  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <Component {...pageProps} />
          <GlobalStyled />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
