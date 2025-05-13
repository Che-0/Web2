//import express
const express = require('express');

//generar instancia de express
const app = express();


//puertp
const PORT = 3001;

//middleware
app.get('/', (req, res) => {
    res.send('servidor 2');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});