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

    $('input').keyup(function(e) {
        let id = "#" + e.currentTarget.id
        isEmpty(id);
    });

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

    function noProblem() {
        let loginUser = document.getElementById('inputEmail1');
        let loginUserPassword = document.getElementById('loginPassword');
        if(loginUser == true && loginUserPassword == true){
           window.location.replace = ("loginthanku.html");
        } else {
                alert('nått gick fel');
            }
    }

    $('#loginForm').submit((e) => {
        e.preventDefault();

        isEmpty('#inputEmail1')
        isEmpty('#loginPassword')
        ValidateEmail(email) 
        noProblem() 

        // let writeToDatabaseCompleted = false;

        // if(!writeToDatabaseCompleted) {
        //     return false
        //    window.location.replace("http://stackoverflow.com");
        // }else {
        //     alert('nått gick fel');
        // }
    
    })

}); //RÖR EJ