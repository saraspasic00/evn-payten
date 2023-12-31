import React, { useRef, useState } from "react";

import Keyboard from "react-simple-keyboard";

// Instead of the default import, you can also use this:
// import { KeyboardReact as Keyboard } from "react-simple-keyboard";

import "react-simple-keyboard/build/css/index.css";
import "./KeypadEmbg.css";
import { Button, Stack } from "@mui/material";
import CancelButton from "../CancelButton/CancelButton";

import dataJson from "../data/data.json";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";
import { navigateActions } from "../../store/navigationSlice";

function KeypadEmbg(props) {
  const [input, setInput] = useState("");
  const [flag, setFlag] = useState(true);
  const navigate = useNavigate();
  const keyboard = useRef();
  const data = dataJson;
  const selectFrom = useSelector((state) => state.navigation.from);
  const dispatch = useDispatch();

  const onChange = (input) => {
    setInput(input);
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/index/phone");
  };
  return (
    <div>
      <input
        className="input-embg"
        value={input}
        placeholder={""}
        onChange={onChangeInput}
        required
      />
      <Keyboard
        className="simple-keyboard-embg"
        keyboardRef={(r) => (keyboard.current = r)}
        theme={"hg-theme-default hg-layout-default myKeypadEmbg"}
        layout={{
          default: ["1 2 3", "4 5 6", "7 8 9", " 0 {bksp}"],
        }}
        display={{ "{bksp}": "⌫" }}
        buttonTheme={[
          {
            class: "hg-style",
            buttons: "1 2 3 4 5 6 7 8 9 0  {bksp}",
          },
        ]}
        onChange={onChange}
      />
      <Stack spacing={4} direction="row" className="home-buttons">
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

export default KeypadEmbg;
