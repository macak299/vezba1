/*1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity]
Output: [1, 21, 42, 1000]
function convert(arr){
    for (i=0; i< arr.lenght; i++){
        arr[i]=parseInt(arr[i]);
    }
    nums = arr.filter(Number);
        return nums;
}
var provera = convert(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(provera);



*/
/*
2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: “015false-2247”

function join(arr) {
    newarr = [];
    for ( i = 0; i < arr.length; i++) {
        if (!undefined(arr[i]) && arr[i] != Infinity && arr[i] != null && arr[i] != isNaN) {
            newarr.push(arr[i]);
        }
    }
    string = "";
    for ( i = 0; i < newarr.length; i++) {
            string += newarr[i];
        
    }
    return string;
}
var provera = join([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(provera);

3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: [15, -22, 47]
function filter(arr) {
    num = arr.filter(Number);
    return "[" + num.join(", ") + "]";
}
var provera = filter([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(provera);
*/

/*4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
Output: 3

function kalk(arr) {
    var newar = [];
    for (i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
        newar.push(arr[i]);
    }
    }
    console.log(newar);
    return newar.length;
}
var provera = kalk([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(provera);*/

/*5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
Output: 2
function kalkf(arr) {
    var newar = [];
    for (i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) {
        newar.push(arr[i]);
    }
    }
    num = newar.filter(Number);
    return num.length;
}
var provera = kalkf([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(provera);*/
