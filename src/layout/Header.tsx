import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

import { css } from "@emotion/react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <Link
      href="/"
      css={css({
        flexDirection: "column",
        height: "3rem",
      })}
    >
      <h1
        css={css({
          margin: "0rem 0rem 0.15rem",
          fontSize: "2rem",
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
          "Motion Graphic Designer",
          1000,
          "AC",
          1000,
          "Grip",
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
