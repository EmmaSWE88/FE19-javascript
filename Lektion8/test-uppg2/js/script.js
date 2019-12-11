function getFullName(firstname, lastname) {
    fetch('https://inlupp-fa.azurewebsites.net/api/users?firstname=Emma&lastname=Norling')
    .then(res => res.text())
    .then(data => console.log(data))
}

getFullName('Emma', 'Norling')