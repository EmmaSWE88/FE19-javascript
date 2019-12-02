$(function(){

  

    function validateField(input){
    let value = $(input).val();
    let fieldName = $(input).attr('data-fieldName')
    
    if(value.length < 1) {
        $('#error_message').append(`<li>you must enter your ${fieldName}</li>`)

        //$('#error_message').html(`${input}field is required!`)
        //skriver över firstname, så bökigt om man inte använder bootstrap
        //ev kapsla in input och error meddelande i div och gå in i divvarna och kolla och skriva ut
        //$('#error_message').css('display', 'block');   
    }
    
    if(error_array.length === 0) {
        //send data to api or database
    } 

    }
    

   
    // function validateFirstName(){
    //     let firstname_value = $('#firstName').val();
    //     console.log(firstname_Value);  
    // }
    //inte fel men inte heller effektivt att göra funktioner som gör samma sak
    //på flera ställen i samma kod/formulär




    $('#oneForm').on('submit', function(e) {
        //förhindra att den skickar datat och laddar om sidan
        //jag får kontrollen
        e.preventDefault();

        validateField('#firstName')
        validateField('#lastName')
    });






}); //can't touch this!