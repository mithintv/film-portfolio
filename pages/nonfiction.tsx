import { GetStaticProps } from "next";
import Heading from "../src/layout/Heading";
import ProjectList from "../src/layout/ProjectLIst";
import { getProjects, ProjectsType } from "../src/lib/mysql";

export default function MusicVideo({ projects }: ProjectsType) {
  return (
    <div>
      <Heading title="Non Fiction" />
      <ProjectList projects={projects} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects("Non Fiction");
  return {
    props: {
      projects,
    },
  };
};
