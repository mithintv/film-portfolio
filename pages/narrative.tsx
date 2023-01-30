import Heading from "../src/layout/Heading";
import type { AppProps } from "next/app";
import { sequelize, Project, ProjectType } from "../src/lib/mysql";
import { GetStaticProps } from "next";

export default function Narrative(props: ProjectType) {
  return (
    <div>
      <Heading title="Narrative" />
      {props.projects.map((project) => {
        return <p key={project.id}>{project.title}</p>;
      })}
    </div>
  );
}

const getNarratives = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    const response = await Project.findAll({
      where: {
        category: "Narrative",
      },
    });

    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getNarratives();
  return {
    props: {
      projects,
    },
  };
};
