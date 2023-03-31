const fibonacci = function(a) {
    if(a<0) return 'OOPS';
    if ((+a-2)<=0) return 1;
    return fibonacci(+a-1)+fibonacci(+a-2)
};

// Do not edit below this line
module.exports = fibonacci;
console.log(fibonacci(5))
