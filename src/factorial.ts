export function getFactorial(num: number): number {
  // Base case
  if (num === 0) {
    return 1;
  } else {
    // As long as base case is not satisfied keep calling this.
    return num * getFactorial(num - 1);
  }
}
