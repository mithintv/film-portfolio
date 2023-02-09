import React, { useState, useEffect } from "react";

import Image from "next/image";

import ReactPlayer from "react-player";
import { ProjectType } from "../lib/mysql";

// MUI and Emotion
import { Box, Container, Fade, Grid, Modal, Typography } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import { slideIn } from "../lib/animations";

type AppProps = {
  project: ProjectType;
  fade: boolean;
  onLoad: () => void;
  feature?: boolean | undefined;
  timeout: number;
  mobile: boolean;
};

export default function Project(props: AppProps) {
  const containerRef = React.useRef(null);
  const [open, setOpen] = useState<true | false>(false);
  const [details, setDetails] = useState<true | false>(false);
  const roles = props.project.role.split(",");

  return (
    <>
      <Fade
        in={props.fade}
        timeout={1000}
        style={{ transitionDelay: `${props.timeout * 100}ms` }}
      >
        <Grid
          item
          xs={8}
          sm={4}
          md={4}
          css={{
            padding: "0",
            width: props.feature ? "inherit" : "33vw",
            opacity: 1,
            height: "100%",
            animation: `${slideIn} 1s ease`,
            animationDelay: `${props.timeout * 100}ms`,
          }}
          onMouseEnter={() => setDetails(true)}
          onMouseLeave={() => setDetails(false)}
        >
          <AspectRatio
            ratio={props.feature ? "2.39/1" : "16/9"}
            css={{
              width: props.feature ? "90vw" : "100%",
              maxWidth: "1000px",
            }}
          >
            <div
              ref={containerRef}
              css={{
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
              }}
              onClick={() => {
                setDetails(false);
                setOpen(true);
              }}
            >
              <Typography
                css={{
                  color: "#fff",
                  padding: "0 0.5rem",
                }}
                variant="h6"
                align="center"
              >
                {props.project.title}
              </Typography>
              {roles.map((role, index) => {
                return (
                  <Typography
                    key={index}
                    css={{
                      color: "#fff",
                      display: "block",
                    }}
                    variant="caption"
                    align="center"
                  >
                    {props.feature ? "" : role}
                  </Typography>
                );
              })}
            </div>
            <Image
              css={{
                objectFit: "cover",
                transform: details ? "scale(1.1)" : "scale(1.0)",
                transition: "transform 0.5s ease",
              }}
              sizes="(max-width: 768px) 90vw,
            (max-width: 1200px) 50vw,
            33vw"
              fill
              src={`/images/${props.project.localThumbnail}`}
              alt={props.project.title}
              onLoadingComplete={() => {
                props.onLoad();
              }}
            />
          </AspectRatio>
          <Modal
            css={{
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              zIndex: 2,
              border: "0px solid black",
              outline: "none",
              "&.MuiModal:focus": {
                border: "0px solid black",
                outline: "none",
              },
            }}
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            slotProps={{
              backdrop: {
                sx: {
                  backgroundColor: "#000",
                  opacity: 0.5,
                },
              },
            }}
          >
            <Container
              onClick={() => setOpen(false)}
              css={{
                backgroundColor: "#000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "0px solid black",
                outline: "none",
              }}
            >
              <AspectRatio
                sx={{
                  width: props.mobile ? "100%" : "75%",
                  maxWidth: "1400px",
                  border: "0px solid black",
                  outline: "none",
                }}
              >
                <ReactPlayer
                  css={{
                    border: "0px solid black",
                    outline: "none",
                  }}
                  width="100%"
                  height="100%"
                  url={props.project.url}
                  playing
                  controls={true}
                />
              </AspectRatio>
              <Container
                css={{
                  height: "100px",
                }}
              ></Container>
            </Container>
          </Modal>
        </Grid>
      </Fade>
    </>
  );
}
