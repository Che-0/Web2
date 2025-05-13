const express = require('express');
const routes = require("./routes/routes");
const app = express();
const port = 3089;


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    });

app.use("/",routes);
// Middleware uso de rutas
