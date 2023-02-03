import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

import { css } from "@emotion/react";

export default function Header({ mobile }: { mobile: boolean }) {
  return (
    <Link
      href="/"
      css={css({
        flexDirection: "column",
        height: "3rem",
        textAlign: mobile ? "center" : "start",
      })}
    >
      <h1
        css={css({
          margin: "0rem 0rem 0.15rem",
          fontSize: "1.85rem",
        })}
      >
        MITHIN G. THOMAS
      </h1>
      <TypeAnimation
        sequence={[
          "Director", // Types 'One'
          1000, // Waits 1s
          "Cinematographer", // Deletes 'One' and types 'Two'
          1000,
          "Editor",
          1000,
          "Colorist",
          1000,
          "2D Animator",
          1000,
          "AC/Focus Puller",
          1000,
          "Gaffer/Grip",
          1000,
          () => {
            // Place optional callbacks anywhere in the array
          },
        ]}
        wrapper="h3"
        cursor={false}
        repeat={Infinity}
        css={css({
          fontSize: "0.85rem",
          margin: "0.15rem 0.15rem 0",
        })}
      />
      {/* <h3
        css={css({
          fontSize: "0.85rem",
          margin: "0.15rem 0.15rem 0",
        })}
        className={classes.cycle}
      ></h3> */}
    </Link>
  );
}
