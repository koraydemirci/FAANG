const validSubPalindrome = (s, start, end) => {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

const validPalindrome = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      const firstSub = validSubPalindrome(s, left + 1, right);
      const secondSub = validSubPalindrome(s, left, right - 1);

      return firstSub || secondSub;
    }

    left++;
    right--;
  }

  return true;
};

const str = "abcdsdsd";

console.log(validPalindrome(str));
