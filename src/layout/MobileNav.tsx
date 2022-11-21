import Link from "next/link";
import { useState } from "react";

import Nav from "./Nav";
import Title from "./Header";
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
import { IoMenu } from "react-icons/io5";

export default function MobileNav() {
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

  return (
    <>
      <Nav>
        <Title />
        <IoMenu
          css={css({
            fontSize: "2.5rem",
            cursor: "pointer",
            marginRight: "2rem",
          })}
          onClick={toggleDrawer}
        />
      </Nav>
      <Drawer anchor={"right"} open={drawer} onClose={toggleDrawer}>
        <List
          css={css({
            margin: "1.5rem 0rem",
            width: "250px",
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
    </>
  );
}
