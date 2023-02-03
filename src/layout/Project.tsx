import React, { useState, useEffect } from "react";

import Image from "next/image";

import ReactPlayer from "react-player";
import { ProjectType } from "../lib/mysql";

// MUI and Emotion
import Fade from "@mui/material/Fade";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { css, keyframes } from "@emotion/react";

type AppProps = {
  project: ProjectType;
  feature?: boolean | undefined;
  timeout: number;
};

export default function Project(props: AppProps) {
  const containerRef = React.useRef(null);
  const [open, setOpen] = useState<true | false>(false);
  const [details, setDetails] = useState<true | false>(false);
  const roles = props.project.role.split(",");

  const slideIn = keyframes`
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0px);
  }`;

  return (
    <Fade
      in
      timeout={1000}
      style={{ transitionDelay: `${props.timeout * 100}ms` }}
    >
      <Grid
        item
        xs={props.feature ? 8 : 8}
        sm={props.feature ? 8 : 4}
        md={props.feature ? 8 : 4}
        css={css({
          padding: "0",
          width: props.feature ? "inherit" : "33vw",
          opacity: 1,
          height: "100%",
          animation: `${slideIn} 1s ease`,
          animationDelay: `${props.timeout * 100}ms`,
        })}
        onMouseEnter={() => setDetails(true)}
        onMouseLeave={() => setDetails(false)}
      >
        <AspectRatio
          css={css({
            width: props.feature ? "66vw" : "100%",
            maxWidth: "1000px",
          })}
        >
          <div
            ref={containerRef}
            css={css({
              width: "100%",
              height: "100%",
              backgroundColor: "#000",
              zIndex: 2,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              opacity: details ? 0.75 : 0,
              transition: "opacity 0.5s ease",
            })}
            onClick={() => setOpen(true)}
          >
            <Typography
              css={css({
                color: "#fff",
              })}
              variant="h6"
              align="center"
            >
              {props.project.title}
            </Typography>
            {roles.map((role, index) => {
              return (
                <Typography
                  key={index}
                  css={css({
                    color: "#fff",
                    display: "block",
                  })}
                  variant="caption"
                  align="center"
                >
                  {role}
                </Typography>
              );
            })}
          </div>
          <Image
            css={css({
              objectFit: "cover",
              transform: details ? "scale(1.1)" : "scale(1.0)",
              transition: "transform 0.5s ease",
            })}
            sizes="(max-width: 768px) 90vw,
            (max-width: 1200px) 50vw,
            33vw"
            fill
            src={`/images/${props.project.localThumbnail}`}
            alt={props.project.title}
          />
        </AspectRatio>

        <Modal
          css={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000",
            border: "0px",
            borderRadius: "0px",
          })}
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AspectRatio
            css={css({
              border: "0px",
              borderRadius: "0px",
            })}
            sx={{ width: "75%" }}
          >
            <Box
              sx={{
                width: "75%",
                height: "75%",
                backgroundColor: "#000",
                border: "0px",
                borderRadius: "0px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ReactPlayer
                css={css({
                  border: "0px",
                  borderRadius: "0px",
                })}
                width="100%"
                height="100%"
                url={props.project.url}
                playing
                controls={true}
              />
            </Box>
          </AspectRatio>
        </Modal>
      </Grid>
    </Fade>
  );
}
