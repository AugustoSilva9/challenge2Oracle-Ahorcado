let listaPalabras = ["ELEFANTE", "PROGRAMACION","JAVASCRIPT","BASQUETBOL","ARGENTINA","DESARROLLO","UKELELE","DEPORTES", "HIPNOSIS", "TROMPETA"]
let palabraAdivinar 
let letrasIncorrectas = []
let error;
let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
function inicioJuego(){
    let posicionPalabra =  Math.round(Math.random()*listaPalabras.length);
    palabraAdivinar =  listaPalabras[posicionPalabra]
    error = 0;
    console.log (palabraAdivinar); 
    dibujarAhorcado(error)
    lineasPalabra(palabraAdivinar, lineasX, lineasY, largolinea)
    return palabraAdivinar
}

function letraUsuario(event){
    let acierto = false;
    let letra = event.key.toUpperCase();
    if (abecedario.includes(letra)) {
            console.log(letra + "  letra")
            console.log(acierto)
            console.log (palabraAdivinar + "palabra"); 
        for (let i = 0; i < palabraAdivinar.length; i++) {
            if (letra === palabraAdivinar[i]) {
                console.log("la letra esta")
                console.log(`esta en la pos ${i}`)
                escribirLetra(palabraAdivinar[i], i)
                acierto = true;
            }   
        }
        if (acierto == false){
            console.log(`la letra ${letra} no esta en la palabra`);
            if(!letrasIncorrectas.includes(letra)){
                letrasIncorrectas.push(letra);
                error++
                console.log(letrasIncorrectas);
                console.log(error);
                dibujarAhorcado(error);
                mostrarLetraError(letra, error)
            }
        }
    }
    
}
document.getElementById('iniciar-juego').addEventListener('click',inicioJuego)
document.addEventListener("keypress",letraUsuario);
