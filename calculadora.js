const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btnsomar = document.getElementById('btnsomar');
const btnsubtrair = document.getElementById('btnsubtrair');
const btndividir = document.getElementById('btndividir');
const btnmultiplicar = document.getElementById('btnmultiplicar');
const resultado = document.getElementById('resultado');

function somar(){
const n1 = parseFloat(num1.value);
const n2 = parseFloat(num2.value);
const result = n1+n2;
resultado.value = result;
}

function subtrair(){
const n1 = parseFloat(num1.value);
const n2 = parseFloat(num2.value);
const result = n1-n2;
resultado.value = result;
}

function dividir(){
const n1 = parseFloat(num1.value);
const n2 = parseFloat(num2.value);
const result = n1/n2;
resultado.value = result;
}

function multiplicar(){
const n1 = parseFloat(num1.value);
const n2 = parseFloat(num2.value);
const result = n1*n2;
resultado.value = result;
}
