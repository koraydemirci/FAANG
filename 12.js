const string = "{()[]}";

const parens = {
  "{": "}",
  "(": ")",
  "[": "]",
};

var isValid = function (str) {
  const stack = [];

  for (let s of str) {
    if (parens[s]) {
      stack.push(s);
    } else {
      const leftParen = stack.pop();
      const rightParen = parens[leftParen];
      if (rightParen !== s) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid(string));
