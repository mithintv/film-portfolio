import { GetStaticProps } from "next";
import ProjectList from "../src/layout/ProjectLIst";
import Heading from "../src/layout/Heading";
import { getProjects, ProjectType } from "../src/lib/mysql";

export default function Narrative({
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
      <Heading title="Narrative" />
      <ProjectList mobile={mobile} projects={projects} />
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
