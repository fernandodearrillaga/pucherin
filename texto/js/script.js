let jugadores=0;
let fichas=50;
let turno =1;
let dados =[{valor: 1}, {valor: 1}];
let arrJugadores=["0"];
window.onload = function(){
    escribirJugadores();
    document.getElementById('tirar').onclick = tirarDados;

}

while (jugadores>5||jugadores<1) {
    jugadores=parseInt(prompt("Introducir número de jugadores entre 1 y 5"));
}
for (let i =0; i<jugadores; i++){
    crearJugador();
}
function crearJugador(){
    let jugador={fichasRestantes: parseInt(fichas/jugadores),
                 fichasGanadas: 0
                };
    arrJugadores.push(jugador);
    
    
}
function escribirJugadores() {
    
    const escribirJugadores = document.getElementById('jugadores');
    escribirJugadores.innerText="";
    for (let i=1; i<=jugadores; i++){
        escribirJugadores.innerText +="\n Jugador " + i + "\n Fichas ganadas: " + arrJugadores[i].fichasGanadas + "\n Fichas restantes: "  + arrJugadores[i].fichasRestantes;
    }
    
}

/*function actualizarJugadores() {
    
    const actualizarJugadores = document.getElementById('jugadores');
    console.log(actualizarJugadores);
    for (let i=1; i<=jugadores; i++){
        actualizarJugadores.innerText ="\n Jugador " + i + "\n Fichas ganadas: " + arrJugadores[i].fichasGanadas + "\n Fichas restantes: "  + arrJugadores[i].fichasRestantes;
    }
    
}*/

function tirarDados(){
    dados[0].valor=Math.floor(Math.random()*6+1);
    dados[1].valor=Math.floor(Math.random()*6+1);
    let suma =dados[0].valor+dados[1].valor;
    console.log(dados[0].valor+dados[1].valor);
    const dado = document.getElementById('dados');
    dado.innerText ="Dados: "+ dados[0].valor + " + " + dados[1].valor + " = " +  suma;
    
    const textoTurno = document.getElementById('turno');
    
    textoTurno.innerText= "Turno del jugador " + turno;
    arrJugadores[turno].fichasRestantes--;
    escribirJugadores();
    turno++;
    if (turno>jugadores){
        turno=1;
    }
    const siguiente = document.getElementById('siguiente');
    
    siguiente.innerText= "Tira el jugador " + turno;
}


//tirarDados();
//console.log(dados[0].valor+dados[1].valor);
console.log(jugadores);
console.log(arrJugadores);
//escribirJugadores();
