import Link from "next/link";

import { css } from "@emotion/react";

export default function Title() {
  return (
    <Link
      href="/"
      css={css({
        flexDirection: "column",
      })}
    >
      <h1
        css={css({
          margin: "0rem 1.5rem 0.15rem",
          fontSize: "2rem",
        })}
      >
        Mithin G. Thomas
      </h1>
      <h3
        css={css({
          fontSize: "0.85rem",
          margin: "0.15rem 1.5rem",
        })}
      >
        Director & Cinematographer
      </h3>
    </Link>
  );
}
