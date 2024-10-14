const projects = [
            {
                'name' : 'Pixel Art app',
                'description' : `Ho sviluppato questa applicazione in seguito allo studio della libreria di <span class="color-purple">Python</span>, <span class="color-purple">Tkinter</span>. 
                Data la mia grande passione per la <span class="color-purple">pixel art</span> è stato un vero divertimento sviluppare questa <span class="color-purple">applicazione</span>. <br><br>L'app permette
                di scegliere il <span class="color-purple">colore</span> che verrà visualizzato su un <span class="color-purple">riquadro</span> accanto al <span class="color-purple">pulsante colore</span> ed iniziare a disegnare all'interno delle <span class="color-purple">celle</span>, sia colorandole ad una ad una sia scorrendo con il mouse,
                stesso funzionamento avviene per la <span class="color-purple">cancellazione</span>.<br><br> Nel <span class="color-purple">menù</span> in alto a sinistra è possibile iniziare un nuovo <span class="color-purple">disegno</span>, aprire un <span class="color-purple">disegno</span> che era stato salvato
                precedentemente oppure salvare il <span class="color-purple">disegno</span> attuale per poterci lavorare successivamente.<br><br>Ho anche implementato la possibilità di cambiare la dimensione delle <span class="color-purple">celle</span> così da scegliere se disegnare un soggetto più piccolo o più grande.
                Come ultima opzione è possibile salvare in formato <span class="color-purple">png</span> il <span class="color-purple">disegno</span>.`,
                'is_visible' : 1,
                'link' : 'https://github.com/ariannacostanzo/Pixel-Art',
                'image_key' : 'pixel-art'
            },
            {
                'name' : 'Whatsapp',
                'description' : `Quest'app di <span class="color-purple">messaggistica</span>, <span class="color-purple">imitazione di Whatsapp</span> era parte di uno degli esercizi del corso <span class="color-purple">Boolean</span> che ho frequentato. Poichè mi 
                aveva appassionato molto il progetto però, ho implementato una serie di funzionalità aggiuntive.<br><br> L'app è sviluppata in <span class="color-purple">Vue</span> ed è <span class="color-purple">responsive</span>,
                cliccando su una delle <span class="color-purple">chat</span> presenti è possibile vedere i <span class="color-purple">messaggi</span> inviati e ricevuti. Nel riquadro a sinistra è possibile inoltre filtrare gli utenti con cui sono presenti delle chat.
                <br><br>Adesso una descrizione delle funzionalità aggiuntive che mi sono divertita ad implementare. Cliccando sul <span class="color-purple">pulsante</span> <span class="color-purple">emoticon</span> in basso a sinistra nel riquadro della chat
                aggiungeremo al <span class="color-purple">messaggio</span> da inviare un <span class="color-purple">emoticon</span> casuale. Dopo l'invio del <span class="color-purple">messaggio</span> possiamo notare come l'utente sia lì pronto a risponderci con qualcosa di inaspettato ma inerente al mondo di <span class="color-purple">Attack on Titan</span>,
                a cui ho dedicato l'applicazione. Cliccando su un <span class="color-purple">messaggio</span> abbiamo due opzioni: poter visualizzare <span class="color-purple">le informazioni del messaggio</span>, oppure <span class="color-purple">eliminarlo</span>.
                <br><br>Ho implementato delle funzionalità per ogni <span class="color-purple">pulsante</span> sul <span class="color-purple">menù della chat</span>. Con la <span class="color-purple">lente di ingrandimento</span> è possibile filtrare i <span class="color-purple">messaggi</span>, con la <span class="color-purple">graffetta</span> invece c'è la possibilità di inviare delle <span class="color-purple">foto</span>,
                ed infine con l'ultimo <span class="color-purple">pulsante</span> possiamo svuotare la <span class="color-purple">chat</span>. L'ultima funzionalità che ho aggiunto è l'imitazione dell'invio di un <span class="color-purple">messaggio audio</span>, con possibilità di fermarlo, cancellarlo o inviarlo. <br><br>Qualsiasi sarà l'ultimo <span class="color-purple">messaggio</span> inviato, che sia un'immagine, un audio, un'emoticon o un normalissimo messaggio(se la chat non è vuota) questo verrà mostrato nel riquadro a sinistra
                degli utenti, con la data. `,
                'is_visible' : 1,
                'link' : 'https://github.com/ariannacostanzo/whatsapp',
                'image_key' : 'whatsapp'
            },
            {
                'name' : 'Deliveboo frontend',
                'description' : `<span class="color-purple">Progetto finale</span> del corso <span class="color-purple">Boolean</span>, svolto in un team da 5 persone di cui ho fatto parte. Questa è il <span class="color-purple">front Office</span> del progetto, sviluppato in  <span class="color-purple">Vue</span>. <br><br>Nella pagina di benvenuto abbiamo definito un <span class="color-purple">layout</span> inerente al tema di spedizione cibo.
                E' presente una lista dei ristoranti affiliati all'applicazione, con possibilità di <span class="color-purple">filtrare</span> in base al tipo di ristorante. Abbiamo poi abbellito la pagina con delle card e diverse sezioni interattive. 
                <br><br>Cliccando sulla scheda ristorante troviamo il menù di quest'ultimo. Qui l'utente può <span class="color-purple">ordinare</span> i suoi piatti preferiti e sceglierne le quantità comodamente. Il <span class="color-purple">carrello</span> verrà aggiornato e manterrà lo storico anche al <span class="color-purple">ricaricamento</span> della 
                pagina. Dentro quest'ultimo troviamo i dettagli dell'ordine, ovvero i piatti scelti, le relative quantità ed il costo individuale e totale, una sezione con i dettagli di consegna ed il metodo di pagamento
                da inserire.<br><br> Se tutti i dati sono corretti l'ordine è correttamente inviato e l'utente verrà indirizzato in una nuova pagina di <span class="color-purple">riepilogo ordine</span>, a cui si potrà
                accedere comodamente tramite un'icona che apparirà nella homepage.`,
                'is_visible' : 1,
                'link' : 'https://github.com/ariannacostanzo/vue-deliveboo',
                'image_key' : 'deliveboo-frontend'
            },
            {
                'name' : 'Pokemon',
                'description' : `Pokedex web per pokemon, sviluppato in  <span class="color-purple">Vue</span>. Con quest'app è possibile visualizzare i pokemon attraverso <span class="color-purple">una serie di filtri</span>. 
                <br><br>Inizialmente avremmo una lista di pokemon, 20 alla volta, con possibilità di caricarne altri 20 ogni volta, in ordine ascendente. Il pokedex presenta un'immagine in movimento dei pokemon, il numero nel pokedex, il nome ed il tipo, oppure i tipi. <br><br>Cliccando sulla selezione in alto a destra
                è possibile <span class="color-purple">ordinare i pokemon</span> in ordine ascendente, discendente, in ordine alfabetico dalla A alla Z e dalla Z alla A. <br><br>Cliccando sulla <span class="color-purple">ricerca avanzata</span> il alto si apre un menù complesso, con cui è possibile
                filtrare i pokemon attraverso una serie di parametri: il tipo, oppure i tipi, il range numerico in cui si trova, se possiede una specifica abilità ed infine le dimensioni.`,
                'is_visible' : 1,
                'link' : 'https://github.com/ariannacostanzo/pokemon',
                'image_key' : 'pokemon'
                
            },
            {
                'name' : 'Deliveboo backend',
                'description' : `<span class="color-purple">Progetto finale</span> del corso <span class="color-purple">Boolean</span>, svolto in un team da 5 persone di cui ho fatto parte. Questa è il <span class="color-purple">back Office</span> del progetto, sviluppata in  <span class="color-purple">Laravel e Blade</span>. <br><br>Abbiamo implementato una pagina di registrazione
                e di login dell'utente. Alla registrazione l'utente dovrà anche registrare il suo ristorante. <br><br>L'utente che si è iscritto ha la possibilità di <span class="color-purple">visualizzare i piatti</span> del suo menù. Può cambiare la visibità del piatto nel caso in cui fossero finiti gli ingredienti. E' possibile <span class="color-purple">filtrare</span> i piatti per nome e visualizzarne il dettaglio, 
                nonchè l'immagine ingrandita. Infine l'utente può modificare qualsiasi aspetto del piatto e aggiungerne di nuovi al menù. <br><br>In alto a sinistra, nella barra di navigazione è possibile visualizzare la pagina
                degli <span class="color-purple">ordini ricevuti</span> negli ultimi 12 mesi, e cliccando sul pulsante dettaglio è possibile anche visualizzare il contenuto dell 'ordine. <br><br>Infine abbiamo implementato un grafico che mostri <span class="color-purple">le statistiche degli ordini</span> ricevuti nell'ultimo anno.`,
                'is_visible' : 1,
                'link' : 'https://github.com/ariannacostanzo/laravel-deliveboo',
                'image_key' : 'deliveboo-backend'
            },
            {
                'name' : 'Dc comics',
                'description' : `Un'applicazione per la <span class="color-purple">gestione dei fumetti</span>, sviluppata in  <span class="color-purple">Laravel e Blade</span>. <br><br>Nella pagina "Comics" è possibile visualizzare una lista dei fumetti presenti. Con il pulsante di aggiunta veniamo trasferiti alla pagina di
                <span class="color-purple">creazione di un nuovo fumetto</span>. Se tutti i campi superano la validazione verremo reindirizzati alla pagina di <span class="color-purple">dettaglio del fumetto</span> appena creato.<br><br>I fumetti possono essere cancellati, essi finiranno nel <span class="color-purple">cestino</span>, in cui abbiamo
                la possibilità di cancellarli del tutto oppure <span class="color-purple">ripristinarli</span>.`,
                'is_visible' : 1,
                'link' : 'https://github.com/ariannacostanzo/laravel-dc-comics',
                'image_key' : 'dc-comics'
            },
            {
                'name' : 'Progetti in Python',
                'description' : `Vari progetti con cui mi sono divertita a programmare in <span class="color-purple">Python</span>:
                <br><br>Un <span class="color-purple">gioco a quiz</span> su Game of Thrones dove si deve riconoscere il personaggio dal nome mostrato. L'obbiettivo è fare più punti possibili e superare il tuo punteggio migliore;
                <br><br> Un <span class="color-purple">gioco a livelli</span>, in cui il giocatore si muove in avanti, evitando i nemici, per raggiungere il tesoro e passare al prossimo livello. Ogni livello successivo i nemici si muoveranno più velocemente oppure aumenteranno di numero;
                <br><br> Ed infine una <span class="color-purple">calcolatrice</span> che può eseguire operazioni matematiche elementari o più complesse.`,
                'is_visible' : 1,
                'link' : 'https://github.com/ariannacostanzo/laravel-dc-comics',
                'image_key' : 'progetti-in-python'
            },
            {
                'name' : 'Spotify',
                'description' : `Un'imitazione di Spotify sviluppata in <span class="color-purple">HTML e CSS</span> puro. Questa applicazione è puramente una vetrina, progettata per mostrare le potenzialità del design web senza l'uso di JavaScript o backend. Gli utenti possono esplorare un layout simile a quello di Spotify, completo di sezioni per artisti, album e playlist. Il design è stato realizzato con grande attenzione ai dettagli per creare un'esperienza visivamente accattivante e moderna, utilizzando esclusivamente HTML e CSS per la struttura e la presentazione. `,
                'is_visible' : 1,
                'link' : 'https://github.com/ariannacostanzo/laravel-dc-comics',
                'image_key' : 'spotify'
            },
]

export default projects