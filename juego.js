alert ("juguemos al piedra papel y tijera.");

alert ("Piedra sera (1), Papel (2), Tijera (3).");

let ganadas=0
let perdidas=0
let empates=0

while(true){

let jugador = prompt ("¿Eliges 1, 2 o 3?");


function elige() {
    jugador = parseInt(jugador);  
if (jugador ===1 || jugador ===2 || jugador ===3 ){
    if (jugador === 1) {
        alert("Has elegido piedra.");

    } else if (jugador === 2) {
        alert("Has elegido papel.");

    } else if (jugador === 3) {
        alert("Has elegido tijera.");

    }} }
        elige()
        while (jugador !==1 && jugador !==2 && jugador!==3){
            alert ("Has seleccionado mal, selecciona 1, 2 o 3.")
            jugador = prompt("¿Eliges 1, 2 o 3?");
            jugador = parseInt(jugador);
            elige()
        }

    let PC = Math.floor(Math.random() * 3) + 1;

    if(PC===1){
        alert ("La PC ha elegido piedra.")
    } else if (PC===2){
            alert ("La PC ha elegido papel.")
    }else{
                alert ("La PC ha elegido tijera.")
    }

    function determinarResultado(jugador, PC) {
        if (jugador === PC) {
            empates = empates +1
            alert("Empate");
        } else if (
            (jugador === 1 && PC === 3) ||
            (jugador === 2 && PC === 1) ||
            (jugador === 3 && PC === 2)
        ) {
            ganadas = ganadas +1
            alert("Ganaste" );
        } else {
            perdidas = perdidas +1
            alert("Perdiste");
        }
        alert("Has ganado " + ganadas +  " veces. Has perdido " + perdidas + " veces. Has empatado "+ empates + " veces.")
    }
    determinarResultado (jugador, PC)}