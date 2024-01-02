function majorityElement(array) {
  let count = 0;
  let answer;

  for (const num of array) {
    if (count === 0) answer = num;
    if (num === answer) count++;
    else count--;
  }

  return answer;
}