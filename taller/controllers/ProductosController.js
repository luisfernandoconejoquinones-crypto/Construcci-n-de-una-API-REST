const conexion = require("../app");

class ProductosController {
    
    // Registrar un producto POS
    guardar(req, res) {
        const { nombre, descripcion, precio, stock } = req.body;
        
        conexion.query("INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)", [nombre, descripcion, precio, stock], (err, resultado) => {
            res.json({ mensaje: "Producto registrado correctamente" });
        });
    }

    //Consultar todos los productos GET
    traer(req, res) {
        conexion.query("SELECT * FROM productos", (err, resultados) => {
            res.json(resultados);
        });
    }

    // Consultar un producto por ID GET 
    buscar(req, res) {
        const { id } = req.params;
        
        conexion.query("SELECT * FROM productos WHERE id = ?", [id], (err, resultados) => {
            res.json(resultados);
        });
    }

    //Actualizar un producto put
    actualizar(req, res) {
        const { id } = req.params;
        const { nombre, descripcion, precio, stock } = req.body;
        
        conexion.query("UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?", [nombre, descripcion, precio, stock, id], (err, resultado) => {
            res.json({ mensaje: "Producto actualizado correctamente" });
        });
    }

    // Eliminar un producto DELETE 
    eliminar(req, res) {
        const { id } = req.params;
        
        conexion.query("DELETE FROM productos WHERE id = ?", [id], (err, resultado) => {
            res.json({ mensaje: "Producto eliminado correctamente" });
        });
    }

    //Consultar productos agotados 
    agotados(req, res) {
        conexion.query("SELECT * FROM productos WHERE stock = 0", (err, resultados) => {
            res.json(resultados);
        });
    }

    //Consultar productos con bajo stock 
    bajoStock(req, res) {
        conexion.query("SELECT * FROM productos WHERE stock < 5", (err, resultados) => {
            res.json(resultados);
        });
    }
}

module.exports = ProductosController;