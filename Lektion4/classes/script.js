$(function() {

//OBJECT - kan vara helt olika, ställer till problem

    const obj1 = {
        firstName = 'Object',
        lastName = 'Object'
    }

    const obj2 = {
        first = 'Object',
        last = 'Object'
    }


    //CLASS = Model - är en gemensam standard på hur ett objet ska se ut

    //Gammalt sätt att bygga klasser -typ som funktioner
    function person(firstname, lastname) {
        this.firstName = firstname
        this.lastName = lastname
        this.fullName = function() {
            return this.firstName + ' ' + this.lastName
        }
    }

let p1 = new person ('Hans' , 'Mattin-Lassei')
//document.write(p1.fullName());

    //I och med E6 kom dock class (mer som c#)

   class person {
       constructor(name) {
            this.fullName = fullname;
            this.firstName = function() {
               return fullname.split (' ') [0]
           }
           this.lastName = function() {
               return fullname.split(' ')[1]
           }
       }
   }
//    constructor(firstname, lastname) {
//     this.firstName = firstname;
//     this.lastName = lastname;
//     this.fullName = function() {
//         return this.firstName + ' ' + this.lastName
//     }

    let user1 = new person ('hans', 'mattin-lassei')
    document.write(user1.fullName());

}); //RÖR EJ