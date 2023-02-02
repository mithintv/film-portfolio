import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";

import ReactPlayer from "react-player";
import { ProjectType } from "../lib/mysql";
import { css } from "@emotion/react";

type AppProps = {
  project: ProjectType;
};

export default function Project(props: AppProps) {
  const [show, setShow] = useState<true | false>(true);
  const clickHandler = () => {
    setShow(false);
  };

  return (
    <Grid item xs={8} sm={4} md={4}>
      <div
        css={css({
          display: "block",
          position: "relative",
          width: "100%",
          height: "270px",
          overflow: "hidden",
        })}
      >
        {show && (
          <Image
            onClick={clickHandler}
            css={css({
              objectFit: "cover",
            })}
            fill
            src={props.project.thumbnail}
            alt={props.project.title}
          />
        )}
        <ReactPlayer width={"100%"} height="100%" url={props.project.url} />
      </div>
    </Grid>
  );
}
