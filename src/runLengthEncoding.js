function runLengthEncoding(string) {
    let encoded = [];
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      count++; // count current letter
      if (i === string.length - 1) { // last character
        encoded.push(`${count}${string[i]}`);
      } else if (string[i + 1] === string[i]) { // next character equals current character
        if (count === 9) {
          encoded.push(`${count}${string[i]}`);
          count = 0;
        } 
      } else { // next character is different
        encoded.push(`${count}${string[i]}`);
        count = 0;
      }
    }
  
    return encoded.join('');
}