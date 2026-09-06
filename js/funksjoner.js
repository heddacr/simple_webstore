let produkterTilHandlekurv 
produkterTilHandlekurv ??= []; //Array for produktene som legges til i handlekurven

//Viser antall produkter i handlevognen i menylinjen
function produktteller() {
  antallIHandlekurv = produkterTilHandlekurv.length;
  handlekurv.innerHTML = "<a href='handlekurv.html'><figure> <img src = 'Medier/handlekurvIkon.png' alt='produktbilde'></figure>" + "Antall: " + antallIHandlekurv + "</a>";
}

//Lagrer valgte produkter i localStorage
function lagreHandlekurv() {
  const myJSON = JSON.stringify(produkterTilHandlekurv); //Gjør om array til streng, hentet fra https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
  localStorage.setItem("handlekurv", myJSON); //Lagrer strengen som handlekurv
  produktteller();
}

//Legger til valgte produkt i handlekurvlisten
function leggTilHandlekurv(i) {
  produkterTilHandlekurv.push(i);
  lagreHandlekurv();
  produktteller();
}

//Leser handlekurvlisten fra local storage
function lastHandlekurv() {
  let myJSON = localStorage.getItem("handlekurv"); //henter handlekurv fra localStorage
  produkterTilHandlekurv = JSON.parse(myJSON); //tolker strengen arrayen var lagret som
  //produktteller();
}

//henter brukerinput 
let mailE = document.querySelector("#mail");
let brukernavnE = document.querySelector("#brukernavn");

//Responderer på brukerens melding med en forhåndsskrevet melding som inneholder brukerens input
function sendMelding() {
  tilbakemeldingMelding.innerHTML = "Takk for tilnakemeldingen din " + brukernavnE.value + ". Svar vil bli sendt til " + mail.value + " så raskt vi får anledning.";
  //resetter input-feltene:
  brukernavn.value = "";
  mail.value = "";
  melding.value = "";
}