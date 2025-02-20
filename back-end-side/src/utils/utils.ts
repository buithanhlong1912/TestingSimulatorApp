export function convertValuesToNumbers<T extends Record<string, string>>(obj: T): Record<string, number> {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, parseFloat(value)])
    );
  }