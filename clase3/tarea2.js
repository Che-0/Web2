//Comparar dos numeros para saber cual es el mayor y el menor 

function compararNumeros(x,y) {
    if (x > y) {
        console.log(x, "es mayor que", y);
        alert(x + " es mayor que " + y);
    } else if (x < y) {
        console.log(x, "es menor que", y);
        alert(x + " es menor que " + y);
    } else {
        console.log(x, "es igual que", y);
        alert(x + " es igual que " + y);
    }
    
}

//pedimos los numeros a comparar
let numero1 = parseInt(prompt("ingrese un numero"));
let numero2 = parseInt(prompt("ingrese otro numero"));


let resultado = (numero1,numero2)=> {
    if (numero1 > numero2) {
        return numero1 + " es mayor que " + numero2;
    } else if (numero1 < numero2) {
        return numero1 + " es menor que " + numero2;
    } else {
        return numero1 + " es igual que " + numero2;
    }
}
console.log(resultado(numero1,numero2),"desde flecha");
//llamamos a la funcion
compararNumeros(numero1, numero2);




// Peliculas para elegir

let opciones = prompt(`Elija una pelicula:
    1.- El señor de los anillos
    2.- Harry Potter
    3.- Star Wars
    4.- Avengers`);

switch (opciones) {
    case "1":
        alert("El señor de los anillos");
        break;
    case "2":
        alert("Harry Potter");
        break;
    case "3":
        alert("Star Wars");
        break;
    case "4":
        alert("Avengers");
        break;
    default:
        alert("Opcion no valida");
        break;
}

let contador = 0;
while (contador < 10) {
    console.log(contador);
    contador++;
}

//tabla de multiplicar del 1 al 10

let contador2 = 1;
while (contador2 < 10) {
    console.log("1*"+contador2+ "=>" +   1*contador2);
    contador2++;
}
