const removeFromArray = function(arr, ...elements) {
    // let c_arr = arr;
    // for(let element of elements)
    // {
    // let c_arr = arr.filter(function (e) {
    //     e===element;
    // });

    // }
    // return c_arr;
    return arr.filter(val => !elements.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
