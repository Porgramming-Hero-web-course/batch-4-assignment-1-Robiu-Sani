function validateKeysTest(object: t, keys: (keyof t)[]): boolean {
  return keys.every((key) => key in object);
}
