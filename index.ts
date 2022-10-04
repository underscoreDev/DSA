/*
 What is an algorithm
An algorithm is a set of well defined instructions to solve a particular problem

Characteristics of algoriths
1. Well defined inputs and output
2. each steps should be clear and unambiguous
3. Language independent

Time and space complexity
Time complexity: the amount of time taken by an algorithm to run as a function of its input size
Space complexity: the amount of memory taken by an algorithm to run as a function of its input size

How to represent complexity
By using Asymptotic notation

1. Big O notation (worst case complexity): this describes the complexity of an algorithm using algebraic terms

Characteristics of Big-O
It is expressed in terms of the input
it focuses on the big details without getting caught up in the minute details

O(n) - Linear time complexity for one loop,
O(1) - constant time complexity
O(n^2) - quadratic time complexity (for two nested loops)
O(n^3) - cubic time complexity (for three nested loops)
O(Logn) - Logarithmic if the input size reduces by half every iteration


// SPACE COMPLEXITY

O(1) - Constant space complexity e.g Sorting Algorithms- if the algorithm doesn't need extra memory,or the memory needed doesn't depend on the input size
O(n) - Linear space complexity e.g  - the extra space needed grows as the input size grows
O(Logn) - Logarithmic space complexity e.g  - the extra space needed grows but not at the same rate as the input size


BIG O of Objects and Arrays

// Objects
Constant time complexity O(1) - Insert or remove an item
Constant time complexity O(1) - Accessing a value
Linear time complexity O(n) - Searching for a value

Big O of Objects methods
1. Object.keys() - O(n) Linear time complexity
2. Object.values() - O(n) Linear time complexity
3. Object.entries() - O(n) Linear time complexity

// Arrays
Arrays are ordered collection of values
Constant time complexity O(1) - Insert or remove an item from the end
Linear time complexity O(n) - Insert or remove an item at the begining
Constant time complexity O(1) - Accessing a value
Linear time complexity O(n) - Searching for a value

Big O of Array methods
Push or pop  - O(1) Constant time complexity
shift / unshift / concat / slice / splice  - O(n) Linear time complexity
forEach, map, filter, reduce  - O(n) linear time complexity

*/

// Fibonacci Sequence

const fibonacci = (n: number): number[] => {
  const array: number[] = [0, 1];

  switch (n) {
    case 1:
      return [0];
    case 2:
      return [0, 1];
  }

  for (let i = 3; i <= n; i++) {
    const prevEle = array[array.length - 1];
    const upperPrevEle = array[array.length - 2];
    array.push(prevEle + upperPrevEle);
  }
  return array;
};
console.log(fibonacci(10));

//  Factorial of a number
//  given an integer n, find the factorial of that integer
const factorial = (n: number): number => {
  let num = 1;
  switch (n) {
    case 0:
      return num;
  }
  for (let i = 1; i <= n; i++) {
    num *= i;
  }
  return num;
};
console.log(factorial(10));

// PRIME NUMBER
const isPrime = (n: number): Boolean => {
  if (n <= 3) {
    return true;
  } else if (n % 2 !== 0 && n % n === 0 && n % 3 !== 0) {
    return true;
  }
  return false;
};

console.log(isPrime(87));
