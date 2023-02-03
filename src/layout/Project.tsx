import React, { useState, useEffect } from "react";

import Image from "next/image";

import ReactPlayer from "react-player";
import { ProjectType } from "../lib/mysql";

// MUI and Emotion
import classes from "./Project.module.css";
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
  const [details, setDetails] = useState<true | false>(false);
  const roles = props.project.role.split(",");

  return (
    <Fade in {...{ timeout: 1000 * (props.timeout + 1) }}>
      <Grid
        item
        xs={8}
        sm={4}
        md={4}
        css={css({
          width: "33vw",
          padding: "0",
        })}
        onMouseEnter={() => setDetails(true)}
        onMouseLeave={() => setDetails(false)}
      >
        <AspectRatio sx={{ width: "100%" }}>
          <div
            css={css({
              width: "100%",
              height: "100%",
              backgroundColor: "#000",
              zIndex: 2,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            })}
            className={details ? classes.detailsFadeIn : classes.detailsFadeOut}
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
            })}
            className={details ? classes.imgPushIn : classes.imgPushOut}
            onClick={() => setOpen(true)}
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
