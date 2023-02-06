import { GetStaticProps } from "next";
import Heading from "../src/layout/Heading";
import ProjectList from "../src/layout/ProjectLIst";
import { getProjects, ProjectType } from "../src/lib/mysql";

export default function MusicVideo({
  projects,
  desktop,
  tablet,
  mobile,
}: {
  projects: ProjectType[];
  desktop: boolean;
  tablet: boolean;
  mobile: boolean;
}) {
  return (
    <div>
      <Heading title="Music Video" />
      <ProjectList mobile={mobile} projects={projects} />
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
