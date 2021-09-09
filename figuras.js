//codigo con FUNCIONES

// Codigo del cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado){
        return lado * 4;
    } 

    function areaCuadrado(lado){
        return lado * lado;
    } 
console.groupEnd();

// Codigo del Triangulo

console.group("Triangulo");

    function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2 + base;
    } 

    function areaTriangulo(base, altura){
        return (base * altura)/2;
    }

console.groupEnd();


// Codigo del Circulo

console.group("Circulo");

    const PI = Math.PI;

    function diametroCirculo(radio){
        return radio * 2;
    } 

    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio)
        return diametro * PI;
    } 
    
    function areaCirculo(radio){
        return (radio * radio) * PI;
    } 

console.groupEnd();

// --------- Funciones para calculos en HTML -------------

// CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);

    alert("El perimetro del cuadrado es: " + perimetro + "cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);

    alert("El area del cuadrado es: " + area + "cm cuadrados");
}

// TRIANGULO
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const perimetro = perimetroTriangulo(value1, value2, value3);

    alert("El perimetro del triangulo es: " + perimetro + "cm");
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("inputTriangulo3");
    const input4 = document.getElementById("inputTriangulo4");
    const baseTri = input3.value;
    const alturaTri = input4.value;
    const area = areaTriangulo(baseTri, alturaTri);

    alert("El area del triangulo es: " + area + "cm cuadrados");
}

// CIRCULO

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);

    alert("El perimetro del Circulo es: " + perimetro + "cm");
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);

    alert("El area del Circulo es: " + area + "cm cuadrados");
}




//codigo con CONSTANTES
/*

// Codigo del cuadrado

console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm cuadrados");
console.groupEnd();

// Codigo del Triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const AlturaTriangulo = 5.5;

console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
);

console.log("La altura del triangulo es de: " + AlturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * AlturaTriangulo)/2;
console.log("El area del triangulo es de: " + areaTriangulo + "cm cuadrados");

console.groupEnd();


// Codigo del Circulo

console.group("Circulo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log("El valor de PI es de: " + PI);
console.log("El perimetro del circulo es de: " + perimetroCirculo + "cm");
console.log("El area del circulo es de: " + areaCirculo + "cm cuadrados");

console.groupEnd();

*/