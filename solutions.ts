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

const formatCoordinate = (value: [number, number, string]): string => {
  if (typeof value[0] === "number" && typeof value[1] === "number" && typeof value[2] === "string") {
    return `Location: ${value[2]} (${value[0]}, ${value[1]})`;
  } else {
    return "Incorrect Format";
  }
};

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

// Sample Output:
("Location: Dhaka (23.81, 90.41)");
("Location: Chittagong (22.35, 91.78)");
