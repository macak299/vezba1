/*Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”.
var dan = "ponedeljak";
var rez = "";

switch (dan) {
    case "ponedeljak":
        rez = "Danas je ponedeljak";
        break;

    case "utorak" :
        rez= "Danas je utorak";
        break;
    
    case "sreda" :
        rez= "Danas je sreda";
        break;
    
    case "cetvrtak" :
        rez= "Danas je cetvrtak";
        break;
    
    case "petak" :
        rez= "Danas je petak";
        break;
    
    case "subota" :
        rez= "Danas je subota";
      break;
    
    case "nedelja" :
        rez= "Danas je nedelja";
        break;
    
    default: 
    rez = "Nijedan od ponuđenog";
    break;
}
console.log(rez);*/

/*Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.
var a =1;
var rez;

switch (a){
    case 1:
        rez = "Ponedeljak";
        break;
    case 2:
        rez="Utorak"
        break;
    case 3:
        rez = "Sreda";
        break;
    case 4:
        rez="Ćetvrtak";
        break;
    case 5:
        rez = "Petak";
        break;
    case 6:
        rez = "Subota";
        break;
    case 7:
        rez ="Nedelja";
        break;
    default:
        rez= "Broj mora biti od 1 do 7";
        break;
}
console.log(rez);*/

/*Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.

var day = 2;
var rez;

switch (day){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    rez = "Radni dan";
    break;
    case 6:
    case 7:
    rez = "Vikend";
    break;
    default:
    rez = "Unesite broj od 1 do 7"
    break;
}
console.log(rez);*/

/*Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.
var month = 4;
rez="";

switch(month){
    case 1:
        rez= "Januar";
        break;
        case 1:
            rez= "Januar";
            break;
            case 1:
                rez= "Januar";
                break;
            case 2:
                rez= "Februar";
                break;
            case 3:
                rez= "Mart";
                break;
            case 4:
                rez= "April";
                break;
            case 5:
                rez= "Maj";
                break;
             case 6:
                rez= "Jun";
                break;
            case 7:
                rez= "Jul";
                break;
            case 8:
                rez= "Avgust";
                break;
                case 9:
                rez= "Septembar";
                break;
                case 10:
                rez= "Oktobar";
                break;
                case 11:
                rez= "JNovembar";
                break;
                case 12:
                rez= "Decembar";
                break;
                default:
                    rez= "Unesite broj od 1 do 12";
                    break;   
}
console.log(rez);*/

/*Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12.
var a=1;
var rez;

switch (a){
    case 1:
    case 2:
    case 3:
        rez="Zima";
        break;
    case 4:
    case 5:
    case 6:
        rez= "Proleće";
        break;
    case 7:
    case 8:
    case 9:
        rez = "Leto";
        break;
    case 10:
    case 11:
    case 12:
        rez = "Zima";
        break;
    default:
        rez = "Unesite broj od 1 do 12";
        break;
}
console.log(rez);*/

/*Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;.

var ocena = "A";
rez= "";

switch(ocena){
    case "A":
        rez="Good job";
        break;
    case "B":
            rez="Pretty good";
            break;
    case "C":
        rez="Passed";
        break;
    case "D":
        rez="Not so good";
        break;
    case "F":
        rez="Failed";
        break;
    default:
        rez="Unkown grade";
        break;
}
console.log(rez);*/

/*Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;.

var city = "Beograd";
var rez = "";

switch(city){
case "Beograd":
case "Sremska Mitrovica":
case "Velika Plana":
case "Valjevo":
case "Novi Sad":
rez=  city + " je u Srbiji";
break;
case "Budimpešta":
case "Segedin":
case "Keckemet":
rez = city + " je u Mađarskoj";
break;
case "Podgorica":
case "Budva":
case "Kotor":
rez = city + " je u Crnoj Gori";
break;
case "London":
case "Brighton":
rez = city + "je u Engleskoj";
case "Bukurešt":
rez= city + " je u Rumuniji";
break;
default:
rez="Izaberite drugi grad";
break;
}
console.log(rez);*/

/*Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
    ”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!
    var a =5;
    var b = 3;
    var x;
    var rez = "";
    
    switch(x){
        case "+":
        rez = a + "+" +b +"=" +(a+b) ;
        break;
        case "-":
        rez = a + "-" +b +"=" +(a-b) ;
        break;
        case "+":
            if(a==0 || b==0){rez ="Operacija nije moguća"}
            else {
        rez = a + "/" +b +"=" +(a/b) ;}
        break;
        case "+":
            if(a==0 || b==0){rez ="Operacija nije moguća"}
            else {
        rez = a + "%" +b +"=" +(a%b) ;}
        break;
        default:
        rez= "Nešto nije uredu";
        break;
    }
     console.log(rez);*/