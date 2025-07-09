import './style.css';
import { setupForm } from './form.ts';

// Setup user actions
setupForm(document.querySelector<HTMLFormElement>('form')!);
