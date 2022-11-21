import { css } from "@emotion/react";

export default function Heading({ title }: { title: string }) {
  return (
    <h2
      css={css({
        textAlign: "center",
        margin: "1.5rem 0",
      })}
    >
      {title}
    </h2>
  );
}
