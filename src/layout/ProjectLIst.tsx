import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { ProjectType } from "../lib/mysql";
import Project from "./Project";

export default function ProjectList({
  projects,
  mobile,
}: {
  projects: ProjectType[];
  mobile: boolean;
}) {
  const [loadCounter, setLoadCounter] = useState(0);
  const [beginFade, setBeginFade] = useState(false);

  useEffect(() => {
    if (loadCounter === projects.length) {
      setBeginFade(true);
    }
  }, [loadCounter, projects.length]);

  const loadIncrement = () => {
    setLoadCounter((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <Box
      sx={{
        padding: "0 2em",
        width: "100%",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, sm: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {projects.map((project, index) => {
          return (
            <Project
              onLoad={loadIncrement}
              key={project.id}
              mobile={mobile}
              project={project}
              timeout={index}
            />
          );
        })}
      </Grid>
    </Box>
  );
}
