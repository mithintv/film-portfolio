import Nav from "./Nav";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Links from "./Links";

import { css } from "@emotion/react";
import { List } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const desktop = useMediaQuery("(min-width:900px)");
  const tablet = useMediaQuery("(max-width:900px)");
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {desktop && !tablet && (
        <Nav mobile={false}>
          <Header mobile={false} />
          <List
            css={css({
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              margin: "0",
            })}
          >
            <Links tablet={false} mobile={false} />
          </List>
        </Nav>
      )}
      {tablet && !mobile && <MobileNav tablet={true} mobile={false} />}
      {mobile && <MobileNav mobile={true} tablet={false} />}
      <main
        css={css({
          display: "flex",
          maxWidth: "1400px",
          margin: "auto",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        {children}
      </main>
    </>
  );
}
