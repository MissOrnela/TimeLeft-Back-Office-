import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventTimeLeft } from "./type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
