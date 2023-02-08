import { useState, useEffect } from "react";

import Nav from "./Nav";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Links from "./Links";

import { css } from "@emotion/react";
import { List } from "@mui/material";

export default function Navigation({
  desktop,
  tablet,
  mobile,
  children,
}: {
  desktop: boolean;
  tablet: boolean;
  mobile: boolean;
  children: React.ReactNode;
}) {
  const [navDelay, setNavDelay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setNavDelay(true);
    }, 100);
  }, []);
  const [contentDelay, setContentDelay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setContentDelay(true);
    }, 250);
  }, []);
  return (
    <>
      {desktop && !tablet && (
        <Nav mobile={false}>
          <Header mobile={false} />
          {navDelay && (
            <List
              css={css({
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                margin: "0",
              })}
            >
              <Links onClose={() => {}} tablet={false} mobile={false} />
            </List>
          )}
        </Nav>
      )}
      {tablet && !mobile && <MobileNav tablet={true} mobile={false} />}
      {mobile && <MobileNav mobile={true} tablet={false} />}
      {contentDelay && (
        <main
          css={css({
            display: "flex",
            maxWidth: "1400px",
            margin: "0 auto",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          {children}
        </main>
      )}
    </>
  );
}
