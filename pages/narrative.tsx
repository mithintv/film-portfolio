import { GetStaticProps } from "next";
import Projects from "../src/layout/Projects";
import Heading from "../src/layout/Heading";
import { getProjects, ProjectType } from "../src/lib/mysql";

export default function Narrative({ projects }: ProjectType) {
  return (
    <div>
      <Heading title="Narrative" />
      <Projects projects={projects} />
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
