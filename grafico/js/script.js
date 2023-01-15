var container = document.querySelector(".box");
const casillas = 9;

// crear puchero
 var puchero = document.createElement('canvas');
 puchero.classList.add('puchero');
 puchero.width = 120;
 puchero.height = 120;
 container.appendChild(puchero);
 pintarPuchero(puchero);
/*<!-- Crear elementos canvas para las casillas -->
<!-- Usar un bucle for para crear los elementos de manera automática -->

<!-- Los canvas se formarán en una elipse  -->*/
for (var i = 0; i < casillas; i++) {
  // Crear un elemento canvas
  var canvas = document.createElement('canvas');
  canvas.classList.add('casilla');
  // Establecer el ancho y alto del canvas en 50 (cada canvas será de 50 x 50)
  canvas.width = 120;
  canvas.height = 120;
  // Añadir el canvas a la página
  container.appendChild(canvas);
  
}

// Obtener una referencia a todos los elementos canvas en la página
var canvases = document.querySelectorAll('.casilla');



// Dibujar una elipse en cada canvas y posicionarlos en una elipse de 
for (var i = 0; i < canvases.length; i++) {
  // Obtener el contexto del canvas en 2D
  var ctx = canvases[i].getContext('2d');

  // Dibujar una elipse en el canvas
  ctx.beginPath();  
  
  //ctx.ellipse(35, 35, 35, 35, 0, 0, 2 * Math.PI);
  //ctx.stroke();

  // Posicionar el canvas en la elipse 
  canvases[i].style.left = Math.cos(2 * Math.PI * i / casillas) * 400 + 400 - 25 + 'px';
  canvases[i].style.top = Math.sin(2 * Math.PI * i / casillas) * 250 + 300  - 25  + 'px';
  
  if (i>4) pintarCasilla(canvases[i],i+3)
  else pintarCasilla(canvases[i],i+2)
}



function pintarCasilla(canvas, fichas, num){
  var ctx = canvas.getContext('2d');
  ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
  ctx.fillStyle = 'green';
  ctx.fill();
  for (var i = 0; i < fichas; i++) {
      // Calcular la posición en el círculo para cada ficha
      var x = Math.cos(2 * Math.PI * i / fichas) * 35 + canvas.width / 2;
      var y = Math.sin(2 * Math.PI * i / fichas) * 35 + canvas.height / 2;

      // Dibujar la ficha en la posición calculada
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, 2 * Math.PI);
      if (i < num ) ctx.fillStyle = 'red'
         else ctx.fillStyle = 'white'
      ctx.fill();
    
     ctx.fillStyle = 'white';
    // Establecer la fuente para el texto
     ctx.font = '24px sans-serif';
     // Dibujar el número en el canvas usando el método fillText()
     x = canvas.width / 2 - ctx.measureText(fichas).width / 2;
     y = canvas.height / 2 + 10;
     ctx.fillText(fichas, x, y);
  }
  
}

function pintarPuchero(canvas){
  var ctx = canvas.getContext('2d');
  ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  for (var i = 0; i < 4; i++) {
      // Calcular la posición en el círculo para cada ficha
      var x = Math.cos(2 * Math.PI * i / 4) * 35 + canvas.width / 2;
      var y = Math.sin(2 * Math.PI * i / 4) * 35 + canvas.height / 2;

      // Dibujar la ficha en la posición calculada
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, 2 * Math.PI);
     
      ctx.fillStyle = 'white'
      ctx.fill();
    
    
     ctx.fillStyle = 'white';
    // Establecer la fuente para el texto
     ctx.font = '24px sans-serif';
     // Dibujar el número en el canvas usando el método fillText()
     x = canvas.width / 2 - ctx.measureText(7).width / 2;
     y = canvas.height / 2 + 10;
     ctx.fillText(7, x, y);
  }
  
}

// pintamos fichas aleatorias en el tablero
/*for(let i=0; i < canvases.length; i++){
  let fichas = Math.ceil(Math.random()*(i+2));
   if (i>4) pintarCasilla(canvases[i],i+3,fichas)
  else pintarCasilla(canvases[i],i+2,fichas)

  console.log(i+" "+(i+2)+ " "+fichas);
}*/

//pintarCasilla(canvases[2], 4, 2); // pinta dos fichas en el 4
//pintarCasilla(canvases[8], 11, 5); // pinta 5 fichas en el 11
//pintarCasilla(canvases[6], 9, 3); // pinta 3 fichas en el 9
//pintarCasilla(canvases[5], 8, 2); // pinta dos fichas en el 8
console.log(canvases)

let jugadores=0;
let fichas=50;
let turno =1;
let dados =[{valor: 1}, {valor: 1}];
let arrJugadores=["0"];
let arrCasillas=[]
let miPuchero={contenido: 0};
let vacio=true;

window.onload = function(){
    inicio();
    escribirJugadores();
    escribirCasillas();
    document.getElementById('tirar').onclick = tirarDados;
    document.getElementById('nuevaPartida').onclick = nuevaPartida;

}
function inicio() { //inicializa el juego y pide el número de jugadores
    document.getElementById("tirar").disabled = false;
    document.getElementById("nuevaPartida").disabled = true;
    while (jugadores>5||jugadores<1) {
        jugadores=parseInt(prompt("Introducir número de jugadores entre 1 y 5"));
    }
    for (let i =0; i<jugadores; i++){
        crearJugador();
    }
    
    
        crearCasillas();
}
function crearJugador(){ //crea los objetos de los jugadores y los añade al array
    let jugador={fichasRestantes: parseInt(fichas/jugadores),
                 fichasGanadas: 0
                };
    arrJugadores.push(jugador);
    
    
}
function escribirJugadores() { //escribe los jugadores en la pantalla
    
    const escribirJugadores = document.getElementById('jugadores');
    escribirJugadores.innerText="Jugadores";
    for (let i=1; i<=jugadores; i++){
        escribirJugadores.innerText +="\n Jugador " + i + "\n Fichas ganadas: " + arrJugadores[i].fichasGanadas + "\n Fichas restantes: "  + arrJugadores[i].fichasRestantes;
    }
    
}
function crearCasillas(){  //crea los objetos de las casillas y las añade al array
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

function escribirCasillas() { //escribe las casillas en la pantalla
    
    const escribirCasillas = document.getElementById('casillas');
    escribirCasillas.innerText="Casillas";
    escribirCasillas.innerText += "\n Puchero \n" + miPuchero.contenido;
    for (let i=0; i<arrCasillas.length; i++){
        
        escribirCasillas.innerText +="\n Casilla " + arrCasillas[i].capacidad + "\n" + arrCasillas[i].contenido + "/" + arrCasillas[i].capacidad;
    }
    
}

function tirarDados(){ //acciones que se producen al pulsar el botón "Tirar dados"
    dados[0].valor=Math.floor(Math.random()*6+1);
    dados[1].valor=Math.floor(Math.random()*6+1);
    let suma =dados[0].valor+dados[1].valor;
    console.log(dados[0].valor+dados[1].valor);
    const dado = document.getElementById('dados');
    dado.innerText ="Dados: "+ dados[0].valor + " + " + dados[1].valor + " = " +  suma;

    


    
    const textoTurno = document.getElementById('turno');
    
    textoTurno.innerText= "Turno del jugador " + turno;
    if (arrJugadores[turno].fichasRestantes!==0){
        addFicha(suma);
        arrJugadores[turno].fichasRestantes--;
        if (suma>7) {
            pintarCasilla(canvases[suma-3], suma, arrCasillas[suma-3].contenido);
        } else if(suma<7){
            pintarCasilla(canvases[suma-2], suma, arrCasillas[suma-2].contenido);
        }
         
    }else{
        final(suma);
    }
    
    escribirJugadores();
    turno++;
    if (turno>jugadores){
        turno=1;
    }
    const siguiente = document.getElementById('siguiente');
    
    siguiente.innerText= "Tira el jugador " + turno;
    console.log(arrCasillas);
}

function addFicha(suma){ //acciones que se producen al añadir una ficha
    for (let i=0;i<arrCasillas.length;i++){
        if (arrCasillas[i].capacidad==suma){ //si la casilla no se llena
            arrCasillas[i].contenido++;      //se añade una ficha a la casilla
        }

        if (arrCasillas[i].contenido==arrCasillas[i].capacidad){            //si la casilla se llena
            arrJugadores[turno].fichasGanadas+=arrCasillas[i].contenido;    //se suma el contenido al jugador que la ha llenado
            arrCasillas[i].contenido=0;                                     //se vacía la casilla
        }
    }
    if (suma==7){
        miPuchero.contenido++;
    }
    if (suma==12){
        arrJugadores[turno].fichasRestantes++;
        arrJugadores[turno].fichasGanadas+=miPuchero.contenido;
        miPuchero.contenido=0;
    }
    escribirCasillas();
    
}

function final(suma){           //acciones que se producen cuando un usuario no tiene fichas
    for (let i=0;i<arrCasillas.length;i++){
        
        if (suma==arrCasillas[i].capacidad){
            arrJugadores[turno].fichasGanadas+=arrCasillas[i].contenido;
            arrCasillas[i].contenido=0;
            if (suma>7) {
                pintarCasilla(canvases[suma-3], suma, 0);
            } else if(suma<7){
                pintarCasilla(canvases[suma-2], suma, 0);
            }
        }
        if (suma==7){
            arrJugadores[turno].fichasGanadas+=miPuchero.contenido;
            miPuchero.contenido=0;
        }
        if (suma==12){
            arrJugadores[turno].fichasGanadas+=miPuchero.contenido;
            for (j=0;j<arrCasillas.length;j++){
                arrJugadores[turno].fichasGanadas+=arrCasillas[i].contenido;
                arrCasillas[i].contenido=0;
                pintarCasilla(canvases[i], suma, 0);
            }
        }
    }
    escribirCasillas();
    vacioFinal();
}

function vacioFinal() {     //comprobación de que todas las casillas están vacias al final de la partida
    vacio=true;
    for (let i=0;i<arrCasillas.length;i++){
        if(arrCasillas[i].contenido!=0||miPuchero.contenido!=0){
            
            vacio=false;
            
        }
    }
    if (vacio==true){
        alert("Final de la partida");
        document.getElementById("tirar").disabled = true;
        document.getElementById("nuevaPartida").disabled = false;
    }
}
function nuevaPartida(){        //inicia una nueva partida
    turno =1;
    jugadores=0;
    arrJugadores=["0"];
    arrCasillas=[]
    miPuchero={contenido: 0};
    inicio();
    escribirJugadores();
    escribirCasillas();
}