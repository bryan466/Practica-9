var numero = prompt("Introduce un número entero");

var resultado = parImpar(numero);

alert("El número "+numero+" es "+resultado); 

function parImpar(numero) {

if(numero % 2 == 0) {

 alert( "par");

}

else {
    alert( "impar");
}
}