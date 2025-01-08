import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function toSnakeCase(name) {
    return encodeURIComponent(name.replaceAll(" ", "_"));
}

export function getTitle(content) {
    return content.split('\n')[0].substring(1).trimStart();
}
