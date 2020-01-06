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
        $('#inputEmail').removeClass('is-invalid')
        $('#inputEmail').addClass('is-valid') 
        return (true)
      }
        $('#inputEmail').addClass('is-invalid')
        $('#inputEmail').focus();
        return (false)
    }

    function passLength(){
        let passLength = document.getElementById('inputPassword');
        let badColor = "#DC3545";
        let fontSize = "11.2px";
        let notStrong = $('#notStrong');

        if(passLength.value.length >= 8 ) {
            $('#inputPassword').addClass('is-valid')
            $('#inputPassword').removeClass('is-invalid')
            return(true)
            
        } else {
            $('#inputPassword').removeClass('is-valid')
            notStrong.css('color', badColor, 'font-size', fontSize).html("Lösenordet måste vara minst 8 tecken långt.");
            
            return(false)

        }
    }
   function checkPass() {
       let password = document.getElementById('inputPassword');
       let confirm = document.getElementById('confirmPassword');
       if(password.value == confirm.value && password.value !='') {
        $('#confirmPassword').removeClass('is-invalid')
           $('#confirmPassword').addClass('is-valid')
           return(true)
       }else {
        $('#confirmPassword').removeClass('is-valid')
        $('#confirmPassword').addClass('is-invalid')
        return(false)
       }
   }

   function inCheck() {
    let inCheck = document.getElementById('consentCheck');
       if(inCheck == checked){
           $('#consentCheck').removeClass('is-invalid')
           $('#consentCheck').addClass('is-valid')
           return(true)
       } else {
        $('#consentCheck').addClass('is-invalid')
        $('#consentCheck').removeClass('is-valid')
        return(false)
       }
   }
    $('#regForm').submit((e) => {
        e.preventDefault();

        isEmpty('#firstName');
        isEmpty('#lastName');
        isEmpty('#inputEmail')
        isEmpty('#inputPhoneNumber')
        isEmpty('#inputAddress')
        isEmpty('#inputPassword')
        isEmpty('#confirmPassword')

        ValidateEmail() 
        passLength()
        checkPass()
        inCheck()
        
    })

});