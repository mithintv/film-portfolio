import Link from "next/link";
import { useRouter } from "next/router";

import { Fade, List, ListItem, ListItemText } from "@mui/material";
import { slideIn } from "../lib/animations";

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
    "non fiction",
    "contact",
  ];

  const router = useRouter();

  const underlineAnimation: {} | undefined =
    tablet || mobile
      ? undefined
      : {
          "&::after": {
            content: '""',
            position: "absolute",
            width: "100% - 0px",
            transform: "scaleX(0)",
            height: "1.1px",
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
        width: tablet ? "25vw" : "100%",
      }}
    >
      {nav.map((navLink, index) => {
        return (
          <Fade
            key={index + 1}
            in
            timeout={1000}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <ListItem
              css={{
                width: "100%",
                padding: tablet || mobile ? "0" : "0 0.45rem",
                backgroundColor:
                  (tablet || mobile) &&
                  router.route.replace(/\//g, "") === navLink.replace(" ", "")
                    ? "#F1F1F1"
                    : "#FFF",
                "&:hover": {
                  backgroundColor: tablet || mobile ? "#F1F1F1" : "#fff",
                },
                // animation: `${slideIn} 1s ease`,
                // animationDelay: `${index * 100}ms`,
              }}
              onClick={onClose}
            >
              <Link
                href={`/${navLink.replace(" ", "")}`}
                css={{
                  width: "100%",
                  pointerEvents:
                    router.route.replace(/\//g, "") === navLink.replace(" ", "")
                      ? "none"
                      : "auto",
                }}
              >
                <ListItemText
                  css={{
                    span: {
                      color: "#2e2e2e",
                      fontKerning: "normal",
                      fontWeight: "500",
                      whiteSpace: "nowrap",
                    },
                    display: "inline-block",
                    textAlign: "center",
                    justifyContent: "center",
                    width: "100%",
                    padding: tablet || mobile ? "1rem 0" : "0 0",
                    margin: "0 auto",
                    textDecoration:
                      !tablet &&
                      !mobile &&
                      router.route.replace(/\//g, "") ===
                        navLink.replace(" ", "")
                        ? "underline"
                        : "none",
                    textUnderlineOffset: "5px",
                    textDecorationThickness: "1.1px",
                    ...underlineAnimation,
                  }}
                >
                  {navLink}
                </ListItemText>
              </Link>
            </ListItem>
          </Fade>
        );
      })}
    </List>
  );
}
