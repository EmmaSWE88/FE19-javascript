
// if-satser 
// vi kollar om något är sant

if (true) {
   // console.log('Gör det som står här');
}

/*
    ==      Om nått är lika med (använd helst inte)
    ===     Om nått är lika med och har samma datatyp 
*/

var string = '13';
var number = 13;

if( string == number) {
  //  console.log('dessa är lika');
  //  console.log(string + number);
}

if( string === number) {
  //  console.log('dessa är lika');
  //  console.log(string + number);
} 


 //   !=      Om det inte är lika med (använd inte helst)
//    !==     Om det inte är lika med och inte har samma datatyp




if( string != number) {
 //   console.log('!= dessa är inte lika');
 //   console.log(string + number);
}

if( string !== number) {
 //   console.log('!== dessa är inte lika');
 //   console.log(string + number);
} 

/*

    < mindre än
    > större än
    <= mindre eller lika med
    >= större eller lika med

*/

var string = '10';
var number = 13;

if(string < number) {
    console.log('string är mindre än number');
}

/*
    &&      och
    !       inte
    ||      eller
    typeof  vilken datatyp
*/

/* var string = '15';
var number = 13;

if(!(string > number && tyopeof string == typeof number)) {
    console.log('string är mindre än number');
}

if(string > number && tyopeof string == typeof number) {
    console.log('string är mindre än number');
}

*/

// IF; ELSEIF OCH ELSE

let name = 'Hans'

if(name == 'Tommy') {
    console.log('Hej Tommy');

} else if (name == 'Hans') {
    console.log('Hej Hans');

} else {
    console.log('Okänd person!');
}
