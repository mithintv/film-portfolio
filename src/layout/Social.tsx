import Link from "next/link";
import { Avatar, Box, Fade, Container, Typography } from "@mui/material";
import {
  FaFacebookF,
  FaInstagram,
  FaVimeoV,
  FaLinkedinIn,
} from "react-icons/fa";
import { slideIn } from "../lib/animations";
export default function Social() {
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

  return (
    <Box
      css={{
        width: "100%",
        maxWidth: "1000px",
        margin: "auto auto 2rem",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifySelf: "end",
      }}
    >
      <Container
        css={{
          width: "200px",
          margin: "3rem auto 1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {icons.map((element, index) => {
          return (
            <Fade
              key={index}
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
      <Typography variant="overline">
        Copyright © 2023 Mithin G. Thomas
      </Typography>
    </Box>
  );
}
