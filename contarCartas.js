/* 
Descripcion:
En el juego de casino Blackjack el jugador puede sacarle ventaja a la casa llevando el registro del numero relativo de cartas altas y bajas que quedan en la baraja
Esto se llama "conteo de cartas"
Tener mas cartas altas en la baraja es una ventaja para el jugador. 
Se le asigna un valor a cada carta de acuerdo a la siguiente tabla.
-Cuando el conteo es positivo, el jugador deberia apostar.
-Cuando el conteo es 0 o negativo, el jugador deberia apostar bajo.
Cambio de conteo        cartas
-------------------------------------------------------
+1                      2,3,4,5,6
0                       7,8,9
-1                      10,'J','Q','K','A' 
*/

var conteo=0;
var decision;
function contarCartas (carta) {

    switch (carta) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo--;
            break;
        }

        if(conteo>0){
            decision = "Apostar"
        }
        else {
            decision = "Esperar"
        }
        return conteo +" " + decision;


}
