const reverseString = function(str) {
    // solution - 1, using seperate variable
    let r_str = "";
    for(let i = str.length-1; i>=0; --i)
        r_str+=str[i]
    return r_str;
};

// Do not edit below this line
module.exports = reverseString;
