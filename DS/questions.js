// write a function that takes a number n and returns the sum of all numbers from 1 to n
function summation(n) {
  return (n * (n + 1)) / 2;
}

console.log(summation(10));

// write a function to find an element in an array
function findElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return true;
    }
  }
  return false;
}

// write a function to find an element in an array EFFICIENTLY
console.log(findElement([1, 2, 3, 4, 5], 6));

function findElement(arr, x) {
  return arr.includes(x);
}

console.log(findElement([1, 2, 3, 4, 5], 5));

// write a function to count the number of digits in a number
function countNumberOfDigits(num) {
  let res = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    res++;
  }
  return res;
}

console.log(countNumberOfDigits(1012));

// write a function to check if a number is a palindrome
function isPalindromeNumber(num) {
  const str = num.toString();
  return str === str.split("").reverse().join("");
}

console.log(isPalindromeNumber(101));

// write a function to check if a number is a palindrome EFFICIENTLY
function isPalindromeNumber(num) {
  let reverse = num % 10;
  let n = Math.floor(num / 10);

  while (n > 0) {
    const rem = n % 10;
    n = Math.floor(n / 10);
    reverse = reverse * 10 + rem;
  }

  return reverse === num;
}

console.log(isPalindromeNumber(1012));

// write a function to find the factorial of a number using recursion
function factorial(n) {
  return n === 1 || n === 0 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5));

// write a function to find the factorial of a number using iteration
function factorial(n) {
  let res = 1;
  for (let i = n; i > 0; i--) {
    res = res * i;
  }
  return res;
}

console.log(factorial(0));

// write a function to find the trailing zeroes in a factorial of a number
function findTralingZeroesFactorial(num) {
  let res = 0;

  for (let i = 5; i <= num; i = i * 5) {
    res = res + Math.floor(num / i);
  }
  return res;
}

console.log(findTralingZeroesFactorial(100));

// write a function to find the hcf of two numbers
function hcf(a, b) {
  let res = 1;
  for (let i = Math.min(a, b); i > 1; i--) {
    if (a % i === 0 && b % i === 0) {
      res = i;
      break;
    }
  }
  return res;
}

console.log(hcf(6, 12));

// write a function to find the hcf of two numbers using recursion (EUCLIDEAN ALGORITHM)
function hcf(a, b) {
  return b === 0 ? a : hcf(b, a % b);
}

console.log(hcf(6, 12));

// write a function to find the lcm of two numbers
function lcm(a, b) {
  let res = Math.max(a, b);
  for (i = Math.max(a, b); i > 1; i--) {
    if (i % a === 0 && i % b === 0) {
      res = i;
      break;
    }
  }
  return res;
}

console.log(lcm(6, 12));

//  write a function to find the lcm of two numbers using EUCLIDEAN ALGORITHM
function hcf(a, b) {
  return b === 0 ? a : hcf(b, a % b);
}

function lcm(a, b) {
  return (a * b) / hcf(a, b);
}

console.log(lcm(6, 12));

// write a function to check if a number is prime
function isPrime(n) {
  let res = true;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      res = false;
      break;
    }
  }
  return res;
}

console.log(isPrime(7));

// write a function to check if a number is prime EFFICIENTLY
function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2 || n === 3) {
    return true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(15));

// Write a function to print the prime factors of a number
function getPrimeFactors(n) {
  for (let i = n - 1; i > 0; i--) {
    if (isPrime(i) && n % i === 0) console.log(i);
  }
}

console.log(getPrimeFactors(1092));

// Write a function to print the prime factors of a number EFFICIENTLY (SIEVE OF ERATOSTHENES)
function getPrimeFactors(n) {
  const arr = new Array(n + 1).fill(true);
  let j = 1;
  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i + i; j <= n; j = j + i) {
        arr[j] = false;
      }
    }
  }
  console.log(arr);
}

getPrimeFactors(9);

// Write a function to print the divisors of a number
function printDivisors(n) {
  for (let i = n; i > 0; i--) {
    if (n % i === 0) console.log(i);
  }
}

console.log(getDivisors(50));

// Write a function to print the divisors of a number EFFICIENTLY
function printDivisors(n) {
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
      console.log(n / i);
    }
  }
}

printDivisors(50);

// Write a function to find the power of a number
function getPowerOfANumber(x, n) {
  let res = x;
  for (let i = 2; i <= n; i++) {
    res = res * x;
  }
  return res;
}

console.log(getPowerOfANumber(2, 3));

// Write a function to find the power of a number EFFICIENTLY (COMPUTING POWER IN LOGARITHMIC TIME)
function getPowerOfANumber(x, n) {
  if (n === 1) {
    return x;
  }
  return n % 2 === 0
    ? getPowerOfANumber(x, Math.floor(n / 2)) *
        getPowerOfANumber(x, Math.floor(n / 2))
    : getPowerOfANumber(x, Math.floor(n / 2)) *
        getPowerOfANumber(x, Math.floor(n / 2)) *
        x;
}

console.log(getPowerOfANumber(2, 3));

// find log2(n) in O(log n) time
function findLog2(n) {
  return n === 1 ? 0 : 1 + findLog2(Math.floor(n / 2));
}

console.log(findLog2(4));

// Write a function to print the binary representation of a number
function printBinary(n) {
  if (n === 0) return;
  printBinary(Math.floor(n / 2));
  console.log(n % 2);
}

printBinary(5);

// Write a function to print the numbers from n to 1
function printNumbers(n) {
  if (n === 0) return;
  console.log(n);
  printNumbers(n - 1);
}

printNumbers(5);

// Write a function to print the numbers from 1 to n
function printNumbers(n) {
  if (n === 0) return;
  printNumbers(n - 1);
  console.log(n);
}

printNumbers(5);

// write a function to check if a string is a palindrome (recursion)
function checkPalinedrome(str) {
  const length = str.length;
  if (length === 0 || length === 1) {
    return true;
  }

  return (
    str[0] === str[length - 1] && checkPalinedrome(str.substring(1, length - 1))
  );
}

console.log(checkPalinedrome("abbd"));

// write a function to calculate the sum of digits of a number
function sumOfDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(1234));
// write a function to find the index of the largest element in an array
function findLargest(arr) {
  let largestIndex = 0;
  for (i = 1; i < arr.length; i++) {
    if (arr[largestIndex] < arr[i]) {
      largestIndex = i;
    }
  }
  return largestIndex;
}

console.log(findLargest([1, 2, 3, 4, 5]));

// write a function to check if an array is sorted
function isSorted(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1]));

// write a function to reverse an array
function reverse(arr) {
  const l = arr.length;
  for (i = 0; i < l / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[l - 1 - i];
    arr[l - 1 - i] = temp;
  }
  return arr;
}

console.log(reverse([1, 2, 3, 4, 5]));

// shift all the zeroes to the end of the array
function getZeroAtTheEnd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  return arr;
}

console.log(getZeroAtTheEnd([8, 0, 5, 0, 0, 7]));

// write a function to find the unique number in an array
function getUniqueNumber(arr) {
  let writeIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[writeIndex]) {
      writeIndex++;
      arr[writeIndex] = arr[i];
    }
  }
  return arr.slice(0, writeIndex + 1);
}
