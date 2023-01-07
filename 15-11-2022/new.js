/*1. Write a function named tellFortune that:
 takes 4 arguments: number of children, partner's name, geographic location, job title.
 outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/

/*function tellFortune(numOfCh, partnerName, geoLoc, jobTitle) {
    return "You will be a " + jobTitle + " in " + geoLoc + ", and married to " + 
    partnerName + " with " + numOfCh + " kids.";
}
var provera1 = tellFortune(2, "Sasa", "Velika Plana", "manager");
var provera2 = tellFortune(3, "Dragan", "Beograd", "profesor");
var provera3 = tellFortune(1, "Snezana", "Kragujevac", "economist");
console.log(provera1);
console.log(provera2);
console.log(provera3);*/


/*2. Write a function named calculateDogAge that:
 takes 1 argument: your puppy's age.
 calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
 outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
years.*/

/*function calculateDogAge(puppyAge, convIndex) {
    var dogsAge = puppyAge * convIndex;
    return "Your doggie is " + dogsAge + " years old in dog years!";
}
var provera1 = calculateDogAge(7, 7);
var provera2 = calculateDogAge(2, 7);
var provera3 = calculateDogAge(4, 7);
console.log(provera1);
console.log(provera2);
console.log(provera3);*/


/*3. Write a function named calculateSupply that:
 takes 2 arguments: age, amount per day.
 calculates the amount consumed for rest of the life (based on a constant max age).
 outputs the result to the screen like so: "You will need NN to last you until the ripe old age of
X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.*/

/*function calculateSupply(age, amountPerDay) {
    var supply = (100 - age) * 365 * Math.round(amountPerDay);
    return supply;
}
var provera1 = calculateSupply(27, 7.5);
var provera2 = calculateSupply(82, 16.2);
var provera3 = calculateSupply(64, 27.9);
console.log(provera1);
console.log(provera2);
console.log(provera3);*/


/*4. Create a function called celsiusToFahrenheit:
 Store a celsius temperature into a variable.
 Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
 Now store a fahrenheit temperature into a variable.
 Convert it to celsius and output "NN°F is NN°C.""
*NN is actual temperature you need to convert*/

/*function celsiusToFah(C) {
    var F = 1.8 * C + 32;
    return C + "°C is " + F + "°F";
}
function fahrenheitToCel(F) {
    var C = (F - 32) * 0.5556;
    return F + "°F is " + C + "°C";
}
var provera1 = celsiusToFah(27);
var provera2 = fahrenheitToCel(82);
var provera3 = fahrenheitToCel(64);
console.log(provera1);
console.log(provera2);
console.log(provera3);*/

/*5. Create a function that validates a password to conform to the following rules:
 Length between 6 and 24 characters,
 At least one uppercase letter (A-Z).
 At least one lowercase letter (a-z).
 At least one digit (0-9).
 Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
 Supported special characters: ! @ # $ % ^ &amp; * ( ) + = _ - { } [ ] : ; "" &#39; ? &lt; &gt; , .
 Examples: validatePassword("P1zz@&"") ➞ false // Too short.
 validatePassword("iLoveYou") ➞ false // Missing a number.
 validatePassword("Fhg93@"") ➞ true // OK!*/

/*function checkLength(password) {
    var resultMessage = "Length must be between 6 and 24 characters"
    if (password.length < 6 || password.length > 24) {
        console.log(resultMessage);
        return false;
    } else {
        return true;
    }
}

function checkUppercase(password) {
    var resultMessage = "Password must include at least one uppercase character";
    if (/[A-Z]/.test(password)) {
        console.log("OK");
        return true;
    } else {
        console.log(resultMessage);
        return false;
        
    }
}

function checkLowercase(password) {
    var resultMessage = "Password must include at least one lowercase character!";
    if (/[a-z]/.test(password)) {
        console.log("OK");
        return true;
    } else {
        console.log(resultMessage);
        return false;
        
    }
}

function checkNumber(password) {
    var resultMessage = "Password must include at least one number";
    if (/[0-9]/.test(password)) {
        console.log("OK");
        return true;
    } else {
        console.log(resultMessage);
        return false;
        
    }
}

function checkDoubleChar(password) {
    var resultMessage = "Password must not include tripple character";
    if (/(.)\1{2,}/.exec(password)) {
        console.log(resultMessage);
        
        return true;
    } else {
        console.log("OK");
        return false;
        
    }
}

function checkSpecialChar(password) {
    var resultMessage = "Password must not include special characters";

    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
        console.log(resultMessage);
                return true;
    } else {
        console.log("OK");
        return false;
        
    }
}

function validatePassword(password) {
    if (checkLength(password) && checkUppercase(password) && checkLowercase(password) && 
    checkNumber(password) && !checkDoubleChar(password) && !checkSpecialChar(password)) {
        console.log("Password is valid");
    }
    else {
        console.log("Password is not valid");
    }
}


validatePassword("TOsL52TTZSM");

/*6. Create a function that finds how many prime numbers there are, up to the given integer.
Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29*/

/*function prime(num) {
    var prime = num;
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
        }
    }
    return prime;
}
function primeNmb(n) {
    var nmb = 0;
    for (j = 2; j < n; j++) {
        if (prime(j)) {
            broj++;
        }
    }
    return nmb;
}
var provera1 = primeNmb(10);
var provera2 = primeNmb(20);
var provera3 = primeNmb(30);
console.log(provera1);
console.log(provera2);
console.log(provera3);*/

/*7. Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
reduces back to 1. Items in the arrays will be the same as the length of the arrays.
Examples:
diamond(1) ➞ [1],
diamond(2) ➞ [1, 2, 2, 1]
diamond(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]*/

/*function diamond(num) {
    arr = [];
    for (i = 1; i < num + 1; i++) {
        for (j = 1; j <= i; j++) {
        arr.push(i);
    }
    }
    for (i = num - 1; i >= 1; i--) {
        for (j = i; j >= 1; j--) {
            arr.push(i);
        }
    }
    return "[" + arr.join(", ") + "]";
}
var provera =  diamond(5);
console.log(provera);*/