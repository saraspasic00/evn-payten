import React, { useRef, useState } from "react";

import Keyboard from "react-simple-keyboard";

// Instead of the default import, you can also use this:
// import { KeyboardReact as Keyboard } from "react-simple-keyboard";

import "react-simple-keyboard/build/css/index.css";
import "./Keyboard.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
import { Stack } from "@mui/system";
import CancelButton from "../CancelButton/CancelButton";
import { Button } from "@mui/material";
import { navigateActions } from "../../store/navigationSlice";
import { useNavigate } from "react-router-dom";

function CustomKeyboard(props) {
  const [inputs, setInputs] = useState({});
  const [layoutName, setLayoutName] = useState("default");
  const [inputName, setInputName] = useState("default");
  const [flag, setFlag] = useState(true);
  const keyboard = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };
  const onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
  };
  const onChangeAll = (inputs) => {
    setInputs({ ...inputs });
  };

  const onChangeInput = (event) => {
    const inputVal = event.target.value;

    setInputs({
      ...inputs,
      [inputName]: inputVal,
    });

    keyboard.current.setInput(inputVal);
  };

  const getInputValue = (inputName) => {
    return inputs[inputName] || "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(!flag);
    dispatch(userActions.authEmail(getInputValue("email")));
    dispatch(userActions.authPhone(getInputValue("phone")));
    dispatch(navigateActions.navigateFrom("/index/authentication"));
    dispatch(navigateActions.navigateTo("/index/success"));
    navigate("/index/success");
  };

  return (
    <div>
      <div className="keyboard-container">
        <input
          className="keyboard-input"
          id="phone"
          value={getInputValue("phone")}
          onFocus={() => setInputName("phone")}
          placeholder={"Телефонски број"}
          onChange={onChangeInput}
          style={{ marginBottom: "10px" }}
        />
        <input
          className="keyboard-input"
          id="email"
          value={getInputValue("email")}
          onFocus={() => setInputName("email")}
          placeholder={"Е-маил адреса"}
          onChange={onChangeInput}
        />
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          theme={"hg-theme-default hg-layout-default myTheme "}
          phone={inputName}
          email={layoutName}
          onChangeAll={onChangeAll}
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
          Прати
        </Button>
      </Stack>
    </div>
  );
}

export default CustomKeyboard;
