import React, { useRef, useState } from "react";

import Keyboard from "react-simple-keyboard";

// Instead of the default import, you can also use this:
// import { KeyboardReact as Keyboard } from "react-simple-keyboard";

import "react-simple-keyboard/build/css/index.css";
import "./InvoiceKeyboard.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import { Stack } from "@mui/system";
import CancelButton from "../CancelButton/CancelButton";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navigateActions } from "../../store/navigationSlice";

function InvoiceKeyboard(props) {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();
  const [flag, setFlag] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(!flag);
    dispatch(userActions.authEmail(input));

    navigate("/index/embg");
  };

  return (
    <div>
      <div className="keyboard-container">
        <input
          className="keyboard-input-invoice"
          value={input}
          placeholder={""}
          onChange={onChangeInput}
          required
        />
        <Keyboard
          className="keyboard-invoice"
          keyboardRef={(r) => (keyboard.current = r)}
          theme={"hg-theme-default hg-layout-default myThemeInvoice "}
          email={input}
          layout={{
            default: [
              "1 2 3 4 5 6 7 8 9 0 - {bksp}",
              "q w e r t y u i o p [ ] \\",
              "a s d f g h j k l ; '",
              "z x c v b n m , . / {shift}",
              ".com {space} @",
            ],
            shift: [
              "! @ # $ % ^ & * ( ) _ + {bksp}",
              "Q W E R T Y U I O P { } |",
              'A S D F G H J K L : "',
              "Z X C V B N M < > ? {shift}",
              ".com {space} @",
            ],
          }}
          display={{ "{bksp}": "⌫", "{shift}": "⇧", "{space}": " " }}
          onKeyPress={onKeyPress}
          onChange={onChange}
        />
      </div>
      <Stack direction="row" spacing={4} className="buttons">
        <CancelButton />
        <Button
          type="submit"
          sx={{
            backgroundColor: "#d2042d",
            marginTop: props.marginTop,
            width: "max-content",
          }}
          color={flag ? "inherit" : "error"}
          onClick={handleSubmit}
        >
          Продолжи
        </Button>
      </Stack>
    </div>
  );
}

export default InvoiceKeyboard;
