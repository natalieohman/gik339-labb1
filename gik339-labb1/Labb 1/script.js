/* Uppgift 2 */

console.log(stad);

{
    let namn = "Anna";
    const alder = 25;
    var stad = "Falun";

    console.log(namn);
    console.log(alder);
    console.log(stad);
}

console.log(typeof namn);

console.log(typeof namn);
console.log(typeof alder);
console.log(stad);

/* Uppgift 2:
1. var: är inte blockbegränsad och kan därför nås utanför ett vanligt {}-block. 
let: fungerar bara inom blocket där variabeln deklarerats. 
const: fungerar bara inom blocket, skillnaden mot let är att du inte kan tilldela variabeln ett nytt värde.
2. console.log() före blocket: variablerna har ännu inte fått sina värden, let och const är inte tillgängliga utanför blocket, var är tillgänglig men har värdet undefined innan tilldelningen. 
console.log() i blocket: kan använda alla tre variablerna efter att de deklarerats.
console.log() efter blocket: let och const är inte tillgängliga, var är fortfarande tillgänglig och har sitt tilldelade värde.*/

/* Uppgift 5 */
const num1 = 0;
let arg1;
let sum = false;

/* Uppgift 3 */
const add = (num1, num2) => {
/* Uppgift 4 */
 console.log(num1 == 0);
 console.log(num2 === '0');
 console.log(num2 === 0);
 console.log(num1 == NaN);

 console.log(num1 ? "truthy" : "falsy");
 
 /* Uppgift 4 med enbart || 
 if (
    !(num1 == null ||
    num2 == null ||
    typeof num1 !== "number" ||
    typeof num2 !== "number")
) {
    return num1 + num2;
} */

/* Uppgift 4 */ 
if (
    num1 != null &&
    num2 != null &&
    (typeof num1 === "number" ||
        typeof num2 === "number") &&
        typeof num1 === "number" &&
        typeof num2 === "number"
    ) {
        return num1 + num2;
    }
};

/* Uppgift 3 / Uppgift 4 */
console.log(add(5, 3)); 

/* Uppgift 3 
add(5, 3); */

/* Uppgift 5 */
add(sum, 1); 
add("0", 3); 
add(3, "num1"); 
add(-5, num1); 
add(arg1, 7); 
add(); 
console.log(num1);
console.log(sum);


/* Uppgift 3:
1. Om man använder let i stället för const kan man tilldela variabeln ett nytt värde senare. Därför använder man const när variabeln inte ska tilldelas ett nytt värde.
2. function add(num1, num2) {
return num1 + num2;
}
3. Att en funktion returnerar något innebär att man får tillbaka ett värde från funktionen. Värdet kan sedan användas vidare i koden, exempelvis sparas i en variabel. */

/* Uppgift 4:
1. En ternary operator är ett kortare sätt att välja mellan två alternativ utifrån ett villkor och skillnaden mellan en ternary operator och en if-sats är att ternary operator är ett uttryck som väljer mellan två värden och en if-sats är en kontrollstruktur som kan innehålla flera instruktioner.
2. == jämför två värden och kan omvandla datatyper vid jämförelse och === jämför två värden utan att omvandla datatyper, både värdet och datatypen måste stämma överens.
3. Jag använde == null för att kontrollera om num1 eller num2 är null eller undefined, jag använde || (eller) för att kontrollera om minst ett av villkoren var sant och jag använde ! för att vända på resultatet så att additionen bara sker när ingen av kontrollerna visar att ett värde är ogiltigt. */

/* Uppgift 5:
1. En variabel lagrar ett värde, en parameter tar emot ett värde i en funktion och argument är det värdet som skickas till en funktion vid anrop.
2. console.log(num1) skriver ut 0 eftersom num1 utanför funktionen aldrig ändras, funktionen använder sin egen parameter med samma namn.
3. Test 1 - add(sum, 1): Eftersom sum är false blir den första jämförelsen true, då == kan omvandla false till 0. De tre följande jämförelserna blir false eftersom värdena eller datatyperna inte stämmer överens, och NaN inte är lika med något värde. Ternary operatorn skriver ut "falsy" eftersom sum är false. 
Test 2 - add("0", 3): Den första jämförelsen blir true eftersom == omvandlar strängen "0" till talet 0. De tre följande jämförelserna blir false. Ternary operatorn skriver ut "truthy" eftersom "0" är en sträng som inte är tom. 
Test 3 - add(3, "num1"): Alla fyra jämförelser blir false eftersom värdena inte stämmer överens och NaN inte är lika med något värde. Ternary operatorn skriver ut "truthy" eftersom 3 är ett tal som inte är 0. 
Test 4 - add(-5, num1): Eftersom variabeln num1 har värdet 0 får funktionen argumenten -5 och 0. Den första och andra jämförelsen blir false, den tredje blir true eftersom num2 är 0 och den fjärde blir false eftersom NaN inte är lika med något värde. Ternary operatorn skriver ut "truthy" eftersom -5 är ett tal som inte är 0. Funktionen returnerar -5 eftersom båda argumenten är tal. 
Test 5 - add(arg1, 7): Eftersom arg1 inte har tilldelats något värde är det undefined. Alla fyra jämförelser blir false och ternary operatorn skriver ut "falsy". Funktionen utför ingan addition eftersom arg1 är undefined.
Test 6 - add(): Eftersom inga argument skickas med får både num1 och num2 värdet undefined. Alla fyra jämförelser blir false och ternary operatorn skriver ut "falsy". Ingen addition utförs eftersom parametrarna saknar värden. 
 */