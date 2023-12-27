function commonCharacters(strings) {
    const map = {};
    const res = [];
  
    for (const str of strings) {
      let seenThisRound = {};
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (map[char] && !seenThisRound[char]) map[char]++;
        else if (!seenThisRound[char]) map[char]  = 1;
        if (!seenThisRound[char]) seenThisRound[char] = true;
      }
    }
    for (const key in map) {
      if (map[key] === strings.length) res.push(key);
    }
    
    return res;
}