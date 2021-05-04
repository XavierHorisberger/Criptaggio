var alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var alfabetCript = new Array(26);
var numCript = new Array(10);

var rand25 = [];
var rand10 = [];

function fillArrays(){
    
    /*
        LETTERE
    */
    //crazione array di numeri casuali che non si ripetono da 0 a 25
    while(rand25.length < 26){
        var r = Math.floor(Math.random() * 26);
        if(rand25.indexOf(r) === -1) rand25.push(r);
    }
    //generazione random dell'array dell'alfabeto
    for(var i = 0;i < 26;i++){
        //lettera a caso dall'alfabeto originale inserita nell'array dell'alfabeto criptato
        alfabetCript[i] = alfabet[rand25[i]];
    }
    
    //stampa alfabeto criptato
    var prova1 = "";
    for(var i = 0;i < 26;i++){
        prova1 += alfabetCript[i];
    }
    document.getElementById("a").innerHTML = "Criptato: ";
    document.getElementById("a").innerHTML += prova1;
    
    /*
        NUMERI
    */
    //crazione array di numeri casuali che non si ripetono da 0 a 9
    while(rand10.length < 10){
        var r = Math.floor(Math.random() * 10);
        if(rand10.indexOf(r) === -1) rand10.push(r);
    }
    //generazione random dell'array dei numeri
    for(var i = 0;i < 10;i++){
        //numero a caso dai numeri originale inserito nell'array dei numeri criptati
        numCript[i] = num[rand10[i]];
    }
    
    //stampa numeri criptati
    var prova2 = "";
    for(var i = 0;i < 10;i++){
        prova2 += numCript[i];
    }
    document.getElementById("a").innerHTML += prova2;
}

function cript(){
    //salvataggio valore passato
    var val = document.getElementById("t").value;
    //valore salvato tutto minuscolo
    val = val.toLocaleLowerCase();
    
    //creazione array contenente ogni carattere di val
    var valArray = new Array(val.length+1);
    for(var i = 0;i < valArray.length;i++){
        valArray[i] = val.charAt(i);
    }
    
    //sostituzione di ogni carattere in arrayVal con il suo corrispondente criptato
    for(var i = 0;i < valArray.length;i++){
        //salvataggio valore corrente
        var current = valArray[i];
    
        var index = 0;
    
        //se l'ultimo carattere non è un numero
        if(isNaN(current)){
            //ricerca indice dell'ultimo carattere nell'alfabeto
            index = alfabet.indexOf(current);
            //sostituzione carattere originale con corrispondente criptato
            valArray[i] = current.replace(alfabet[index], alfabetCript[index]);
            
        //se l'ultimo carattere è un numero
        }else{
            //ricerca indice dell'ultimo carattere nei numeri
            index = num.indexOf(Number(current));
            //sostituzione numero originale con corrispondente criptato
            valArray[i] = current.replace(num[index], numCript[index]);
        }
    }
    
    //stampa stringa criptata
    var criptedString = "";
    for(var i = 0;i < valArray.length;i++){
        criptedString += valArray[i];
    }
    document.getElementById("o").value = criptedString;
}