function caesarCipherEncryptor(string, key) {
  key = key % 26;
  let encStr = "";
  const lastLetter = 'z'.charCodeAt(0);
  for (let i = 0; i < string.length; i++) {
    let newCode = string.charCodeAt(i) + key;
    if (newCode > lastLetter) newCode -= 26;
    encStr += String.fromCharCode(newCode);
  }

  return encStr;
}