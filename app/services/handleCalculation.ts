export default function handleFunction(array: any[]) {
  const detectedSum: number[] = [];
  const detectedSub: number[] = [];
  const detectedMult: number[] = [];
  const detectedDiv: number[] = [];
  const detectedFunctions: { index: number; item: any }[] = [];

  array.forEach((item, index) => {
    if (item == "+") {
      detectedSum.push(index);
    }
    if (item == "-") {
      detectedSub.push(index);
    }
    if (item == "x") {
      detectedMult.push(index);
    }
    if (item == "/") {
      detectedDiv.push(index);
    }

    if (typeof item == "string") {
      detectedFunctions.push({
        index,
        item,
      });
    }
  });

  let acc: number | null = null;

  detectedMult.forEach((multIndex, index) => {
    const lastValue = array[multIndex + 1];
    if (acc == null) {
      const firstValue = array[multIndex - 1];
      acc = firstValue * lastValue;
    } else {
      acc = acc * lastValue;
    }
  });

  detectedDiv.forEach((divIndex, index) => {
    const lastValue = array[divIndex + 1];
    if (acc == null) {
      const firstValue = array[divIndex - 1];
      acc = firstValue / lastValue;
    } else {
      acc = acc / lastValue;
    }
  });
  detectedSum.forEach((sumIndex, index) => {
    const lastValue = array[sumIndex + 1];
    console.log(index);
    if (acc == null) {
      const firstValue = array[sumIndex - 1];
      console.log(`Primeiro Valor: ${firstValue}`);
      acc = firstValue + lastValue;
    } else {
      acc = acc + lastValue;
    }
  });
  detectedSub.forEach((subIndex, index) => {
    const lastValue = array[subIndex + 1];
    console.log(index);
    if (acc == null) {
      const firstValue = array[subIndex - 1];
      console.log(`Primeiro Valor: ${firstValue}`);
      acc = firstValue - lastValue;
    } else {
      acc = acc - lastValue;
    }
  });

  if (acc == null) {
    return "";
  }
  return acc;
}
