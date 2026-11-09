let express = require("express");
let cors = require("cors");
let mysql = require("mysql2");


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Conexión a la base de datos
const conexion = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "1063*Fc",
    database: "taller_api",
    port: 3306
});

conexion.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log("Conexión exitosa a la base de datos MySQL");
});

module.exports = conexion;
const usuariosRoute = require("./routes/UsuariosRoute");
const productosRoute = require("./routes/ProductosRoute");
const pruebaRoute = require("./routes/PruebaRoutes");

app.use('/pru', pruebaRoute);
app.use('/usu', usuariosRoute);
app.use('/pro', productosRoute);

// Iniciar servidor en el puerto 3000
app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto " + PORT);
});
