const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 10;

const findTwoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return null;
};

const findTwoSum2 = function (nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] >= 0) {
      return [hash[nums[i]], i];
    } else {
      const numberToFind = target - nums[i];
      hash[numberToFind] = i;
    }
  }

  return null;
};

console.log(findTwoSum2(numsArray, targetToFind));
