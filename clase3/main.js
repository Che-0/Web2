//estructuras de control
//if
//if else
//while



let contador = 0;

while (contador < 10) {
    if (contador % 2 === 0) {
        console.log(contador, '->es par');
    }else{
        console.log(contador,"->es impar");
    }
    contador++;
}

//do while
let contador2 = 0;
do {
    if (contador2 % 2 === 0) {
        console.log(contador2, '->es par');
    }else{
        console.log(contador2,"->es impar");
    }
    contador2++;
} while (contador2 < 10);


//capturar dato
let numero = parseInt(prompt("ingrese un numero"));
console.log("el tipo de dato de numero es: ", typeof numero);
if (numero <= 10) {
    console.log("CHIDP :)");
} else {
    console.log("MAL :(");
}


//comparacion de numeros cual es mayor y cual menor