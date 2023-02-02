import { useState } from "react";

import { css } from "@emotion/react";
import Image from "mui-image";
import { Container, Paper } from "@mui/material";

import Heading from "../src/layout/Heading";
import { sequelize } from "../src/lib/mysql";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player";

export default function Home() {
  const [showPlayer, setShowPlayer] = useState(false);

  const clickHandler = () => {
    setShowPlayer(true);
  };

  return (
    <section
      css={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <Heading title="Reel" />
      <Container maxWidth="md">
        <div
          css={css({
            width: "100%",
            position: "relative",
          })}
        >
          <ReactPlayer url="https://vimeo.com/556691314" />
        </div>
      </Container>
      {/* <Container>
        <iframe
          css={css({
            margin: "0",
          })}
          src="https://player.vimeo.com/video/556691314?h=2ad5ab1954"
          width="1080px"
          height="546px"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </Container> */}
      <div
        // onClick={clickHandler}
        css={css({
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        {/* {!showPlayer && (
          <div
            css={css({
              width: "75vw",
              height: "546px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            })}
          >
            <IconContext.Provider
              value={{
                color: "white",
                size: "100px",
              }}
            >
              <div
                css={css({
                  zIndex: "3",
                  position: "absolute",
                  justifyContent: "center",
                })}
              >
                <BsFillPlayFill
                  css={css({
                    zIndex: "3",
                  })}
                />
              </div>
            </IconContext.Provider>
            <img
              css={css({
                position: "absolute",
                zIndex: "2",
              })}
              src="https://firebasestorage.googleapis.com/v0/b/film-portfolio-28f4b.appspot.com/o/Screen%20Shot%202022-11-17%20at%205.17.56%20PM.png?alt=media&token=939fcb8c-aa0d-4ea3-a9c9-438095c3745a"
              width="1080px"
              height="454px"
            />
          </div>
        )} */}
      </div>
    </section>
  );
}

export const getStaticProps = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  return {
    props: {},
  };
};
