/*
// RECURSION

Recursion is when a function calls itself

Points to note
1. Every recursive solution needs to have a base case - a condition to terminate the recursion
2. Recursion might simplify solving a problem but it does not always translate to a faster solution. A recursive solution may be far worse compared to an iterative solution

// factorial



*/

// FIBONACCI
const fibonacci = (n: number): number => {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(5));

// FACTORIAL
const factorial = (n: number): number => {
  if (n < 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5));
