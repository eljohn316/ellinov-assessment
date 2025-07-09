/**
 * Key characteristics of prime numbers:
 *  - Greater than 1
 *  - Exactly two factors: 1 and the number itself
 */

export function isPrimeNumber(num: number) {
  if (num === 1 || num < 1) return false;
  // Since there are only two factors of a prime number: 1 and the number itself

  // Test factors starts at 2 up to num - 1
  let testFactor = 2;

  // Only do the testing if testFactor is less than num
  while (testFactor < num) {
    // Check if num is divisible by the current testFactor
    if (num % testFactor === 0) {
      // Return false since we have found another factor.
      // No need to proceed to the next
      return false;
    }
    // Increment testFactor to proceed to the next test
    testFactor = testFactor + 1;
  }
  // Return true, since no other factors are found.
  return true;
}
