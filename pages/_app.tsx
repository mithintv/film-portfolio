import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider } from "@emotion/react";
import Theme from "../src/theme";

const Navigation = dynamic(() => import("../src/layout/Navigation"), {
  ssr: false,
});

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
      </Navigation>
    </Theme>
  );
}
