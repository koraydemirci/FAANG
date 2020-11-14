const string = "A man, a plan, a canal: Panama";

const isValidPalindrome1 = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  const length = s.length;
  const midIndex = Math.floor(length / 2);
  const isLengthOdd = length % 2 === 1;

  let left, right;

  if (isLengthOdd) {
    left = right = midIndex;
  } else {
    left = midIndex - 1;
    right = midIndex;
  }

  while (left >= 0 && right < length) {
    if (s[left] !== s[right]) {
      return false;
    }

    left--;
    right++;
  }

  return true;
};

const isValidPalindrome2 = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

const isValidPalindrome3 = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let reverseS = s.split("").reverse().join("");
  return s === reverseS;
};

console.log(isValidPalindrome2(string));
