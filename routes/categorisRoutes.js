const express = require('express');
 const catagorisController = require('../controller/catagorisController')


 const router = express.Router()

 router.get('/getAllcatagoris',catagorisController.getAllcatagoris )
 router.get('/getcatagorisByID/:ID', catagorisController.getcatagorisByID)
 router.post('/createCatagoris', catagorisController.createCatagoris)
 router.put('/updateCatagoris/:ID', catagorisController.updateCatagoris)
 router.delete('/deleteCatagoris/:ID', catagorisController.deleteCatagoris)

 module.exports = router