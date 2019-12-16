$(function(){

    function isEmpty(id) {
        if($(id).val() === '') {
            $(id).addClass('is-invalid');
            $(id).removeClass('is-valid');
           // $('#firstName > span').removeClass('d-none');
            $(id).focus();
        } else {
            $(id).removeClass('is-invalid');
            $(id).addClass('is-valid');
        }

    }

    $('input').keyup(function(e) { //key up på någon av den och den validerar allt samtidigt
     let id ='#' + e.currentTarget.id
        validateInput(id);
        
    }); //kanske använda this eller en event del för att trigga rätt ställen i formuläret

    $('#regForm').submit((e) => {
        e.preventDefault();

        validateInput('#firstName');
        validateInput('#lastName');
        
        
        isEmpty('#firstName');
        isEmpty('#lastName');
        
    })

    $('#firstName').on('keyup', function(e){
        validateEmail(e.currentTarget.value)
    })


}); //DON'T TOUCH THIS!