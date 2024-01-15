import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// chatgpt
export function isBase64Image(imageData: string) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
}