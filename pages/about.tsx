import Heading from "../src/layout/Heading";

import Image from "next/image";
import { Card, Container, Paper, Typography } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import { css } from "@emotion/react";

export default function About({
  desktop,
  tablet,
  mobile,
}: {
  desktop: boolean;
  tablet: boolean;
  mobile: boolean;
}) {
  return (
    <Container
      css={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1000px",
      })}
    >
      <Heading title="About" />

      <Container
        css={css({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: "750px",
          padding: "0",
        })}
      >
        {" "}
        <AspectRatio
          ratio="1/1"
          css={{
            width: "100%",
            maxWidth: "300px",
          }}
        >
          <Image
            fill
            src={process.env.NEXT_PUBLIC_CROPPED || ""}
            alt="Mithin"
            css={css({
              position: "relative",
              width: "100%",
              objectFit: "contain",
              borderRadius: "0%",
              transform: "scale(1)",
              filter: "grayscale(0)",
              margin: "0 auto",
            })}
          />
        </AspectRatio>
        <Typography
          variant="body1"
          css={css({
            textAlign: "justify",
            padding: "2rem 0.5rem",
          })}
        >
          Mithin is a self-taught Director and Cinematographer based in New York
          City. Born in Saudi Arabia and having spent the better part of his
          childhood in three different countries, he is no stranger to the
          concept of a &apos;global citizen&apos;. After receiving his
          Bachelor&apos;s in Anthropology and Asian American Studies from the
          University of Pennsylvania, Mithin spent the majority of his time
          teaching himself the art of visual storytelling. He then moved to New
          York City at the prospect of a career with an ambitious startup. After
          a year of working a traditional nine-to-five, Mithin resigned with
          plans to take time off and find another career opportunity. Luckily,
          during this down-time, a close friend reached out to Mithin to create
          an series of dance videos for a music album. <br></br> <br></br>Given
          the newfound freedom and flexibility in both work and life, Mithin
          entrenched himself into full-time production work. Since then, Mithin
          has worked on a host of narratives, music videos, commercials and
          documentaries. In his spare time, Mithin tinkers with code as a web
          and game developer and plays a wide array of solo and multiplayer
          video games. Mithin is currently working on writing and directing his
          own short and feature films.
        </Typography>
      </Container>
    </Container>
  );
}
