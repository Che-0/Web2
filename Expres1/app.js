//import express
const express = require('express');

//generar instancia de express
const app = express();


//puertp
const PORT = 3000;

//middleware
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});