import Link from "next/link";

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

export default function Links() {
  const nav = [
    "narrative",
    "music video",
    "commercial",
    "nonfiction",
    "contact",
  ];
  return (
    <>
      {nav.map((navLink, index) => {
        return (
          <ListItem key={navLink} disablePadding>
            <ListItemButton
              css={css({
                justifyContent: "center",
                width: index === 1 ? "118px" : "",
              })}
            >
              <Link key={index} href={`/${navLink.replace(" ", "")}`}>
                {navLink}
              </Link>
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
}
