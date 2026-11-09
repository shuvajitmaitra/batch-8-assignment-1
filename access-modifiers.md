# How Access Modifiers (`public`, `private`, `protected`, and `readonly`) Work in TypeScript OOP with Examples

## Introduction

In Object Oriented Programming, Access Modifiers are used to control class, property and method and how we can access them. Using access modifier we can protect our data and pass the data, method and properties to the child class. Typescript provide use three modifier called public, private, and protected. Also we have a another modifier called readonly modifier which is used for make the properties readable only.

## 1. Public

It is a default modifier. It allows to access the properties from anywhere. We can access it form both inside the class and the outside of the class. Also we can access from the child class.

```
class Employee {
  public name: string = "Shuvajit";
}

const employee = new Employee();
console.log(employee.name); // Shuvajit
```

## 2. Private

This modifier are used to keep secure secrete properties. It dose not allow to access out side of the class or cannot accessible for child class as well. It can use only inside of it's own class.

```
class Employee {
  private salary: number = 50000;

  getSalary() {
    return this.salary;
  }
}

const employee = new Employee();

console.log(employee.getSalary()); // 50000
// console.log(employee.salary); // Error
```

## 3. Protected

This modifier are used to keep protect our data. It allows us to access properties and methods inside of the class or access from the child classes. It dose not allow to access properties and methods outside of the class.

```
class Employee {
  protected salary: number = 50000;
}

class Manager extends Employee {
  getSalary() {
    return this.salary;
  }
}

const manager = new Manager();

console.log(manager.getSalary()); // 50000
// console.log(manager.salary); // Error
```

## 4. Readonly

This readonly modifier prevent to update the properties. after being initialized cannot modify from anywhere. We can initialize it during declaration or inside the constructor, but we cannot change it.

```
class Employee {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

const employee = new Employee(101);

console.log(employee.id); // 101

// employee.id = 102; // Error
```

## Conclusion

In Typescript OOP access modifiers are help us to implement the encapsulation. We use public to make it accessible from anywhere. Use private to use it in the inside the class. Protected are used for inheritance and readonly for preventing modification after initialization.
