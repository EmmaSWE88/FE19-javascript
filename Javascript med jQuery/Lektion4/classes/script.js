$(function() {

    //OBJECTS -används när vi bara behöver skapa ett objekt
    const jsObj = {}

    //OBJECTS - kan ha olika properties i sig, samt funktioner
    const obj = {
        firstName: 'Hans',
        lastName: 'Mattin-Lassei',
        fullName: function(){
            return `${this.firstName} ${this.lastName}`
        }
    };


    // CLASSES - används när vi vill skapa flera objekt av samma typ/mall

    class JsClass {}

    //CLASSES - class är egentligen bara en genväg för prototypen av constructor
    // (mer populär numera för det följer mer traditionell kodstruktur som andra språk har)

    class ProductClass {
        constructor(sku, name, description, price, tac) {
            this.sku = sku//SKU (stock keeping unit)
            this.name   = name
            this.description  = description
            this.price = price
            this.tax = tax
        }
        totalPrice() {
           return this.price + this.tax
        }
    }

    //PROTOTYPE - så här ser en klass ut i grund och botten
    //Kallas prototyp-modellen som typ hela JS bygger på 

    function ProductPrototype(sku, name, description,price,tax) {
        this.sku = sku
        this.name = name
        this.description = description
        this.price = price
        this.tax = tax
        this.totalPrice = function() {
            return this.price + this.tax
        }

    }

    let product1 = new ProductClass()
    let product2 = new ProductPrototype()

    const products = []

    for(i=0; i<10; i++) {
        let sku = `sku-${i}`
        let name = `product-${i}`
        let description = 'this is a product'
        let price = 10 + i;
        let tax = 25;

        products[i] = new ProductClass(sku,name,description,price,tax);
    }

    for(product of products) {
        // console.log(`Product: ${product.name}, Total Price: ${product.totalPrice()}`);
        // console.log(product.showDemo());
        
        
    }

    //EXTENDS - arv något ärver från en huvudklass

    // class Computer extends ProductClass {
        // constructor(specification) {
        //     super();

        //     this.specification = specification
        // }
    //     showDemo() {
    //         console.log('showing demo');
            
    //     }
    // }

    // let c1 = new Computer();
    // c1.showDemo();

    class Computer {
        constructor(name,price,brand,specification) {
            this.name = name
            this.price = price
            this.brand = brand
            this.specification = specification
        }
    }
    showProductInfo(){
        console.log(`Product: ${this.name}, Price:${this.price}, Specification: ${this.specification}`);
        
    }


}); //RÖR EJ