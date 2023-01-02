let jugadores=0;
let fichas=50;
let turno =1;
let dados =[{valor: 1}, {valor: 1}];
let arrJugadores=["0"];
window.onload = function(){
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

function tirarDados(){
    dados[0].valor=Math.floor(Math.random()*6+1);
    dados[1].valor=Math.floor(Math.random()*6+1);
    let suma =dados[0].valor+dados[1].valor;
    console.log(dados[0].valor+dados[1].valor);
    const dado = document.getElementById('dados');
    dado.innerText ="Dados: "+ dados[0].valor + " + " + dados[1].valor + " = " +  suma;
    
    const textoTurno = document.getElementById('turno');
    
    textoTurno.innerText= "Turno del jugador " + turno;
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
