import type { AppProps } from "next/app";
import GlobalStyled from "@styles/GlobalStyled";
import { LanguageProvider } from "@context/language";
import { ThemeProvider } from "@context/theme";

function MyApp({ Component, pageProps }: AppProps) {
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
