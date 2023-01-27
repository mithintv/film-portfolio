/// <reference types="@emotion/react/types/css-prop" />
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { sequelize } from "../src/lib/mysql";
import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("../src/layout/Navigation"), {
  ssr: false,
});
import { GetStaticProps } from "next";

export default function App(
  { Component, pageProps }: AppProps,
  data: string[]
) {
  return (
    <Navigation navLinks={data}>
      <Component {...pageProps} />
    </Navigation>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("http://localhost:3000/api/navlinks");
  const data = await response.json();

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  return {
    props: {
      data,
    },
  };
};
