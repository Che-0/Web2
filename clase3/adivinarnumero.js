//Adivina el numero
// Tener un numero de vidad 3

let life = 3;
let numeroAdivinar = Math.floor(Math.random() * (10-1));
console.log(numeroAdivinar);

while (life > 0) {
    let numero = parseInt(prompt("Adivina el numero entre 1 y 10"));
    if (numero === numeroAdivinar) {
        alert("Felicidades adivinaste el numero");
        break;
    } else {
        life--;
        alert("Te quedan " + life + " vidas");
    }
    if (life === 0) {
        alert("Se te acabaron las vidas");
    }
}
