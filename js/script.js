/* CREATE YOUR BURGER
Rifare la parte JavaScript
Il programma dovrà consentire di
calcolare il prezzo del panino selezionando o deselezionando gli ingredienti
-click bottone
-nome panino
-ingredienti selezionati
-prezzo (in base agli ingredienti)
+
-codice coupon - sconto 20%
-rendere cliccabili gli <span>


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
//codice Sconto
var coupon = document.getElementById("coupon");

//span cliccabili
var addBtn = document.getElementsByClassName("ingredient-add");

//SETTINGS (difficilmente cambiano)
var coupons = ["123456ABCDEF", "789101112GHILMN", "13141516OPQRST"];




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
         var price = 50; //volendo comunque potrebbe stare fra le referenze

        //per attraversare la var ingredients
         for (i = 0; i < ingredients.length; i++) { //prendiamo l'array controlliamo la lunghezza e iterazione zero based
            //per ogni iterazione salvo ingrediente per ingrediente nella variabile nuova, così ho un accesso diretto ai checkbox 
            var ingredientCheck = ingredients[i];
            //console.log(ingredientCheck);

            /*per aggiungere il prezzo alla checkbox devo capire se è checked oppure no
            in console log sull'HTML collection il checked è impostato su false.
            qui lo metto come proprietà di ingredientCheck*/
            if (ingredientCheck.checked === true) { //se falso esce e riprende il loop
                console.log(typeof(ingredientCheck.value)); //prendo il valore dell'ingrediente checked, "appendo" la proprietà value

                //aggiorno il prezzo
                price = price + parseInt(ingredientCheck.value); //spesso il valore arriva come stringa, facendo così ci evitiamo errori
            }  
         }

         //alla fine del loop calcolo il prezzo
         console.log(price);

         //codice Sconto -->value sarà determinato dall'utente
         var couponCode = coupon.value;

         //Cicletto senza FOR -->.includes+If
         if (coupons.includes(couponCode)) { //true o false, lo trovi o non lo trovi

            //20% sconto
            price = price - price *0.2;

         }
         //stampa il prezzo nell'app. Con inner.HTML imposto o modifico il contenuto HTML di un tag.
         displayPrice.innerHTML = price.toFixed(2);
     }
});


//Add cliccabili per gli ingredienti
for (var i = 0; i < addBtn.length; i++) {
    //add attuale durante il loop
    var add = addBtn[i];

    //l'event listener si applica a dogni elemento
    add.addEventListener ( "click", function() {
        //voglio l'input prima dello span, perciò attraverso i nodi del DOM indietro
        console.log(this); //l'elemento che ho cliccato, che ha fatto partire il gestore di evento
        console.log(this.previousElementSibling);

        var thisCheckbox = this.previousElementSibling; //referenza dove salvo l'input (perchè col .this da <span> vado indietro)
        thisCheckbox.checked = ! thisCheckbox.checked; //se mi restituisci true, ti faccio diventare false e viceversa (dipende se lo clicco o no)
    });
}

