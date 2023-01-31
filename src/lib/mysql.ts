import { Sequelize, Model, DataTypes } from "sequelize";

export const sequelize = new Sequelize(
  "film_portfolio",
  "root",
  `${process.env.PASSWORD}`,
  {
    host: "localhost",
    dialect: "mysql",
  }
);
export type ProjectType = {
  projects: {
    id: string;
    title: string;
    url: string;
    category: string;
    published: string;
  }[];
};

export const Project = sequelize.define(
  "project",
  {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    title: DataTypes.TEXT,
    url: DataTypes.TEXT,
    category: DataTypes.ENUM(
      "Narrative",
      "Music Video",
      "Commercial",
      "Non Fiction"
    ),
    published: DataTypes.DATE,
  },
  {
    timestamps: false,
  }
);

export const getProjects = async (category: string) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    const response = await Project.findAll({
      where: {
        category: category,
      },
    });

    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
