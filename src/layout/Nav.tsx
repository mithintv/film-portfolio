import { css } from "@emotion/react";

export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    <nav
      css={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#f0f0f0",
      })}
    >
      <div
        css={css({
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
          padding: "2rem 2rem",
          width: "100%",
          maxWidth: "1400px",
        })}
      >
        {children}
      </div>
    </nav>
  );
}
