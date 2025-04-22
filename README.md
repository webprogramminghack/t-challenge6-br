# Challenge 1

## Simple Calculator Application with Various Arithmetic Operations

### **Description:**

Create a simple calculator application that supports various arithmetic operations such as addition, subtraction, multiplication, and division. This application should allow users to:

1. Define a `Operation` type for arithmetic operations (addition, subtraction, multiplication, division)
2. Create a `BaseInput` type for base input (here you must make `operation` key and value is the type of `Operation` )
3. Create a `NumbersInput` type for numbers input (here you must make `numbers` key anda value is an array of numbers)
4. Create an intersection type combining `BaseInput` and `NumbersInput`
5. Create a `calculate` function to perform arithmetic operations that:
   - Uses parameter destructuring
   - Checks if the input is not empty
   - Performs addition, subtraction, multiplication, and division operations
   - Returns error message if the operation is invalid

### **Example Input:**

```typescript
// Addition
const additionResult = calculate({
  operation: "add",
  numbers: [1, 2, 3],
});
console.log(`Addition: 1 + 2 + 3 = ${additionResult}`);

// Subtraction
const subtractionResult = calculate({
  operation: "subtract",
  numbers: [10, 2, 3],
});
console.log(`Subtraction: 10 - 2 - 3 = ${subtractionResult}`);

// Multiplication
const multiplicationResult = calculate({
  operation: "multiply",
  numbers: [2, 3, 4],
});
console.log(`Multiplication: 2 * 3 * 4 = ${multiplicationResult}`);

// Division
const divisionResult = calculate({
  operation: "divide",
  numbers: [20, 2, 2],
});
console.log(`Division: 20 / 2 / 2 = ${divisionResult}`);
```

### **Expected Output:**

```
Addition: 1 + 2 + 3 = 6
Subtraction: 10 - 2 - 3 = 5
Multiplication: 2 * 3 * 4 = 24
Division: 20 / 2 / 2 = 5
```

---

# Challenge 2

## Book Catalog with Generics (advanced)

## Project Description

Create a type-safe book catalog system using TypeScript generics. The system should allow adding books with different types of details while ensuring all books have basic information (title, author) and a required publication year.
**Note: You can use from previous challenge 4**

## Requirements

1. Define a generic `Book<T>` type with:
   - `title` (string)
   - `author` (string)
   - `extraDetails` (generic type `T`)
2. Make a `createBook` function, that takes a `title`, `author`, and `details` as input, and returns a `Book` object
3. Make a `createBookManager` function, that takes a generic type parameter `T` that extends `{ year: number }`. Inside the `createBookManager` function, you need to:
   - Make `books` array to store books
   - Make a `addBook` function that takes a `title`, `author`, and `details` as input and adds a new book to the `books` array
   - Make a `searchBooks` function that takes a `query` as input and returns an array of books that match the query (the search must be by `title` and `case-insensitive`)
   - Make a `countBooks` function that returns a `Promise` that resolves to the number of books in the books array (here you must use `Promise` and `setTimeout` to simulate async work, for `setTimeout` use **100ms**)

## Example Usage

### 1. Setting Up the Catalog

```typescript
type BasicDetails = {
  year: number;
  pages: number;
};

const manager = createBookManager<BasicDetails>();
```

### 2. Adding Books

```typescript
manager.addBook("TypeScript Basics", "Alice", {
  year: 2023,
  pages: 200,
});

manager.addBook("Learning React", "Bob", {
  year: 2022,
  pages: 180,
});
```

_Console Output:_

```
Added: TypeScript Basics
Added: Learning React
```

### 3. Searching Books

```typescript
const results = manager.searchBooks("typescript");
```

_Search Results:_

```javascript
[
  {
    title: "TypeScript Basics",
    author: "Alice",
    extraDetails: { year: 2023, pages: 200 },
  },
];
```

### 4. Counting Books (Async)

```typescript
await manager.countBooks();
```

_Console Output (after delay):_

```
Total books: 2
```

---

# How to Run the Test

### 1. Install Dependencies

Run the following command to install dependencies:

```
npm install
```

### 2. Run Tests

Run the tests using the following command:

```
npm run test
```

---

# Evaluation System

The evaluation for this challenge is based on the following four criteria:

### 1. Requirement Fulfillment & Correctness

### 2. Javascript Usage

### 3. Problem Solving Approach

### 4. Code Clarity

---

# How to Upload your Challange

Check this module: [click this](https://orchid-clematis-3e4.notion.site/Panduan-Penggunaan-Git-Untuk-Upload-Assignment-e2d80a19b3684f5d8f1a4209dcf85445?pvs=73)

---

## 🎉 Embrace the challenge and turn your tasks into a fun adventure—each step brings you closer to your goals! You've got this! 🚀 Remember, every small victory is a reason to celebrate! 🎈
