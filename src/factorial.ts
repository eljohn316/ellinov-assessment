export function getFactorial(num: number): number {
  if (num === 0) {
    return 1;
  } else {
    return num * getFactorial(num - 1);
  }
}
