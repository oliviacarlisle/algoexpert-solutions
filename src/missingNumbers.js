function missingNumbers(nums) {
    const output = [];
    const uniqueNums = new Set(nums);
    for (let i = 1; i < nums.length + 3; i++) {
      if (!uniqueNums.has(i)) output.push(i);
    }
    return output;
}