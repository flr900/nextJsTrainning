"use client";
import { useContext } from "react";
import { DisplayContext } from "../contexts/DisplayContext";
// import handleFunction from '../services/handleFunction'

interface propsBtn {
  name: string;
  className?: string;
}

export default function FunctionBtn(props: propsBtn) {
  const { clearDisplay, handleDisplay } = useContext(DisplayContext);

  function handleFunction() {
    switch (props.name) {
      case "C":
        clearDisplay();
        break;
      case "%":
        handleDisplay(props.name);
        break;
      case "/":
        handleDisplay(props.name);
        break;
      case "x":
        handleDisplay(props.name);
        break;
      case "-":
        handleDisplay(props.name);
        break;
      case "+":
        handleDisplay(props.name);
        break;
    }
  }

  return (
    <button
      onClick={() => handleFunction()}
      className={` text-btn-res-color text-5xl rounded-full bg-btn-func-color w-24 h-24 flex items-center justify-center hover:bg-btn-def-hover-color hover:text-white transition ${props.className}`}
    >
      <a className="text-center "> {props.name} </a>
    </button>
  );
}
