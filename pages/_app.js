import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../components/Styles";

const ThemeWrapper = (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeWrapper>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeWrapper>
    </>
  );
}
