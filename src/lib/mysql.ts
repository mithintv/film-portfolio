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
  id: string;
  title: string;
  url: string;
  category: string;
  role: string;
  published: string;
  thumbnail: string;
  display: boolean;
  localThumbnail: string;
};

export type ProjectsType = {
  projects: ProjectType[];
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
    role: DataTypes.ENUM(
      "Director",
      "Cinematographer",
      "Editor",
      "Colorist",
      "2D Animator/Motion Graphic Designer",
      "AC",
      "Grip"
    ),
    published: DataTypes.DATE,
    thumbnail: DataTypes.TEXT,
    display: DataTypes.BOOLEAN,
    localThumbnail: DataTypes.TEXT,
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
