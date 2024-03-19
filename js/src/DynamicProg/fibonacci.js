//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations1 = 0;
let calculations2 = 0;
let calculations3 = 0;
function fibonacci(n) {
  //O(2^n)
  calculations1++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster() {
  //O(n)
  let cache = {};
  return function fib(n) {
    calculations2++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    calculations3++;
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

const fasterFib = fibonacciMaster();

console.log("Slow: ", fibonacci(35));
console.log("we did " + calculations1 + " calculations");
console.log("DPv1: ", fasterFib(35));
console.log("we did " + calculations2 + " calculations");
console.log("DPv2: ", fibonacciMaster2(35));
console.log("we did " + calculations3 + " calculations");
