import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper function to merge class names with Tailwind CSS
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to pick a random element from an array
export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
