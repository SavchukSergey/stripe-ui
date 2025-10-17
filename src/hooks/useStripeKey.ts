import { useLocalStorage } from "./useLocalStorage";

const STORAGE_KEY = "STRIPE_KEY";

export function useStripeKey() {
  return useLocalStorage(STORAGE_KEY);
}

export function getStripeKey() {
  return localStorage.getItem(STORAGE_KEY);
}

export function setStripeKey(key: string | undefined | null): void {
  if (key) {
    localStorage.setItem(STORAGE_KEY, key);
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}