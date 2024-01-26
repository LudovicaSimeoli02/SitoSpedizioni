function gestoreImpostaAltezza () {
        try {
           altezzaCorrente=nodoaltezza.value;
           parzialeALCorrente= FATTORE_ALTEZZA [altezzaCorrente];
           nodoparzialeAL.value =parzialeALCorrente;
        }catch (e) {
            alert ("gestoreImpostaAltezza" + e) ;
        nodoRisultato.value="";
        }
    }
        
function gestoreImpostaLarghezza () {        
        try {
           larghezzaCorrente= nodolarghezza.value;
           parzialeLACorrente= FATTORE_LARGHEZZA [larghezzaCorrente];
           nodoparzialeLA.value= parzialeLACorrente;
        }catch (e) {
            alert ("gestoreImpostaLarghezza" + e) ;
        nodoRisultato.value="";
        }
    }

function gestoreImpostaLunghezza () {
        try {
           lunghezzaCorrente= nodolunghezza.value;
           parzialeLUCorrente= FATTORE_LUNGHEZZA[lunghezzaCorrente];
           nodoparzialeLU.value= parzialeLUCorrente;
        }catch (e) {
            alert ("gestoreImpostaLunghezza" + e) ;
        nodoRisultato.value="";
        }
    }

function gestoreImpostaPeso () {
        try {
           pesoCorrente= nodopeso.value;
           parzialePECorrente= FATTORE_PESO[pesoCorrente];
           nodoparzialePE.value= parzialePECorrente;
        } catch (e) {
            alert ("gestoreImpostaPeso" + e) ;
           nodoRisultato.value= "";
        }
    }


function gestoreCalcola () {
        try {
            nodoRisultato.value =  "€" + " " + Number ((parzialeALCorrente+ parzialeLACorrente + parzialeLUCorrente+ parzialePECorrente) / 4).toFixed (2)
        } catch (e) {
            alert ("gestoreCalcola" + e);
        }
    }

    
function gestoreAzzera0 () {
        try { 
            nodoRisultato.value=" "; 
              return;  
        } catch (e) {
            alert ("gestoreAzzera0" + (e))
        }
    }




    function scriviMessaggio (nodo,messaggio) {
        var nodoTesto= document.createTextNode(messaggio);
        nodo.replaceChild (nodoTesto, nodo.firstChild);
    }
    
function gestoreInserisci1 () {
    
        try {
            scriviMessaggio( nodoMessaggioInserisci1,""); 
       
        var nome1= nodonome1.value; 
        if (nome1== "") {
            scriviMessaggio(nodoMessaggioInserisci1,"Il campo nome mittente risulta vuoto");
            return;
        }else {
       
        if (nome1.includes("1") + nome1.includes("2") + nome1.includes("3") + nome1.includes("4") + nome1.includes("5") + nome1.includes("6") + nome1.includes("7") + nome1.includes("8") + nome1.includes("9") + nome1.includes("0")) { 
        scriviMessaggio ( nodoMessaggioInserisci1, "Il campo nome mittente non può contenere caratteri numerici") ;
        return; 
        }
    }
        
        var cognome1=nodocognome1.value;
        if (cognome1 == "") {
            scriviMessaggio( nodoMessaggioInserisci1,"Il campo cognome mittente risulta vuoto");
            return;
        } else {
        if (cognome1.includes("1") + cognome1.includes("2") + cognome1.includes("3") + cognome1.includes("4") + cognome1.includes("5") + cognome1.includes("6") + cognome1.includes("7") + cognome1.includes("8") + cognome1.includes("9") + cognome1.includes("0")) { 
            scriviMessaggio ( nodoMessaggioInserisci1, "Il campo cognome mittente non può contenere caratteri numerici") ;
            return;
        }
    }

        var codicefiscale1 = nodocodicefiscale1.value;
        if (codicefiscale1== "") {
            scriviMessaggio ( nodoMessaggioInserisci1, "Il campo codice fiscale  mittente risulta vuoto");
            return;
        } else {
        if (codicefiscale1.length != 16) {
            scriviMessaggio (nodoMessaggioInserisci1,"Il codice fiscale mittente deve essere composto da 16 caratteri");
            return;
        }
    }
    

        var indirizzomittente=nodoindirizzomittente.value;
        if (indirizzomittente == "") {
            scriviMessaggio ( nodoMessaggioInserisci1, "Il campo indirizzo mittente risulta vuoto");
            return;
        } else {
        if (indirizzomittente.includes("1") + indirizzomittente.includes("2") + indirizzomittente.includes("3") + indirizzomittente.includes("4") + indirizzomittente.includes("5") + indirizzomittente.includes("6") + indirizzomittente.includes("7") + indirizzomittente.includes("8") + indirizzomittente.includes("9") + indirizzomittente.includes("0")) { 
            scriviMessaggio ( nodoMessaggioInserisci1, "Il campo indirizzo mittente non può contenere caratteri numerici");
            return;
        }
    }
    
        var numerocivico1= nodonumerocivico1.value;
        if (numerocivico1== "") {
            scriviMessaggio ( nodoMessaggioInserisci1, "Il campo numero civico mittente risulta vuoto");
            return;
        } 
    

        var citta1=nodocitta1.value;
        if (citta1 == "") {
            scriviMessaggio (nodoMessaggioInserisci1, "Il campo città mittente risulta vuoto");
            return;
        } else {
        if (citta1.includes("1") + citta1.includes("2") + citta1.includes("3") + citta1.includes("4") + citta1.includes("5") + citta1.includes("6") + citta1.includes("7") + citta1.includes("8") + citta1.includes("9") + citta1.includes("0")) { 
            scriviMessaggio (nodoMessaggioInserisci1, "Il campo città mittente non può contenere caratteri numerici");
            return;
        }
    }

        scriviMessaggio (nodoMessaggioInserisci1, "");
        scriviMessaggio (nodoMessaggioInserisci1, "Dati inseriti correttamente"); 

    } catch ( e ) {
        alert ("gestoreInserisci1" + e) ;
    } }



function gestoreAzzera1 () {
    try {
        scriviMessaggio( nodoMessaggioInserisci1,""); 
        nodonome1.value=" "; nodocognome1.value=""; nodocodicefiscale1.value=""; nodoindirizzomittente.value=""; nodonumerocivico1.value=""; nodocitta1.value=""; 
          return;  
    } catch (e) {
        alert ("gestoreAzzera1" + (e))
    }
}

function gestoreInserisci2 () {
    try {
        scriviMessaggio( nodoMessaggioInserisci2,""); 
            var nome2= nodonome2.value; 
            if (nome2 == "") {
                scriviMessaggio (nodoMessaggioInserisci2,"Il campo nome destinatario risulta vuoto");
                return;
            } else {
            if (nome2.includes("1") + nome2.includes("2") + nome2.includes("3") + nome2.includes("4") + nome2.includes("5") + nome2.includes("6") + nome2.includes("7") + nome2.includes("8") + nome2.includes("9") + nome2.includes("0")) { 
                scriviMessaggio (nodoMessaggioInserisci2,"Il campo nome destinatario non può contenere caratteri numerici") ;
                return;
            }
        }
            
            var cognome2=nodocognome2.value;
            if (cognome2== "") {
                scriviMessaggio (nodoMessaggioInserisci2,"Il campo cognome destinatario risulta vuoto");
                return;
            } else {
            if (cognome2.includes("1") + cognome2.includes("2") + cognome2.includes("3") + cognome2.includes("4") + cognome2.includes("5") + cognome2.includes("6") + cognome2.includes("7") + cognome2.includes("8") + cognome2.includes("9") + cognome2.includes("0")) { 
                scriviMessaggio (nodoMessaggioInserisci2, "Il campo cognome destinatario non può contenere caratteri numerici") ;
                return;
            }
        }
    
            var codicefiscale2= nodocodicefiscale2.value;
            if (codicefiscale2== "") {
                scriviMessaggio (nodoMessaggioInserisci2, "Il campo codice fiscale destinatario risulta vuoto");
                return
            } else {
            if (codicefiscale2.length != 16) {
                scriviMessaggio (nodoMessaggioInserisci2,"Il codice fiscale destinatario deve essere composto da 16 caratteri");
                return
            }
        }

            var indirizzodestinatario=nodoindirizzodestinatario.value;
            if (indirizzodestinatario == "") {
                scriviMessaggio ( nodoMessaggioInserisci2,"Il campo indirizzo destinatario risulta vuoto");
                return;
            } else {
            if (indirizzodestinatario.includes("1") + indirizzodestinatario.includes("2") + indirizzodestinatario.includes("3") + indirizzodestinatario.includes("4") + indirizzodestinatario.includes("5") + indirizzodestinatario.includes("6") + indirizzodestinatario.includes("7") + indirizzodestinatario.includes("8") + indirizzodestinatario.includes("9") + indirizzodestinatario.includes("0")) { 
                scriviMessaggio (nodoMessaggioInserisci2,"Il campo indirizzo destinatario non può contenere caratteri numerici");
                return;
            }
        }
    
            var numerocivico2= nodonumerocivico2.value;
            if (numerocivico2== "") {
                scriviMessaggio (nodoMessaggioInserisci2, "Il campo numero civico destinatario risulta vuoto");
                return;
            }
            
            var citta2=nodocitta2.value;
            if (citta2== "") {
                scriviMessaggio (nodoMessaggioInserisci2, "Il campo città destinatario risulta vuoto");
                return;
            } else {
            if (citta2.includes("1") + citta2.includes("2") + citta2.includes("3") + citta2.includes("4") + citta2.includes("5") + citta2.includes("6") + citta2.includes("7") + citta2.includes("8") + citta2.includes("9") + citta2.includes("0")) { 
                scriviMessaggio ( nodoMessaggioInserisci2,"Il campo città destinatario non può contenere caratteri numerici");
                return;
            }
        }

            scriviMessaggio (nodoMessaggioInserisci2, "");
        scriviMessaggio (nodoMessaggioInserisci2, "Dati inseriti correttamente"); 

            
        } catch ( e ) {
            alert ("gestoreInserisci2" + e) ;
        }
    } 

    function gestoreAzzera2 () {
        try { 
            scriviMessaggio( nodoMessaggioInserisci2,""); 
            nodonome2.value=" "; nodocognome2.value=""; nodocodicefiscale2.value=""; nodoindirizzodestinatario.value=""; nodonumerocivico2.value=""; nodocitta2.value=""; 
        return;  
  } catch (e) {
      alert ("gestoreAzzera2" + (e))
  }
}

    function gestoreInserisciCarta () {
        try {
            scriviMessaggio( nodoMessaggioInseriscicarta,"");
            
            var nomeintestatario= nodonomeintestatario.value; 
            if (nomeintestatario== "") {
                scriviMessaggio ( nodoMessaggioInseriscicarta, "Il campo nome intestatario risulta vuoto");
                return;
            } else {
            if (nomeintestatario.includes("1") + nomeintestatario.includes("2") + nomeintestatario.includes("3") + nomeintestatario.includes("4") + nomeintestatario.includes("5") + nomeintestatario.includes("6") + nomeintestatario.includes("7") + nomeintestatario.includes("8") + nomeintestatario.includes("9") + nomeintestatario.includes("0")) { 
                scriviMessaggio (nodoMessaggioInseriscicarta, "Il campo nome intestatario non può contenere caratteri numerici") ;
                return;
            }
        }

            var cognomeintestatario=nodocognomeintestatario.value; 
            if (cognomeintestatario == "") {
                scriviMessaggio (nodoMessaggioInseriscicarta,"Il campo cognome intestatario risulta vuoto");
                return;
            } else {
            if (cognomeintestatario.includes("1") + cognomeintestatario.includes("2") + cognomeintestatario.includes("3") + cognomeintestatario.includes("4") + cognomeintestatario.includes("5") + cognomeintestatario.includes("6") + cognomeintestatario.includes("7") + cognomeintestatario.includes("8") + cognomeintestatario.includes("9") + cognomeintestatario.includes("0")) { 
                scriviMessaggio (nodoMessaggioInseriscicarta, "Il campo cognome intestatario non può contenere caratteri numerici") ;
                return;
            }
        }
    
            var numerocarta = nodonumerocarta.value;
            if (numerocarta== "") {
                scriviMessaggio (nodoMessaggioInseriscicarta,"Il campo numero carta risulta vuoto");
                return;
            } 
            if (numerocarta.length != 16) {
                scriviMessaggio (nodoMessaggioInseriscicarta,"Il numero di carta deve essere composto da 16 caratteri");
                return;
            } else {
            if (nodonumerocarta.value != Number (nodonumerocarta.value)) {
                scriviMessaggio (nodoMessaggioInseriscicarta,"Il numero di carta non può essere composto da caratteri alfabetici")
            }
        }

            var circuito=nodocircuito.value;
            if (circuito== "") {
                scriviMessaggio (nodoMessaggioInseriscicarta,"Il campo circuito risulta vuoto");
                return;
            } else {
            if (circuito.includes("1") + circuito.includes("2") + circuito.includes("3") + circuito.includes("4") + circuito.includes("5") + circuito.includes("6") + circuito.includes("7") + circuito.includes("8") + circuito.includes("9") + circuito.includes("0")) { 
                scriviMessaggio( nodoMessaggioInseriscicarta,"Il campo circuito non può contenere caratteri numerici") ;
                return;
            } 
        }

            var scadenza=nodoscadenza.value;
            if (scadenza== "") {
                scriviMessaggio (nodoMessaggioInseriscicarta, "Il campo scadenza risulta vuoto");
                return;
            } 
            if (nodoscadenza.value.substr(2,1) !="/"  ) {
                scriviMessaggio (nodoMessaggioInseriscicarta,"Il campo scadenza deve contenere caratteri numerici o slash ");
                return;
            } else {
                if (isNaN(nodoscadenza.value.substr(0,2))  ) {
                    scriviMessaggio (nodoMessaggioInseriscicarta, "Il campo scadenza deve contenere caratteri numerici o slash");
                    return;
                }
            }     

            var cvv= nodocvv.value;
            if (cvv== "") {
                scriviMessaggio (nodoMessaggioInseriscicarta,"Il campo cvv risulta vuoto");
                return;
            }
            if (cvv.length != 3) {
                scriviMessaggio (nodoMessaggioInseriscicarta,"Il cvv deve essere composto da tre cifre numeriche")
            } else {
            if (isNaN(nodocvv.value)) {
                scriviMessaggio (nodoMessaggioInseriscicarta,"Il campo cvv non puo contenere caratteri alfabetici");
                return;
            }
        }

            scriviMessaggio (nodoMessaggioInseriscicarta, "");
        scriviMessaggio (nodoMessaggioInseriscicarta, "Dati inseriti correttamente"); 
    
       
    } catch ( e ) {
        alert ("gestoreInserisciCarta" + e) ;
    }
    }

    function gestoreAzzeraCarta () {
        try { 
            scriviMessaggio( nodoMessaggioInseriscicarta,""); 
            nodonomeintestatario.value=" "; nodocognomeintestatario.value=""; nodocircuito.value=""; nodonumerocarta.value=""; nodoscadenza.value=""; nodocvv.value=""; 
        return;  
  } catch (e) {
      alert ("gestoreAzzeraCarta" + (e))
  }
}

    function gestoreEtichetta () {
        try {
            if ( ( nodonome1.value == "", nodocognome1.value=="", nodocodicefiscale1.value=="", nodoindirizzomittente.value=="", nodonumerocivico1.value=="", nodocitta1.value=="") + ( nodonome2.value == "", nodocognome2.value =="", nodocodicefiscale2.value=="", nodoindirizzodestinatario.value=="", nodonumerocivico2.value=="", nodocitta2.value=="") + ( nodonomeintestatario.value=="",nodocognomeintestatario.value=="", nodocircuito.value=="", nodonumerocarta.value=="",nodoscadenza.value=="", nodocvv.value=="" )) {
                alert ( "Riempi tutti i campi relativi ai dati del mittente, del destinatario e del pagamento");
                return; 
            } else { 
                alert (String ("ECCO LA TUA ETICHETTA DA STAMPARE \n " +"DATI MITTENTE: \n" + nodonome1.value + " " + nodocognome1.value + " " + nodocodicefiscale1.value + "\n" + nodoindirizzomittente.value + " " +  nodonumerocivico1.value + " " +  nodocitta1.value + " \n"
                +"DATI DESTINATARIO: \n" + nodonome2.value + " " + nodocognome2.value + " " + nodocodicefiscale2.value + "\n " + nodoindirizzodestinatario.value + " " +  numerocivico2.value + " " +  citta2.value  ))
                }
                
        } catch (e) {
                    alert ("gestoreEtichetta" + e) ;
    }}
    


    var nodoaltezza;
    var nodolarghezza;
    var nodolunghezza;
    var nodopeso;

    var nodoparzialeAL;
    var nodoparzialeLA;
    var nodoparzialeLU;
    var nodoparzialePE;

    var altezzaCorrente;
    var larghezzaCorrente;
    var lunghezzaCorrente;
    var pesoCorrente;

    var parzialeALCorrente;
    var parzialeLACorrente;
    var parzialeLUCorrente;
    var parzialePECorrente;

    var nodoRisultato;

    const  FATTORE_ALTEZZA = { 
        PICCOLO : 2.15,
        MEDIO : 5.25,
        GRANDE : 7.15
    }
    
    const FATTORE_LARGHEZZA = { 
        PICCOLO : 3.15,
        MEDIO : 6.25,
        GRANDE : 8.35
    }
    
    const FATTORE_LUNGHEZZA = { 
        PICCOLO : 2.15,
        MEDIO : 5.25,
        GRANDE : 7.15
    }
    
    const FATTORE_PESO = {
        PICCOLO : 3.15,
        MEDIO : 6.25,
        GRANDE : 9.55
    
    }

    
    var nodonome1;
    var nodocognome1;
    var nodocodicefiscale1;
    var nodoindirizzomittente;
    var nodonumerocivico1; 
    var nodocitta1; 
    var nodoInserisci1; 
    var nodoMessaggioInserisci1;

    
    var nodonome2;
    var nodocognome2;
    var nodocodicefiscale2;
    var nodoindirizzodestinatario;
    var nodonumerocivico2; 
    var nodocitta2; 
    var nodoInserisci2; 
    var nodoMessaggioInserisci2;

    
    var nodonomeintestatario;
    var nodocognomeintestatario;
    var nodocircuito;
    var nodonumerocarta;
    var nodoscadenza; 
    var cvv;
    var nodoInserisciCarta;
    var nodoMessaggioInseriscicarta; 


    
 
function gestoreLoad () {
    try {
        nodoaltezza= document.getElementById ("altezza");
        nodolarghezza= document.getElementById ("larghezza");
        nodolunghezza= document.getElementById ("lunghezza");
        nodopeso= document.getElementById ("peso");

        nodoparzialeAL= document.getElementById ("parzialeAL");
        nodoparzialeLA= document.getElementById ("parzialeLA");
        nodoparzialeLU= document.getElementById ("parzialeLU");
        nodoparzialePE= document.getElementById ("parzialePE");

       
        nodoCalcola= document.getElementById ("calcola");
        nodoAzzera0= document.getElementById ("azzera0");
        nodoRisultato= document.getElementById ("risultato");

        nodoaltezza.onchange= gestoreImpostaAltezza;
        nodolarghezza.onchange= gestoreImpostaLarghezza;
        nodolunghezza.onchange= gestoreImpostaLunghezza;
        nodopeso.onchange= gestoreImpostaPeso;
        gestoreImpostaAltezza (); 
        gestoreImpostaLarghezza ();
        gestoreImpostaLunghezza ();
        gestoreImpostaPeso (); 

        nodoCalcola.onclick= gestoreCalcola;
        nodoAzzera0.onclick= gestoreAzzera0; 
        
        nodoRisultato.value="";

        nodonome1= document.getElementById ("nome1");
        nodocognome1= document.getElementById ("cognome1");
        nodocodicefiscale1= document.getElementById ("codicefiscale1");
        nodoindirizzomittente= document.getElementById ("indirizzomittente");
        nodonumerocivico1= document.getElementById ("numerocivico1");
        nodocitta1= document.getElementById ("citta1");
        nodoInserisci1= document.getElementById ("inserisci1");
        nodoMessaggioInserisci1= document.getElementById ("messaggioinserisci1")
        nodoAzzera1= document.getElementById ("azzera1");
    
        var nodoTesto1= document.createTextNode ("");
        nodoMessaggioInserisci1.appendChild(nodoTesto1);
        
        nodonome1.value="";
        nodocognome1.value="";
        nodocodicefiscale1.value="";
        nodoindirizzomittente.value=""; 
        nodonumerocivico1.value="";
        nodocitta1.value=""; 

        nodoInserisci1.onclick= gestoreInserisci1;
        nodoAzzera1.onclick= gestoreAzzera1;
        

        nodonome2= document.getElementById ("nome2");
        nodocognome2= document.getElementById ("cognome2");
        nodocodicefiscale2= document.getElementById ("codicefiscale2");
        nodoindirizzodestinatario= document.getElementById ("indirizzodestinatario");
        nodonumerocivico2= document.getElementById ("numerocivico2"); 
        nodocitta2= document.getElementById ("citta2");
        nodoInserisci2= document.getElementById ("inserisci2");
        nodoMessaggioInserisci2= document.getElementById ("messaggioinserisci2")
        nodoAzzera2= document.getElementById ("azzera2");


        var nodoTesto2= document.createTextNode ("");
        nodoMessaggioInserisci2.appendChild(nodoTesto2);
        
        nodonome2.value="";
        nodocognome2.value="";
        nodocodicefiscale2.value="";
        nodoindirizzodestinatario.value=""; 
        nodonumerocivico2.value="";
        nodocitta2.value=""; 

        nodoInserisci2.onclick= gestoreInserisci2;
        nodoAzzera2.onclick= gestoreAzzera2; 
        

        nodonomeintestatario= document.getElementById ("nomeintestatario");
        nodocognomeintestatario= document.getElementById ("cognomeintestatario");
        nodocircuito= document.getElementById ("circuito");
        nodonumerocarta= document.getElementById ("numerocarta");
        nodoscadenza= document.getElementById ("scadenza");
        nodocvv= document.getElementById ("cvv"); 
        nodoInserisciCarta= document.getElementById ("inseriscicarta");
        nodoMessaggioInseriscicarta= document.getElementById ("messaggioinseriscicarta")
        nodoAzzeraCarta= document.getElementById ("azzeracarta");
        nodoEtichetta= document. getElementById ("etichetta"); 

        var nodoTestocarta= document.createTextNode (""); 
        nodoMessaggioInseriscicarta.appendChild(nodoTestocarta);

        nodonomeintestatario.value="";
        nodocognomeintestatario.value="";
        nodocircuito.value="";
        nodonumerocarta.value="";
        nodoscadenza.value=""; 
        nodocvv.value=""; 

        nodoInserisciCarta.onclick= gestoreInserisciCarta;
        nodoAzzeraCarta.onclick= gestoreAzzeraCarta; 
        nodoEtichetta.onclick= gestoreEtichetta; 

    } catch (e) {
        alert ("gestoreLoad" + e)
    }
}
window.onload = gestoreLoad; 

