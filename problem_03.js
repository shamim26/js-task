function mostFrequent(arr) {
  let maxCount = 0;
  let frequent = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      frequent = arr[i];
    }
  }
  return frequent;
}

// console.log(mostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5]));
