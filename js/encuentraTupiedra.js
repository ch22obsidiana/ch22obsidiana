console.log("ya está conectado");
let signoBandera=false;

function getColor(value) {
    switch (value) {
        case "rojo":
            localStorage.setItem('ColorPiedra', JSON.stringify(value));
            //actualizarPiedra('rojo');
            break;
            case "negro":
                
                localStorage.setItem('ColorPiedra', JSON.stringify(value));
               // actualizarPiedra('negra');
            break;
            case "azul":
             
                localStorage.setItem('ColorPiedra', JSON.stringify(value));
               // actualizarPiedra('azul');
            break;
            case "amarilla":
              
                localStorage.setItem('ColorPiedra', JSON.stringify(value));
              //  actualizarPiedra('amarilla');
            break;
        default:
            console.log("Producto no disponible");
            break;
    }

}

function imageSelected(signo){
    let btnSigno = document.getElementsByClassName("iconSimbol");
    for(let i=0;i<btnSigno.length;i++){
        btnSigno[i].disabled = true;
    }
    localStorage.setItem('signo', JSON.stringify(signo));
}

function inputEdad(rangoEdad){
    localStorage.setItem('rangoEdad', JSON.stringify(rangoEdad));
    let btnEdad = document.getElementsByClassName("age");
    for(let i=0;i<btnEdad.length;i++){
        btnEdad[i].disabled = true;
    }
    colorDeLocalstorage = JSON.parse(localStorage.getItem('ColorPiedra'))
    
}
/* 
function actualizarPiedra(dato){
    document.getElementsByClassName("titleResultContainer").innerHTML=
    `<h1> ${Producto.nombre}</h1>`;

    document.getElementsByClassName("imgResultContainer").innerHTML =
    `<img src=${Producto.imagen}`;

    document.getElementsByClassName("resultDescription").innerHTML =
    `<img src=${Producto.descripcion}`;
} */