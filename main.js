/**
 * Represents the application ID.
 *
 * @type {string}
 * @constant
 */
const appId = '#app';

/**
 * Returns the HTML content for the documentation
 *
 * @returns {string} The HTML content for the documentation
 */
const htmlContent = () => {
    return `<h1>Utilizzo di $(document) in jQuery</h1>
<p>Quando si lavora con eventi jQuery, è importante partire da <code>$(document)</code> per sfruttare al meglio questa best practice:</p>

<ul>
    <li><strong>Delega degli eventi:</strong> Utilizzando <code>$(document)</code>, è possibile delegare la gestione degli eventi a un elemento superiore, risparmiando tempo e codice.</li>
    <li><strong>Gestione dinamica degli elementi:</strong> <code>$(document)</code> rimane costante, anche quando si aggiungono o rimuovono elementi dalla pagina.</li>
    <li><strong>Migliora le prestazioni:</strong> Associando un gestore di eventi a <code>$(document)</code>, si riduce il numero di gestori separati.</li>
    <li><strong>Riduce il rischio di errori:</strong> Garantisce che l'evento venga gestito solo quando l'elemento target è disponibile.</li>
    <li><strong>Facilita la manutenzione:</strong> Il codice risulta più pulito e mantenibile, con la gestione degli eventi in un unico luogo.</li>
</ul>

<h2>Esempi di Codice</h2>

<h3>Caso 1:Utilizzo della referenza diretta</h3>
<p>In questo esempio utilizziamo la referenza diretta <code>$("#elementID").on('click', function()...</code> per gestire un evento di clic su un elemento con id "elementID".</p>
<pre>
    <code>
$(document).ready(function() {
    $("#elementID").on('click',function() {
        $(this).css("background-color", "blue");
    });
});
    </code>
    </pre>

<h3>Caso 2: Utilizzo della delega degli eventi</h3>
<p>In questo esempio utilizziamo la delega degli eventi <code>$(document).on("click", "#elementID", function()...</code> per gestire un evento di clic su un elemento con id "elementID".</p>
<pre>
    <code>
$(document).ready(function() {
    $(document).on("click", "#elementID", function() {
        $(this).css("background-color", "blue");
    });
});
    </code>
    </pre>
`
}
/**
 * A function that logs messages to the console.
 *
 * @function logger
 * @returns {void}
 *
 * @example
 *   logger();
 */
const logger = () => {
    console.log('%c HI ALL 🥷', 'color: red; font-size: 20px; background-color: black;');
    console.log('%c How to handle Trigger in jQuery', 'color: pink; font-size: 30px;');
    console.log('%c Like a boss', 'color: purple; font-size: 20px;');
    console.log(`%c Trigger: $(document).on('Event', 'Selector' () => {})`, 'color: orange; font-size: 18px;');

    // console.table(jQuery.event)
}
/**
 * Initializes the application by logging the start and preparing the HTML.
 *
 * @function init
 * @returns {void}
 */
const init = () => {
    //Logging start
    logger();

    //prepare html
    $(appId).append(htmlContent());
}


$(document).ready(() => {
    init();

    // Bad practice - Referenza diretta sull'elemento (Skip totale delega eventi)

    /*
    * Questo approccio può causare problemi quando gli elementi vengono modificati o
    * aggiunti dopo il caricamento iniziale della pagina (perdita di referenza!).
    * */
    $(appId).on('click', function () {
        $(this).css("background-color", "black");
    });

    // Good practice

    /*
    * La "good practice" ha la precedenza poiché utilizza la delega degli eventi,
    * consentendo una gestione efficiente anche per elementi dinamicamente aggiunti.
    */
    $(document).on("click", appId, function () {
        $(this).css("background-color", "red");

        console.info(jQuery.event)
    });

    $(document).on("mouseenter", appId, function () {
        $(this).css("font-size", "1.2em");
    });

    $(document).on("mouseleave", appId, function () {
        $(this).css("font-size", "1em");
        $(this).css("background-color", "white");
    });


    //source https://learn.jquery.com/events/event-delegation/

    //mermaid schema https://mermaid.live/edit#pako:eNqdkztvgzAUhf-KdWcS1S8CHjpUVOrQrZ0aMjixm6CCiXhUTZP895o4oaVAhjBY1_Z3zvW5EntY5UqDgHUhtxv0GsUG2U_lqzrTpkKTyT16THVT4_m5QHgxTpGWIlco2lL0TLn10sqxn7Z8TspKG13Y7s0WXfaLjoD0BeSqgPYFdFjg1rJeuglF5zTu-G8-d6KNis0_jfN9kkaluih_lVfS9qChhD1oKNX4syKd6rWstELd4P1oje3BQQ_1cpkmZn3otmm95mOui95Dhg1OvdysSoeUh3ZStwrJrUIKHmS6yGSi7E-yb2xiqDb2LgZhSyWLjxhic7ScrKv8ZWdWIKqi1h7UW2Xto0TacWcg3mVa2tOtNG953tmD2MMXCManzOeEMz9kZOb7IfdgB2KCyRTPWGhvAsx9hik_evB98ribhkHAQkJxEOCA0oAffwAWST4A

})




