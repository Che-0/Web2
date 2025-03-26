
//funcion declarativa
function numeroaleatorio(){

    return Math.random( Math.floor() * 100);
};

console.log(numeroaleatorio());


//funcion expresiva
let numeroaleatorio = function(){

    return Math.random( Math.floor() * 100);
};