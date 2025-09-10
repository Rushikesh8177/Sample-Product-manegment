const express = require('express');
 const productController = require('../controller/productController')


 const router = express.Router()

 router.get('/getALlproducts',productController.getAllproducts )
 router.get('/getProductByID/:ID', productController.getProductByID)
 router.post('/createProduct', productController.createProduct)
 router.put('/updateProuct/:ID', productController.updateProduct)
 router.delete('/deleteProduct/:ID', productController.deleteProduct)

 module.exports = router