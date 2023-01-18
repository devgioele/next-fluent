export function singleElement<T>(obj: T | T[], index = 0): T {
  if (Array.isArray(obj)) {
    return obj[index];
  }
  return obj;
}
