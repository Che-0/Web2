



for (let i = 1; i <= 10; i++) {
    console.log("3 x " + i + " = " + 3 * i);
    for ( let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}

// suma resta multiplicacion division


function sumar(){
    let e = parseInt(prompt("Ingresa el numera a"))
    let b = parseInt(prompt("Ingresa el numera b"))
    alert("la suma es "+(e+b))
    return e+b
}

function restar(){
    let e = parseInt(prompt("Ingresa el numera a"))
    let b = parseInt(prompt("Ingresa el numera b"))
    alert("la resta es "+(e-b))
    return e-b
}

function multiplicar(){
    let e = parseInt(prompt("Ingresa el numera a"))
    let b = parseInt(prompt("Ingresa el numera b"))
    alert("la multiplicacion es "+(e*b))
    return e*b
}


function dividir(){
    let e = parseInt(prompt("Ingresa el numera a"))
    let b = parseInt(prompt("Ingresa el numera b"))
    alert("la division es "+(e/b))
    return e/b
}