const express = require('express');
const path = require('path');
const port = 3059;


const app = express();
app.get('/', (req, res) => {
    //res.send('Hello World!');
    //res.sendFile('main.html', { root: __dirname });
    // ruta abs /c/Users/manue/OneDrive/Desktop/webMateria/expres2

    res.sendFile(path.join(__dirname, '/main.html')) // path es un modulo de nodejs
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);