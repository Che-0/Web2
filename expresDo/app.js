const express = require('express');
const path = require('path');
const routes = require('./routes/routes'); //importamos las rutas
const port = 3024; //puerto de la app
const app = express();


// Middleware para mantener los archivos de manera estatica
app.use(express.static(path.join(__dirname, 'public'))); //para servir archivos estaticos

// importamos el archivo de rutas
app.use("/",routes); //para usar las rutas



app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
}
); //para escuchar el puerto