import React, { useState } from "react";

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
import { css } from "@emotion/react";

type AppProps = {
  project: ProjectType;
  timeout: number;
};

export default function Project(props: AppProps) {
  const [open, setOpen] = useState<true | false>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fade in {...{ timeout: 1000 * (props.timeout + 1) }}>
      <Grid
        item
        xs={8}
        sm={4}
        md={4}
        css={css({
          width: "33vw",
        })}
      >
        <AspectRatio sx={{ width: "100%" }}>
          <Image
            css={css({
              cursor: "pointer",
            })}
            onClick={handleOpen}
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
          onClose={handleClose}
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
