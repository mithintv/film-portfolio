/// <reference types="@emotion/react/types/css-prop" />
import "../styles/globals.css";
import type { AppProps } from "next/app";

import Navigation from "../src/layout/Navigation";
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

  return {
    props: {
      data,
    },
  };
};
