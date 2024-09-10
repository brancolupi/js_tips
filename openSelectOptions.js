// Opzioni mostrate inizialmente
var showedOptions = document.querySelector("#select_pa_taglia").size; // all'inizio 0

// Numero delle opzioni totali disponibili
var numberOfOptions = document.querySelector("#select_pa_taglia").length; 

// Mostra tutte le opzioni
document.querySelector("#select_pa_taglia").size = numberOfOptions;

// Riposiziona
document.querySelector("#select_pa_taglia").style.cssText = 'position:absolute; top: 0%; z-index:10;';
