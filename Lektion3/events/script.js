$(function() {

   // $('#btnAlert').click(function(){
    //    alert('Varning Varning!');
   // });

  //  $('#btnAlert').on('click', function(){
  //      alert('Varning Varning!');
  //  });
//fördelen med ovan är att man kan ha flera saker per on grej.

    // $('#btnAlert').dblclick('click', function(){
    //     alert('Varning Varning!');
    //  });

    //  $('#btnAlert').on('dblclick', function(){
    //     alert('Varning Varning!');
    //  }); //det sägs att den här koden är snabbare att exekvera (marginelt)


    // $('#btnAlert').hover(function(){
    //     alert('Varning Varning!');
    //  }); 

    // $('#btnAlert').mouseenter(function(){
    //     alert('Varning Varning!');
    //  });

    // $('#btnAlert').mouseleave(function(){
    //     alert('Varning Varning!');
    //  });

    // $('#btnAlert')
    // .mouseenter(function(){
    //     alert('Enter - Varning Varning!');
    //  })
    //  .mouseleave(function(){
    //     alert('Leave - Varning Varning!');
    //  })

     //kan alltså nestla flera genom att separera med punkter

     //FORMULÄRET

    //  $('input').focus(function(){
    //      $(this).css('background', 'lime');
    //  })
    //  .blur(function(){
    //      $(this).css('background', 'white');
    //  })

    //Bättre att lägga till och ta bort klasser för får bättre kontroll
    //Det är också ett event

    // $('input').focus(function(){
    //     $(this).addClass('focus'); 
      
    //     //nu behöver man bara byta ut input på ett ställe för att uppdatera alla (mindre extra jobb)
    //     // this är en stor hjälp med detta
    // })
    // .blur(function(){
    //     $(this).removeClass('focus');
    // })

// $('input').keyup(function(){
//     console.log('key up triggered');
// })


// $('input').keydown(function(){
//     if(e.key === 'a') {
//         console.log('knappen är: ' + e.key);  
//     }
// })

// $('input').keyup(function(e){
//     if(e.key === 'Enter' || e.keyCode === 13) {
//         console.log('Du har tryckt på enter');  
//     }
// })
//(e) e:et står för event. Man kan skriva ut 'event' också om man vill.
//man kan också döpa som man vill men det bör följa bra kodpraxis vad gäller namngivning.

// $('input').keyup(function(event){
//   console.log(event);
  
// })
//Man kan kolla en stor lista i console med en massa info om objectet
//man håller på med, och mer därtill.

// $('input').keyup(function(event){
//     if(event.target.value === 'Hans') {
//         console.log('Du är världens bästa människa. Tommy sucks!');  
//     }
    
//   })


//Button: Submit

$('form').submit(function(e){
    e.preventDefault(); 
    //förhindrar att sidan laddas om och formuläret submittas.

    console.log('Nu validerar vi formuläret.');
    console.log('Validering klar - skickar till databas');
    //JAG bestämmer över när det ska skickas iväg alltså.

    let = writeToDatabaseCompleted = false;

    if(!writeToDatabaseCompleted) {
        return false
      //  window.location.replace("http://stackoverflow.com");
    }// else {
       // alert('nått gick fel');
    //}
})







}); //RÖR EJ!