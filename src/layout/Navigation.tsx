import Link from "next/link";
import { useState } from "react";

import useBreakpoint from "use-breakpoint";

import { css } from "@emotion/react";
import Nav from "./Nav";
import Title from "./Header";

import MobileNav from "./MobileNav";

const breakpoints = { mobile: 0, tablet: 768, desktop: 1280 };

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
