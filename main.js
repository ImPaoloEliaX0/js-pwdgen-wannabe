//Inserimento dati dell'utente.


let nome = prompt("Inserisci il tuo nome: ");
let cognome = prompt("Inserisci il tuo cognome.: ");
let colore = prompt("Colore preferito?: ");
let Numero = 21;



//Crea la password concatenando i dati immessi dall'utente e l'anno corrente
let password = nome + cognome + colore + Numero;

//Inserisce nell'html il valore della password.

document.getElementById("pswd").innerHTML = password;