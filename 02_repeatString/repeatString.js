const repeatString = function(str, num) {
    if(num < 0) return 'ERROR'
    r_str="";
    for(let i = 0; i<num; ++i)
        r_str+=str;
    return r_str;
};

// Do not edit below this line
module.exports = repeatString;
