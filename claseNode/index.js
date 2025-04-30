//importar el modulo de http que viene incluido en node
const aerverCreadoHTTP = require('http');


//definimos puerto donde va a correr el servidor
const PORT = 3000;
//creamos el servidor
const server = aerverCreadoHTTP.createServer((req, res) => {
    //configuramos la respuesta
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola Mundo');
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
}
);

// cmd node index.js
//abrir el navegador y escribir http://localhost:3000
