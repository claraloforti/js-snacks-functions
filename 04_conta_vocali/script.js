/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(stringa) {
    const vocali = "aeiou";
    let conta = 0;
    let arrayVocali = [];
    stringa = stringa.toLowerCase(); // così considera anche le vocali scritte in maiuscolo e le trasforma in minuscole

    for (let i = 0; i < stringa.length; i++) {
        const lettera = stringa[i];
        if (lettera === "a" || lettera === "e" || lettera === "i" || lettera === "o" || lettera === "u") {
            conta++;
            arrayVocali.push(lettera);
        }
    }
    return conta, arrayVocali;
}


// Invoca la funzione qui e stampa il risultato in console
const vocaliPresenti = contaVocali(word);
console.log(vocaliPresenti);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)