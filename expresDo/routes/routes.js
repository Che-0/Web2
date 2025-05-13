const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
    
});
router.get('/registro', (req, res) => {
    
    res.sendFile(path.join(__dirname ,'../views/registro.html'));
});

router.get('/gumball', (req, res) => {
    
    res.sendFile(path.join(__dirname ,'../views/gumball.html'));
});

router.get('/monaChina', (req, res) => {
    
    res.sendFile(path.join(__dirname ,'../views/monaChina.html'));
});

console.log('__dirname', __dirname);
console.log('__dirname', __dirname+"\..\views\index.html");

module.exports = router;
