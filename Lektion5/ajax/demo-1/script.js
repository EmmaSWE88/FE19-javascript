$(function() {

    //Javascript
    const http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState === 4 || this.status === 200) {
            //console.log(this.status + ": " + this.statusText);
            
        }
      
    }

    http.open("GET","test.txt",true);
    //skicka inte med tex lösenord för de skrivs i klartext. Big no no

});