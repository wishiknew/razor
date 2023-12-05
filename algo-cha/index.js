// 1. Algorithmic Challenge (30 minutes):
// ● Problem Statement: Design an algorithm to find the most frequent item in an
// array of integers.
// ● Expectations:
// ● Write a function to solve the problem.
// ● Focus on code efficiency and optimization.
// ● Explain the time and space complexity of your solution.

const findMostFrequent = (array) => {
  try {
    if(Array.isArray(array) ) { // check if the input is array
      if(array.length === 0) throw new Error('zero length array')
      let freqMap = {}; // story the freq with the number
      let maxFreq = 0; // store the maximum frequency of any number
      let mostFrequent = null; // store the most frequent number
      array.forEach((curr) => {
        if(typeof curr !== 'number') throw new Error('not a number')
        if(freqMap[curr]) {
          freqMap[curr] += 1
        } else {
          freqMap[curr] = 1
        }
        if(freqMap[curr] > maxFreq) {
          maxFreq = freqMap[curr];
          mostFrequent = curr;
        } 
      })
      return mostFrequent
    }
    throw new Error('not an array');
  } catch (error) {
    return error
  }
}

const main = () => {
  // test cases
  let a = [1, 2,3, 4, 5, 6,5, 6, 6, 7];
  let b = [];
  let c = [1, 1, 2,2];
  let d = ['adsf', 6];
  let e = 'asdfaf';
  let f = [4, 2,3];

  console.log(findMostFrequent(a))
  console.log(findMostFrequent(b))
  console.log(findMostFrequent(c))
  console.log(findMostFrequent(d))
  console.log(findMostFrequent(e))
  console.log(findMostFrequent(f))
}

main();
