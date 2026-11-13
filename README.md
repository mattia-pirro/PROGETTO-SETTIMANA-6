# PROGETTO-SETTIMANA-6

# Atelier - Studio di Architettura

Sito web monopagina per uno studio di architettura, realizzato interamente in front-end utilizzando HTML5, CSS3, JavaScript vanilla e Bootstrap 5.

## Funzionalità principali

1. **Navigazione e Header dinamico**  
   La barra di navigazione superiore resta ancorata in cima allo schermo durante lo scorrimento. Tramite un controllo sullo scroll in JavaScript, superata la sezione iniziale, l'header si riduce in altezza, rimpicciolisce il logo testuale e scurisce lo sfondo.

2. **Modalità Chiaro e Scuro**  
   Un pulsante dedicato nell'header permette di alternare il tema del sito tra chiaro e scuro. Al click, lo script aggiorna gli attributi di Bootstrap e applica le regole CSS personalizzate adattando automaticamente sfondi, testi, card e campi del modulo.

3. **Hero Section con Carosello**  
   La sezione di apertura è un carosello a tre slide a tutta larghezza con scorrimento automatico ogni quattro secondi, indicatori e controlli laterali. Ogni slide include un pulsante che apre direttamente la finestra di contatto.

4. **Griglia Servizi e Filtro Interattivo**  
   Le sei aree di lavoro dello studio vengono generate dinamicamente tramite JavaScript. Cliccando su una card di servizio, questa viene evidenziata con un bordo dorato e filtra i progetti sottostanti mostrando solo quelli della stessa categoria. Cliccando una seconda volta sulla card attiva, il filtro si azzera e tornano visibili tutti i lavori.

5. **Portfolio Lavori Dinamico**  
   Anche le card dei progetti vengono generate da uno script che, a ogni caricamento della pagina, mescola l'elenco in ordine casuale per variare la disposizione visiva. Ogni scheda mostra anteprima, titolo, categoria e anno.

6. **Modale e Form di Contatto**  
   I pulsanti di contatto aprono una finestra modale con un modulo per richiedere informazioni. L'invio viene gestito via JavaScript: i campi si svuotano e compare un messaggio verde di conferma per tre secondi, che viene nascosto automaticamente se la finestra viene chiusa prima.

7. **Footer informativo**  
   La parte inferiore del sito è organizzata in colonne con l'indirizzo dello studio, i link rapidi alle sezioni e i recapiti diretti.

## Struttura dei file

- `index.html`: struttura della pagina, collegamenti ai file esterni e definizione della modale.
- `assets/css/style.css`: stili personalizzati, variabili per il tema scuro, transizioni dell'header e animazioni delle card.
- `assets/js/script.js`: gestione dello scroll, cambio tema, generazione dinamica di servizi e progetti, logica di filtraggio e invio del modulo.
