import { css } from "@emotion/react";

export default function Heading({
  title,
}: {
  title: string | string[] | undefined;
}) {
  return (
    <h2
      css={css({
        fontSize: "1.25rem",
        textAlign: "center",
        margin: "2rem 0",
      })}
    >
      {title}
    </h2>
  );
}
