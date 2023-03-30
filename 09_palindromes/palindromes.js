const palindromes = function (string) {
    const arr = string.toUpperCase().split('');
   let filteredArr =  arr.filter(e=> { 
  if (e==='.' || e===' '||e===','||e==='!') return false;
  else return true;
})
    
   let reversedArr = [];
    for (let i=filteredArr.length-1; i>=0; i--) {
     reversedArr.push(filteredArr[i])
    }
    let test = true;
    for (i=0; i<reversedArr.length; i++) {
        if (reversedArr[i]!==filteredArr[i]) {
        test = false;
        break;
        }
    }
    return test;
};

console.log(palindromes('Animal loots foliated detail of stool lamina.'))
// Do not edit below this line
module.exports = palindromes;

