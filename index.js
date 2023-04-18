function isPalindrome(word) {
  // Write your algorithm here
  // const wordInReverseArr = [];
  // for (let i = word.length - 1; i >= 0; i--) {
  //   wordInReverseArr.push(word[i]);
  // }
  // const joinedWord = wordInReverseArr.join('');
  const reversedWord = word.split('').reverse().join('');
  return reversedWord === word;
}

/* 
  Add your pseudocode here
*/
//  initialize an empty array
//  loop over array starting from index of last letter in word
// push each letter to array
//  join array to a word
// compare word from array to passed word from parameter

/*
  Add written explanation of your solution here
*/
//  create an empty array
// loop over the passed word from the parameter; from backwords to front
//  push each instance of loop,i.e the word to the created empty array
//  after loop, join the array to a single word
// return the result of comparison of the parameter and joined word

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', isPalindrome('racecar'));

  console.log('');

  console.log('Expecting: false');
  console.log('=>', isPalindrome('robot'));
}

module.exports = isPalindrome;
