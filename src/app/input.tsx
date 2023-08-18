"use client";

import {
  Autocomplete,
  Box,
  TextField as MUITextField,
  TextareaAutosize,
} from "@mui/material";
import {
  CSSProperties,
  KeyboardEventHandler,
  ReactNode,
  useState,
} from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: transparent;
  border: 1px solid #bdbdbd;
  &:focus {
    outline: none;
  }

  &.error {
    border: 0;
    outline: 1px solid red;
  }
`;

const StyledMuiTextField = styled(MUITextField)`
  background-color: transparent;
  width: 100%;

  .MuiOutlinedInput-input {
    font-size: 1rem;
    color: #1c1b1f;
  }
  .MuiFormLabel-root {
    color: #1c1b1f;
    font-size: 1rem;
  }

  &:focus-visible {
    outline: none;
    border: transparent;
  }

  &:hover {
    border: transparent;
  }
`;

export interface InputProps {
  onChange?: (e: any) => void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
  onPaste?: () => void;
  placeholder?: string;
  onBlur?: () => void;
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
  type?:
    | "text"
    | "number"
    | "file"
    | "textArea"
    | "password"
    | "email"
    | "tel"
    | "address"
    | "checkbox";

  value?: string;
  name?: string;
  id?: string;
  readOnly?: boolean;
  legend?: string;
  border?: string;
  width?: string;
  height?: string;
  size?: string;
  color?: string;
  weight?: string;
  br?: string;
  addon?: ReactNode;
  min?: number;
  max?: number;
  flexGrow?: number;
  parentWidth?: string;
  styles?: CSSProperties;
}

const Input = ({
  onChange,
  onKeyDown,
  onPaste,
  placeholder,
  value,
  onBlur,
  margin,
  type = "text",
  id,
  name,
  readOnly,
  padding,
  border,
  width,
  height,
  size,
  color,
  weight,
  br,
  addon,
  min,
  max,
  flexGrow,
  parentWidth,
  styles,
}: InputProps) => {
  const [miniType, setMiniType] = useState(
    type === "password" ? "password" : ""
  );
  if (type === "textArea") {
    return (
      <textarea
        aria-label="Your message"
        rows={5}
        placeholder={placeholder}
        style={{
          margin,
          padding: padding || ".5rem 2rem 0 1rem",
          border,
          width: width || "100%",
          fontSize: size || "1rem",
          color: color || "#1C1B1F",
          fontWeight: weight || "100",
          fontFamily: "var(--font-family)",
          borderRadius: br || "4px",
          ...styles,
        }}
        onChange={onChange}
      ></textarea>
    );
  }
  return (
    <div style={{ position: "relative", flexGrow, width: parentWidth }}>
      <StyledInput
        type={miniType || type}
        onBlur={onBlur}
        placeholder={placeholder}
        onPaste={onPaste}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        id={id}
        readOnly={readOnly}
        name={name}
        disabled={readOnly}
        min={min}
        max={max}
        style={{
          margin,
          padding: padding || "0 2rem 0 1rem",
          border,
          width: width || "100%",
          height: height || "40px",
          fontSize: size || "1rem",
          color: color || "#1C1B1F",
          fontWeight: weight || "100",
          fontFamily: "var(--font-family)",
          borderRadius: br || "4px",
          ...styles,
        }}
      />
      {type === "password" && value && (
        <Box sx={{ position: "absolute", right: "15px", top: "13px" }}>
          {miniType === "password" ? (
            <AiOutlineEye
              size={20}
              cursor="pointer"
              onClick={() => setMiniType("text")}
            />
          ) : (
            <AiOutlineEyeInvisible
              size={20}
              cursor="pointer"
              onClick={() => setMiniType("password")}
            />
          )}
        </Box>
      )}
      {addon && (
        <Box
          sx={{
            position: "absolute",
            right: "5%",
            top: "35%",
          }}
        >
          {addon}
        </Box>
      )}
    </div>
  );
};

export const TextField = ({
  onChange,
  onKeyDown,
  onPaste,
  placeholder,
  value,
  onBlur,
  margin,
  id,
  name,
  readOnly,
  padding,
  legend,
  border,
  width,
  type,
}: InputProps) => {
  return (
    <>
      <StyledMuiTextField
        required
        type={type || "text"}
        // onBlur={onBlur}
        placeholder={placeholder}
        // onPaste={onPaste}
        // value={value}
        onChange={onChange}
        label={legend}
        id={id}
        // name={name}
        // disabled={readOnly}
        style={{
          margin,
          border: border,
          borderRadius: "4px",
        }}
        sx={{
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      />
    </>
  );
};



export default Input;
