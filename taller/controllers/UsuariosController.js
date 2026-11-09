const conexion = require("../app");

class UsuariosController {
    
    //Registrar un usuario POST
    guardar(req, res) {
        const { nombre, apellido, direccion, telefono } = req.body;
        
        conexion.query("INSERT INTO usuarios (nombre, apellido, direccion, telefono) VALUES (?, ?, ?, ?)", [nombre, apellido, direccion, telefono], (err, resultado) => {
            res.json({ mensaje: "Usuario registrado correctamente" });
        });
    }

    //Consultar todos los usuarios GET
    traer(req, res) {
        conexion.query("SELECT * FROM usuarios", (err, resultados) => {
            res.json(resultados);
        });
    }

    //Consultar un usuario por ID 
    buscar(req, res) {
        const { id } = req.params; 
        
        conexion.query("SELECT * FROM usuarios WHERE id = ?", [id], (err, resultados) => {
            res.json(resultados);
        });
    }

    //Actualizar un usuario existente put
    actualizar(req, res) {
        const { id } = req.params; 
        const { nombre, apellido, direccion, telefono } = req.body;
        
        conexion.query("UPDATE usuarios SET nombre = ?, apellido = ?, direccion = ?, telefono = ? WHERE id = ?", [nombre, apellido, direccion, telefono, id], (err, resultado) => {
            res.json({ mensaje: "Usuario actualizado correctamente" });
        });
    }

    //Eliminar un usuario DELETE 
    eliminar(req, res) {
        const { id } = req.params; 
        
        conexion.query("DELETE FROM usuarios WHERE id = ?", [id], (err, resultado) => {
            res.json({ mensaje: "Usuario eliminado correctamente" });
        });
    }
}

module.exports = UsuariosController;
