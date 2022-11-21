import { css } from "@emotion/react";

export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    <nav
      css={css({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "1.5rem 0",
      })}
    >
      {children}
    </nav>
  );
}
