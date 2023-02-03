import Heading from "../src/layout/Heading";
import ProjectList from "../src/layout/ProjectLIst";
import { GetStaticProps } from "next";
import { getProjects, ProjectsType } from "../src/lib/mysql";

export default function Commercial({ projects }: ProjectsType) {
  return (
    <div>
      <Heading title="Commercial" />
      <ProjectList projects={projects} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects("Commercial");
  return {
    props: {
      projects,
    },
  };
};
