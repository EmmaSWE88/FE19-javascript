const mongodb = require('mongoose')
const Product = require('./productSchema')

exports.addProducts = (req, res) => {

    try {
        for(current of req.body) {
            let product = new Product({
                
                _id:                new mongodb.Types.ObjectId,
                name:               current.name,
                description:        current.description,
                shortDescription:   current.shortDescription,
                image:              current.image,
                inStockAmount:      current.inStockAmount,
                price:              current.price         
    
            })
    
            product.save()
        }

        return res.status(200).json()
    }
    catch {
        return res.status(400).json()
    }
}

exports.getProducts = (req, res) => {
   Product.find()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
}

exports.getProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
    .then(product => {
        product != null
            ? res.status(200).json(product)
            : res.status(404).json({})     
    })  
    .catch(error => {
        console.log(error)
        res.status(400).json({})
    })
}
exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({}))
    .catch(error => {
        res.status(400).json({})
    })
}