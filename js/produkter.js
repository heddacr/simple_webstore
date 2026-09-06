const produkter = []; //array for alle innlagte produkter

//Constructor for produkt
function produkt(navn, pris, kjonn, kategori, favoritt, beskrivelse) {
    this.navn = navn;
    this.pris = pris;
    this.kjonn = kjonn;
    this.kategori = kategori;
    this.favoritt = favoritt;
}

//Definerer objekter i array
produkter[0] = new produkt("Blue", 999, "k", "kjole", "true", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod minima saepe laudantium, quam id nisi repellendus? Vitae illum illo molestias ad adipisci optio eligendi incidunt facilis autem. Debitis, minima illo?");
produkter[1] = new produkt("lightPink", 9, "k", "kjole", "true");
produkter[2] = new produkt("kjekkasBukse", 499, "m", "bukse", "true");
produkter[3] = new produkt("sommerbukse", 399, "m", "bukse", "false");
produkter[4] = new produkt("rosaBlomster", 399, "k", "kjole", "false");
produkter[5] = new produkt("pinkParty", 399, "k", "kjole", "true");
produkter[6] = new produkt("mixMatch", 399, "k", "kjole", "true");
produkter[7] = new produkt("blueBeach", 399, "k", "kjole", "true");
produkter[8] = new produkt("blueLaguene", 399, "k", "kjole", "true");
produkter[9] = new produkt("picnicPink", 399, "k", "kjole", "true");
