import "../styles/globals.css";
import type { AppProps } from "next/app";

import useMediaQuery from "@mui/material/useMediaQuery";
import Theme from "../src/theme";
import Navigation from "../src/layout/Navigation";
import Social from "../src/layout/Social";

export default function App({ Component, pageProps }: AppProps) {
  const desktop = useMediaQuery("(min-width:900px)");
  const tablet = useMediaQuery("(max-width:900px)");
  const mobile = useMediaQuery("(max-width:600px)");
  const mini = useMediaQuery("(max-width:480px)");

  return (
    <Theme>
      <Navigation desktop={desktop} tablet={tablet} mobile={mobile}>
        <Component
          desktop={desktop}
          tablet={tablet}
          mobile={mobile}
          mini={mini}
          {...pageProps}
        />
        <Social />
      </Navigation>
    </Theme>
  );
}
