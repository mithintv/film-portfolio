import { css } from "@emotion/react";

export default function Heading({
  title,
}: {
  title: string | string[] | undefined;
}) {
  return (
    <h2
      css={css({
        textAlign: "center",
        margin: "3rem 0",
      })}
    >
      {title}
    </h2>
  );
}
