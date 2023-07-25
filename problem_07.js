function secondSmall(arr) {
  arr.sort((a, b) => a - b);
  let secondSmallest = arr[1];
  return secondSmallest;
}

// console.log(secondSmall([1, 5, 36, 35, 2, 3, 2, 2]));
