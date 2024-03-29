"use client";

import { useContext } from "react";
import { DisplayContext } from "../contexts/DisplayContext";

export default function Display() {
  const { display, calculationResult } = useContext(DisplayContext);

  return (
    <div className="text-white mt-12">
      <h2
        className={
          display
            ? "text-6xl text-right h-14"
            : "text-4xl text-right h-14 animate-pulse"
        }
      >
        {" "}
        {display ? display : "|"}
      </h2>
      <p className="text-4xl text-right mt-12 mb-12 h-12">
        {" "}
        {calculationResult.toString()}{" "}
      </p>
    </div>
  );
}
