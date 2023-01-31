import Heading from "../src/layout/Heading";
import Projects from "../src/layout/Projects";
import { GetStaticProps } from "next";
import { getProjects, ProjectType } from "../src/lib/mysql";

export default function Commercial({ projects }: ProjectType) {
  return (
    <div>
      <Heading title="Commercial" />
      <Projects projects={projects} />
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
