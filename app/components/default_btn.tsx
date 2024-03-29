"use client";
import { useContext } from "react";
import { DisplayContext } from "../contexts/DisplayContext";

interface propsBtn {
  name: string;
  value: Number | string;
  type: string;
  className?: string;
}

export default function DefaultBtn(props: propsBtn) {
  const { display, handleDisplay } = useContext(DisplayContext);
  return (
    <button
      onClick={() => handleDisplay(props.value)}
      className={`rounded-full bg-btn-def-color w-24 h-24 flex items-center justify-center hover:bg-btn-def-hover-color  transition ${props.className}`}
    >
      <a className="text-center text-white text-5xl"> {props.name} </a>
    </button>
  );
}
