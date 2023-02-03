import { useState } from "react";

import Nav from "./Nav";
import Header from "./Header";
import Links from "./Links";

import { css } from "@emotion/react";
import { Drawer } from "@mui/material";
import { IoMenu } from "react-icons/io5";

type AppProps = {
  mobile: boolean;
};

export default function MobileNav({ mobile }: AppProps) {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <Nav mobile={mobile}>
        {mobile && (
          <IoMenu
            css={css({
              fontSize: "2.5rem",
              cursor: "pointer",
              marginBottom: "2rem",
            })}
            onClick={toggleDrawer}
          />
        )}
        <Header mobile={mobile} />
        {!mobile && (
          <IoMenu
            css={css({
              fontSize: "2.5rem",
              cursor: "pointer",
              margin: "0 1rem 0.5rem 0",
            })}
            onClick={toggleDrawer}
          />
        )}
      </Nav>
      <Drawer anchor={"top"} open={drawer} onClose={toggleDrawer}>
        <Links />
      </Drawer>
    </>
  );
}
