import Heading from "../src/layout/Heading";
import ProjectList from "../src/layout/ProjectLIst";
import { GetStaticProps } from "next";
import { getProjects, ProjectType } from "../src/lib/mysql";

export default function Commercial({
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
      <Heading title="Commercial" />
      <ProjectList mobile={mobile} projects={projects} />
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
