//document.querySelector es similar a la sintacis de css
const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculador1');
const input2 = document.querySelector('#calculador2');
const boton = document.querySelector('#calculadora');
const parrafo = document.querySelector('#parrafo');

// boton.addEventListener('click', onClick);

// function onClick () {
//     resultado = Number(input1.value) + Number(input2.value);
//     parrafo.innerText = 'tu resultado es: ' + resultado;
// }

form.addEventListener('submit', onClick);

 function onClick (event) {
//     //los formularios tienden a recargar la pag lo que borra 
//     //las acciones ya ejecutadas para evitarlo se llama a la
//     propiedad event y ademas se busca el parametro 
//     preventDefault para evitar que recarge la pag

    event.preventDefault();
    resultado = Number(input1.value) + Number(input2.value);
    parrafo.innerText = 'tu resultado es: ' + resultado;
}