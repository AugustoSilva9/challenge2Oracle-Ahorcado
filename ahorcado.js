let listaPalabras = ["ELEFANTE", "PROGRAMACION","JAVASCRIPT","BASQUETBOL","ARGENTINA","DESARROLLO","UKELELE","DEPORTES", "HIPNOSIS", "TROMPETA"]
let palabraAdivinar 
let letrasIncorrectas = []
let error;
let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let letrasCorrerctas = [];
let repetida;
let aciertos = 0;
function inicioJuego(){
    document.getElementById('volverAJugar').classList.add('oculto');
    document.addEventListener("keypress",letraUsuario);
    reiniciar();
    let posicionPalabra =  Math.round(Math.random()*listaPalabras.length);
    palabraAdivinar =  listaPalabras[posicionPalabra]
    error = 0;
    console.log (palabraAdivinar); 
   // correcta(palabraAdivinar);
    dibujarAhorcado(error)
    lineasPalabra(palabraAdivinar, lineasX, lineasY, largolinea)
    return palabraAdivinar
}
function reiniciar(){
    letrasCorrerctas = [];
    aciertos = 0;
}
function check(letra){
    repetida = false;
    if(letrasCorrerctas.includes(letra)){
        console.log(`ya dijiste la letra ${letra}`)
        repetida = true; 
    }else{
        letrasCorrerctas.push(letra);
        console.log(letrasCorrerctas);
    }
    return repetida
}

function letraUsuario(event){
    let acierto = false;
    let letra = event.key.toUpperCase();
    check(letra);
    console.log(repetida)
    if (abecedario.includes(letra) && (repetida == false))  {
            console.log(letra + "  letra")
            console.log(acierto)
            console.log (palabraAdivinar + "palabra"); 
        for (let i = 0; i < palabraAdivinar.length; i++) {
            if (letra === palabraAdivinar[i]) {
                console.log("la letra esta")
                console.log(`esta en la pos ${i}`)
                escribirLetra(palabraAdivinar[i], i)
                aciertos++;
                acierto = true;
            }   
        }
        if (acierto == false){
           // letrasCorrerctas.pop();
           error++
           mostrarLetraError(letra, error)
           dibujarAhorcado(error);
           
            /* console.log(letrasCorrerctas);
            console.log(`la letra ${letra} no esta en la palabra`);
            if(!letrasIncorrectas.includes(letra)){
                letrasIncorrectas.push(letra);
                error++
                console.log(letrasIncorrectas);
                console.log(error+"este es el error incorr");
                dibujarAhorcado(error);
                mostrarLetraError(letra, error)
            } */
        }
        console.log(aciertos)
        if (palabraAdivinar.length === aciertos ) {
          ganaste();
        }
    }
    
}
document.getElementById('iniciar-juego').addEventListener('click',inicioJuego)
document.getElementById('volverAJugar').addEventListener('click', inicioJuego)

function ganaste(){
    error = "ganaste"
    dibujarAhorcado(error);
}