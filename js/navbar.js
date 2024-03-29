/*Creamos las variables para llamar a los elementos del html*/
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

/*Creamos un evento para que al clickear se muestre el nav-bar*/
abrir.addEventListener("click", () => {
/*Llamamos a la clase para agregar visibilidad*/ 
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    /*Llamamos a la clase para sacar visibilidad */ 
        nav.classList.remove("visible");
})

/*Creamos una funcion para que al clickear se cierre el nav-bar*/
function seleccionar(){
    //Oculto el menu una vez que selecciono una opcion
    nav.classList.remove("visible");
}