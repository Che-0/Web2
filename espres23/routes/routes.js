const express = require('express');
const router = express.Router();

const path = require('path');


//definicion de rutas y manejadoras

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname+"index.html"));
    res.sendFile(path.join(__dirname, '../index.html'));
}
);

router.get('/monaChina.html', (req, res) => {
    //res.sendFile(path.join(__dirname+"index.html"));
    res.sendFile(path.join(__dirname ,"../monaChina.html"));
}
);

router.get('/monaChina2.html', (req, res) => {
    res.sendFile(path.join(__dirname ,"../monaChina2.html"));
}
);

router.get('/owo.html', (req, res) => {
    res.sendFile(path.join(__dirname ,"../owo.html"));
}
);

module.exports = router;