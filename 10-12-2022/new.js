

/*1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like!
var coffe = {
    name : "long espresso",
    strenght : "strong",
    flavour : "vanil",
    milk : "with",
    sugar : "without",
}
var coffee1 = [["name", "long espresso"], ["strenght", "strong"], ["flavor", "vanilla"], ["milk", "with"], ["sugar", "without"]];
*/



/*2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity.

var movie = {
    name : "Avatar : The Way of Water",
    yearofProduction : "2022",
    director : "James Cameron",
    actors : ["Sam Wortinghton", "Zoe Saldana", "Kate Winselt", "Vin Diesel"],
    genre : "SCI-FI",
    popularity : "7"
}*/

/*3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.
// var project = {
//     description : "erp",
//     programmingLanguage : "JavaScript",
//     gitRepository : "",
//     booleanStatus : "false",

// }



var project = {} ;

function projectX(){

   project.description="asdad adsass saddsa saddsa sadda asdas";
   project.programmingLanguage = "Java Script";
   project.gitRepository = "https://github.com/Joxxaa/bit-pp/tree/main/15.11.2022";
   project.developmentStatus = "true";
   return project;
}
console.log(projectX());

function printRepo(object){
    return object.gitRepository;
}
console.log(printRepo(project));


function checkProgramingLanguage(object){
    if(object.programmingLanguage == "Java Script"){
        return "Programming Language is Java Script " + true;
    }
    else{
        return false;
    }
}
console.log(checkProgramingLanguage(project));

function checkDevelopment(object){
    if(object.developmentStatus == "true"){
        return "Project is in development " + true;
    }
    else{
        return "Project is in development " + false;
    }
}
console.log(checkDevelopment(project));

*/



/*4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared in under 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.

var recipe = {};
function createRecipe() {
    recipe.name = "Gibanica";
    recipe.typeOfCousine = "Domaca kuhinja";
    recipe.complexity = "3";
    recipe.ingredients = ["kore", "2 jaja", "sir", "voda"];
    recipe.preparingTime = "40 minuta";
    recipe.preparingInstructions = "jnhgwhfwiefhquehqowrhoqiwrjqoehofwoehwoeijqwiorjqpwjwqij";
    return recipe;
}
// console.log(createRecipe());
createRecipe();
function printIngrediants(object) {
    // var arr = [];
    // for (i = 0; i < object.ingredients.length; i++) {
    //     arr.push(object.ingredients[i]);
    // }
    // return arr;
    return object.ingredients;
}
console.log(printIngrediants(recipe));
function checkTime(object) {
    if (parseInt(object.preparingTime) < 15) {
        return "The meal can be ready in 15 minutes " + object.preparingTime;
    } else {
        return "We need more time than 15 minutes " + object.preparingTime;
    }
}
console.log(checkTime(recipe));
function changeCuisine(object, string) {
    object.typeOfCousine = string;
    return object;
}
console.log(changeCuisine(recipe, "Foreign cuisine"));

function deleteIngrediant(object, ingredient) {
    
    for (i = 0; i < object.ingredients.length; i++) {
       if ( object.ingredients[i] == ingredient){
        delete(object.ingredients[i]);
       }
    }
   
}
console.log(deleteIngrediant(recipe, "sir"));
*/




/*------------------------------------------------------------------------------------------*/

/*1. Create a function that takes an array of objects (groceries) which 
calculates the total price and returns it as a number. A grocery object 
has a product, a quantity and a price, for example:
{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}

var groceries = [{"product" : "milk", "quantity" : 1, "price": 1.5},
 {"product" : "bread" ,"quantity" : 2, "price": 1.10},
 {"product" : "meat", "quantity" : 0.5, "price": 3.5}];

function sum(arr){
    var sum = 0;
    for ( i = 0; i < arr.lenght; i++){
        sum += (arr[i].quantity * arr[i].price)
    }
    return sum;
}
console.log(sum(arr));*/

/*2. You go to a jewelry shop and try to find the most expensive piece of 
jewelry. You write down the name of each piece of jewelry and its 
price. Create a function that gets the name of the piece of jewelry with 
the highest price and returns "The most expensive one is the {name of
jewelry piece}".
Example:
mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold 
watch’, price:250}, ...])
- The most expensive one is the diamond Ring.

var jewelry =[{"name":"Diamond Earings", "price": 980}, {"name":"Gold watch"," price":250}, {"name":"Diamond ring", "price": 990}];

    function mostExpensive(arr){
        var prices = [];
        for(i = 0; i < arr.length; i++){
         prices.push(arr[i].price);   
        }
        var max = Math.max(...prices);
        for(i = 0; i < arr.length; i++){
            if(arr[i].price == max){
                return "The most expensive one is the " + arr[i].name;
            }
        }
        return max;
    }
    console.log(mostExpensive(jewelry));*/

/*3. Given a word, create an object that stores the indexes of each letter in 
an array. Make sure the letters are the keys. Make sure the letters are 
symbols. Make sure the indexes are stored in an array and those 
arrays are values.
Examples:
mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

function mapLetters(string) {
    var object = {};
    for (i =0; i < string.length; i++) {
        if (object.hasOwnProperty(string[i])) {
        object[string[i]] = object[string[i]].concat(i);
    } else {
        object[string[i]] = [i];
    }
    }
    return JSON.stringify(object);
}
console.log(mapLetters("froggy"));*/

/*4. And who cursed the most in the fight between you and your spouse? 
Given an object with three rounds, with nested objects as your scores 
per round, return a string of who cursed the most: If you, return "ME!" 
If your spouse, return "SPOUSE!" If a draw, return "DRAW!"
Examples:
determineWhoCursedTheMost([{me: 10,    spouse: 5  },  {    me: 5,    
spouse: 10  },   
{    me: 0, spouse: 10,  }]) ➞ "DRAW!"
determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse: 
10}, { me: 9,  spouse: 10}]) ➞ "ME!"
determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9,  spouse:
44 }, { me: 10,    spouse: 55}]) ➞ "SPOUSE!"

function determineWhoCursedTheMost(arr) {
    var sumMe = 0, sumSpouse = 0;
    for (i = 0; i < arr.length; i++) {
        sumMe += arr[i].me;
        sumSpouse += arr[i].spouse;
    }
    if (sumMe < sumSpouse) {
        return "SPOUSE!";
    } else if (sumMe == sumSpouse){
        return "DRAW!";
    } else {
        return "ME!";
    }
}
console.log(determineWhoCursedTheMost([{ me: 10, spouse: 5}, {me: 5, spouse: 10}, {me: 10, spouse: 10}]));*/

/*5. Create a function that converts color in RGB format to Hex format.
Examples:
rgbToHex({red: 0, green: 128,  blue: 192}) ➞ "#0080c0"

function rgbToHex(object){
    return "#" + object.red.toString(16) + object.green.toString(16) + object.green.toString(16);
}
console.log(rgbToHex({red: 0, green: 128,  blue: 192}));
*/


/*6. Create a function that takes an amount of monetary change (e.g. 47 
cents) and breaks down the most efficient way that change can be 
made using USD quarters, dimes, nickels and pennies. Your function 
should return an object.
CoinValue
Penny 0.01
Nickel 0.05
Dime 0.10
Quarte
r 0.25
Examples:
makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }
makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }
makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }
function makeChange(num) {
    var combo = {};
    var count = 0;
    while (num > 25) {
        num = num - 25;
        count++;
    }
    combo.q = count;
    count = 0;
    while (num > 10) {
        num = num - 10;
        count++;
    }
    combo.d = count;
    count = 0;
    while (num > 5) {
        num = num - 5;
        count++;
    }
    combo.n = count;
    count = 0;
    while (num >= 1) {
        num = num - 1;
        count++;
    }
    combo.p = count;
    return combo;
}
console.log(makeChange(47));*/

/*7. Create a function that takes an array of objects like { name: "John", 
notes: [3, 5, 4]} and returns an array of objects like { name: "John", 
avgNote: 4 }. If student has no notes (an empty array) then let's 
assume avgNote: 0.
Examples:
[
  { name: "John", notes: [3, 5, 4]}
] 
➞ 
[
  { name: "John", avgNote: 4 }
]

function avgNote(object){
    var newObject={};
    newObjectName=object.Name;
    newObject.avgNote=function(){
        var sum=0;
        for(i=0;i<object.notes.length;i++){
            sum += object.notes[i];
        }
        return sum / object.notes.length;
    }();
    return JSON.stringify(newObject);
}
console.log(avgNote({name:"John", notes:[3,5,4]}));
*/

/*8. Given an object with students and the grades that they made on the 
tests that they took, determine which student has the best Test 
Average. The key will be the student's name and the value will be an 
array of their grades. You will only have to return the student's name. 
You do not need to return their Test Average.
getBestStudent([{  name: ‘John’, grades: [100, 90, 80]}, {name: ‘Bob’, 
grades: [100, 70, 80]}...]) ➞ "John" // John's avg = 90 // Bob's avg = 
83.33

function getBestStudent(arr) {
    var bestStudent = "";
    var newArr = [];
    var newObject = {};
    var maxAvg = 0;
    for (i = 0; i < arr.length; i++) {
        var sum = 0;
        for (j = 0; j < arr[i].grades.length; j++) {
            sum += arr[i].grades[j];
        }
        avg = Math.round(sum / 3);
        newObject.name = arr[i].name;
        newObject.testAverage = avg;
        // newArr.push(newObject[i]);
        if (avg > maxAvg) {
            maxAvg = avg;
            bestStudent = arr[i].name;
        }
        console.log(newObject);
    }
    return bestStudent;
}
console.log(getBestStudent([{  name: "John", grades: [50, 90, 80]}, {name: "Bob", grades: [100, 70, 80]},
  {name: "Tom", grades: [90, 50, 75]}]));*/
