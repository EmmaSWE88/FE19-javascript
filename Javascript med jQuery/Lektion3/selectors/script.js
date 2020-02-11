// $(document).ready(function(){
// }); (Ett annat sätt att skriva det på)

$(function(){

   // $("") funkar men enkel-fnuttar är bäst praxis och man bör inte blanda.
    //$('#btnClick1').click(function(){ //det här är en self-caling function, den anropar sig själv
     //   console.log('Tryckte på knappen');
        
   // })

  // $('#btnClick1').click(() => { console.log('Tryckte på knappen');}); //Om man bara ska ha en grej går detta bra
   
//$('#btnClick1').click(() => {
  // $('*').hide();
//});

//$('#btnClick1').click(function() {
 //   $('#content').toggle();
 //});

 //function hideContent() {
//     $(this).hide()
 //}


 //$('p').click(function(){
  //   $(this).hide();
 //})

$('ul li:last-child').css('color', 'red');


}); //RÖR EJ