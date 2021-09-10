/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, len=0) {
  if(i === words.length) return len;
  len = Math.max(words[i].length, len);
  return longest(words, i + 1, len);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, word="") {
  if(i >= str.length) return word;
  return str[i] + everyOther(str, i + 2, word);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
let left = i;
let right = str.length - i - 1
if(left >= right ) return true;
if(str[left] !== str[right]) return false;

return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if(i === arr.length) return -1;
  if(arr[i] === val) return i;
  return findIndex(arr, val, i + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, newStr = "") {
  if(i < 0) return newStr;
  return str[i] + revString(str, i - 1, newStr);

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
let newArr = [];
for(let key in obj){
  if(typeof obj[key] === "string") newArr.push(obj[key]);
  if(typeof obj[key] === "object") newArr.push(...gatherStrings(obj[key]));
}
return newArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if(left > right) return -1 

  let midIdx = Math.floor((right + left) / 2);

  if(arr[midIdx] === val) return midIdx;

  if(arr[midIdx] < val){
    return binarySearch(arr, val, midIdx + 1, right);
  }

  return binarySearch(arr, val, left, midIdx - 1);

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
