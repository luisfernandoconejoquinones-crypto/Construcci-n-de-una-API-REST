class PruebaController {
    // Bienvenida GET
    bienvenida(req, res) {
        res.json({ mensaje: "¡Bienvenido a la API REST del taller!" });
    }

    // Verificar servidor 
    verificar(req, res) {
        res.json({ 
            mensaje: "Servidor activo y funcionando correctamente", 
            estado: true 
        });
    }

    // Recibir nombre y edad 
    recibir(req, res) {
        const { nombre, edad } = req.body;
        res.json({
            mensaje: "Datos recibidos correctamente",
            datos: { nombre, edad }
        });
    }

    // Sumar dos números POST
    sumar(req, res) {
        const { numero1, numero2 } = req.body;
        
        // Convertimos a número 
        const suma = Number(numero1) + Number(numero2);
        
        res.json({
            resultado: suma
        });
    }
}

module.exports = PruebaController;