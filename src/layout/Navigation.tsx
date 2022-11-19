import Link from "next/link";

import { css } from "@emotion/react";
import Title from "./Title";

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

  return (
    <>
      <nav
        css={css({
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "1.5rem 5rem",
          maxWidth: "1400px",
        })}
      >
        <Title />
        <ul
          css={css({
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
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
