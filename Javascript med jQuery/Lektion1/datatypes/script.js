//variabel = nått som kan innehålla information

/* 
-------------------------------------
Javascript (likt c-sharp)
-------------------------------------
String      =   text
Number      =   tal, decimaltal 
Boolean     =   Sant/Falsk true/false
Null        =   null dvs tomt inget alls
Undefined   =   ej specificerat varken string null bool eller nått
Object      =   ett object/klass som innehåller ett eller flera värden
Symbol      =   symboler kommer vi inte att använda
-------------------------------------
*/

/*

Deklarera variabler 
--------------------------------------
name = 'Hans' (undvik detta sätt)
var name = 'Hans'(undvik detta sätt)

let name = 'Hans' (NY)(USE THIS ONE)
const name = 'Hans'(NY)(APIer)
--------------------------------------
name = 'Hans' (undvik detta sätt)

var name = 'Hans'
(var = global variabel - accessbar överallt i koden)

let name = 'Hans' (nytt sätt att deklarera på, introducerades 2015 med ES6)

(let = lokal variabel - accessbar bara inom angivna området, let ersätter var)
(skriver Hans var så skriv let istället, speciellt om det ska vara var och inte let)

const name = 'Hans'
(const = konstant kan inte skrivas över för man vill inte ändra nått(undantag finns!))
--------------------------------------

C# exempel.
string name = "Hans";
int age = 35;

JS exempel
let name = 'Hans';
let age = 35;

Strings:

let name = "Hans" - använd INTE!
let name = 'Hans' - Denna ska du använda
let name = `Hans` - Använd denna när du kör placeholders (shift + ´, tryck mellanslag)

*/

let doNotUseThis = "Hans"
let doUseThisOne = 'Hans'
let age = 35;

let withoutPlaceholders = 'Hej mitt namn är ' + doUseThisOne + ' och jag är ' + age + ' år gammal';
console.log(withoutPlaeholders);

let withPlaceholders = `Hej mitt namn är ${doUseThisOne} och jag är ${age} år gammal.`;

// console.log(withoutPlaceholders);
// console.log(withPlaceholders);

/*
    Python: (exempel på ett slappt programmeringsspråk, men problem när det blir krångligare)
    if(i < 10)
    gör det här då
    sen gör det här
    sen gör det här

    C#:
    if(i < 10) {
        gör det här då
        sen gör det här
        sen gör det här 
    }

    SEMIKOLON!!!!!!

*/

var varName = 'var Hans';
let letName = 'let Hans';
const constName = 'const Hans';

console.log(varName);
console.log(letName);
console.log(constName);

varName = 'Hans';
letName = 'Hans';
// constName = 'Hans'; kan inte skrivas över. Ger felmeddelande.

let nullvalue = null;
let undefinedValue = undefined;
let Value;

console.log(nullValue);
console.log(undefindedValue);
console.log(Value);

// DEKLARERA PÅ EN GÅNG. UNDERLÄTTA FELSÖK

//BUGG!

console.log(typeof nullValue) //det borde stå null men står object

/* 
    Javascript: camelCase firstName (BÄST)
    C# Pascal FirstName (microsoft föredrar Pascal)

*/

/*
    Object = Klasser (men lösare än C# och Java tex) - kan ha flera värden -object i ett object (ex address)
    Object = Json (JavaScript Object Notation)
*/
