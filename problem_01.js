function reverseStr(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    const element = str[i];
    reverse += element;
  }
  return reverse;
}

// console.log(reverseStr("hello world"));