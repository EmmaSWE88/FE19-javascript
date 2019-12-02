$(function(){

function loadLanguage() {
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            
            
            document.getElementById("headline").innerHTML = obj.welcome;
            document.getElementById("registerButton").innerHTML = obj.register;
        }
    }
    http.open("GET", "se-SE.json", true);
    http.send();
}

loadLanguage();




});