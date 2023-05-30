// new Set([1, 1, 2, 2, 3, 4]); // 1,2,3,4

// ******************************************************************

// [...new Set("referee")].join(""); // ref

// ******************************************************************

// let m = new Map();
// m.set([1, 2, 3], true);
// m.set([1, 2, 3], false);

//0: {Array(3) => true}
//1: {Array(3) => false}

// ******************************************************************

// const hasDuplicate = (arr) => new Set(arr).size !== arr.length;
// console.log(hasDuplicate([1, 3, 2, 1]));
// console.log(hasDuplicate([1, 5, -1, 4]));

// ******************************************************************
// Write a function called vowelCount which accepts a string and
// returns a map where the keys are numbers and the values are the count of
// the vowels in the string.

const vowelCount = (string) => {
  const vowels = "aeiou";
  let map = new Map();

  [...string].forEach((el) => {
    let lowerCaseLetter = el.toLowerCase();
    if (vowels.indexOf(lowerCaseLetter) !== -1) {
      if (map.has(lowerCaseLetter)) {
        map.set(lowerCaseLetter, map.get(lowerCaseLetter) + 1);
      } else {
        map.set(lowerCaseLetter, 1);
      }
    }
  });
  return map;
};
console.log(vowelCount("AwEsome"));
console.log(vowelCount("Colt"));

// ******************************************************************

// ******************************************************************

// ******************************************************************

// ******************************************************************

// ******************************************************************
