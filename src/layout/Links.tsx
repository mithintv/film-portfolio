import Link from "next/link";
import { useRouter } from "next/router";

import { css } from "@emotion/react";
import { List, ListItem, ListItemText } from "@mui/material";

type AppProps = {
  mobile: boolean;
  tablet: boolean;
  onClose: () => void;
};

export default function Links({ onClose, mobile, tablet }: AppProps) {
  const nav = [
    "narrative",
    "music video",
    "commercial",
    "nonfiction",
    "contact",
  ];

  const router = useRouter();
  console.log(router.route);

  return (
    <List
      css={css({
        display: "flex",
        flexDirection: tablet || mobile ? "column" : "row",
        padding: "0",
      })}
    >
      {nav.map((navLink, index) => {
        return (
          <ListItem onClick={onClose} key={navLink} disablePadding>
            <Link
              href={`/${navLink.replace(" ", "")}`}
              css={css({
                width: "100%",
                padding: "0 0.5rem",
              })}
            >
              <ListItemText
                css={css({
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "100% - 0px",
                    transform: "scaleX(0)",
                    height: "1.25px",
                    bottom: 0,
                    left: 8,
                    backgroundColor: "#2E2E2E",
                    transformOrigin: "bottom left",
                    transition: "transform 0.25s ease-out",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                    right: 8,
                    // transformOrigin: "bottom left",
                  },
                  display: "block",
                  textAlign: "center",
                  justifyContent: "center",
                  width: index === 1 ? "88px" : "100%",
                  padding: tablet || mobile ? "1rem 0" : "0 0",
                  margin: "0 auto",
                  textDecoration:
                    router.route.replace(/\//g, "") === navLink.replace(" ", "")
                      ? "underline"
                      : "none",
                  textUnderlineOffset: "5px",
                })}
              >
                {navLink}
              </ListItemText>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}
