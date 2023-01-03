let jugadores=0;
let fichas=50;
let turno =1;
let dados =[{valor: 1}, {valor: 1}];
let arrJugadores=["0"];
let arrCasillas=[]
let puchero={contenido: 0};
window.onload = function(){
    escribirJugadores();
    escribirCasillas();
    document.getElementById('tirar').onclick = tirarDados;

}

while (jugadores>5||jugadores<1) {
    jugadores=parseInt(prompt("Introducir número de jugadores entre 1 y 5"));
}
for (let i =0; i<jugadores; i++){
    crearJugador();
}


    crearCasillas();



function crearJugador(){
    let jugador={fichasRestantes: parseInt(fichas/jugadores),
                 fichasGanadas: 0
                };
    arrJugadores.push(jugador);
    
    
}
function escribirJugadores() {
    
    const escribirJugadores = document.getElementById('jugadores');
    escribirJugadores.innerText="Jugadores";
    for (let i=1; i<=jugadores; i++){
        escribirJugadores.innerText +="\n Jugador " + i + "\n Fichas ganadas: " + arrJugadores[i].fichasGanadas + "\n Fichas restantes: "  + arrJugadores[i].fichasRestantes;
    }
    
}

function crearCasillas(){
    let casilla;
    for (let i = 2; i <= 11; i++ ){
            casilla={contenido: 0,
                    capacidad: i
                    };
        
        if(i!=7){
            arrCasillas.push(casilla);
        }
        
                    
    }
 
    
    
    
}

function escribirCasillas() {
    
    const escribirCasillas = document.getElementById('casillas');
    escribirCasillas.innerText="Casillas";
    escribirCasillas.innerText += "\n Puchero \n" + puchero.contenido;
    for (let i=0; i<arrCasillas.length; i++){
        
        escribirCasillas.innerText +="\n Casilla " + arrCasillas[i].capacidad + "\n" + arrCasillas[i].contenido + "/" + arrCasillas[i].capacidad;
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
    addFicha(suma);


    
    const textoTurno = document.getElementById('turno');
    
    textoTurno.innerText= "Turno del jugador " + turno;
    if (arrJugadores[turno].fichasRestantes!==0){
        arrJugadores[turno].fichasRestantes--;
    }
    
    escribirJugadores();
    turno++;
    if (turno>jugadores){
        turno=1;
    }
    const siguiente = document.getElementById('siguiente');
    
    siguiente.innerText= "Tira el jugador " + turno;
}

function addFicha(suma){
    for (let i=0;i<arrCasillas.length;i++){
        if (arrCasillas[i].capacidad==suma){
            arrCasillas[i].contenido++;
        }
        //console.log(arrCasillas[i].contenido,arrCasillas[i].capacidad)
        if (arrCasillas[i].contenido==arrCasillas[i].capacidad){
            arrJugadores[turno].fichasGanadas=arrCasillas[i].contenido+arrJugadores[turno].fichasGanadas;
            arrCasillas[i].contenido=0;
        }
    }
    if (suma==7){
        puchero.contenido++;
    }
    if (suma==12){
        arrJugadores[turno].fichasRestantes++;
        arrJugadores[turno].fichasGanadas=puchero.contenido+arrJugadores[turno].fichasGanadas;
        puchero.contenido=0;
    }
    escribirCasillas();
    
}

//tirarDados();
//console.log(dados[0].valor+dados[1].valor);
console.log(jugadores);
console.log(arrJugadores);
console.log(arrCasillas);
//escribirJugadores();
