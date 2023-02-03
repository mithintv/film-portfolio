import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { ProjectsType } from "../lib/mysql";
import Project from "./Project";

export default function ProjectList({ projects }: ProjectsType) {
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
          return <Project key={project.id} project={project} timeout={index} />;
        })}
      </Grid>
    </Box>
  );
}
