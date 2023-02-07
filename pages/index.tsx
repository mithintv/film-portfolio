import { GetStaticProps } from "next";

import { getProjects, ProjectsType } from "../src/lib/mysql";
import Heading from "../src/layout/Heading";
import Project from "../src/layout/Project";

import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Home({ projects }: ProjectsType) {
  console.log(projects);
  return (
    <section
      css={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <Heading title="Reel" />
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
          columns={{ xs: 1, sm: 1, md: 1 }}
        >
          <Project
            mobile={false}
            project={projects[0]}
            timeout={1}
            feature={true}
          />
        </Grid>
      </Box>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects("Reel", "Cinematography Reel");
  return {
    props: {
      projects,
    },
  };
};
