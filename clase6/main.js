let inventario = [];

/// funcion para menu 


function menu() {
    let opcion = prompt(`

        Elige una opción:
        1. Agregar producto
        2. Mostrar inventario
        3. Buscar producto
        4. Salir`);
    switch (opcion) {
        case '1':
            agregarProducto();
            break;
        case '2':
            mostrarInventario();
            break;
        case '3':
            buscarProducto();
            break;
        case '4':
            alert("Saliendo...");
            break;
        default:
            alert("Opción no válida");
            //menu();
    }
}


// funcion mostrar inventario log

function mostrarInventario() {
    for (let i = 0; i < inventario.length; i++) {
        console.log("Producto " + (i + 1) + ": " + JSON.stringify(inventario[i]));
    }
    if (inventario.length === 0) {
        alert("No hay productos en el inventario");
    } else {
        alert("Productos en el inventario: " + inventario);
    }
}

// funcion agregar producto
function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseInt(prompt("Ingrese el precio del producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));

    if(precio <= 0 || cantidad <= 0) {
        alert("El precio y la cantidad deben ser mayores a 0");

    }else{

        let producto = {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad
        };
        inventario.push(producto);
        console.log("Productos agregados");
        console.log(inventario.forEach(elemento => (console.log(elemento)) ));
        alert("Producto agregado exitosamente");
    }
}




// funcion inicializar

function inicializar() {
    console.log("Bienvenido al sistema de inventario");
    let continuar = true;
    while (continuar) {
        let opcion = menu();
        switch (opcion) {
            case '1':
                agregarProducto();
                break;
            case '2':
                mostrarInventario();
                break;
            case '3':
                buscarProducto();
                break;
            case '4':
                continuar = false;
                break;
            default:
                alert("Opción no válida");
        }
    }

}

inicializar();