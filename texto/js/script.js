let jugadores=0;
let dados =[{valor: 1}, {valor: 1}]
window.onload = function(){
    document.getElementById('tirar').onclick = tirarDados;

}

while (jugadores>5||jugadores<1) {
    jugadores=parseInt(prompt("Introducir número de jugadores entre 1 y 5"));
}


function tirarDados(){
    dados[0].valor=Math.floor(Math.random()*6+1);
    dados[1].valor=Math.floor(Math.random()*6+1);
    let suma =dados[0].valor+dados[1].valor;
    console.log(dados[0].valor+dados[1].valor);
    const dado = document.getElementById('dados');
    dado.innerText = dados[0].valor + "+" + dados[1].valor + "=" +  suma;
}


//tirarDados();
//console.log(dados[0].valor+dados[1].valor);
console.log(jugadores);
