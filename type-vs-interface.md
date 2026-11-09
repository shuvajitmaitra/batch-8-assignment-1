# Type Alias vs Interface in TypeScript

In many interviews and at the workplace, we are asked about the main differences between Type Aliases and Interfaces. In most cases, they act the same, but in some cases, they are different. In this article, we are going to learn the key differences between Type Aliases and Interfaces with proper examples.

## Type Alias

First of all, we use the `type` keyword to define a type. It comes with multiple unique features. When we need a stand-alone type, we use a **Type Alias**. For example, we use Type Aliases for unions, literals, tuples, and primitives.

**Example:**

```ts
type Status = false;
type TEmployee = "Manager" | "Developer" | "Designer";
type TTuples = [10, 12, 14];
```

## Interface

According to the documentation, interfaces handle object types, but we can also use Type Aliases for objects. Also, we should always use interfaces unless a Type Alias is specifically needed.

Interfaces provide some unique features, as we can extend an interface. We can also reinitialize an interface, and two interfaces with the same name will be merged automatically.

```ts
interface Employee {
  name: string;
  salary: number;
}

interface Manager extends Employee {
  memberCount: number;
  projects: number;
}
```

## Difference Between Type Alias and Interface

As we can see, both are capable of doing most of the type-related things, but they have some features that make them different. Using Type Aliases, we can create unions, literals, tuples, and primitives. On the other hand, using interfaces, we can extend interfaces. Also, we can reinitialize an interface with the auto-merging feature.

```ts
type Status = "active" | "inactive" | "pending";

// Not possible with interface
// interface Status = "active" | "inactive";

type UserId = string;
type Age = number;

// Interface cannot directly represent primitive aliases

type User = [string, number];

const user: User = ["Shuvajit", 25];

// Interface cannot directly define a tuple alias

type Admin = { role: "admin"; permissions: string[] };
type Customer = { role: "customer"; orders: number };

type User = Admin | Customer;

// Not possible with interface
```

**Declaration Merging:**

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// Both interfaces will be merged automatically.
```

**Type Alias Duplicate Declaration:**

```ts
type User = {
  name: string;
};

// Duplicate identifier 'User'
type User = {
  age: number;
};
```

In most cases, we can choose an interface, and where we cannot use an interface, we should use a Type Alias. Interfaces are more flexible to use, so we should use them more often.
