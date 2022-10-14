
const title = document.querySelector('h1');
const p = document.querySelector('p');
const p_class = document.querySelector('.p1');
const p_id = document.querySelector('#p2');
const input = document.querySelector('input');

console.log(input.value);

// Muestra varios elementos
console.log(title); // Muestra únicamente contenido

console.log({
    title,
    p,
    p_class,
    p_id,
    input
})
