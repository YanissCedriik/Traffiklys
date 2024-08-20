changeLight();                                                      //Kjører cangeLight() funksjon når siden starter.
function changeLight() {
  let top = document.getElementById("top");
  let mid = document.getElementById("mid");
  let bot = document.getElementById("bot");

  bot.classList.remove("green");                                //Fjerner grønn før intervallen starter så grønn ikke er synlig.

  let redLight = setInterval(function () {                      
    top.classList.add("red");
    clearInterval(redLight);
  }, 1000);                                                      
  let yellowLight = setInterval(function () {                   // Deklarer variabel "yellowLight" og setter i gang timeinterval "yellowLight"
    top.classList.remove("red");                              // Fjerner class "red" fra div id "top" 
    mid.classList.add("yellow");                               // Legger til class "yellow" på div id "mid"
    clearInterval(yellowLight);                                 // Stopper intervall på intervall id "yellowLight"
  }, 2000);

  let greenLight = setInterval(function () {
    mid.classList.remove("yellow");
    bot.classList.add("green");
    clearInterval(greenLight);
  }, 3000);

  let reset = setInterval(function () {                             // Reseter changeLight() og kjører den om igjen.
    changeLight();
    clearInterval(reset);
  }, 4000);
}
