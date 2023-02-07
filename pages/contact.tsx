import React, { useState, useEffect, useReducer, useRef } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";

import Heading from "../src/layout/Heading";

import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { IMaskInput } from "react-imask";
import { ReactElement } from "react-imask/dist/mixin";
interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}
interface Input {
  value: string | string[];
  touched: boolean;
  valid: boolean;
  showError: boolean;
  firstBlur: boolean;
}

type State = {
  "First Name": Input;
  "Last Name": Input;
  Email: Input;
  "Phone Number": Input;
  Subject: Input;
  Message: Input;
  Hear: Input;
  Role: Input;
};

type ActionType = {
  type: "blur" | "change" | "check" | "uncheck" | "submit" | "reset";
  input?: {
    name: keyof typeof initialState;
    value?: string;
    touched?: boolean;
    valid?: boolean;
    selections?: [];
  };
};

const TextMaskCustom = React.forwardRef<ReactElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask={[
          { mask: "(000) 000 0000" },
          { mask: "+0 (000) 000-0000" },
          { mask: "+00 (000) 000-0000" },
          { mask: "+000 (000) 000-0000" },
        ]}
        definitions={{
          "#": /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
      />
    );
  }
);

const initialState: State = {
  "First Name": {
    value: "",
    touched: false,
    valid: false,
    showError: false,
    firstBlur: false,
  },
  "Last Name": {
    value: "",
    touched: false,
    valid: false,
    showError: false,
    firstBlur: false,
  },
  Email: {
    value: "",
    touched: false,
    valid: false,
    showError: false,
    firstBlur: false,
  },
  "Phone Number": {
    value: "",
    touched: false,
    valid: false,
    showError: false,
    firstBlur: false,
  },
  Subject: {
    value: "",
    touched: false,
    valid: false,
    showError: false,
    firstBlur: false,
  },
  Message: {
    value: "",
    touched: false,
    valid: false,
    showError: false,
    firstBlur: false,
  },
  Hear: {
    value: [],
    valid: false,
    showError: false,
    firstBlur: false,
    touched: false,
  },
  Role: {
    value: [],
    valid: false,
    showError: false,
    firstBlur: false,
    touched: false,
  },
};

const contactReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "blur":
      return {
        ...state,
        [action.input!.name]: {
          ...state[action.input!.name],
          touched: action.input!.touched,
          valid: action.input!.valid,
          showError: action.input!.touched && !action.input!.valid,
          firstBlur: true,
        },
      };
    case "change":
      return {
        ...state,
        [action.input!.name]: {
          value: action.input!.value,
          touched: action.input!.touched,
          valid: action.input!.valid,
          showError: state[action.input!.name].firstBlur
            ? action.input!.touched && !action.input!.valid
            : false,
          firstBlur: state[action.input!.name].firstBlur,
        },
      };
    case "check": {
      const values = [...state[action.input!.name].value];
      values.push(action.input!.value!);
      return {
        ...state,
        [action.input!.name!]: {
          value: values,
          touched: true,
          firstBlur: true,
          showError: state[action.input!.name].firstBlur
            ? state[action.input!.name].touched && !true
            : false,
          valid: true,
        },
      };
    }
    case "uncheck": {
      const values = [...state[action.input!.name].value].filter(
        (value) => value !== action.input!.value!
      );
      return {
        ...state,
        [action.input!.name!]: {
          value: values,
          touched: true,
          firstBlur: true,
          showError: state[action.input!.name].firstBlur
            ? state[action.input!.name].touched && !(values.length > 0)
            : false,
          valid: values.length > 0,
        },
      };
    }
    case "submit": {
      let newObj: typeof initialState = { ...state };
      for (const key in state) {
        state[key as keyof typeof state] = {
          ...state[key as keyof typeof state],
          touched: true,
          showError: true && !state[key as keyof typeof state].valid,
        };
      }
      return { ...state };
    }
    case "reset":
      return { ...initialState };
    default:
      return initialState;
  }
};

export default function Contact({ mini }: { mini: boolean }) {
  const [valid, dispatchValid] = useReducer(contactReducer, initialState);
  const [formValid, setFormValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  const refs = [firstNameRef, lastNameRef, emailRef, phoneRef];

  // componentDidUpdate() function will run at mount and with every update to dependencies
  useEffect(() => {
    setFormValid(
      valid["First Name"].valid &&
        valid["Last Name"].valid &&
        valid["Email"].valid &&
        valid["Phone Number"].valid &&
        valid["Hear"].valid &&
        valid["Role"].valid &&
        valid["Subject"].valid &&
        valid["Message"].valid
    );
  }, [valid]);

  const isValid = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef?.current?.name === "Email") {
      const isNotEmpty = inputRef.current.value.trim() !== "";
      const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        inputRef.current.value
      );
      return isNotEmpty && emailValid;
    } else if (inputRef?.current?.name === "Phone Number") {
      const isNotEmpty = inputRef.current.value.trim() !== "";
      const phoneValid =
        /^(\+\d{1,3}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i.test(
          inputRef.current.value
        );
      return isNotEmpty && phoneValid;
    } else if (
      ["First Name", "Last Name", "Subject", "Message"].includes(
        inputRef?.current?.name as keyof typeof initialState
      )
    ) {
      const atLeastTwo = inputRef!.current!.value.trim().length >= 2;
      return atLeastTwo;
    } else return inputRef?.current?.value.trim() !== "";
  };

  const handleBlur = (
    event: React.FocusEvent,
    inputRef: React.RefObject<HTMLInputElement>
  ) => {
    dispatchValid({
      type: "blur",
      input: {
        name: inputRef!.current!.name as keyof typeof initialState,
        touched: true,
        valid: isValid(inputRef),
      },
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputRef: React.RefObject<HTMLInputElement>
  ) => {
    dispatchValid({
      type: "change",
      input: {
        name: inputRef!.current!.name as keyof typeof initialState,
        value: event.target.value,
        touched: true,
        valid: isValid(inputRef),
      },
    });
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatchValid({
        type: "check",
        input: {
          name: event.target.name as keyof typeof initialState,
          value: event.target.value,
        },
      });
    } else {
      dispatchValid({
        type: "uncheck",
        input: {
          name: event.target.name as keyof typeof initialState,
          value: event.target.value,
        },
      });
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formValid) {
      dispatchValid({
        type: "submit",
      });
      return;
    } else {
      console.log(formRef);
      dispatchValid({ type: "reset" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        css={{
          margin: "0 0 2rem 0",
        }}
      >
        <Heading title="Contact" />
        {/* Form Container */}
        <form
          ref={formRef}
          onSubmit={submitHandler}
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
            <FormLabel>Who are you?*</FormLabel>
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
                      <TextField
                        key={index}
                        helperText={
                          valid["Phone Number"].showError
                            ? `Please enter a valid ${element.toLowerCase()}.`
                            : ""
                        }
                        error={valid["Phone Number"].showError ? true : false}
                        onBlur={(event) => {
                          handleBlur(event, phoneRef);
                        }}
                        inputProps={{ ref: phoneRef }}
                        size="small"
                        name={element}
                        id={element}
                        value={valid["Phone Number"].value}
                        onChange={(event) => {
                          handleChange(event, phoneRef);
                        }}
                        InputProps={{ inputComponent: TextMaskCustom as any }}
                        placeholder={element}
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
                      <TextField
                        helperText={
                          valid[element as keyof typeof initialState].showError
                            ? `Please enter a valid ${element.toLowerCase()}.`
                            : ""
                        }
                        error={
                          valid[element as keyof typeof initialState].showError
                            ? true
                            : false
                        }
                        onBlur={(event) => {
                          handleBlur(event, refs[index]);
                        }}
                        onChange={(event) => {
                          handleChange(event, refs[index]);
                        }}
                        inputProps={{ ref: refs[index] }}
                        key={index}
                        name={element}
                        id={element}
                        value={
                          valid[element as keyof typeof initialState].value
                        }
                        size="small"
                        css={{
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

          {/* questionaire container */}
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
            <FormLabel error={valid["Hear"].showError}>
              How did you hear about Mithin?*
            </FormLabel>
            {[
              "Social Media (Facebook, Instagram, YouTube, Vimeo, etc.)",
              "Search Engine (Google, Yahoo, Bing, etc.)",
              "Family, Friend, or Colleague",
            ].map((element, index) => {
              return (
                <FormControlLabel
                  name="Hear"
                  id={`hear${index}`}
                  value={element}
                  key={index}
                  label={
                    <Typography variant="checkboxLabel">{element}</Typography>
                  }
                  control={
                    <Checkbox
                      checked={valid["Hear"].value.includes(element!)}
                      onChange={handleCheck}
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
              error={valid["Role"].showError}
              css={{
                marginTop: "2rem",
              }}
            >
              In what capacity are you looking to hire Mithin?*
            </FormLabel>
            <FormGroup css={{ display: "flex", flexDirection: "row" }}>
              <FormGroup>
                {["Director", "Cinematographer", "Editor", "Colorist"].map(
                  (element, index) => {
                    return (
                      <FormControlLabel
                        name="Role"
                        id={`roleP${index}`}
                        css={{ fontSize: "0.5rem" }}
                        value={element}
                        key={index}
                        label={
                          <Typography variant="checkboxLabel">
                            {element}
                          </Typography>
                        }
                        control={
                          <Checkbox
                            checked={valid["Role"].value.includes(element!)}
                            onChange={handleCheck}
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
                        name="Role"
                        id={`roleS${index}`}
                        sx={{
                          "& .MuiTypography-root": { fontSize: "0.9rem" },
                        }}
                        key={index}
                        label={element}
                        value={element}
                        control={
                          <Checkbox
                            onChange={handleCheck}
                            sx={{ "& .MuiSvgIcon-root": { fontSize: "1rem" } }}
                            checked={valid["Role"].value.includes(element!)}
                          />
                        }
                      ></FormControlLabel>
                    );
                  }
                )}
              </FormGroup>
            </FormGroup>
          </FormGroup>

          {/* message container */}
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
              Your Message*
            </FormLabel>
            <TextField
              helperText={
                valid["Subject"].showError
                  ? "Please enter a valid subject."
                  : ""
              }
              error={valid["Subject"].showError ? true : false}
              onBlur={(event) => {
                handleBlur(event, subjectRef);
              }}
              onChange={(event) => {
                handleChange(event, subjectRef);
              }}
              inputProps={{ ref: subjectRef }}
              name="Subject"
              id="Subject"
              value={valid["Subject"].value}
              size="small"
              css={{
                margin: "0 0 1rem",
              }}
              variant="outlined"
              placeholder="Subject"
            />
            <TextField
              helperText={
                valid["Message"].showError
                  ? "Please enter a valid message."
                  : ""
              }
              error={valid["Message"].showError ? true : false}
              onBlur={(event) => {
                handleBlur(event, messageRef);
              }}
              onChange={(event) => {
                handleChange(event, messageRef);
              }}
              inputProps={{ ref: messageRef }}
              name="Message"
              id="Message"
              value={valid["Message"].value}
              placeholder="Message"
              multiline
              rows={8}
            />
          </FormGroup>

          <Button type="submit" variant="contained" css={{ margin: "0 1rem" }}>
            Submit
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
}
