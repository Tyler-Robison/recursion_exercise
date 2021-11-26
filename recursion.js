/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  // base case
  if (i === nums.length) return 1

  // normal case
  return nums[i] * product(nums, i + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, maxLength = 0, i = 0) {

  // base case
  if (i === words.length) return maxLength

  // normal case
  wordLength = words[i].length
  if (wordLength > maxLength) maxLength = wordLength
  return longest(words, maxLength, i + 1)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, count = 0) {
  // base case 
  if (i === str.length) return str

  // normal case
  if (count % 2 === 0) return everyOther(str, i + 1, count + 1)
  strArr = str.split('')
  strArr.splice(i, 1)
  str = strArr.join('')
  // pass in i instead of i + 1 b/c str is shorter
  return everyOther(str, i, count + 1)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, revStr = str, i = 0) {
  // base case
  if (str.length % 2 === 0) {
    if (i === str.length / 2) {
      return (str === revStr ? true : false)
    }
  }

  else {
    if (i === (str.length - 1) / 2) {
      return (str === revStr ? true : false)
    }
  }
  // normal case
  leftLetter = str[i]
  rightLetter = str[str.length - 1 - i]
  strArr = revStr.split('')
  strArr[i] = rightLetter
  strArr[str.length - 1 - i] = leftLetter
  revStr = strArr.join('')
  return isPalindrome(str, revStr, i + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // base case
  if (i === arr.length) return -1

  // normal case
  if (arr[i] === val) return i
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, revStr = str, i = 0) {
  // base case 
  if (str.length % 2 === 0) {
    if (i === str.length / 2) {
      return revStr
    }
  }

  else {
    if (i === (str.length - 1) / 2) {
      return revStr
    }
  }

  // normal case
  leftLetter = str[i]
  rightLetter = str[str.length - 1 - i]
  strArr = revStr.split('')
  strArr[i] = rightLetter
  strArr[str.length - 1 - i] = leftLetter
  revStr = strArr.join('')
  return revString(str, revStr, i + 1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {

  // normal case

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      arr.push(value);
    } else if (typeof value === 'object') {
      gatherStrings(value, arr)
    }
  }

  // base case
  return arr

}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low = 0, high = arr.length - 1) {

  if (high >= low) {
    mid = Math.floor((low + high) / 2)
    // check for mid = val and prevent off by 1 error
    if (arr[mid] === val) return mid
    if (arr[mid - 1] === val) return mid - 1

    // Cut off everything left of mid if have to right and vice-versa
    if (arr[mid] < val) return binarySearch(arr, val, mid + 1, high)
    if (arr[mid] > val) return binarySearch(arr, val, low, mid - 1)
  }
  return -1
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
