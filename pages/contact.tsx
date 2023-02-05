import * as React from "react";
import Heading from "../src/layout/Heading";

import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
  OutlinedInput,
} from "@mui/material";
import { css } from "@emotion/react";
import Input from "@mui/material/Input";
import { IMaskInput } from "react-imask";
import { ReactElement } from "react-imask/dist/mixin";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<ReactElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          "#": /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export default function Contact({ mini }: { mini: boolean }) {
  const [value, setValues] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Heading title="Contact" />
      {/* Form Container */}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "0 0",
        }}
      >
        {/* contact container */}
        <FormGroup
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            padding: "0 1rem",
          }}
        >
          <FormLabel
            css={{
              "&.Mui-focused": {
                color: "#2e2e2e",
              },
            }}
          >
            Who are you?
          </FormLabel>
          {/* input container */}
          <FormGroup
            css={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              padding: "0",
              marginBottom: "2em",
            }}
          >
            {["First Name", "Last Name", "Email", "Phone Number"].map(
              (element, index) => {
                if (index === 3) {
                  return (
                    <OutlinedInput
                      key={index}
                      size="small"
                      name={element}
                      id={element}
                      value={value}
                      onChange={handleChange}
                      inputComponent={TextMaskCustom as any}
                      placeholder="Phone Number"
                      css={{
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #2e2e2e",
                        },
                        margin: "0.25rem 0",
                        padding: "0",
                        width: mini ? "100%" : "49%",
                      }}
                    />
                  );
                } else {
                  return (
                    <OutlinedInput
                      key={index}
                      size="small"
                      css={{
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #2e2e2e",
                        },
                        margin: "0.25rem 0",
                        padding: "0",
                        width: mini ? "100%" : "49%",
                      }}
                      placeholder={element}
                    />
                  );
                }
              }
            )}
          </FormGroup>
        </FormGroup>

        {/* Questionaire container */}
        <FormGroup
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "space-between",
            padding: "0 1rem",
            marginBottom: "2rem",
          }}
        >
          <FormLabel>How did you hear about Mithin?</FormLabel>
          {[
            "Social Media (Facebook, Instagram, YouTube, Vimeo, etc.)",
            "Search Engine (Google, Yahoo, Bing, etc.)",
            "Family, Friend, or Colleague",
          ].map((element, index) => {
            return (
              <FormControlLabel
                sx={{
                  "& .MuiTypography-root": { fontSize: "0.9rem" },
                }}
                key={index}
                label={element}
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: "1rem",
                      },
                    }}
                  />
                }
              ></FormControlLabel>
            );
          })}
          <FormLabel
            css={css({
              marginTop: "2rem",
            })}
          >
            In what capacity are you looking to hire Mithin?
          </FormLabel>
          <FormGroup css={{ display: "flex", flexDirection: "row" }}>
            <FormGroup>
              {["Director", "Cinematographer", "Editor", "Colorist"].map(
                (element, index) => {
                  return (
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": { fontSize: "0.9rem" },
                      }}
                      css={{ fontSize: "0.5rem" }}
                      key={index}
                      label={element}
                      control={
                        <Checkbox
                          sx={{ "& .MuiSvgIcon-root": { fontSize: "1rem" } }}
                        />
                      }
                    ></FormControlLabel>
                  );
                }
              )}
            </FormGroup>
            <FormGroup>
              {["2D Animator", "Camera Op", "1st AC", , "Grip/Electric"].map(
                (element, index) => {
                  return (
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": { fontSize: "0.9rem" },
                      }}
                      key={index}
                      label={element}
                      control={
                        <Checkbox
                          sx={{ "& .MuiSvgIcon-root": { fontSize: "1rem" } }}
                        />
                      }
                    ></FormControlLabel>
                  );
                }
              )}
            </FormGroup>
          </FormGroup>
        </FormGroup>

        {/* Message container */}
        <FormGroup
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "space-between",
            padding: "0 1rem",
            marginBottom: "2rem",
          }}
        >
          <FormLabel
            css={{
              margin: "0 0 1rem",
            }}
          >
            Your Message
          </FormLabel>
          <TextField
            required
            size="small"
            css={{
              margin: "0 0 1rem",
            }}
            variant="outlined"
            placeholder="Subject"
          />
          <TextField placeholder="Message" multiline rows={8} />
        </FormGroup>
      </Container>
    </Container>
  );
}
