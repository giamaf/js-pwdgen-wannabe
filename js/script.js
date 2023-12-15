// Controllo collegamento JS
console.log('JS OK');

// Fattore fisso 
const pswFixNumber = 23;
console.log(pswFixNumber);

// Richiesta informazioni (variabili)
const userFirstName = prompt('Nome', 'Nome');
const userLastName = prompt('Cognome', 'Cognome');
const useFavColor = prompt('Colore Preferito', 'Colore');
console.log(userFirstName, userLastName, useFavColor);

// Genera password quindi somma fattore fisso + variabile
const psw = userFirstName + userLastName + useFavColor + pswFixNumber;
console.log(psw);

// Messaggio
const message = 'La tua password è: ';

// Stampa in HTML
document.getElementById('result').innerHTML = message + '<strong>' + psw + '</strong>';
