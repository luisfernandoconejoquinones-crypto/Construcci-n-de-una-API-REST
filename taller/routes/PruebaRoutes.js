const express = require("express");
const router = express.Router();
const PruebaController = require("../controllers/PruebaController");

const pruebaCtrl = new PruebaController();

router.get("/bienvenida", pruebaCtrl.bienvenida);
router.get("/verificar", pruebaCtrl.verificar);
router.post("/recibir", pruebaCtrl.recibir);
router.post("/sumar", pruebaCtrl.sumar);

module.exports = router;