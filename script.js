var textarea = document.querySelector(".cajatexto");  
var mensaje = document.querySelector(".mensaje"); 
var muneco = document.querySelector(".container_muneco");
var contenedor = document.querySelector(".parrafo_derecha");

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}
function mostrarAdelante(){
    muneco.classList.remove("ocultar");
    contenedor.classList.remove("ocultar");
}
/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncriptar(){
        ocultarAdelante();
        var textoEncriptado = encriptar(textarea.value)
        mensaje.value = textoEncriptado;
        textarea.value="";
}

function btnDesencriptar(){
    ocultarAdelante();
    var textoDesencriptado = desencriptar(textarea.value)
    mensaje.value = textoDesencriptado;
    textarea.value="";
}

function encriptar(palabraEncriptada){ 
let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u','ufat']];
palabraEncriptada = palabraEncriptada.toLowerCase();

for(let i=0; i< matrizCodigo.length; i++){
    if(palabraEncriptada.includes(matrizCodigo[i][0])){
        palabraEncriptada = palabraEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return palabraEncriptada;
}



function desencriptar(palabraEncriptada){ 
    let matrizCodigo = [['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat','u']];
    palabraEncriptada = palabraEncriptada.toLowerCase();
    for(let i=0; i< matrizCodigo.length; i++){
        if(palabraEncriptada.includes(matrizCodigo[i][0])){
            palabraEncriptada = palabraEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
        return palabraEncriptada;
    }

    function copiarContenido(){
        mostrarAdelante();
        var contenido = document.querySelector(".mensaje");
        contenido.select();
        document.execCommand('select.All');
        document.execCommand('copy');
        mensaje.value="";     
    }

    