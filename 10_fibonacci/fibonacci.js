const fibonacci = function(n) {
    n = parseInt(n);
    if(n < 0) return "OOPS";
    if(n === 0) return 0;
    const fibArr = [1, 1];
    
    for(let i = 2; i< n; ++i)
    {
        fibArr.push(fibArr[i-1]+fibArr[i-2]);
    }
    return fibArr[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
