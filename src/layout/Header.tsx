import { css } from "@emotion/react";

export default function Title() {
  return (
    <section
      css={css({
        flexDirection: "column",
      })}
    >
      <h1
        css={css({
          color: "black",
          margin: "1rem 1.5rem 0.25rem",
          fontSize: "2rem",
        })}
      >
        Mithin G. Thomas
      </h1>
      <h3
        css={css({
          fontSize: "0.85rem",
          margin: "0.25rem 1.5rem",
        })}
      >
        Director & Cinematographer
      </h3>
    </section>
  );
}
