// O(n) time | O(1) spce - where n is the lenght of the array
function isValidSubsequence(array, sequence) {
  // Write your code here.
  //   we are going to track the he position in both arrays
  // this is our positon in our main array and starts at zero
  let arrIndex = 0;
  //   this one will keep track of the position in the second array and starts at zero as well
  let seqIndex = 0;
  //   the loop will run while the arrayindex is less than the length of the array
  // and it will still run while the sequence index is less then the length of the sequence
  while (arrIndex < array.length && seqIndex < sequence.length) {
    //   herer if we find the element in the main array and matches the element in the sequence array
    // we will increment the position of the sequence index by one if the condition is met
    if (array[arrIndex] === sequence[seqIndex]) seqIndex++;
    // here regardless if we find a match or not we will increment the position in the main array
    arrIndex++;
  }
  //  the way to know if we found the sequence is when we reach to the end of the sequence array
  // if we reach to the end of the sequence array and we haven't match all elemenets then we didn't find the
  // match and this will return false
  return seqIndex === sequence.length;
}

// Do not edit the line below.

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, -1, 8, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [25]));
console.log(isValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 23, 6, -1, 8, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 25, 6, -1, 8, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 6, -1, 8, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -2]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [26]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 25, 22, 6, -1, 8, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 26, 22, 8]));
console.log(isValidSubsequence([1, 1, 6, 1], [1, 1, 1, 6]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10, 11, 11, 11, 11]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 10]));

// O(n) time | O(1) space - where n is the length of the array
function anotherisValidSubsequence(array, sequence) {
  // Write your code here./
  //   here we keep track of position of the elements in the sequence array
  let seqIndex = 0;
  //   here we start with the loop in the array
  for (const value of array) {
    //   here is how we break the loop in case we reach until the end of the sequence and don't have any matches
    if (seqIndex === sequence.length) break;
    // we will make the check if the sequence index is equals to the value then we have a match
    if (sequence[seqIndex] === value) seqIndex++;
  }
  //   we will return the sequence that is equals to the length of the array of lenth we are evaluating
  return seqIndex === sequence.length;
}
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8, 10]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 10]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 10]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, -1, 8, 10]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [25]));
console.log(anotherisValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 23, 6, -1, 8, 10]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 25, 6, -1, 8, 10]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 6, -1, 8, 10]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1, 10]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -2]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [26]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 25, 22, 6, -1, 8, 10]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 26, 22, 8]));
console.log(anotherisValidSubsequence([1, 1, 6, 1], [1, 1, 1, 6]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10, 11, 11, 11, 11]));
console.log(anotherisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 10]));
