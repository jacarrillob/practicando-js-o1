
const title = document.querySelector('h1');
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');

const btn = document.querySelector('#btnCalcular');
const resul = document.querySelector('#suma')
function btnClick() {
    let suma = parseInt(input1.value) + parseInt(input2.value)
    resul.append("La suma es: ",suma);

    console.log(num1+num2);
}