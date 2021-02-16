// write a function that will add two numbers and will match the targetSum in each test case
// this solution is not the optimal one because i am iterating twice over the array
function twoNumberSum(array, targetSum) {
  // here we are makinmg i go to the value bfore the last value of the array
  for (let i = 0; i < array.length - 1; i++) {
    //   now here we declare the first vaeriablle that will be equal to array[i] meaning the value of the index position
    const firstNum = array[i];
    // the second loop will go throught the res of the array
    for (let j = i + 1; j < array.length; j++) {
      // the second variable will store the idnex position of j in the array
      const secondNum = array[j];
      //   and here  we evaluate if the sum of firstNum and secondNUm is equals to targetNum
      if (firstNum + secondNum === targetSum) {
        //   we will return the two values
        return [firstNum, secondNum];
      }
    }
  }
  //   if we never hit the two number we will return and empty array
  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoNumberSum([4, 6], 10));
console.log(twoNumberSum([4, 6, 1], 5));
console.log(twoNumberSum([4, 6], 10));
console.log(twoNumberSum([4, 6, 1, -3], 3));
console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17));
console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));
console.log(twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5));
console.log(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163));
console.log(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164));
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15));
console.log(twoNumberSum([14], 15));
console.log(twoNumberSum([15], 15));

// second soluution using a hash table

function anothertwoNumberSum(anotherarray, anothertargetSum) {
  // we start by createing a dictionary of hash table
  const nums = {};
  //   now we are going to start iterating through the array
  for (const num of anotherarray) {
    //   here are looking for the value of y in the equation
    const potencialMatch = anothertargetSum - num;
    // so if the potencialMatch is in the hash table
    if (potencialMatch in nums) {
      // we will return the potencialMatch and the num
      return [potencialMatch, num];
    } else {
      // otherwise just return the num
      nums[num] = true;
    }
  }
  //   and emtpy array if not solution is achieved
  return [];
}
console.log(anothertwoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(anothertwoNumberSum([4, 6], 10));
console.log(anothertwoNumberSum([4, 6, 1], 5));
console.log(anothertwoNumberSum([4, 6], 10));
console.log(anothertwoNumberSum([4, 6, 1, -3], 3));
console.log(anothertwoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17));
console.log(anothertwoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));
console.log(anothertwoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5));
console.log(anothertwoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163));
console.log(anothertwoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164));
console.log(anothertwoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15));
console.log(anothertwoNumberSum([14], 15));
console.log(anothertwoNumberSum([15], 15));

// the last solution which is hte most optimal solution
function optimaltwoNumberSum(optimalarray, optimaltargetSum) {
  // we sstart by sortihn the array
  optimalarray.sort((a, b) => a - b);
  //   we initial the left pointer to be equals to 0
  let left = 0;
  //   and the right pointer equals to final value of the array
  let right = optimalarray.length - 1;
  //   now we run the while loop until the left one is not surpassinfg the right one
  while (left < right) {
    //   the currentSum will be equals to the sum of array left and array right
    const currentSum = optimalarray[left] + optimalarray[right];
    // if the current sum of adding the left and right array is equals to the target sum
    if (currentSum === optimaltargetSum) {
      // /just return the left and right array
      return [optimalarray[left], optimalarray[right]];
      //   otherwise if the current sum is less than the targetSum
    } else if (currentSum < optimaltargetSum) {
      // increat the left pointer by one spot to the right
      left++;
      //   if the curretn sum is greater than the target sum
    } else if (currentSum > optimaltargetSum) {
      // decrease or move the right pointer to the left by one spot
      right--;
    }
  }
  //   regutne the empty array if no combination is met
  return [];
}

console.log(optimaltwoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(optimaltwoNumberSum([4, 6], 10));
console.log(optimaltwoNumberSum([4, 6, 1], 5));
console.log(optimaltwoNumberSum([4, 6], 10));
console.log(optimaltwoNumberSum([4, 6, 1, -3], 3));
console.log(optimaltwoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17));
console.log(optimaltwoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));
console.log(optimaltwoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5));
console.log(optimaltwoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163));
console.log(optimaltwoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164));
console.log(optimaltwoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15));
console.log(optimaltwoNumberSum([14], 15));
console.log(optimaltwoNumberSum([15], 15));
