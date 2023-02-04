import { useState } from "react";

import Nav from "./Nav";
import Header from "./Header";
import Links from "./Links";

import { css } from "@emotion/react";
import { Drawer } from "@mui/material";
import { IoMenu } from "react-icons/io5";

type AppProps = {
  mobile: boolean;
  tablet: boolean;
};

export default function MobileNav({ mobile, tablet }: AppProps) {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    if (drawer) {
      setTimeout(() => {
        setDrawer((prevState) => {
          return !prevState;
        });
      }, 250);
    } else
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
              fontSize: "2rem",
              cursor: "pointer",
              margin: "0 0 1rem 0",
            })}
            onClick={toggleDrawer}
          />
        )}
        <Header mobile={mobile} />
        {!mobile && (
          <IoMenu
            css={css({
              fontSize: "2rem",
              cursor: "pointer",
              margin: "0 0.5rem",
            })}
            onClick={toggleDrawer}
          />
        )}
      </Nav>
      <Drawer anchor={"top"} open={drawer} onClose={toggleDrawer}>
        <Links onClose={toggleDrawer} mobile={mobile} tablet={tablet} />
      </Drawer>
    </>
  );
}
