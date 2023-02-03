import Nav from "./Nav";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Links from "./Links";

import { css } from "@emotion/react";
import { List } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const desktop = useMediaQuery("(min-width:1024px)");
  const tablet = useMediaQuery("(max-width:1024px)");
  const mobile = useMediaQuery("(max-width:570px)");

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
            <Links />
          </List>
        </Nav>
      )}
      {tablet && !mobile && <MobileNav mobile={false} />}
      {mobile && <MobileNav mobile={true} />}
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
