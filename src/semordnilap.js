function semordnilap(words) {
  const reverseStr = str => {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) newStr += str[i];
    return newStr;
  };
  const pairs = [];
  const reverseWords = {};

  for (let i = 0; i < words.length; i++) {
    const revWord = reverseStr(words[i]);
    if (reverseWords[words[i]] === revWord) pairs.push([words[i], revWord]);
    else reverseWords[revWord] = words[i];
  }
  
  return pairs;
}