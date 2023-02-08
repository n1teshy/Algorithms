function matchStr(text, pattern) {
  const LPS = getLPS(pattern);
  let startMatchIndex = -1;
  const matches = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === pattern[startMatchIndex + 1]) {
      if (startMatchIndex === pattern.length - 2) {
        matches.push([i + 1 - pattern.length, i + 1]);
        startMatchIndex = -1;
      } else {
        startMatchIndex++;
      }
    } else {
      startMatchIndex = LPS[startMatchIndex + 1];
    }
  }
  return matches;
}

function getLPS(str) {
  const arr = [-1];
  let lastMatchIndex = -1;

  for (let i = 1; i < str.length; i++) {
    arr.push(-1);
    if (str[i] === str[lastMatchIndex + 1]) {
      arr[i] = ++lastMatchIndex;
    } else {
      lastMatchIndex = -1;
    }
  }
  return arr;
}
const text = "abcdefgyoloxyz";
console.log(
  matchStr(text, "yolo").map((indices) =>
    text.substring(indices[0], indices[1])
  )
);
