const string1 = "ab#z";
const string2 = "###az#z";

const modifyString = function (string) {
  const output = [];

  for (let s of string) {
    if (s === "#") {
      output.pop();
    } else {
      output.push(s);
    }
  }

  return output;
};

const backspaceCompare1 = function (S, T) {
  const modifiedS = modifyString(S);
  const modifiedT = modifyString(T);

  if (modifiedS.length !== modifiedT.length) {
    return false;
  }

  for (let i = 0; i < modifiedT.length; i++) {
    if (modifiedT[i] !== modifiedS[i]) {
      return false;
    }
  }

  return true;
};

var backspaceCompare2 = function (S, T) {
  let p1 = S.length - 1;
  let p2 = T.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === "#" || T[p2] === "#") {
      if (S[p1] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;
          if (S[p1] === "#") {
            backCount += 2;
          }
        }
      }

      if (T[p2] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;
          if (T[p2] === "#") {
            backCount += 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false;
      }
      p1--;
      p2--;
    }
  }

  return true;
};

console.log(backspaceCompare2(string1, string2));
