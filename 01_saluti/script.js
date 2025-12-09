/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
// Funzione arrow
const saluta = (name) => "Ciao " + name;


/* Funzione tradizionale
function saluta(name) {
    return "Ciao " + name;
}
*/

// Invoca la funzione qui e stampa il risultato in console
const saluto = saluta(userName);
console.log(saluto);



//Risultato atteso se si passa 'Mario': // ciao Mario
