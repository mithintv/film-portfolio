import { GetStaticProps } from "next";
import Heading from "../src/layout/Heading";
import Projects from "../src/layout/Projects";
import { getProjects, ProjectType } from "../src/lib/mysql";

export default function MusicVideo({ projects }: ProjectType) {
  return (
    <div>
      <Heading title="Music Video" />
      <Projects projects={projects} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects("Music Video");
  return {
    props: {
      projects,
    },
  };
};
