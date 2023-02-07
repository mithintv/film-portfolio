import Link from "next/link";
import { Avatar, Box, Fade, Container } from "@mui/material";
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
        margin: "2rem 0",
      }}
    >
      <Container
        css={{
          width: "200px",
          margin: "1rem auto",
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
    </Box>
  );
}
