const addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
const t1 = performance.now();
addUpTo(1000000000);
const t2 = performance.now();
console.log(`Tai Vo Time Elapsed: ${(t2 - t1) / 1000} seconds`);

// O(c). Constant time
const a = 1;
const b = 2;

let i = 0;
while (i < 100) {
  i += 1;
}

// O(n).
while (i < n) {
  i += n;
}

// O(n^2)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // do something
  }
}
