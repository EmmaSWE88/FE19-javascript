const route = require('express').Router()
const productModel = require('../models/product/productModel')

route.post('/import', productModel.addProducts)

route.get('/', productModel.getProducts)
route.get('/:id', productModel.getProduct)

//route.delete('/remove', productModel.removeProduct)

module.exports = route