/*1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
pokrene.


function citat(arr) {
    var x = Math.round(Math.random() * (6 - 1) + 1);
       switch (x) {
        case 1 : console.log(arr[x-1]);
        break;
        case 2 : console.log(arr[x-1]);
        break;
        case 3 : console.log(arr[x-1]);
        break;
        case 4 : console.log(arr[x-1]);
        break;
        case 5 : console.log(arr[x-1]);
        break;
        case 6 : console.log(arr[x-1]);
        break;
    }
    return x;
}
var provera = citat(["Citat 1, Autor1", "Citat 2, Autor2","Citat 3, Autor3","Citat 4, Autor4","Citat 5, Autor5","Citat 6, Autor6"]);
console.log(provera);
*/

// nisam uspeo da pronađem drugu funkciju random

/*2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
prestupna).

function prestupna(num){
    if ((num % 4 == 0) && (num % 100 != 0) || (num % 400 == 0)) {
        return (num + ' je prestupna');
    } else {
        return (num + ' nije prestupna');
    }
}
var provera = prestupna(2000);
console.log(provera);*/

/*3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
samoglasnika i koliko suglasnika.


function vowel(str){ 
    var count = 0;
    var counts = 0;
    for(var i = 0; i < str.length; i++){
    if(str[i] == 'a' || str[i] == 'i' || str[i] == 'o' ||str[i] == 'e' ||str[i] == 'u'){ count+=1;
    }else counts +=1
    }
    return "br samoglasnika je " + count + " a br suglasnika je " + counts;
    }
    var result = vowel("funkcija");
    console.log(result);
 */
  
/*4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
podataka pojedinačnih elemenata ulaznog niza.

var arr = [1, 'a', [], '4', 5, 34, true, undefined, null];
function groupDataTypes(arr) {
   var res = [];
   for(let i = 0; i < arr.length; i++){
          res.push(typeof arr[i])
   }
   return res;
};
console.log(groupDataTypes(arr)); */


/*5. Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu
ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
“pp”, “as23s”, “00sd”] =&gt; rezultat [“pp”].

function ispisS(input){
    let str = String(input);
    for( let i = 0; i < str.length; i++){
             
        if(!NaN(str[i])){           
            return str[i].toString();
        }
    }
}

var provera = ispisS(["12bb",  "pp", "as23s", "00sd"]);
console.log(provera);*/

/*6. Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
ili “not found” ako nema ponavljanja.
Primer 1: &quot;Computer&quot; =&gt; [8, &quot;C&quot;, &quot;r&quot;, &quot;pu&quot;, &quot;not found&quot;] ,
Primer 2: “Science&quot; =&gt; [7, &quot;S&quot;, &quot;e&quot;, &quot;e&quot;, &quot;@ index 5&quot;]

function reportS(string) {
  arr = [];
  arr[0] = string.length;
  arr[1] = string.slice(0, 1);
  arr[2] = string.slice(-1);
  if (string.length % 2 == 0) {
      arr[3] = string[string.length / 2 - 1] + string[string.length / 2];
  } else {
      arr[3] = string[Math.round(string.length / 2) - 1];
  }
  for (i = 0; i < string.length - 1; i++) {
      for (j = 1; j < string.length; j++) {
      if (string[1] == string[i]) {
          arr[4] = "@ Index " + i;
      }
      else {
          arr[4] = "not found";
      }
  }
  }
  return "[" + arr.join(", ") + "]";
}
var sprovedi = reportS("Science");
console.log(sprovedi); */

/*7. Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
se ne ponavljaju.

 function nonrep(arr) {
    var result = " ";
    for (var i = 0; i < arr.lenght; i++) {
      for (j = 0; j < arr.lenght; j++)
        if (i != j && arr[i] == arr[j]) {
          result = arr[i];
          break;
        }
      if (j == arr.lenght)
        return arr[i];
    }
    return result;
  }
  var provera = nonrep([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]);
  console.log(provera);*/


/*8. Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
Primer 1: ([2, 3, 4, 5], N=2) =&gt; [[2, 3], [4, 5]]
Primer 2: ([2, 3, 4, 5, 6], N=3) =&gt; [[2, 3, 4], [5, 6]]

function podniz(arr, a) {
  var prvi = arr.slice(0, a);
  var drugi = arr.slice(a, arr.length);
  return "[" + "[" +  prvi.join(", ") + "]" + ", " + "[" + drugi.join(", ") + "]" + "]";
}
var provera = podniz([2, 3, 4, 5, 6], 2);
console.log(provera);*/