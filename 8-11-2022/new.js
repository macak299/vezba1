/*1. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/

/*function rotacija(arr, n) {
    var newar = arr.slice(n, arr.length);
    var arr2 = arr.slice(0, n);
    return "[" + newar.join(", ") + ", " + arr2.join(", ") + "]";
}
var provera = rotacija([1,2,3,4,5,6], 2);
console.log(provera);*/

/*2. Write a function that takes a number and returns array of its digits.*/

/*function retArr(n) {
    var string = n.toString();
    var arr = [];
    for (i = 0; i < string.length; i++) {
        arr[i] = n % 10;
        n = Math.trunc(n / 10);
    }
    arr.reverse();
    return "[" + arr.join(", ") + "]";
}
var provera = retArr(289);
console.log(provera);*/

/*3. Write a program that prints a multiplication table for numbers up to 12.*/

/*function multitable() {
    var result = '\n';
    for (var i = 1; i < 13; i++) {
        for (var j = 1; j < 13; j++) {
            result =  result + (i * j) + ' ';
        }
        result += '\n';
    }
    return result;
}
var provera = multitable();
console.log(provera);*/

/*4. Write a function to find the maximum element in array of numbers. Filter out all non-number
elements.*/

/*function maxmin(arr) {
   var newar = [];
   for(i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            newar.push(arr[i]);
        }
   }
   var max = Math.max(...newar);
    return "[" + max + "]";
}
var provera = maxmin(["smcz", 2, 44, 36, false, 1, 105]);
console.log(provera);*/


/*5. Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.*/

/*function maxmin(arr) {
    var newar = [];
    for(i = 0; i < arr.length; i++) {
         if (typeof arr[i] == 'number') {
             newar.push(arr[i]);
         }
    }
    var max = Math.max(...newar);
    var min = Math.min(...newar);
    var arr1 = [min, max];
     return "[" + arr1.join(", ") + "]";
 }
 var provera = maxmin(["smcz", 2, 44, 36, false, 1, 105]);
 console.log(provera);*/

 /*6. Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza kada su brojevi
poređani od najmanjeg do najvećeg ako niz ima neparan broj elemenata. Ako ima paran
broj onda se medijana definiše kao aritmetička sredina dve srednje vrednosti).*/

/*function srednjiniz(arr) {
    if (arr.length % 2 == 0) {
        return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    } else {
        return arr[Math.floor(arr.length / 2)];
    }
}
var provera = srednjiniz([12, 34, 56, 100]);
console.log(provera);*/

/*7. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned.*/

/*function elemnetarr(arr) {
    if (arr.length % 2 == 0) {
        return "[" + arr[0] + ", " + arr[arr.length - 1] + "]";
    } else {
        return "[" + arr[0] + ", " + arr[Math.floor(arr.length / 2)] + ", " + arr[arr.length - 1] + "]";
    }
}
var provera = elementarr([12, 34, 24, 56, 100]);
console.log(provera);*/

/*8. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters. ????????*/

/*function average(arr) {
    var avg = arr.reduce(function (a, b) {return (a + b);});
    avg = avg / arr.length;
    return avg;
}
var provera = average([12, 34, 24, 56, 100]);
console.log(provera);*/

/*9. Write a function to find all the numbers greater than the average.*/

/*function veciod(arr) {
    var avg = arr.reduce(function (a, b) {return (a + b);});
    avg = avg / arr.length;
    var newar = arr.filter(function (a) {return a > avg;});
    return "[" + newar.join(", ") + "]";
}
var provera = veciod([12, 34, 24, 56, 100]);
console.log(provera);*/

/*10. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
 Starvation: less than 15
 Anorexic: less than 17.5
 Underweight: less than 18.5
 Ideal: greater than or equal to 18.5 but less than 25
 Overweight: greater than or equal to 25 but less than 30
 Obese: greater than or equal to 30 but less than 40
 Morbidly obese: greater than or equal to 40*/

/*function bMI(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var result = "";
    switch (true) {
        case (bmi < 15): result = "Starvation";
        break;
        case (bmi >= 15 && bmi < 17.5): result = "Anorexic";
        break;
        case (bmi >= 17.5 && bmi < 18.5): result = "Underweight";
        break;
        case (bmi >= 18.5 && bmi < 25): result = "Ideal";
        break;
        case (bmi >= 25 && bmi < 30): result = "Overweight";
        break;
        case (bmi >= 30 && bmi < 40): result = "Obese";
        break;
        case (bmi >= 40): result = "Morbidly obese";
        break;
        default : "none";
        break;
    }
    return "BMI is " + Math.round(bmi * 100) / 100 + " and category is " + result;
}
var provera = bMI(97.6, 1.85);
console.log(provera);*/


/*11. Write a function that takes a list of strings and prints them, one per line, in a rectangular
frame.:
For example the list ["Hello", "World", "in", "a", "frame"] gets
printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********            

function zvezdice(arr) {
    var maxLength = 0;
    var header = "";
    var frame = "";
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }
    for ( i = 0; i < maxLength + 4; i++) {
        header += "*";
    }
    frame += header + "\n";
   for (i = 0; i < arr.length; i++) {
        var blank = "";
        for (j = 0; j < maxLength - arr[i].length; j++) {
            blank += " ";
        }
        arr[i] = "* " + arr[i] + blank + " *" + "\n";
        frame += arr[i];
        
    }
    frame += header;
    return frame;
}

var provera = zvezdice(["Hello", "World", "in", "a", "frame"]);
console.log(provera);
*/
