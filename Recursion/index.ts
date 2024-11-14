// Fibonacci: 1 1 2 3 5 8

const fib = (n: number): number => {
	if (n < 2) return 1;
	return fib(n - 1) + fib(n - 2);
};

/* 
Example: fibonacci(5)
fib(5)= fib(4) + fib(3)
      = fib(3) + fib(2) + fib(2) + fib(1)
      = fib(2) + fib(1) + fib(1) + fib(0) + fib(1) + fib(0) + 1
      = fib(1) + fib(0) + 1 + 1 + 1 + 1 + 1 + 1
      = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1
      = 8
*/
console.log(fib(5));

// Factorial: n! = n * (n - 1) * (n - 2) * ... * 1

const fact = (n: number): number => {
	if (n === 0) return 1;
	return n * fact(n - 1);
};

/* 
Example: fact(n)
fact(3) = 3 * fact(2)
        = 3 * 2 * fact(1)
        = 3 * 2 * 1 * 0
        = 6

*/

console.log(fact(3));
