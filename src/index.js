module.exports = function check(str, bracketsConfig) {
  
  const arr = [];
  let result = undefined;

  str.split('').forEach(char => {
    char === arr[0] ? arr.shift() : bracketsConfig.filter(e => e.includes(char)) ? 
      arr.unshift(bracketsConfig.filter(e => e.includes(char))[0][1]) : false;

    result = arr.length === 0;
  });

  return result;
}
