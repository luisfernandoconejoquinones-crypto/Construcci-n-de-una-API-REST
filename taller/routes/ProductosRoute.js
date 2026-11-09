const express = require('express');
let router = express.Router();

// Importamos el controlador de productos
const ProductosController = require('../controllers/ProductosController');
const productosController = new ProductosController();

// Definimos las rutas 
router.get('/productos/agotados', productosController.agotados.bind());
router.get('/productos/bajo-stock', productosController.bajoStock.bind());


router.post('/productos', productosController.guardar.bind());
router.get('/productos', productosController.traer.bind());
router.get('/productos/:id', productosController.buscar.bind());
router.put('/productos/:id', productosController.actualizar.bind());
router.delete('/productos/:id', productosController.eliminar.bind());



module.exports = router;