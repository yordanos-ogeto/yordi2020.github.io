"use strict";
/**
 * 
 * @param {Number} x - integer 1 
 * @param {Number} n - integer 2
 * @returns {Number} result of x to the n
 */
function pow(x, n) {
    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}