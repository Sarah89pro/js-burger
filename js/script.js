/* CREATE YOUR BURGER
Rifare la parte JavaScript
Il programma dovrà consentire di
calcolare il prezzo del panino selezionando o deselezionando gli ingredienti
-click bottone
-nome panino
-ingredienti selezionati
-prezzo (in base agli ingredienti)


Prima la logica con i commenti e poi traduciamo in codice*/

//REFERENCES
//bottone invio (oggetto del nodo con tutte le sue funzionalità)
var btn = document.getElementById("button");
//nome burger
var burgerName = document.getElementById("name");
//ottenere gli ingredienti e raggrupparli insieme (tipo un array)
var ingredients = document.getElementsByClassName("ingredient-checkbox");
console.log(ingredients);
//prezzo finale
var displayPrice = document.getElementById("price");




//calcolo del prezzo al click sul bottone (l'ascoltatore di evento aspetta il tuo click per...)
btn.addEventListener( "click", function() {
    //al click devo LEGGERE IL VALORE (ma riguarda il momento specifico preclick)
     var nome =burgerName.value.trim(); //pulisco eventuali spazi

     //inserire il nome del burger è obbligatorio
     if (nome.length ===0) {
         alert("non hai inserito il nome per il tuo Burger");
         
     } else {
         //console.log("procedi con il calcolo");

         //aggiunta costo ingredienti extra: la var price è qui perchè gli aggiungiamo i valori, e ad ogni click si risetta a 50
         var price = 50;

        //per attraversare la var ingredients
         for (i = 0; i < ingredients.length; i++) { //prendiamo l'array controlliamo la lunghezza e iterazione zero based
            //per ogni iterazione salvo ingrediente per ingrediente nella variabile nuova, così ho un accesso diretto ai checkbox 
            var ingredientCheck = ingredients[i];
            //console.log(ingredientCheck);

            /*per aggiungere il prezzo alla checkbox devo capire se è checked oppure no
            in console log sull'HTML collection il checked è impostato su false.
            qui lo metto come proprietà di ingredientCheck*/
            if (ingredientCheck.checked === true) {
                console.log(typeof(ingredientCheck.value)); //prendo il valore dell'ingrediente checked, "appendo" la proprietà value

                //aggiorno il prezzo
                price = price + parseInt(ingredientCheck.value); //spesso il valore arriva come stringa, facendo così ci evitiamo errori
            }  
         }

         //alla fine del loop calcolo il prezzo
         console.log(price);

         //stampa il prezzo nell'app



     }

});


