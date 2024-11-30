if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

var isArray = Array.isArray;

console.log(isArray([])); // true
