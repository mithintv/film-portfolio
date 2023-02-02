import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ReactPlayer from "react-player";
import { ProjectsType } from "../lib/mysql";
import Project from "./Project";

export default function Projects({ projects }: ProjectsType) {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </Grid>
    </Box>
  );
}
