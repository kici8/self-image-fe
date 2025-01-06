import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// This function is a wrapper around clsx and twMerge
// It takes multiple arguments and returns a string
// of all the classes combined and ordered for Tailwind CSS

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
