import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ReactPlayer from "react-player";
import { ProjectType } from "../lib/mysql";

export default function Projects({ projects }: ProjectType) {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {projects.map((project) => {
          return (
            <Grid item xs={8} sm={4} md={4} key={project.id}>
              <ReactPlayer width={"100%"} height="100%" url={project.url} />
              <span>{project.title}</span>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
