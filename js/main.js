
const title = document.querySelector('h1');
const form = document.querySelector('#miform');
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');

const btn = document.querySelector('#btnCalcular');
const resul = document.querySelector('#suma')


form.addEventListener('submit', btnSend);

function btnSend(event) {
    // console.log(event);
    event.preventDefault();
    let suma = parseInt(input1.value) + parseInt(input2.value)
    resul.append("La suma es: ",suma);
}


/// Prueba

const imgDt = document.querySelector("#imgDt");

function bother(){
    let random = parseInt((Math.random() * 4));
    console.log(random);
    switch(random){
        case 1:
            imgDt.setAttribute("src", "/img/img1.png");
            break;
        case 2:
            imgDt.setAttribute("src", "/img/img2.png");
            break;
        case 3:
            imgDt.setAttribute("src", "/img/img3.png");
            break;
        case 4:
            imgDt.setAttribute("src", "/img/img4.png");
            break;
    }
    
}