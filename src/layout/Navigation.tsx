import Link from "next/link";
import { useState } from "react";

import useBreakpoint from "use-breakpoint";
import Nav from "./Nav";
import Title from "./Header";
import MobileNav from "./MobileNav";
import Links from "./Links";

import { css } from "@emotion/react";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const breakpoints = { mobile: 0, tablet: 768, desktop: 1024 };

export default function DesktopNav({
  children,
  navLinks = [
    "Narrative",
    "Music Video",
    "Commercial",
    "Non Fiction",
    "About",
    "Contact",
  ],
}: {
  children: React.ReactNode;
  navLinks: string[];
}) {
  const nav = [
    "narrative",
    "music video",
    "commercial",
    "nonfiction",
    "about",
    "contact",
  ];

  const { breakpoint } = useBreakpoint(breakpoints, "mobile", false);

  return (
    <>
      {breakpoint === "desktop" && (
        <Nav>
          <Title />
          <List
            css={css({
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              margin: "1.5rem 0rem",
            })}
          >
            <Links />
          </List>
        </Nav>
      )}

      {breakpoint !== "desktop" && <MobileNav />}
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
