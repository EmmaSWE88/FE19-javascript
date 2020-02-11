$(function() {

    let nameArray = ["Hans","Tommy", "Lisa"];
    //filter
    
    $("ul > li").filter('#3').remove();
    //filtrerar ut efter kriterier och gör nått med dem
    $("ul > li").filter('#2').css('color', 'red');
    $('ul > li').filter( ":even" ).css( "background-color", "red");


//console.log(nameArray);
//nameArray.filter("Tommy").remove();
//kan inte filtrera direkt på namn i en array 

//Man får göra såhär:

//join
//document.write("Original Array: " + nameArray.join(";"));

//splice
//nameArray.splice(1,1);

//grep

//includes
//console.log(nameArray.includes("Tommy"));

//indexOf
nameArray.splice(nameArray.indexOf("Tommy"),1);
console.log(nameArray);






}); //RÖR EJ