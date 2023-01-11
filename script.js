function encriptar(){
    var frase = document.getElementById("IngresoText").value.toLowerCase();

var textoEncriptado = frase.replace(/e/img, "enter");
var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

document.getElementById("Textoencripstado").innerHTML = textoEncriptado;
document.getElementById("botton3").style.display = "show" ;
document.getElementById("botton3").style.display = "inherit" ;
document.getElementById("Textoencripstado").style.display = "show" ;
document.getElementById("Textoencripstado").style.display = "inherit";

}
function desencriptar(){
    var frase = document.getElementById("IngresoText").value.toLowerCase();

var textoEncriptado = frase.replace(/enter/img, "e");
var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

document.getElementById("Textoencripstado").innerHTML = textoEncriptado;
}
function copiar(){
    var copiado = document.querySelector("#Textoencripstado");
    copiado.select();
    document.execCommand("copy");
}