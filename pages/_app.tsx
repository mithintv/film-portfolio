import { useState, useEffect } from "react";
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

  const [socialDelay, setSocialDelay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSocialDelay(true);
    }, 500);
  }, []);

  return (
    <Theme>
      <div
        css={{
          minHeight: "100vh",
          maxHeight: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Navigation desktop={desktop} tablet={tablet} mobile={mobile}>
          <Component
            desktop={desktop}
            tablet={tablet}
            mobile={mobile}
            mini={mini}
            {...pageProps}
          />
        </Navigation>
        {socialDelay && <Social key={Math.random()} mobile={mobile} />}
      </div>
    </Theme>
  );
}
