/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    d = (n+"").split("")
    sort(d)
    let dnum0 = parseInt (d[0])
    let dnum1 = parseInt (d[d.length-1])
    return dnum1 - dnum0

};