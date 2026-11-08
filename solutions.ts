const multiplyValue = (value: number, multiplier?: number): number => {
  if (Number(multiplier) && multiplier !== undefined) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};

const processInput = (value: string | number | boolean): string | number | boolean | undefined => {
  if (typeof value === "undefined" || typeof value === null) {
    return;
  }
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};
