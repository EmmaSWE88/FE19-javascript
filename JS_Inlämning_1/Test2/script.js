// $(function() {

//     function isEmpty(id) {
//         if($(id).val() === '') {
//             $(id).addClass('is-invalid')
//             $(id).removeClass('is-valid')

//             $(id).focus();
//         } else {
//             $(id).removeClass('is-invalid')
//             $(id).addClass('is-valid')
//         }
//     }

//     $('input').keyup(function(e) {
//         let id = "#" + e.currentTarget.id
//         isEmpty(id);
//     });

//     function ValidateEmail(email) 
//     {
//      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#inputEmail').val()))
//       {
//         $('#inputEmail').removeClass('is-invalid')
//         $('#inputEmail').addClass('is-valid') 
//         return (true)
//       }
//         $('#inputEmail').addClass('is-invalid')
//         $('#inputEmail').focus();
//         return (false)
//     }

//         $("#inputPassword").blur(function passLength(){
//             let passLength = document.getElementById('inputPassword');
//             if(passLength.value.length >= 1 && passLength.value.length < 8 ) {
//                 $('#inputPassword').removeClass('is-valid')
//                 $('#inputPassword').addClass('is-invalid')
                
//                 return($("#notStrong").html("Lösenordet måste vara minst 8 tecken långt!"))
                
//             } 
//             else{
//                 $('#inputPassword').addClass('is-valid')
//                 $('#inputPassword').removeClass('is-invalid')
//                 return(true)
//             }
//         });
        

//    function checkPass() {
//        let password = regForm.inputPassword.value;
//        let confirm = regForm.confirmPassword.value;
//        if(password.value === confirm.value) {
//         $('#confirmPassword').removeClass('is-invalid')
//            $('#confirmPassword').addClass('is-valid')
//            return(true)
//        }else {
//         $('#confirmPassword').removeClass('is-valid')
//         $('#confirmPassword').addClass('is-invalid')
//         return (false)
//        }
//    }

//    function inCheck() {
//     let inCheck = document.getElementById('consentCheck');
//        if(inCheck.checked){
//            $('#consentCheck').removeClass('is-invalid')
//            $('#consentCheck').addClass('is-valid')
//            return(true)
//        } else {
//         $('#consentCheck').addClass('is-invalid')
//         $('#consentCheck').removeClass('is-valid')
//         return(false)
//        }
//    }
//     $('#regForm').submit((e) => {
//         e.preventDefault();

//         isEmpty('#firstName');
//         isEmpty('#lastName');
//         isEmpty('#inputEmail')
//         isEmpty('#inputPhoneNumber')
//         isEmpty('#inputAddress')
//         isEmpty('#inputPassword')
//         isEmpty('#confirmPassword')
//         isEmpty('#inputCity')
//         isEmpty('#inputZip')
//         isEmpty('#inputCountry')
     
       

//         ValidateEmail() 
//         checkPass()
//         passLength()
//         // checkPassword('#inputPassword')
//         inCheck()

//     })
//     const complete = document.querySelectorAll('.is-valid');
//     if(complete.length >= 11){
//         document.querySelector('.submitBtn').disabled =false;
//     }
//     else {
//         document.querySelector('.submitBtn').disabled = true;
//     }

// });


//==============================================================================================================
//==============================================================================================================
 
//Kolla om det är tomt i nått fält
$(function(){
    function isEmpty(id) {
        if($(id).val() === '') {
            $(id).addClass('is-invalid')
            $(id).removeClass('is-valid')

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

    //Formel för epost-address
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

    //teckenlängd på lösenord
    function checkPassStrength() {
    let passStrength = document.getElementById('inputPassword');
    if(passStrength.value.length >= 8) {
        length.classList.remove("is-invalid");
        length.classList.add("is-valid");
      } else {
        length.classList.remove("is-valid");
        length.classList.add("is-invalid");
      }
    
    }

    //Matcha lösenorden
    function validatePass() { 
        let password = document.getElementById('inputPassword').value;
        let confirmPassword = document.getElementById('confirmPassword').value;
        if (password != confirmPassword) {
            $('#confirmPassword').addClass('is-invalid')
            $('#confirmPassword').removeClass('is-valid')
            alert("Du har inte repeterat samma lösenord!");
            return (false);
        } else {
            return (true);
        }

       
}
//Kolla om checkboxen är checkad
    function inCheck() {
    let checkComp = document.getElementById('consentCheck');
       if(checkComp.checked == true){
           $('#consentCheck').removeClass('is-invalid')
           $('#consentCheck').addClass('is-valid')
           
       } else {
        $('#consentCheck').addClass('is-invalid')
        $('#consentCheck').removeClass('is-valid')
        return(false)
       }
   }

   //Kolla om radio-button är i klickad
   function radioCheck() {
    let radioComp = document.getElementById('customRadio1');
       if(radioComp.checked == true){
           $('#customRadio1').removeClass('is-invalid')
           $('#customRadio1').addClass('is-valid')
           
       } else {
        $('#customRadio1').addClass('is-invalid')
        $('#customRadio1').removeClass('is-valid')
        return(false)
       }
   }


    $('#regForm').submit((e) => {
        e.preventDefault();

        isEmpty('#firstName');
        isEmpty('#lastName');
        isEmpty('#inputEmail');
        isEmpty('#inputPhoneNumber');
        isEmpty('#inputAddress');
        isEmpty('#inputPassword');
        isEmpty('#confirmPassword');
        isEmpty('#inputCity');
        isEmpty('#inputZip');
        isEmpty('#inputCountry');
        isEmpty('#regFormTextarea1');

        checkPassStrength();
        validatePass();
        inCheck();
        radioCheck();
    });

}); // DO NOT DELETE 

