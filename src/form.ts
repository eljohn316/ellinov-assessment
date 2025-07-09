import { getFactorial } from './factorial';
import { isPrimeNumber } from './prime-number';

export function setupForm(element: HTMLFormElement) {
  element.addEventListener('submit', (e) => {
    e.preventDefault();

    // Getting the user input
    const action = (e.submitter as HTMLElement).id;
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const numInput = +(formData.get('input-number') as string);

    // If the selected action is "Is a prime number?"
    if (action === 'prime') {
      // Getting the result
      const primeNumber = isPrimeNumber(numInput);

      // If it is a prime number
      if (primeNumber) {
        // UI if the number is a prime number
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
          <div class="p-4 text-center rounded-md bg-green-50 border border-green-800">
            <p class="text-xl font-bold text-green-800">Yes</p>
            <p class="text-base text-green-800">${numInput} is a prime number</p>
          </div>
          <div class="mt-5">
            <button id="clear-button" type="button" class="cursor-poiner rounded-md block w-full text-center px-4 py-2 bg-gray-50 font-semibold text-gray-700 hover:bg-gray-100">Clear</button>
          </div>
        `;

        // For resetting the screen
        handleClearScreen(document.querySelector('#clear-button')!, element);
      } else {
        // UI if the number is NOT a prime number
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
          <div class="p-4 text-center rounded-md bg-red-50 border border-red-800">
            <p class="text-xl font-bold text-red-800">No</p>
            <p class="text-base text-red-800">${numInput} is not a prime number</p>
          </div>
          <div class="mt-5">
            <button id="clear-button" type="button" class="cursor-poiner rounded-md block w-full text-center px-4 py-2 bg-gray-50 font-semibold text-gray-700 hover:bg-gray-100">Clear</button>
          </div>
        `;

        // For resetting the screen
        handleClearScreen(document.querySelector('#clear-button')!, element);
      }
    }

    // If the selected action is "Find factorial"
    if (action === 'factorial') {
      // Checks for non-negative inputs
      if (numInput >= 0) {
        // Calculate the factorial of number
        const factorial = getFactorial(numInput);

        // UI for displaying the factorial result
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
          <div class="p-4 text-center rounded-md bg-indigo-50 border border-indigo-800">
            <p class="text-xl font-bold text-indigo-800">${factorial}</p>
          </div>
          <div class="mt-5">
            <button id="clear-button" type="button" class="cursor-poiner rounded-md block w-full text-center px-4 py-2 bg-gray-50 font-semibold text-gray-700 hover:bg-gray-100">Clear</button>
          </div>
        `;

        // For resetting the screen
        handleClearScreen(document.querySelector('#clear-button')!, element);
      } else {
        // UI for displaying negative inputs
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
          <div class="p-4 text-center rounded-md bg-indigo-50 border border-indigo-800">
            <p class="text-base font-medium text-indigo-800">The factorial is not defined for negative integers</p>
          </div>
          <div class="mt-5">
            <button id="clear-button" type="button" class="cursor-poiner rounded-md block w-full text-center px-4 py-2 bg-gray-50 font-semibold text-gray-700 hover:bg-gray-100">Clear</button>
          </div>
        `;

        // For resetting the screen
        handleClearScreen(document.querySelector('#clear-button')!, element);
      }
    }
  });
}

// Function responsible for resetting
function handleClearScreen(element: HTMLButtonElement, form: HTMLFormElement) {
  element.addEventListener('click', () => {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = '';
    form.reset();
  });
}
