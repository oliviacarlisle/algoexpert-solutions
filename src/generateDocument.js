function generateDocument(characters, document) {
    const charMap = {};
    for (const char of characters) {
      if (charMap[char]) charMap[char]++;
      else charMap[char] = 1;
    }
    for (let i = 0; i < document.length; i++) {
      if (!charMap[document[i]]) return false;
      else charMap[document[i]]--;
    }
    return true;
}