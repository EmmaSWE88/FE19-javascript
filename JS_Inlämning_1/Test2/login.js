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

    function ValidateEmail(email) 
    {
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#inputEmail').val()))
      {
        $('#inputEmail1').removeClass('is-invalid')
        $('#inputEmail1').addClass('is-valid') 
        return (true)
      }
        $('#inputEmail1').addClass('is-invalid')
        $('#inputEmail1').focus();
        return (false)
    }

    


    $('#loginForm').submit((e) => {
        e.preventDefault();

        isEmpty('#inputEmail1')
        isEmpty('#loginPassword')
        ValidateEmail(email) 
        noProblem() 

        function noProblem (input){
            let value = $(input).val();
            
            if(value.length < 0 ) {
                $(id).addClass('is-invalid')
                $(id).removeClass('is-valid') 
                return (true)
            } else {
                window.location.replace("loginthanku.html");
                return(false)
            }
        }

    })

}); //RÖR EJ