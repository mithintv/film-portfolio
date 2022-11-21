import Link from "next/link";
import { useState } from "react";

import Nav from "./Nav";
import Title from "./Header";
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
        <Links />
      </Drawer>
    </>
  );
}
