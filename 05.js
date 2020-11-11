const string = "abaaaaa";

// Time: O(N^2);
// Space: O(N)

const lengthOfLongestSubstring1 = function (s) {
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    let hash = {};
    let currentMax = 0;
    for (let j = i; j < s.length; j++) {
      const currentChar = s[j];
      if (hash[currentChar]) {
        break;
      } else {
        hash[currentChar] = true;
        currentMax += 1;
      }
    }
    longest = Math.max(longest, currentMax);
  }

  return longest;
};

const lengthOfLongestSubstring2 = function (s) {
  let left = 0;
  let right = 0;
  const hash = {};
  let longest = 0;

  while (right < s.length) {
    const currentChar = s[right];
    if (hash[currentChar] >= left) {
      left = hash[currentChar] + 1;
    }
    hash[currentChar] = right;

    longest = Math.max(longest, right - left + 1);
    right++;
  }

  return longest;
};

console.log(lengthOfLongestSubstring2(string));
