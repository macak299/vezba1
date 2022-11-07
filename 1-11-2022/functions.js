/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no

function chek(a,e){
    for (i = 0; i < a.length; i++) {
        if (a[i] == e) {
            return "Yes";
        }
    }
    return "No";
}
var provera = chek([5, -4.2, 3, 7], 3);
console.log(provera);*/

/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]

function mnozenjeP(arr){
    for(i = 0; i < arr.lenght; i++){
        if(arr[i] > 0){
           arr[i] = arr[i] * 2;
        }
    }
    return arr;
}

var provera = mnozenjeP([-3, 11, 5, 3.4, -8]);
console.log(provera);*/

/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3

function findMin(arr) {
    var min = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min + ", " + i;
}
var sprovedi = findMin([4, 2, 2, -1, 6]);
console.log(sprovedi);*/

/*4. Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2

function secondS(arr){
    var s=Math.max
    for(i=0; i<arr.lenght; i++){
        if(arr[i] < s){
           s = arr[i]
        }
    }
    for(i=0;i<arr.lenght;i++){
        if(){

        }
    }
}*/

/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16

function pozitivni(arr) {
    var newarr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newarr.push(arr[i]);
        }
    }
    return newarr.reduce(function (a, b) {
        return a + b;
    });
}
var provera = pozitivni([3, 11, -5, -3, 2]);
console.log(provera);*/

/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.


function simetric(arr) {
    if (arr.length % 2 == 0) {
    var arr1 = arr.slice(0, arr.length / 2);
} else {
    var arr1 = arr.slice(0, arr.length / 2 + 1);
}
    var arr2 = arr.slice(arr.length / 2, arr.length);
    var arr3 = arr2.reverse();
    if (arr1.toString() == arr3.toString()) {
        return "The array is symmetric.";
    } else {
        return "The array isn’t symmetric.";
    }
   
}
var provera = simetric([2, 4, -2, 7, -2, 4, 2]);
console.log(provera);


7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]

unction intertwinesArrays(a, aa) {
    var arr = [];
    for (i = 0; i < a.length; i++) {
        arr.push(a[i]);
        arr.push(aa[i]);
    }
    return "[" + arr.join(", ") + "]";
}
var sprovedi = intertwinesArrays([4, 5, 6, 2], [3, 8, 11, 9]);
console.log(sprovedi);

8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
var sprovedi = concArrays([4, 5, 6, 2], [3, 8, 11, 9]);
console.log(sprovedi);

9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]


function del(e,a){
    a.splice(e);
    return a;
 // zbog čega se briše i 8?

}

var provera= del(2, [4, 6, 2, 8, 2, 2]);
console.log(provera);*/


/*10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]

function insertElem(e, i, arr) {
    if (arr.length < i ) {
        return "The position is greater than array length!";
    } 
    arr.splice(i, 0, e);
    return arr;
}
var sprovedi = insertElem(78, 3, [2, -2, 33, 12, 5, 8]);
console.log(sprovedi);*/