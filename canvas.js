let pantalla = document.getElementById("ahorcado");
let pincel = pantalla.getContext("2d");


function dibujarAhorcado(error){
    
    if(error == 0){
        
        pincel.beginPath();
        pincel.fillStyle = "lightblue"
        pincel.fillRect(0,0,1200,800);

        /*Base del ahorcado*/
        pincel.lineWidth = 5;
        pincel.strokeStyle = "black";
        pincel.beginPath();
        pincel.moveTo(50,700);
        pincel.lineTo(150,650);
        pincel.lineTo(250,700);
        pincel.lineTo(50,700);
        pincel.stroke();

        dibujarRectas(150,650,150,200);
        dibujarRectas(147,200,300,200);
        dibujarRectas(300,197,300,250);
    }
    if (error == 1){
        pincel.strokeStyle = "black";
        pincel.lineWidth = 7;
        pincel.beginPath();
        pincel.arc(300, 300, 50, 0, 2*Math.PI);
        pincel.stroke();
    }
    if(error == 2){
        dibujarRectas(300,350,300,550);
    }
    if(error == 3){
        dibujarRectas(300,400,250,440);
    }
    if(error == 4){
        dibujarRectas(300,400,350,440);
    }
    if(error == 5){
        dibujarRectas(300,550,250,600);
    }
    if(error == 6){
        dibujarRectas(300,550,350,600);
    }
    if(error == 7){
        mostrarResultado("Perdiste, vuelve a intentar!", "40px");
        document.removeEventListener("keypress",letraUsuario);
        document.getElementById('volverAJugar').classList.remove('oculto')
    }
    if(error == "ganaste"){
        mostrarResultado("Ganaste!!!", "70px")
        document.removeEventListener("keypress",letraUsuario);
        document.getElementById('volverAJugar').classList.remove('oculto')
    }
    
}

function dibujarRectas(inicioX, inicioY, finX, finY){
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.lineWidth = 7;
    pincel.moveTo(inicioX,inicioY);
    pincel.lineTo(finX,finY);
    pincel.stroke();
}
//dibujo las lineas de la palabra a adivinar
let lineasX = 400;
let lineasY = 600;
let largolinea = 60;
function lineasPalabra(palabra, lineasX, lineasY, largolinea){
    pincel.beginPath();
    for (let i = 0; i < palabra.length; i++) {
       let posicionX = lineasX + (largolinea*i);
       pincel.moveTo(posicionX,lineasY);
       pincel.lineTo(posicionX + 40, lineasY)
       pincel.stroke();
    }
}

function escribirLetra(letra, posicion){
    console.log('escribirletra-----')
    let posicionLinea = (lineasX + (largolinea * posicion)) + 7;
    pincel.beginPath();
    pincel.font= "36px arial";
    pincel.fillStyle = "black";
    pincel.fillText(letra,  posicionLinea, lineasY -5)
    console.log('escribirletra--')
}

function mostrarLetraError(letra, error){
    let pos = 500 + 45 * error;
    let err = ` ${letra} -`
    pincel.beginPath();
    pincel.font= "36px arial";
    pincel.fillStyle = "black";
    pincel.fillText(err, pos, 300, 40)
}

function mostrarResultado(resultado, x){
    pincel.beginPath();
    pincel.font= `${x} verdana`;
    pincel.fillStyle = "red";
    pincel.fillText(resultado,  500, 400)
}