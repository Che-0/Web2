const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');


const app = express();

//manejar peticiones don post y request
app.use(bodyParser.urlencoded({ extended: false }));


// configuracion de plantillas
app.set('view engine', 'ejs');

//conexion a db
const db = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: '',
    database: 'node_crud',
    port: 3306
});


//validacion de la conexion a la db
db.connect((err) => {
    if (err) {
        console.log('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
}
);
