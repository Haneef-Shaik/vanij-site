import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export function classNames(...classes: Array<string>): string {
  return classes.filter(Boolean).join(" ");
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
