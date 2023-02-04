import { css } from "@emotion/react";

type AppProps = {
  mobile: boolean;
  children: React.ReactNode;
};

export default function Nav({ mobile, children }: AppProps) {
  return (
    <nav
      css={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#f0f0f0",
        margin: "0 auto",
      })}
    >
      <div
        css={css({
          display: "flex",
          flexDirection: mobile ? "column" : "row",
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
