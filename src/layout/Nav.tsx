import { css } from "@emotion/react";

export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    <nav
      css={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        backgroundColor: "#f0f0f0",
      })}
    >
      <div
        css={css({
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0",
          padding: "2rem 0",
          width: "100vw",
          maxWidth: "1000px",
        })}
      >
        {children}
      </div>
    </nav>
  );
}
