/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//number:rappresenta valori numerici interi o con la vigola;string:rappresenta sequenze di caratteri esemio let testo ='ciao'
//boolean:rappresenta un valore di verita che puo essere true o false; Array:rappresenta l'ordine dei valori; Object: rappresenta un oggetto contenente una serie di coppie chiave-valore;
//null: indica l'assenza intenzionale di un valere o un riferimento nullo esempio let nullo =null; Undefined:indica una variabile dichiarata ma nomn inizializata o una propieta di un oggetto a cui non e stato assegnato un valore
//Function: le funzioni sono oggetti speciali in javascript servono per eseguire azioni specifiche  ad esempiuo function somma ; Biglnt: eutilizato per rappresentare numeri interi molto grandi che superano le capacita dei dati Number  


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let risp =un oggetto i js e una struttura di dati che consente di organizzare e archiviare dati iu un formato flessibile 

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let result = 12 + 20

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = 'Salvatore Di Maria'

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let ex6result = 4 - x
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = 'john'
let name2 = 'John'
console.log(name1 === name2)
console.log(name1.toLowerCase() === name2.toLowerCase())