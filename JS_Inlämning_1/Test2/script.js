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

        $("#inputPassword").blur(function passLength(){
            let passLength = document.getElementById('inputPassword');
            if(passLength.value.length >= 1 && passLength.value.length < 8 ) {
                $('#inputPassword').removeClass('is-valid')
                $('#inputPassword').addClass('is-invalid')
                
                return($("#notStrong").html("Lösenordet måste vara minst 8 tecken långt!"))
                
            } 
            else{
                $('#inputPassword').addClass('is-valid')
                $('#inputPassword').removeClass('is-invalid')
                return(true)
            }
        });
        

//    function checkPass() {
//        let password = regForm.inputPassword.value;
//        let confirm = regForm.confirmPassword.value;
//        if(password.value == confirm.value) {
//         $('#confirmPassword').removeClass('is-invalid')
//            $('#confirmPassword').addClass('is-valid')
//            return(true)
//        }else {
//         $('#confirmPassword').removeClass('is-valid')
//         $('#confirmPassword').addClass('is-invalid')
//         return(false)
//        }
//    }

   function inCheck() {
    let inCheck = document.getElementById('consentCheck');
       if(consentCheck.checked == true){
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
        isEmpty('#inputCity')
        isEmpty('#inputZip')
        isEmpty('#inputCountry')
       

        ValidateEmail() 
        passLength()
        // checkPassword('#inputPassword')
        inCheck('#consentCheck')

    })

});