import Heading from "../src/layout/Heading";

import Image from "next/image";
import { Container, Paper } from "@mui/material";
import { css } from "@emotion/react";

export default function About() {
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1000px",
      })}
    >
      <Heading title="About" />
      <Image
        width={250}
        height={250}
        src={process.env.NEXT_PUBLIC_CROPPED || ""}
        alt="Mithin"
        css={css({
          borderRadius: "50%",
          transform: "scale(1)",
          filter: "grayscale(1)",
          margin: "0 0 2rem",
          padding: "0",
        })}
      />
      <Paper
        elevation={5}
        css={css({
          backgroundColor: "#f0f0f0",
          width: "500px",
        })}
      >
        <p
          css={css({
            textAlign: "justify",
            padding: "2rem 2.5rem",
          })}
        >
          Mithin is a self-taught Director and Cinematographer based in New York
          City. Born in Saudi Arabia and having spent the better part of his
          childhood in three different countries, he is no stranger to the
          concept of a 'global citizen'. After receiving his Bachelor's in
          Anthropology and Asian American Studies from the University of
          Pennsylvania, Mithin spent the majority of his time teaching himself
          the art of visual storytelling. He then moved to New York City at the
          prospect of a career with an ambitious startup. After a year of
          working a traditional nine-to-five, Mithin resigned with plans to take
          time off and find another career opportunity. Luckily, during this
          down-time, a close friend reached out to Mithin to create an series of
          dance videos for a music album. <br></br> <br></br>Given the newfound
          freedom and flexibility in both work and life, Mithin entrenched
          himself into full-time production work. Since then, Mithin has worked
          on a host of narratives, music videos, commercials and documentaries.
          In his spare time, Mithin tinkers with code as a web and game
          developer and plays a wide array of solo and multiplayer video games.
          Mithin is currently working on writing and directing his own short and
          feature films.
        </p>
      </Paper>
    </div>
  );
}
