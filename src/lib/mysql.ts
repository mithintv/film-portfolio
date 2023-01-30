import { Sequelize, Model, DataTypes } from "sequelize";
import type { AppProps } from "next/app";

export const sequelize = new Sequelize(
  "film_portfolio",
  "root",
  `${process.env.PASSWORD}`,
  {
    host: "localhost",
    dialect: "mysql",
  }
);
export interface ProjectType extends AppProps {
  projects: {
    id: string;
    title: string;
    url: string;
    category: string;
    published: string;
  }[];
}

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
