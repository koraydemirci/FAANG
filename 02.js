const heightsArray = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const getMaxWaterContainer1 = function (heights) {
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const minHeight = Math.min(heights[i], heights[j]);
      const width = j - i;
      const area = minHeight * width;
      maxArea = Math.max(area, maxArea);
    }
  }

  return maxArea;
};

const getMaxWaterContainer2 = function (heights) {
  let p1 = 0;
  let p2 = heights.length - 1;
  let maxArea = 0;

  while (p1 < p2) {
    const height1 = heights[p1];
    const height2 = heights[p2];
    const width = p2 - p1;

    const area = Math.min(height1, height2) * width;

    maxArea = Math.max(area, maxArea);

    if (height1 <= height2) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
};

console.log(getMaxWaterContainer2(heightsArray));
