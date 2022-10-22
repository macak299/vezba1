/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input: e = 3, a = [5, -4.2, 18, 7]
Output: no
var a = [5, -4.2, 3, 7];
aa = [5, -4.2, 18, 7]
var e = 3;

for(e in aa){
    console.log("Yes");
}
for(var d in a) {
    console.log("No");
}*/
/*Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
var arr =[-3, 11, 5, 3.4, -8];
for (var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        arr[i]= arr[i]*2
    }
    console.log(arr[i]);
}*/
/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
var arr = [4, 2, 2, -1, 6];
var min =arr[0];
var index =0;
for(var i= 0; i < arr.length; i ++){
    if(min > arr[i]){
        min = arr[i]; 
        index=i;
    }
}
console.log(min + "," + index);*/
/*4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
var arr = [4, 2, 2, -1, 6];
var min =arr[0];
var secondMin =arr[0];

for(var i= 0; i < arr.length; i ++){
    if(min > arr[i]){
        min = arr[i];      
    }
}
for(var i= 0; i < arr.length; i ++){
    if(secondMin > arr[i] && secondMin > min){
        secondMin = arr[i];      
    }
}

console.log(secondMin);*/
/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
var arr = [3, 11, -5, -3, 2];
sum =0;

for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        sum += arr[i];
    }
}
console.log(sum);*/

/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
var arr = [2, 4, -2, 7, -2, 4, 2];
var syim =true;
for(i = 0; i < arr.length; i++){
    if(arr [i] != arr[arr.length -1 - i]){
        sym = false;
    }
}
if (sym == true) {
console.log("Niz je simetričan");
}
else {
    console.log("Niz nije simetričan");
}*/



/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var a= [4, 5, 6, 2];
var b = [3, 8, 11, 9];
for (var i= 0; i < a.lenght; i++){
   console.log(a[i]);
   console.log(b[i]);
}*/

/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var a =[4, 5, 6, 2];
var b= [3, 8, 11, 9];
for (var i = 0; i < a.lenght; i++){
    console.log(a[i]);
}
for(var j = 0; j < b.lenght; j++){
    console.log(b[j]);       
}*/
/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/

var e= 2;
var a= [4, 6, 2, 8, 2, 2];
var noviNiz=[];
for(i = 0; i< a.lenght; i++){
    if(a[i] =! e){
        noviNiz.push(a[i]);
    }
}
for(i = 0; i< noviNiz.lenght; i++){
        noviNiz.push(a[i]);
    }

/*10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/
var e = 78; p = 3; a = [2, -2, 33, 12, 5, 8]; newA = [];
if (p > a.length) {
    console.log("Error! New element index is greater than array's length");
} else {
    for (i = 0; i < p; i++) {
        newA.push(a[i]);
    }
    newA.push(e);
    for (i = p + 1; i < a.length + 1; i++) {
        newA.push(a[i-1]);
    }
}
for (i = 0; i < a.length; i++) {
    console.log(a[i]);
}
console.log("********************************");
for (j = 0; j < newA.length; j++) {
    console.log(newA[j]);
}
console.log("[");
console.log(...newA);
console.log("]");
console.log("[" + newA.join(', ') + "]");