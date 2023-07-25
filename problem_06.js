function romanToInt(str) {
  let result = 0;
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  for (let i = 0; i < str.length; i++) {
    const current = roman[str[i]];
    const next = roman[str[i + 1]];
    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
}

// console.log(romanToInt("IXX"));
