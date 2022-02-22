let listaPalabras = ["ELEFANTE", "PROGRAMACION","JAVASCRIPT","BASQUETBOL","ARGENTINA","DESARROLLO","UKELELE","DEPORTES", "HIPNOSIS", "TROMPETA"];
//Comprobamos si existe la lista en el storage y Asignamos las palabras del storage al array de palabras
if(!localStorage.getItem("listaDePalabras")){
    localStorage.setItem("listaDePalabras",JSON.stringify(listaPalabras));
}else{
listaPalabras = JSON.parse(localStorage.getItem("listaDePalabras"))
}
let palabraAdivinar; 
let error;
let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let letrasCorrerctas = [];
let repetida;
let aciertos = 0;
let palabraCorrecta;
let nuevaPalabra = document.getElementById('nuevaPalabra');
let btnNuevaPalabra = document.getElementById('btnNuevaPalabra');

function inicioJuego(){
    document.getElementById("ahorcado").scrollIntoView({behavior: "smooth"});
    document.getElementById('volverAJugar').classList.add('oculto');
    document.addEventListener("keypress",letraUsuario);
    reiniciar();
    let posicionPalabra =  Math.round(Math.random()*listaPalabras.length);
    palabraAdivinar =  listaPalabras[posicionPalabra]
    error = 0;
    dibujarAhorcado(error);
    lineasPalabra(palabraAdivinar, lineasX, lineasY, largolinea);
    return palabraAdivinar
}
function reiniciar(){
    letrasCorrerctas = [];
    aciertos = 0;
}
function check(letra){
    repetida = false;
    if(letrasCorrerctas.includes(letra)){
        repetida = true; 
    }else{
        letrasCorrerctas.push(letra);
    }
    return repetida
}

function letraUsuario(event){
    let acierto = false;
    let letra = event.key.toUpperCase();
    check(letra);
    if (abecedario.includes(letra) && (repetida == false))  {
        for (let i = 0; i < palabraAdivinar.length; i++) {
            if (letra === palabraAdivinar[i]) {
                escribirLetra(palabraAdivinar[i], i)
                aciertos++;
                acierto = true;
            }   
        }
        if (acierto == false){
           error++
           mostrarLetraError(letra, error);
           dibujarAhorcado(error);
        }
        if (palabraAdivinar.length === aciertos ) {
          ganaste();
        }
    }
    
}
function ganaste(){
    error = "ganaste"
    dibujarAhorcado(error);
}

function guardarPalabra(palabra) {
    let palabraAAgregar = palabra;
    for (let i = 0; i < palabraAAgregar.length; i++) {
        if(abecedario.includes(palabraAAgregar[i])){
            palabraCorrecta = true;
        }else{
            palabraCorrecta = false;
            break
        }
    }
    
    if((palabraCorrecta == true) && (!listaPalabras.includes(palabraAAgregar))){
        listaPalabras.push(palabraAAgregar);
        localStorage.setItem("listaDePalabras", JSON.stringify(listaPalabras));
    }else{
        alert(`la palabra ${palabraAAgregar} tiene caracteres erroneos o ya se encuentra registrada`);
    }
   
}

document.getElementById('iniciar-juego').addEventListener('click',inicioJuego);
document.getElementById('volverAJugar').addEventListener('click', inicioJuego);

btnNuevaPalabra.addEventListener('click', function(event){
    event.preventDefault();
    let palabra = nuevaPalabra.value.toUpperCase() ;
    guardarPalabra(palabra);
    nuevaPalabra.value = "";
    nuevaPalabra.focus();
});