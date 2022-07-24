//document.querySelector es similar a la sintacis de css
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const parrafo = document.querySelector('.parrafo');
const id = document.querySelector('#id');
const input = document.querySelector('input');

console.log({
    h1,
    h2,
    parrafo,
    id,
    input
});

//para modificar el contenido de una etiqueta html 
//usamos innerHTML interpreta etiquetas html
//y tambien existe innerText que todo lo interpreta como text
h1.innerHTML= 'wenas';

input.value= 'change';

const img = document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/2730355/pexels-photo-2730355.jpeg');

id.innerHTML = '';
id.append(img); 


