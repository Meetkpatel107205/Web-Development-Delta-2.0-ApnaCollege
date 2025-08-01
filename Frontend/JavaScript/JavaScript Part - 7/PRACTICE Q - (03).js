
// ---: PRACTICE Q - (03) :---

let arrayAverage = (arr) => {

  let total = 0;
  let avg = 0;

  for(let i = 0; i < arr.length; i++)
  {
    total += arr[i];
  }

  avg = (total / arr.length);

  return avg;
}

console.log("Average of Array [1,2,3,4,5] is :",arrayAverage([1,2,3,4,5]));