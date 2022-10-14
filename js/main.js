
const title = document.querySelector('h1');
const p = document.querySelector('p');
const p_class = document.querySelector('.p1');
const p_id = document.querySelector('#p2');
const input = document.querySelector('input');
const cont = document.querySelector('#container');

console.log(input.value);

// Muestra varios elementos
console.log(title); // Muestra únicamente contenido

console.log({
    title,
    p,
    p_class,
    p_id,
    input,
    cont
})

title.innerText = "Hola, este es mi nuevo titulo";
console.log(title.getAttribute('class'));
title.setAttribute('class', 'name');
console.log(title.getAttribute('class'));

title.classList.add('verde')
title.classList.remove('name')
// title.classList.toggle('name')
// title.classList.contains('name')



input.value = "Mi nuevo dato es:"


// Crear elemento

const img = document.createElement('img');
img.setAttribute('alt','Mi imagen')
img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif')

cont.append(img)