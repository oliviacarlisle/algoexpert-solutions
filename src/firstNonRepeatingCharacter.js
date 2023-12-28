function firstNonRepeatingCharacter(string) {
  const seen = {};
  for (let i = 0; i < string.length; i++) { // build char  map
    if (seen[string[i]]) seen[string[i]]++;
    else seen[string[i]] = 1;
  }
  for (let i = 0; i < string.length; i++) {
    if (seen[string[i]] === 1) return i;
  }
  return -1;
}