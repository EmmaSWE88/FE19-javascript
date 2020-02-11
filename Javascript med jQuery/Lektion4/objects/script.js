$(function() {

    let object = {};
    let objectArray = []

    //för att vara på den säkra sidan, använd const

    const person = {
        firstName: 'Hans',
        lastName: 'Mattin-Lassei',
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        address: 
            {
                street: 'Pilgatan 2', 
                zipcode: 12345,
                city: 'Västerås',
                fullAddress: function() {
                    //return this.street + ', ' + this.zipcode + ' ' + this.city
                    return `${this.street}, ${this.zipcode}, ${this.city}`
                }
            },
            phoneNumbers: [
                '073-123 12 12',
                '070-123 12 31'
            ],
            emailAddress: 'hans@domain.com'
    }; //END const person

    //document.write(person.address.fullAddress());

    //JSON - nu kan informationen skickas vidare till andra språk 
    // (perl java etc) som kan hantera objectet.
    //Ett JS object är INTE samma sak som ett JSON objekt.

    // let json = JSON.stringify(person);
    // document.write(json);

    let json = JSON.stringify(person); //json-formaterad text som kan skickas vidare och sedan dekrypteras av annat språk
    document.write(json);

    let javascriptObj = JSON.parse(json); //gör om så man kan hämta ut en del info. dock ej specialare som fullAddress (pga att den är en funktion, det är JS specifikt)
    document.write(javascriptObj.firstName);

}); //RÖR EJ