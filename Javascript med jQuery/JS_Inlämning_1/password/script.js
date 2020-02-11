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

    function passStrong(){
            let passStrong = document.getElementById('inputPassword').value;
            let notStrong = document.getElementById('notStrong');
            if(passStrong.value.length = 0 ) {
                $('#inputPassword').removeClass('is-valid')
                $('#inputPassword').addClass('is-invalid')
                return(false)   
            } 
            if(passStrong.value.length > 0 && passStrong.value.length < 8 ) {
                $('#inputPassword').removeClass('is-valid')
                $('#inputPassword').addClass('is-invalid')
                $('#notStrong').innerHTML("Lösenordet måste vara minst 8 tecken långt!")
                return(false)
                
            } 
            else{
                $('#inputPassword').addClass('is-valid')
                $('#inputPassword').removeClass('is-invalid')
                return(true)
            }
            
        };
        


        $('#regForm').submit((e) => {
            e.preventDefault();

            isEmpty('#inputPassword')
            isEmpty('#confirmPassword')
            passStrong()
    
        })
    
}); //rör ej


