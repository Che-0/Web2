console.log("owo")


// arreglo que guardara las tareas del usuario
let tareas = []


//muestra las opciones a elegir
function mostrarMenu(){
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
    let nombreTarea = prompt("Ingrese la tarea");
    if(nombreTarea){
        let tareaUsuario = {
            nombre: nombreTarea,
            completada: false
        }
        tareas.push(tareaUsuario);
        alert("Tarea agregada");
    }
}

function verTareas(){
    if(tareas.length === 0){
        alert("No hay tareas");
    }else{
        console.log("Tareas:");
        tareas.forEach((tarea, index) => {
            console.log(`${index + 1}. ${tarea.nombre} - ${tarea.completada ? 'Completada' : 'Pendiente'}`);
        });
    }
}

//asigna el valor de estado de true a completada
function marcarCompletada(){
    let tarea = parseInt(prompt("Ingrese el número de la tarea que desea marcar como completada"));
    if(tarea){
        if(tarea <= tareas.length){
            tareas[tarea - 1].completada = true;
            alert("Tarea marcada como completada");
        }else{
            alert("Tarea inválida");
        }
    }
}


//bucle para mantener el menu desplegado
function main(){
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
    console.log("Programa finalizado");
}



//inicializamos el programa
main();