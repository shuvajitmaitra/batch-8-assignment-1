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

const concatenateArrays = <T extends string | number>(...arrays: T[][]): T[] => {
  const res: T[] = [];
  for (const array of arrays) {
    for (const item of array) {
      res.push(item);
    }
  }

  return res;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (data: Course[], minStudents: number) => {
  let res: Course[] = [];
  for (const item of data) {
    if (item.isPublished && item.students >= minStudents) {
      res.push(item);
    }
  }
  return res;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K) => {
  if (items && items.length > 0) {
    return items.map((item) => item?.[key]);
  }
  return [];
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}
