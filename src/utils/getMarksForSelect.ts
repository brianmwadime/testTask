
const getMarksForSelect = (minValue: number, maxValue: number, step?: number): { value: number, label: string }[] => {
  const currentStep = step ? step : maxValue > 50 ? 10 : 5;
  const marks = [];
  let currentMarkValue = minValue;

  // TODO max Iteration === 4

  while (currentMarkValue <= maxValue) {
    marks.push({
      value: currentMarkValue,
      label: `${currentMarkValue}%`,
    });
    currentMarkValue += currentStep;
    if(currentMarkValue >= maxValue) {
      marks.push({
        value: maxValue,
        label: `${maxValue}%`,
      });
    }
  }
  return marks;
};

export default getMarksForSelect;
