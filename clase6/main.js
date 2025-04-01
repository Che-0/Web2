// guardar inventario en un array
let inventario = [];

/// funcion para desplegar menu 
function menu() {
    let opcion = prompt(`
        Elige una opción:
        1. Agregar producto
        2. Mostrar inventario
        3. Buscar producto
        4. Salir`);
    return opcion;    
}

// funcion buscar producto
function buscarProducto() {
    let nombre = prompt("Ingrese el nombre del producto a buscar:");
    let encontrado = inventario.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());

    if (encontrado) {// si no es undefined
        alert("Producto encontrado: " + encontrado.nombre + "\nPrecio: $" + encontrado.precio + "\nCantidad: " + encontrado.cantidad);
    } else {
        alert("Producto no encontrado");
    }
}

// funcion mostrar inventario
function mostrarInventario() {
    // pa que se vea en la consola
    for (let i = 0; i < inventario.length; i++) {
        console.log("Producto " + (i + 1) + ": " + JSON.stringify(inventario[i]));
    }
    // que haya al menos un producto
    if (inventario.length === 0) {
        alert("No hay productos en el inventario");
    } else {
        let listaFormateada = inventario.reduce((acumulador, producto) => {
            return acumulador + "producto: "+producto.nombre + "  -Precio: $" + producto.precio + "  -stok: " + producto.cantidad + "\n";
        }
        , "");
        
        alert("El inventario es: "+ "\n" + listaFormateada);
        console.log("El inventario es: "+"\n" + listaFormateada);
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


// ..                                                                                          
// ..                 ...                                                                      
// ..              .::::...:.                                                                  
// ..           ..::.      .::..                                                               
// ..           .-.          .:.                                 ....                          
// ..           --            .-                              .--::---.                        
// ..          .-.            .-:                           .-:.     .-.                       
// ..          .:              .=.                         .:.        .-.                      
//             -:               -:                       .-=.         .=-.                     
//             -:               :-.                    ..=:           .-:.                     
//            .-:               .=.                    .=-            .--.                     
//             .:               .=.                   .-=.            .=:.                     
//             --               .=:                  .-+:.            .=:                      
//             .-.              .=:                  .--.             .-.                      
//              -.              .=-                 .:-.             .:-.                      
//              ::              .=:                 :+:              .-:                       
//              .:.             .-:                 --.              .-.                       
//              .-.             .::                .=.               --.                       
//              ...             .-:               .--               :=:                        
//              .::             .-:               :=.              .=-                         
//               .-.            .=:               :-.             .==           ..             
//               .:.            :=:              .--.            .-=.           ..             
//               .:-.           :+=-======--===:--=:.           .-+:.           ..             
//                .:-           .........   .......:.           -+:.            ..             
//                  ..                                      .-:--..             ..             
//                   .:==:.                                   -+-..                            
//                ..:=-.                                        -=:.                           
//              .:=-.                                           ..--.                          
//              :=:.                                               :=:                         
//             -*:            :-:.                                  :+:                        
//            .+-             :+-.                   ..-=.           ==.                       
//           .-=              -##*=..              ...=+:.           :+:                       
//           .=:            .-*%#%#+:             :+*#%*-.           .:-.                      
//           :-.            .-**#@#+:             -*%%##-.            :=.                      
//          .::.             ..-=::..             .-*#+-.             :=:                      
//          .::.                                                      :+:                      
//           ...                                                     .:=.                      
//           .:.                        .-===:..                     .--.                      
//           .:.                        :+***=..                     :=:                       
//           .::                     :.    .:.   ...                 =-.                       
//           ..-                     ::    :=:   :-.                :*:                        
//            .-+.                   .::::-:.:-:=-.                :*-                         
//              :=:.                    ..                         -=.                         
//               .-=-.                                           .==.                          
//                 .-*+:.                                       -+=.                           
//                   ..-+-.                                 .:+=...                            
//                     ..=**-                             .=+-.                                
//                    .:-::..-+=:....            ....:=+==:-=.                                 
//                    .:+-......:-++-----::::-----=--:.   .--.                                 
//                    .:=::.....:.:::::::..:....          .--.                                 
//                    .-=-:::-::.....                     .==.                                 
//                    .-=:::...                           .==.                                 
//                    .--.                          .....::=-                                  
//                    .=-::               .   ....:=+=+*#+=+-                                  
//                     .:-===----=+===++=+++==++++==--:...                                     
//                           ................                                                  
                                                                                            
                                                                            