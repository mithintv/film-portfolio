import React, { useState, useEffect, use } from "react";

import Image from "next/image";

import ReactPlayer from "react-player";
import { ProjectType } from "../lib/mysql";

// MUI and Emotion
import { Container, Fade, Grid, Modal, Typography } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import { fadeIn, fadeOut, slideIn } from "../lib/animations";

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
  const [fade, setFade] = useState(false);
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
                setFade(false);
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
              priority
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
              backgroundColor: "#000",
              border: "0px solid black",
              outline: "none",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              animation: !fade
                ? `${fadeIn} 0.5s ease`
                : `${fadeOut} 0.75s ease`,
              opacity: !fade ? 1 : 0,
            }}
            disablePortal
            closeAfterTransition
            open={open}
            onClose={() => {
              setFade(true);
              setTimeout(() => {
                setOpen(false);
              }, 500);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            slotProps={{
              backdrop: {
                sx: {
                  backgroundColor: "#000",
                },
              },
            }}
          >
            <Container
              onClick={() => {
                setFade(true);
                setTimeout(() => {
                  setOpen(false);
                }, 500);
              }}
              css={{
                width: "100vw",
                maxWidth: "1400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "0px solid black",
                outline: "none",
              }}
            >
              <AspectRatio
                css={{
                  width: "100%",
                  maxWidth: "1400px",
                  border: "0px solid black",
                  outline: "none",
                }}
              >
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={props.project.url}
                  playing
                  controls={true}
                />
              </AspectRatio>
              <Container
                onClick={() => {
                  setFade(true);
                  setTimeout(() => {
                    setOpen(false);
                  }, 500);
                }}
                css={{
                  position: "relative",
                  height: "100px",
                  border: "0px solid black",
                  outline: "none",
                }}
              ></Container>
            </Container>
          </Modal>
        </Grid>
      </Fade>
    </>
  );
}
