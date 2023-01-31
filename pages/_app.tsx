/// <reference types="@emotion/react/types/css-prop" />
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { sequelize } from "../src/lib/mysql";
import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("../src/layout/Navigation"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Navigation>
      <Component {...pageProps} />
    </Navigation>
  );
}
