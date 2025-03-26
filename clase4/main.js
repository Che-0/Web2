// clase nuemero 4 arrays y for

let frutas  = ["mango","uva","melon","sandia","pera","manzana","platano","kiwi","fresa","naranja","mandarina","cereza","durazno","piña","papaya","coco","limon","lima","toronja","granada","ciruela","higo","guayaba","mamey","tuna","tamarindo","zapote","guanabana","chicozapote","caimito","nance","naranjilla","maracuya","mora","frambuesa","zarzamora","arandano","araza","guaba","paterna","pepino","calabaza","calabacita","chayote","jitomate","tomate","pimiento","chile","chile jalapeño","chile serrano","chile habanero","chile de arbol","chile chipotle","chile ancho","chile pasilla","chile guajillo","chile morita","chile manzano","chile cascabel","chile piquin","chile costeño","chile amashito","chile chilaca","chile poblano","chile mulato"]

for (let i of frutas){
    
    console.log( `la fruta es ${i} y su longitud es ${i.length}`)
}

frutas.forEach((fruta) => {
    console.log(fruta + " ---- UWU")
});

//metodos
let animales=["perro","gato"]
animales.unshift("conejo") //agrega al principio
animales.push("pez") //agrega al final
animales.shift() //elimina el primer elemento si no tiene parametros elimina el primer elemento
animales.pop() //elimina el ultimo elemento

// splice (posicion, cantidad a eliminar, elemento a agregar) ----- ta raro 
animales.splice(1,0,"loro") //agrega en la posicion 1 el elemento "loro"
animales.splice(1,1) //elimina el elemento en la posicion 1
animales.splice(1,1,"loro") //elimina el elemento en la posicion 1 y agrega "loro" 


let user = {
    name: "menuel",
    age: 80,
    email: "uwuntu@gmail.com"

}

for(let i in user){
    console.log(user[i])
}

//*3
// for (var i = 1; i <= 10; i++) {
//     console.log("3 x " + i + " = " + 3 * i);
// }

// todas
// for (let i = 1; i <= 10; i++) {
//     console.log("3 x " + i + " = " + 3 * i);
//     for ( let j = 1; j <= 10; j++){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
// }



/////// Funciones
function saludar(name){
    console.log(`Hola ${name}`)
    alert(`Hola ${name}`)
}


//funcion con retorno 
function sumar(){
    let e = parseInt(prompt("Ingresa el numera a"))
    let b = parseInt(prompt("Ingresa el numera b"))
    alert("la suma es "+(e+b))
    return e+b
}

saludar("Manuel")
let resultado = sumar()
console.log(resultado)