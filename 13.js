const string1 = "(asdasd)((((";

const minRemoveToMakeValid = function (str) {
  const arr = str.split("");
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (arr[i] === "(") {
      stack.push(i);
    } else if (arr[i] === ")" && stack.length) {
      stack.pop();
    } else if (arr[i] === ")") {
      arr[i] = "";
    }
  }

  while (stack.length) {
    const index = stack.pop();
    arr[index] = "";
  }

  return arr.join("");
};

console.log(minRemoveToMakeValid(string1));
