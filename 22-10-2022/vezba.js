/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.

var a=15;
for(var i=0; i <= a; i++);
if(i % 2 == 0) {
    console.log(i+ "je paran broj");
}*/

/*2.Write a program to sum the multiples of 3 and 5 under 1000.
var a=1000;
var b= 3;
var c= 5;
var sum=0;
for(i=0; i<a; i++){
    if(i%b==0 && i%c==0){
        sum+=i;
       
    }
}
console.log(i);*/
/*3. Write a program that will iterate from 0 to 10 and display squares of numbers.
var a=10;
for(i=0; i<=a; i++){
    console.log(i*i);
}*/
/*4. Write a program to compute the sum and product of an array of integers.
a[4,2,7,10,12];
sum=0;
p=1;
for(i=0; i<a.lenght; i++){
    sum += a[i];
    p *= a[i];
}
console.log(sum);
console.log(p);*/
/*5. Write a program which prints the elements of the following array as a single string.
var x =["1", "A", "B", "c", "r", true, NaN, undefined];
var s="";
for(i = 0; i <= x.length; i++){
    s += x[i]+ "";
}

console.log(s);*/
/*6.Write a program that prints the elements of the following array.
var a = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ];
for(i = 0; i < a.length; i++){
    for(j = 0; j < a[i].length; j++){
        console.log(a[i][j]);
    }
} */
/*7. Write a program that outputs the sum of squares of the first 20 numbers.

var a=20;
var square=1;
var sum=0;
for(i=1; i<=a; i++){
    square *=i;
    sum += square;
}
console.log(sum);*/
/*8. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.
David 80
Marko 77
Dany 88
John 95
Thomas 68

&lt; 60% F
&lt; 70% D
&lt; 80% C
&lt; 90% B
&lt; 100% A

var grades = [["David",80], ["Marko", 77], ["Dany", 88], ["John", 95], ["Thomas", 68]];
var sum=0;
var avg=0.0;
for(i = 0; i <grades.length; i++){
    sum += grades[i][1]
}
avg = sum/ grades.length;
if (avg < 60){console.log("F");}
else if(avg > 60 && avg <70){console.log("D");}
else if(avg > 70 && avg <80){console.log("C");}
else if(avg > 80 && avg <90) {console.log("B");}
else {console.log("A");}
*/
/*9. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
&quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).*/
var a=100;
var b= 3;
var c= 5;
var sum=0;
for(i=0; i<a; i++){
    if(i % 3==0){
        console.log("Fuzz");
    }
    if(i%5==0 && i %3 !=0){ 
        console.log("Buz");
    }
    if(i%5==0 && i %3 ==0){ 
        console.log("FuzzBuz");
    }
        console.log(i);
}