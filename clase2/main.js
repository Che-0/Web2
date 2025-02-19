// Tarea 1 
// implementar &&  y ||



console.log("Hello World");

//operadores logicos
// && and
// || or
// ! not



let uno = "Hola"

let dos = "Manuel"

edad = 70


console.log(uno +" "+dos+" tu edad es: "+edad)
console.log(`${uno} ${dos} tu edad es ${edad}`)
if (edad <= 30 || edad >= 65){
    console.log("Eres mayor de edad")
}

let suma = prompt("Cuanto es 15+15")
let resta = prompt("Cuanto es 39+25")
let division = prompt("cuanto es 0/1 ")


let calificacion;
if (suma === "30" && resta === "64" && division === "0"){

    calificacion = 10;
    document.body.innerHTML = " <h1>!!!!  tu calificacion es 10  !!!!</h1> <center> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/220px-Cat_November_2010-1a.jpg' alt='gato'>  </center> ";

}else{
    calificacion = 5;
    document.body.innerHTML = " <h1>!!!!  tu calificacion es 5  !!!!</h1> <center> <img src='https://i.pinimg.com/550x/ce/60/1e/ce601e5bad797cc2aa8be5134b434e34.jpg' alt='gato'>  </center> ";
}
