import { GetStaticProps } from "next";
import ProjectList from "../src/layout/ProjectLIst";
import Heading from "../src/layout/Heading";
import { getProjects, ProjectsType } from "../src/lib/mysql";

export default function Narrative({ projects }: ProjectsType) {
  return (
    <div>
      <Heading title="Narrative" />
      <ProjectList projects={projects} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects("Narrative");
  return {
    props: {
      projects,
    },
  };
};
