function enviarMensaje(){
    let mensaje = document.getElementById('input1').value.trim();
    let telefono = document.getElementById('input2').value.trim();

    var textoConcatenado = telefono+","+mensaje;

    if ( textoConcatenado === ',,' ){
        alert("Favor de ingresar datos");
    }else{
        let mesApi= `https://wa.me/52${telefono}/?text=${encodeURIComponent(mensaje)}`;
        console.log(mesApi);
        //reenviar a otra pagina
        window.open(mesApi, '_blank');
    }

}