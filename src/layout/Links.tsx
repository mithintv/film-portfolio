import Link from "next/link";
import { useRouter } from "next/router";

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

  const underlineAnimation: {} | undefined =
    tablet || mobile
      ? undefined
      : {
          "&::after": {
            content: '""',
            position: "absolute",
            width: "100% - 0px",
            transform: "scaleX(0)",
            height: "1.25px",
            bottom: 0,
            left: 8,
            right: 8,
            backgroundColor: "#2E2E2E",
            transformOrigin: "bottom right",
            transition: "transform 0.25s ease-out",
          },
          "&:hover::after": {
            transform: "scaleX(1)",
            right: 8,
            transformOrigin: "bottom left",
          },
        };

  return (
    <List
      css={{
        display: "flex",
        flexDirection: tablet || mobile ? "column" : "row",
        padding: "0",
      }}
    >
      {nav.map((navLink, index) => {
        return (
          <ListItem
            css={{
              width: "100%",
              padding: tablet || mobile ? "0" : "0 0.5rem",
              backgroundColor:
                (tablet || mobile) &&
                router.route.replace(/\//g, "") === navLink.replace(" ", "")
                  ? "#F1F1F1"
                  : "#FFF",
              "&:hover": {
                backgroundColor: tablet || mobile ? "#F1F1F1" : "#fff",
              },
            }}
            onClick={onClose}
            key={navLink}
          >
            <Link
              href={`/${navLink.replace(" ", "")}`}
              css={{
                width: "100%",
              }}
            >
              <ListItemText
                css={{
                  display: "block",
                  textAlign: "center",
                  justifyContent: "center",
                  width: index === 1 ? "88px" : "100%",
                  padding: tablet || mobile ? "1rem 0" : "0 0",
                  margin: "0 auto",
                  textDecoration:
                    !tablet &&
                    !mobile &&
                    router.route.replace(/\//g, "") === navLink.replace(" ", "")
                      ? "underline"
                      : "none",
                  textUnderlineOffset: "5px",
                  ...underlineAnimation,
                }}
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
