module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketMap = new Map(bracketsConfig);

  for (let char of str) {
    if (bracketMap.has(char)) {
      if (stack.length > 0 && stack[stack.length - 1] === char && bracketMap.get(char) === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      if (stack.length === 0 || bracketMap.get(stack.pop()) !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
