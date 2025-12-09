/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function trovaIniziali(myArray) {
    const iniziali = [];
    for (let i = 0; i < myArray.length; i++) {
        iniziali.push(myArray[i][0]); // aggiungo la prima lettera di ogni nome dell'array
    }
    return iniziali;
}


// Invoca la funzione qui e stampa il risultato in console
const risultato = trovaIniziali(names);
console.log(risultato);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]