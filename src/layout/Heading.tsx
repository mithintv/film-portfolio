import { Fade } from "@mui/material";

export default function Heading({
  title,
}: {
  title: string | string[] | undefined;
}) {
  return (
    <Fade in timeout={1000}>
      <h2
        css={{
          fontSize: "1.25rem",
          textAlign: "center",
          margin: "2rem 0",
        }}
      >
        {title}
      </h2>
    </Fade>
  );
}
