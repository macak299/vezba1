/*5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
***** 

var iterator = 5;
for(var i = 0; i < iterator; i++){
    if(i==0){
        console.log("*****");
    }
    else if(i== iterator-1){
        console.log("*****");
    }
    else {
        console.log("**");
    }
}*/
/* zadatak 5.

function squareStar(num) {
    var string = "";
    for (i = 0; i < num; i++){
        for (j = 0; j < num; j++) {
            if(i===0 || i=== num-1){
                string += "*";
            }else{
                if(j ===0 || j === num-1){
                    string += "*";
                }else{
                    string += " ";
                }
            }
            
        }
        string += "\n";
    }
    return string;
}
let num = squareStar(5);
console.log(num);
*/
