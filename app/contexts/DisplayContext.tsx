"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import handleFunction from "../services/handleCalculation";

interface DisplayContextType {
  display: string;
  calculationResult: string;
  clearDisplay: () => void;
  handleDisplay: (value: Number | string) => void;
}

export const DisplayContext = createContext({} as DisplayContextType);
const calculationArray: any[] = [];

export function DisplayProvider({ children }: { children: ReactNode }) {
  const [display, setDisplay] = useState("");
  const [calculationResult, setCalculationResult] = useState<string>("");

  useEffect(() => {
    if (!display) {
      calculationArray.length = 0;
      setCalculationResult("");
    }

    let number: string = "";
    const calculationArrayParsed: (number | string)[] = [];
    calculationArray.forEach((item: number | string, index) => {
      if (typeof item == "number" || item == ",") {
        number = number + item.toString();

        if (calculationArrayParsed.length == 0) {
          calculationArrayParsed.push(parseFloat(number.replace(",", ".")));
        }

        const lastIndex = calculationArrayParsed.length - 1;
        const lastItem = calculationArrayParsed[lastIndex];

        if (typeof lastItem == "number") {
          calculationArrayParsed.pop();
          calculationArrayParsed.push(parseFloat(number.replace(",", ".")));
        } else {
          calculationArrayParsed.push(parseFloat(number.replace(",", ".")));
        }

        if (calculationArrayParsed.length > 2) {
          const resultadoSoma = handleFunction(calculationArrayParsed);
          console.log(`Resultado da soma: ${resultadoSoma}`);
          setCalculationResult(resultadoSoma.toString().replace(".", ","));
        }
      } else {
        // if(number != null) {
        //     calculationArrayParsed.push(parseFloat(number.replace(",",".")))
        // }

        const lastArrayItem: number | string =
          calculationArrayParsed[calculationArrayParsed.length - 1];

        if (typeof lastArrayItem == "number") {
          calculationArrayParsed.push(item);
          // handleFunction(calculationArrayParsed)
        }
        number = "";
        setCalculationResult(number);
      }
    });
  }, [display]);

  function handleDisplay(value: Number | string) {
    calculationArray.push(value);
    const textDisplay = calculationArray.reduce(
      (acc: string, value) => acc + value,
      "",
    );

    setDisplay(textDisplay);
  }

  function clearDisplay() {
    setDisplay("");
  }

  return (
    <DisplayContext.Provider
      value={{ display, handleDisplay, calculationResult, clearDisplay }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
