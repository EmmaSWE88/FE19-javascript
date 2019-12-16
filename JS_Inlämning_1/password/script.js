$(function() {

    function isEmpty(id) {
        if($(id).val() === '') {
            $(id).addClass('is-invalid')

            $(id).focus();
        } else {
            $(id).removeClass('is-invalid')
            $(id).addClass('is-valid')
        }
    }

    // function validPassword (){

    // }

    function checkPassword () {
        
            var res; 
            var str = 
                document.getElementById(id).value; 
            if (str.match(/[a-z]/g) && str.match( 
                    /[A-Z]/g) && str.match( 
                    /[0-9]/g) && str.match( 
                    /[^a-zA-Z\d]/g) && str.length >= 8) 
                res = "TRUE"; 
            else 
                res = "FALSE"; 
            document.getElementById(id).value = res; 

    }

    $('#regForm').submit((e) => {
        e.preventDefault();

        isEmpty('#inputPassword');

    })
    
}); //rör ej


