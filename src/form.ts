import { getFactorial } from './factorial';
import { isPrimeNumber } from './prime-number';

export function setupForm(element: HTMLFormElement) {
  element.addEventListener('submit', (e) => {
    e.preventDefault();

    const action = (e.submitter as HTMLElement).id;
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const numInput = +(formData.get('input-number') as string);

    if (action === 'prime') {
      if (isPrimeNumber(numInput)) {
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
          <div class="p-4 text-center rounded-md bg-green-50 border border-green-800">
            <p class="text-xl font-bold text-green-800">Yes</p>
            <p class="text-base text-green-800">${numInput} is a prime number</p>
          </div>
          <div class="mt-5">
            <button id="clear-button" type="button" class="cursor-poiner rounded-md block w-full text-center px-4 py-2 bg-gray-50 font-semibold text-gray-700 hover:bg-gray-100">Clear</button>
          </div>
        `;
        handleClearScreen(document.querySelector('#clear-button')!, element);
      } else {
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
          <div class="p-4 text-center rounded-md bg-red-50 border border-red-800">
            <p class="text-xl font-bold text-red-800">No</p>
            <p class="text-base text-red-800">${numInput} is not a prime number</p>
          </div>
          <div class="mt-5">
            <button id="clear-button" type="button" class="cursor-poiner rounded-md block w-full text-center px-4 py-2 bg-gray-50 font-semibold text-gray-700 hover:bg-gray-100">Clear</button>
          </div>
        `;
        handleClearScreen(document.querySelector('#clear-button')!, element);
      }
    }

    if (action === 'factorial') {
      const factorial = getFactorial(numInput);
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
        <div class="p-4 text-center rounded-md bg-indigo-50 border border-indigo-800">
          <p class="text-xl font-bold text-indigo-800">${factorial}</p>
        </div>
        <div class="mt-5">
          <button id="clear-button" type="button" class="cursor-poiner rounded-md block w-full text-center px-4 py-2 bg-gray-50 font-semibold text-gray-700 hover:bg-gray-100">Clear</button>
        </div>
      `;
      handleClearScreen(document.querySelector('#clear-button')!, element);
    }
  });
}

function handleClearScreen(element: HTMLButtonElement, form: HTMLFormElement) {
  element.addEventListener('click', () => {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = '';
    form.reset();
  });
}
