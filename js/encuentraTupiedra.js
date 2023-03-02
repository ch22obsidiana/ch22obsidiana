console.log("ya está conectado");
let signoBandera=false;

function getColor(value) {
    console.log(value)
    
    switch (value) {
        case "rojo":
            console.log("Piedra color roja");
            localStorage.setItem('ColorPiedra', JSON.stringify(value));
            actualizarPiedra('rojo');
            break;
            case "negro":
                console.log("Piedra color negra");
                localStorage.setItem('ColorPiedra', JSON.stringify(value));
                actualizarPiedra('negra');
            break;
            case "azul":
                console.log("Piedra color azul");
                localStorage.setItem('ColorPiedra', JSON.stringify(value));
                actualizarPiedra('azul');
            break;
            case "amarilla":
                console.log("Piedra color amarilla");
                localStorage.setItem('ColorPiedra', JSON.stringify(value));
                actualizarPiedra('amarilla');
            break;
        default:
            console.log("Producto no disponible");
            break;
    }

}

function imageSelected(signo){
    /* signoBandera = true
    if(signoBandera){
        let signoImagen = document.getElementsByClassName("iconSimbol");
        console.log(signoImagen);
        signoImagen.classList.add("disabledEvents")
 
    }  */
    localStorage.setItem('signo', JSON.stringify(signo));
    console.log(signo);
}

function inputEdad(rangoEdad){
    localStorage.setItem('rangoEdad', JSON.stringify(rangoEdad));
    console.log(rangoEdad);
    colorDeLocalstorage = JSON.parse(localStorage.getItem('ColorPiedra'))
    
}

function actualizarPiedra(dato){
    document.getElementsByClassName("titleResultContainer").innerHTML=
    `<h1> ${Producto.nombre}</h1>`;

    document.getElementsByClassName("imgResultContainer").innerHTML =
    `<img src=${Producto.imagen}`;

    document.getElementsByClassName("resultDescription").innerHTML =
    `<img src=${Producto.descripcion}`;
}