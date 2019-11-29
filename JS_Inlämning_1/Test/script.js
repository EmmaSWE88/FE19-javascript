$(function() {
    $('#regForm').submit((e) => {
        e.preventDefault();

        validateInput('#firstName');
        validateInput('#lastName');
        
    })

    function isEmpty(id) {
        if($(id).val() === '') {
            $(id).addClass('is-invalid');
           // $('#firstName > span').removeClass('d-none');
            $(id).focus();
        } else {
            $(id).removeClass('is-invalid');
            $(id).addClass('is-valid');
        }

    }

}); //DO NOT DELETE THIS ONE