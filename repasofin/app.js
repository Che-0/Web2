//.inicializa el arreglo
let tareas = [];


//
function mostrarMenu() {
    return parseInt(prompt(
        `Ingrese una opción:\n
        Opciones disponibles:\n
        1. Agregar tarea\n
        2. Ver la tarea\n
        3. Marcar como completada\n
        4. Salir\n`
    ));
}

function agregarTarea(){
    let nombre = prompt("Ingrese la tarea");
    if (nombre){
        let tarea = {
            nombre,
            completada: false
        }
        tareas.push(tarea);
        alert("Tarea agregada");
    }else{
        alert("El nombre de la tarea no puede estar vacío");
    }
    
}


function verTareas(){

    if(tareas.length === 0){
        alert("No hay tareas");
    }
    else{
        console.log("Tareas:");
        tareas.forEach((tarea, index) => {
        console.log(`${index + 1}. ${tarea.nombre} - ${tarea.completada ? 'Completada' : 'Pendiente'}`);
    });
    }
    
}


function iniciarProgama(){
    let opcion = mostrarMenu();
    while(opcion !== 4){
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarCompletada();
                break;
            default:
                alert("Opción inválida");
        }
        opcion = mostrarMenu();
        
        
    }
    alert("Adiós UwUntu");
}

function marcarCompletada(){

    let index = parseInt(prompt("Ingrese el número de la tarea a marcar como completada"));
    if(index && tareas[index - 1]){ //si index es un número y la tarea existe
        tareas[index - 1].completada = true;
        alert("Tarea "+tareas[index-1].nombre+" mdarcada como completada");
    }else{
        alert("Tarea no encontrada");
    }
}

iniciarProgama();