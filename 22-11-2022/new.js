/*1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]

function replace(arr) {
    var arrsec = [];
    arrsec = function () {
    for (i = 0; i < arr.length; i++) {
        arrsec[i] = arr[i];
    }
    arrsec[0] = arr[arr.length - 1];
    arrsec[arrsec.length - 1] = arr[0];
    return arrsec;
} ();
    return "[" + arrsec.join(", ") + "]";
}
console.log(replace([4, 5, 11, 9]));*/


/*2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20*/

/*function surface(a, b) {
    var rez = function (x, y) {
        return x * y;
    };
    return rez(a, b);
}
console.log(surface(4, 5));*/

/*3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2*/

/*function count(string) {
    var str = [...string.toLowerCase()];
    var j = 0;
    str = function () {
        for (i = 0; i < string.length; i++) {
            if (str[i] === "m") {
                str[i] = "*";
                j++;
            }
        }
        return str;
    }();
    return str.join("") + ", " + j;
}
console.log(count("programMing"));*/


/*4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com*/

/*function suggestsMail(string) {
    return function () {
        return string.replace(/\s/g, ".") + "@gmail.com";
    } ();
}
console.log(suggestsMail("pera peric"));*/


/*5. Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28*/

/*function octalToDecimal(n) {
    return function () {
        var num = n;
        var dec_value = 0;
        var base = 1;
        var temp = num;
        while (temp) {
            var last_digit = temp % 10;
            temp = Math.floor(temp / 10);
            dec_value += last_digit * base;
            base = base * 8;
        }
        return dec_value;
    }();
}
console.log(octalToDecimal(34));*/ 
/*6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool!*/

/*function successCallback() {
    console.log("Your password is cool!");
}
function errorCallback() {
    console.log("Your password is invalid!");
}
function checkNumber(string) {
    if (/[0-9]/.test(string)) {
        return true;
    } else {
        return false;
    }
}
function validatePassword(pass) {
    if (pass.length > 5 && checkNumber(pass)) {
        successCallback();
    } else {
        errorCallback();
    }
    return pass;
}
console.log(validatePassword("macak299"));*/

/*7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3]

function oddElements(arr) {
    return "[" + arr.filter(function (a) {return a % 2 != 0}).join(", ") + "]";
}
console.log(oddElements([2, 8, 11, 4, 9, 3]));*/
