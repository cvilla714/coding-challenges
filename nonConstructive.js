// O(nlog) time | O(1) space - where n is the jumber of coins
function nonConstructibleChange(coins) {
  // here i am sorting the array
  coins.sort((a, b) => a - b);

  // here we start the currentChangeCreated at 0
  let currentChangeCreated = 0;
  // looping the all of the coins
  for (const coin of coins) {
    // we are evaluating if the value of the coin we are going to add the the counter is
    // greater than the counter +  then we have found the minimum amount of change we cannot create
    // an therefore we return the value
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
    // otherwise we add the value of the coin we are evaluating to the counter
    // meaning we can create the values up to this value we just evaluated
    currentChangeCreated += coin;
  }
  //   if we hit the end of the loop and didn't find the value we were looking ro
  // we simply return that value + 1
  return currentChangeCreated + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
