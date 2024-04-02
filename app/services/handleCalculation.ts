export default function handleFunction(array: any[]) {
  const detectedSum: number[] = [];
  const detectedSub: number[] = [];
  const detectedMult: number[] = [];
  const detectedDiv: number[] = [];
  const multDiv: { index: number; function: string }[] = [];
  const sumSub: { index: number; function: string }[] = [];

  array.forEach((item, index) => {
    if (item == "+") {
      detectedSum.push(index);
      sumSub.push({
        index,
        function: item
      })
    }
    if (item == "-") {
      detectedSub.push(index);
      sumSub.push({
        index,
        function: item
      })
    }
    if (item == "x") {
      detectedMult.push(index);
      multDiv.push({
        index,
        function: item
      })
    }
    if (item == "/") {
      detectedDiv.push(index);
      multDiv.push({
        index,
        function: item
      })
    }

    // if (typeof item == "string") {
    //   multDiv.push({
    //     index,
    //     function: item,
    //   });
    // }
  });



  let acc: number | null = null;

  multDiv.sort((a, b) => a.index - b.index)

  multDiv.forEach(calc => {
    if (calc.function == "x"){
      const lastValue = array[calc.index + 1];
      if (acc == null) {
        const firstValue = array[calc.index - 1];
        acc = firstValue * lastValue;
      } else {
        acc = acc * lastValue;
      }
    } else {
      const lastValue = array[calc.index + 1];
      if (acc == null) {
        const firstValue = array[calc.index - 1];
        acc = firstValue / lastValue;
      } else {
      acc = acc / lastValue;
      }
    }
  })

  sumSub.forEach(calc => {
    if(calc.function == "+") {
      const lastValue = array[calc.index + 1];
      if (acc == null) {
        const firstValue = array[calc.index - 1];
        console.log(`Primeiro Valor: ${firstValue}`);
        acc = firstValue + lastValue;
      } else {
        acc = acc + lastValue;
      }
    } else {
      const lastValue = array[calc.index + 1];
      if (acc == null) {
        const firstValue = array[calc.index - 1];
        console.log(`Primeiro Valor: ${firstValue}`);
        acc = firstValue - lastValue;
      } else {
        acc = acc - lastValue;
      }
    }
  })


  // detectedMult.forEach((multIndex, index) => {
  //   const lastValue = array[multIndex + 1];
  //   if (acc == null) {
  //     const firstValue = array[multIndex - 1];
  //     acc = firstValue * lastValue;
  //   } else {
  //     acc = acc * lastValue;
  //   }
  // });

  // detectedDiv.forEach((divIndex, index) => {
  //   const lastValue = array[divIndex + 1];
  //   if (acc == null) {
  //     const firstValue = array[divIndex - 1];
  //     acc = firstValue / lastValue;
  //   } else {
  //     acc = acc / lastValue;
  //   }
  // });
  // detectedSum.forEach((sumIndex, index) => {
  //   const lastValue = array[sumIndex + 1];
  //   console.log(index);
  //   if (acc == null) {
  //     const firstValue = array[sumIndex - 1];
  //     console.log(`Primeiro Valor: ${firstValue}`);
  //     acc = firstValue + lastValue;
  //   } else {
  //     acc = acc + lastValue;
  //   }
  // });
  // detectedSub.forEach((subIndex, index) => {
  //   const lastValue = array[subIndex + 1];
  //   console.log(index);
  //   if (acc == null) {
  //     const firstValue = array[subIndex - 1];
  //     console.log(`Primeiro Valor: ${firstValue}`);
  //     acc = firstValue - lastValue;
  //   } else {
  //     acc = acc - lastValue;
  //   }
  // });

  if (acc == null) {
    return "";
  }
  return acc;
}
