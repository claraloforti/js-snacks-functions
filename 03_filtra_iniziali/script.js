/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterNames(myArray, initial) {
    const filteredNames = [];
    initial = initial.toLowerCase();
    
    for (let i = 0; i < myArray.length; i++) {
        const initialArray = myArray[i][0].toLowerCase();
        if (initialArray === initial) { // se il nome inizia con initial allora aggiungo il nome all'array
            filteredNames.push(myArray[i]);
        }
    }
    return filteredNames;
}


// Invoca la funzione qui e stampa il risultato in console
const initialA = filterNames(names, "A");
console.log(initialA);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]