import { useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, Box, Fade, Container, Typography } from "@mui/material";
import {
  FaFacebookF,
  FaInstagram,
  FaVimeoV,
  FaLinkedinIn,
} from "react-icons/fa";
import { slideIn } from "../lib/animations";
export default function Social({ mobile }: { mobile: boolean }) {
  const icons = [
    // {
    //   link: "https://faceobook.com/mithintv",
    //   icon: <FaFacebookF />,
    //   color: "#3B5998",
    // },
    {
      link: "https://instagram.com/mithintv",
      icon: <FaInstagram />,
      color: "#E4405F",
    },
    {
      link: "https://vimeo.com/mithintv",
      icon: <FaVimeoV />,
      color: "#17B7EA",
    },
    {
      link: "https://linkedin.com/in/mithintv",
      icon: <FaLinkedinIn />,
      color: "#0776B3",
    },
  ];

  const [delay, setDelay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 500);
  }, []);

  return (
    <Box
      css={{
        width: "100%",
        maxWidth: "1000px",
        height: mobile ? "25vh" : "auto",
        margin: mobile ? "auto 0 0" : "auto auto 2rem",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifySelf: "end",
      }}
    >
      <Container
        css={{
          width: "200px",
          margin: mobile ? "5rem auto 1rem" : "3rem auto 1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {icons.map((element, index) => {
          return (
            <Fade
              key={index + 1}
              in
              timeout={1000}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link href={element.link}>
                <Avatar
                  sx={{
                    bgcolor: element.color,
                    opacity: "0.66",
                    "&.MuiAvatar-root:hover": {
                      opacity: 1,
                    },
                    animation: `${slideIn} 1s ease`,
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {element.icon}
                </Avatar>
              </Link>
            </Fade>
          );
        })}
      </Container>
      <Fade in timeout={1000} style={{ transitionDelay: `200ms` }}>
        <Typography
          variant="overline"
          css={{
            animation: `${slideIn} 1s ease`,
            animationDelay: `200ms`,
          }}
        >
          Copyright © 2023 Mithin G. Thomas
        </Typography>
      </Fade>
    </Box>
  );
}
