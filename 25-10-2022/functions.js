/*1. Write a program that calculates the maximum of two given numbers.

function max(num1, num2){
    if(num1 > num2){
        return "Maximum is num1"
    }
    else{
        return "Maximum is num2"
    }
}

var maximum = max(6, 4);
console.log(maximum);*/

/*2. Write a program that checks if a given number is odd.

function oddNmb (num){
    if(num %2 == 0){
        return "Number is odd"
    }
    else{
        return "Number is not odd"
    }
}

var number = oddNmb(47);
console.log(number);*/

/*3. Write a program that checks if a given number is a three digit long number.

function threeDig(num) {
    var string = toString(num);
    if ( string.length == 3) {
        return "Broj je trocifren";
    } else {
        return "Broj nije trocifren";
    }
}
var number = threeDig(1234);
console.log(threeDig());*/

/*4. Write a program that calculates an arithmetic mean of four numbers.

function arMean(num1, num2, num3, num4) {
    var avg = (num1 + num2 + num3 + num4) / 4;
    return "Average of given numbers is " + avg;
}
var average = arMean(3, 7, 11, 92);
console.log(average);
*/
/*5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
******

// KOMENTAR: Probaj ponovo ovaj peti zadatak da uradis, sad ti je verovatno jasno gde si pogresio i sta bi trebalo da ispravis :)

function square(num) {
    var string = "";
    for (i = 0; i < num; i++){
        for (j = 0; j < num; j++) {
            string += "*";
        }
        string += "\n";
    }
    return string;
}
var number = square(5);
console.log(number);*/

/*6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * * 


function graphic(num1, num2, num3) {
    var str1 = ""; str2 = ""; str3 = "";
    for (i = 0; i < num1; i++) {
        str1 += "*";
    }
    str1 += "\n";
    for (i = 0; i < num2; i++) {
        str2 += "*";
    }
    str2 += "\n";
    for (i = 0; i < num3; i++) {
        str3 += "*";
    }
    str3 += "\n";
    return str1 + str2 + str3;
}
var grp = graphic(5, 3, 7);
console.log(grp);*/

/*7. Write a program that calculates a number of digits of a given number.

function numDigits(num) {
    var string = num.toString();
    var numOfDig = string.length;
    return "Given number has " + numOfDig + " digits";
}
var number = numDigits();
console.log(number);*/

/*8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3

function nmbArray(arr,n,x)
    {
        var res = 0;
        for (var i=0; i<n; i++)
        {
            if (x == arr[i])
                res++;
        }
        return res;
    }
     
    var arr= [2, 4, 7, 8, 7, 7, 1]
   var  n = arr.length;
   var x = 7;
    console.log(nmbArray(arr, n, x));*/

/*9. Write a program that calculates the sum of odd elements of a given array.
function sumOdd(arr){
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return "The sum of odd numbers in given array is " + sum;
}
var sumOfOdd = sumOdd([4, 2, 3, 8, 7, 6, 5, 18]);
console.log(sumOfOdd);*/
   

/*10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.

function numOfa(string) {
    var upA=0;
    var lowA=0;
    
    for (i = 0; i < string.length; i++) {
        if (string[i] == "a") {
            lowA++;
        }
        if (string[i] == "A") {
            upA++;
        }
    }
    return "Number of appearances of lowercase a is " + lowA + " and uperrcase A is " + upA;
    
}
var str = numOfa("AbrakadAbra");
    console.log(str);*/

/*11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.

function cString(string, num) {
    var sum = "";
    for (i = 0; i < num; i++) {
        sum += string;
    }
    return sum;
}
var conString = cString("abc", 4);
console.log(concString);*/
