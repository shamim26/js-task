function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > 0) {
      sum += element;
    }
  }
  return sum;
}

// console.log(positiveSum([2, -5, 10, -3, 7]));
