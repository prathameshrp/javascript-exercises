const reverseString = function(str) {
    // solution - 1, using seperate variable
    // let r_str = "";
    // for(let i = str.length-1; i>=0; --i)
    //     r_str+=str[i]
    // return r_str;
    let reversesStr = str.split("");
    for(let i =0, j = str.length-1; i<=j; ++i, --j)
    {
        let temp = reversesStr[i];
        reversesStr[i]=reversesStr[j];
        reversesStr[j]=temp;
    }
    return reversesStr.join('');
};

// Do not edit below this line
module.exports = reverseString;
