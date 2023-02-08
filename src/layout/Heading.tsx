import { Fade, Typography } from "@mui/material";

export default function Heading({
  title,
}: {
  title: string | string[] | undefined;
}) {
  return (
    <Fade in timeout={1000}>
      <Typography
        variant="h3"
        css={{
          textAlign: "center",
          margin: "2rem 0",
        }}
      >
        {title}
      </Typography>
    </Fade>
  );
}
