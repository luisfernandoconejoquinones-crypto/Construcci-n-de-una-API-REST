const express = require('express');
let router = express.Router();


const UsuariosController = require('../controllers/UsuariosController');
const usuariosController = new UsuariosController();

router.post('/usuarios', usuariosController.guardar.bind());
router.get('/usuarios', usuariosController.traer.bind());
router.get('/usuarios/:id', usuariosController.buscar.bind());
router.put('/usuarios/:id', usuariosController.actualizar.bind());
router.delete('/usuarios/:id', usuariosController.eliminar.bind());

module.exports = router;