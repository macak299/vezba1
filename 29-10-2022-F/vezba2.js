/*1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
&quot;My random string&quot;, &quot;JS &quot; -&gt; &quot;JS My random string&quot;
&quot;My random string&quot;, &quot;JS &quot;, 10 -&gt; &quot;My random JS string&quot;

function insertt(str1, str2, pos){
    if(pos > 1){
    var string = str1.slice(0, pos) + str2 +" " + str1.slice(pos, str1.lenght);
    return string;}
    else {
        pos=1;
        var string = str1.slice(0, pos) + str2 +" " + str1.slice(pos, str1.lenght);
    return string;
    }
}
var sprovedi = insertt("My random string", "JS", 3);
console.log(sprovedi);*/

/*2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, "", undefined, 47, null]

function  joinElement(arr){
    for(i =0; i < arr.lenght; i++) {
        if(arr[i]!= NaN && arr[i] != undefined && arr[i] != null && arr[i] != Infinity){
            string += a[i];
        }
    }
    return string;
}
var sprovedi = joinElement([0, 2, false, null, 32, Infinity, "proba", NaN]);
console.log(sprovedi);*/

/*3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null] -&gt; [15, -22, 47]

function filterNumber(arr) {
    newArr = []];
    for(i=0;i< arr.lenght; i++){
        if(arr[i]!= NaN && arr[i] != undefined && arr[i] != null && arr[i] != Infinity{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var sprovedi = filterNumber(["21", undefined, "4", null, "78"]);
console.log(sprovedi);*/

/*4. Write a function that reverses a number. The result must be a number.
12345 -&gt; 54321 // Output must be a number

function reverseNumber(num) {
    var revNum = parseInt(num.toString().split('').reverse().join(''));
    return revNum
}
var sprovedi = reverseNumber(12345);
console.log(sprovedi);*/

/*5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the
last &#39;n&#39; elements of the array.
[7, 9, 0, -2] -&gt; -2
[7, 9, 0, -2], 2 -&gt; [0, -2]

function lastElem(arr, n) {
    newArr = arr.slice(-n);
    return newArr;
}
var sprovedi = lastElem([7, 9, 0, -2], 2);
console.log(sprovedi);*/

/*6. Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -&gt; [0, 0, 0, 0, 0, 0]
2, &quot;none&quot; -&gt; [&quot;none&quot;, &quot;none&quot;]
2 -&gt; [null, null]

function creatArr(num, elem) {
    arr = [];
    for (i = 0; i < num; i++) {
        arr.push(elem);
    }
    return arr;
}
var sprovedi = creatArr(2, null);
console.log(sprovedi);*/

/*7. Write a function that says whether a number is perfect.
28 -&gt; 28 is a perfect number.
function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
var sprovedi =perfect */

/*8. Write a function to find a word within a string.
&#39;The quick brown fox&#39;, &#39;fox&#39; -&gt; &quot;&#39;fox&#39; was found 1 times&quot;
&#39;aa bb cc dd aa&#39;, &#39;aa&#39; -&gt; &quot;&#39;aa&#39; was found 2 times&quot;

function search_word(text, word){
    
    var x = 0, y=0;
   
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return "'"+word+"' was found "+x+" times.";
}

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));*/

/*9. Write a function to hide email address.
&quot;myemailaddress@bgit.rs&quot; -&gt; &quot;mye...@bgit.rs&quot;

function hideEmail(email){
    var string = email.slice(0, 3) + "...@gmail.com";
    return string;
}
var sprovedi = hideEmail("macak299@gmail.com");
console.log(sprovedi);*/

/*10. Write a program to find the most frequent item of an array.
[3, &#39;a&#39;, &#39;a&#39;, &#39;a&#39;, 2, 3, &#39;a&#39;, 3, &#39;a&#39;, 2, 4, 9, 3]

function maxAppearance(arr) {
    let mf = 1;
  let m = 0;
  let item;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        m++;
        if (m > mf) {
          mf = m;
          item = arr[i];
        }
      }
    }
    m = 0;
  }
  return item;
}
var sprovedi = maxAppearance([3, 'a', 'a', 'a', 56, 3, 'a']);
console.log(sprovedi);*/