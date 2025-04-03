console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.title)

console.log(document.URL)

function changeColor() {
    const ele = document.getElementById("primero");
    ele.style.color = "red";
}
changeColor();


console.log(document.querySelector("#primero"));


//TODO:
// 1. Cambiar el color de fondo del body a azul
// 2. Cambiar el color de fondo del primer div a rojo
// 3. Cambiar el color de fondo del segundo div a verde
