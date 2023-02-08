import { Sequelize, Model, DataTypes, Op } from "sequelize";

export const sequelizeLocal = new Sequelize(
  "film_portfolio",
  "root",
  `${process.env.PASSWORD}`,
  {
    host: "localhost",
    dialect: "mysql",
  }
);
export const sequelize = new Sequelize(
  "film-portfolio",
  `${process.env.NEXT_PUBLIC_PLANET_SCALE_USERNAME}`,
  `${process.env.NEXT_PUBLIC_PLANET_SCALE_PASSWORD}`,
  {
    host: `us-east.connect.psdb.cloud`,
    dialect: "mysql",
    dialectOptions: {
      ssl: { rejectUnauthorized: true },
    },
  }
);

// export const sequelize = new Sequelize(
//   `${process.env.NEXT_PUBLIC_PLANET_SCALE_CONNECTION_STRING}`
// );

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
    client: DataTypes.TEXT,
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
      "2D Animator",
      "1st AC",
      "Camera Op",
      "Grip",
      "Electric"
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

export const getProjects = async (category: string, title?: string) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    const whereCondition = {} as {
      category: string;
      title?: string;
    };

    if (title) {
      whereCondition.title = title;
    }

    whereCondition.category = category;

    const response = await Project.findAll({
      where: whereCondition,
    });

    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
