const elevationArray = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const getTrappedRainwater1 = function (heights) {
  let totalWater = 0;
  for (let i = 0; i < heights.length; i++) {
    let maxLeft = 0;
    for (let j = 0; j < i; j++) {
      maxLeft = Math.max(heights[j], maxLeft);
    }
    let maxRight = 0;
    for (let k = i + 1; k < heights.length; k++) {
      maxRight = Math.max(heights[k], maxRight);
    }
    const currentWater = Math.min(maxLeft, maxRight) - heights[i];
    if (currentWater > 0) {
      totalWater += currentWater;
    }
  }

  return totalWater;
};

const getTrappedRainwater2 = function (heights) {
  let totalWater = 0;
  let left = 0;
  let right = heights.length - 1;
  let maxLeft = 0;
  let maxRight = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        totalWater += maxRight - heights[right];
      }
      right--;
    }
  }
  return totalWater;
};

console.log(getTrappedRainwater1(elevationArray));
