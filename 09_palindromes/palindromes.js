const palindromes = function (str) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    const filter_str = str
                    .toLowerCase()
                    .split('')
                    .filter((e) => alphanumerical.includes(e))
                    .join('');
                    

    return filter_str === filter_str.split('').reverse().join('');
};


// Do not edit below this line
module.exports = palindromes;
