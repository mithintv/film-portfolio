import React, { useState, useEffect } from "react";

import Image from "next/image";

import ReactPlayer from "react-player";
import { ProjectType } from "../lib/mysql";

// MUI and Emotion
import { Box, Fade, Grid, Modal, Typography } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import { css, keyframes } from "@emotion/react";

type AppProps = {
  project: ProjectType;
  feature?: boolean | undefined;
  timeout: number;
  mobile: boolean;
};

export default function Project(props: AppProps) {
  console.log(props.mobile);
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
          css={{
            width: props.feature ? "80vw" : "100%",
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
                  {role}
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
            // sizes="(max-width: 768px) 90vw,
            // (max-width: 1200px) 50vw,
            // 33vw"
            fill
            src={`/images/${props.project.localThumbnail}`}
            alt={props.project.title}
          />
        </AspectRatio>
        <Modal
          css={{
            width: "100vw",
            backgroundColor: "#000",
            border: "0px",
            borderRadius: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            onClick={() => setOpen(false)}
            css={{
              backgroundColor: "#000",
              border: "0px",
              borderRadius: "0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AspectRatio
              sx={{
                width: 300,
                // maxWidth: "1400px",
              }}
            >
              <ReactPlayer
                css={{
                  border: "0px",
                  borderRadius: "0px",
                }}
                width="100%"
                height="100%"
                url={props.project.url}
                playing
                controls={true}
              />
            </AspectRatio>
            <Box
              css={{
                height: "100px",
                zIndex: -1,
              }}
            ></Box>
          </Box>
        </Modal>
      </Grid>
    </Fade>
  );
}
