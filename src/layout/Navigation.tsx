import Link from "next/link";
import { useState } from "react";

import useBreakpoint from "../hooks/useBreakpoint";

import { css } from "@emotion/react";
import Title from "./Title";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { IoMenu } from "react-icons/io5";

export default function Navigation({
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

  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer((prevState) => {
      return !prevState;
    });
  };

  const point = useBreakpoint();

  return (
    <>
      <h2>{point}</h2>

      {point === "xlg" && (
        <nav
          css={css({
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "1.5rem auto",
            maxWidth: "1400px",
          })}
        >
          <Title />
          <ul
            css={css({
              display: "flex",
              flexDirection: "row",
            })}
          >
            {nav.map((navLink, index) => {
              return (
                <Link
                  css={css({
                    listStyle: "none",
                    margin: "0 1.5em",
                  })}
                  key={index}
                  href={`/${navLink.replace(" ", "")}`}
                >
                  {navLink}
                </Link>
              );
            })}
          </ul>
        </nav>
      )}

      {point !== "xlg" && (
        <nav
          css={css({
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          })}
        >
          <Title />
          <IoMenu
            css={css({
              fontSize: "2.5rem",
              cursor: "pointer",
              marginRight: "3.5rem",
            })}
            onClick={toggleDrawer}
          />
        </nav>
      )}
      <Drawer
        anchor={"right"}
        open={drawer}
        // open={state[anchor]}
        onClose={toggleDrawer}
      >
        <List
          css={css({
            margin: "1.5rem 5rem",
            width: "150px",
          })}
        >
          {nav.map((navLink, index) => {
            return (
              <ListItem key={navLink} disablePadding>
                <ListItemButton
                  css={css({
                    margin: "0.5rem 0",
                    justifyContent: "center",
                  })}
                >
                  <Link key={index} href={`/${navLink.replace(" ", "")}`}>
                    {navLink}
                  </Link>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
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
