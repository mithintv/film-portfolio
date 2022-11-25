import Heading from "../src/layout/Heading";

import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import { css } from "@emotion/react";

export default function Contact() {
  return (
    <Container maxWidth="sm">
      <Heading title="Contact" />

      <FormGroup>
        {/* Contact Info container */}
        <Container
          css={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
            margin: "2rem 0",
          })}
        >
          <FormLabel
            css={css({
              color: "#d7f0f5",
            })}
          >
            Who are you?
          </FormLabel>
          <TextField
            css={css({
              margin: "0.5rem 0",
            })}
            placeholder="First Name"
          />
          <TextField
            css={css({
              margin: "0.5rem 0",
            })}
            placeholder="Last Name"
          />

          <TextField
            css={css({
              margin: "0.5rem 0",
            })}
            placeholder="Email"
          />
          <TextField
            css={css({
              margin: "0.5rem 0",
            })}
            placeholder="Phone Number"
          />
        </Container>

        {/* Questionaire container */}
        <Container
          css={css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "2rem 0",
          })}
        >
          <FormLabel>How did you hear about Mithin?</FormLabel>
          <FormControlLabel
            label="Social Media (Facebook, Instagram, YouTube, Vimeo, etc.)"
            control={<Checkbox />}
          ></FormControlLabel>
          <FormControlLabel
            label="Search Engine (Google, Yahoo, Bing, etc.)"
            control={<Checkbox />}
          ></FormControlLabel>
          <FormControlLabel
            label="Family, Friend, or Colleague"
            control={<Checkbox />}
          ></FormControlLabel>
          <FormLabel
            css={css({
              marginTop: "2rem",
            })}
          >
            In what capacity are you looking to hire Mithin?
          </FormLabel>
          <FormControlLabel
            label="Director"
            control={<Checkbox />}
          ></FormControlLabel>
          <FormControlLabel
            label="Cinematographer"
            control={<Checkbox />}
          ></FormControlLabel>
          <FormControlLabel
            label="Colorist"
            control={<Checkbox />}
          ></FormControlLabel>
        </Container>

        {/* Message container */}
        <Container
          css={css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "2rem 0",
          })}
        >
          <FormLabel
            css={css({
              margin: "0 0 1rem",
            })}
          >
            Your Message
          </FormLabel>
          <TextField
            css={css({
              margin: "0 0 2rem",
            })}
            variant="standard"
            placeholder="Subject"
          />
          <TextField placeholder="Message" multiline rows={8} />
        </Container>
      </FormGroup>
    </Container>
  );
}
