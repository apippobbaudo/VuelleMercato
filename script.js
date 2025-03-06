const scuse = [
    "Abbiamo monitorato talmente tanto il mercato che ormai ci chiamano Netflix.",
    "Stiamo ancora aspettando che il giocatore risponda su WhatsApp… doppia spunta grigia dal 2023.",
    "Abbiamo trovato il giocatore perfetto, ma aspettiamo che calino i prezzi del Black Friday.",
    "La nostra strategia è aspettare che i giocatori migliori si stufino di aspettare offerte migliori.",
    "Stiamo monitorando il mercato così tanto che ci hanno mandato la bolletta della luce per lo streaming.",
    "Ci siamo quasi… stiamo per chiudere… ma chiudere cosa, esattamente?",
    "Abbiamo ricevuto un’offerta incredibile! Peccato fosse per vendere pentole, non un giocatore.",
    "Il GM sta aspettando il segnale giusto… tipo un meteorite che gli scriva 'compra ora' nel cielo.",
    "Dicono che la pazienza è una virtù. Peccato che nel basket si giochi a tempo.",
    "Abbiamo mandato un emissario in missione segreta per scoprire il mercato… non è più tornato.",
    "Abbiamo quasi chiuso, poi il presidente ha visto il prezzo e ha chiuso il portafoglio.",
    "Il giocatore era pronto a firmare, poi ha letto il nostro record in classifica.",
    "Abbiamo trovato un super talento! Solo che ha 42 anni e gioca ancora a calcetto con gli amici.",
    "Dicono che stiamo monitorando il mercato… in realtà stiamo solo aggiornando Twitter.",
    "Ci piace guardare il mercato come si guarda un bel tramonto: senza fare nulla.",
    "Monitoriamo il mercato con la stessa intensità con cui si guarda una pizza cuocere in forno.",
    "Il mercato è come la dieta: partiamo motivati e finiamo con un panino in mano senza sapere come.",
    "Abbiamo chiesto a ChatGPT di trovarci un giocatore… ci ha consigliato Michael Jordan.",
    "Il nostro scout ha visto un gran talento… ma poi ha scoperto che era un tifoso in tribuna.",
    "Siamo rimasti senza WiFi e non possiamo più monitorare il mercato.",
    "Il giocatore ha accettato, ma poi ha scoperto che il nostro stipendio include solo buoni pasto.",
    "Abbiamo mandato un fax per chiudere il contratto… peccato che sia il 2025 e il fax non esista più.",
    "L’obiettivo della società è chiaro: fare finta di cercare, ma senza mai comprare nessuno.",
    "Il nostro budget è come la dieta dopo Natale: esiste solo sulla carta.",
    "Abbiamo quasi firmato… poi ci siamo resi conto che il nostro GM stava contrattando con un influencer di TikTok.",
    "Il mercato si muove veloce, noi invece siamo fermi come una statua di marmo.",
    "Abbiamo offerto un contratto incredibile! Peccato che il giocatore volesse anche essere pagato.",
    "Il presidente ha chiesto un profilo esperto. Gli abbiamo trovato un ex giocatore… del 1995.",
    "Ci hanno proposto un grande talento, ma il presidente ha detto che 'aspettiamo un attimo'. Era ottobre.",
    "Abbiamo monitorato il mercato così tanto che ci hanno assunto come revisori finanziari.",
    "Il nostro GM è molto attivo… nel farsi offrire aperitivi dai procuratori.",
    "Il giocatore ha detto di sì, ma poi ha scoperto che il nostro sponsor principale è una lavanderia automatica.",
    "Abbiamo quasi chiuso un colpo, poi abbiamo realizzato che il nostro scouting era basato su Wikipedia.",
    "Ci stiamo concentrando su obiettivi specifici… tipo aspettare la fine della stagione senza fare niente.",
    "Stiamo monitorando così bene il mercato che abbiamo perso di vista la classifica.",
    "La nostra strategia è chiara: monitoriamo il mercato per così tanto tempo che i giocatori ci dimenticano.",
    "Il GM era pronto a firmare… poi ha deciso di riflettere per un altro paio di mesi.",
    "Abbiamo trovato il profilo giusto, ma il presidente ha detto che aspettiamo i saldi estivi.",
    "Ci piace giocare al fantasy basket, ma solo senza prendere nessuno.",
    "Il nostro scout ha trovato il giocatore perfetto, peccato che giochi a golf.",
    "Abbiamo fatto un’offerta, ma il giocatore ha detto che preferisce rimanere disoccupato.",
    "Ci serviva un rinforzo, ma il presidente ha deciso di comprare nuove maglie invece.",
    "Il mercato è un oceano pieno di pesci… noi però non abbiamo neanche una canna da pesca.",
    "Ci manca solo un piccolo dettaglio per chiudere: i soldi.",
    "Il GM ha chiesto aiuto a un veggente per trovare il giocatore giusto. Sta ancora aspettando la visione.",
    "Il nostro piano è chiaro: aspettare che un giocatore venga a chiederci di giocare gratis.",
    "Abbiamo trovato il talento perfetto, ma poi si è ricordato che non sa giocare a basket.",
    "Abbiamo quasi chiuso, ma poi il GM si è perso nel traffico e ha saltato l’incontro.",
    "Il nostro obiettivo è chiaro: monitorare oggi, sognare domani, non fare nulla dopodomani.",
    "Abbiamo offerto un contratto di 10 anni… il giocatore però voleva anche uno stipendio.",
    "Il nostro scout ha trovato il giocatore perfetto… peccato fosse un manichino di Decathlon.",
    "Abbiamo preso il giocatore! No, aspetta… era solo un tirocinante in prova.",
    "Abbiamo proposto un contratto, ma il giocatore ha detto che preferisce il basket 3vs3 al parco.",
    "Ci serviva un centro dominante, ma il nostro budget permetteva solo un centro commerciale.",
    "Stiamo aspettando il momento giusto… purtroppo il calendario dice che è già troppo tardi.",
    "Abbiamo quasi chiuso con un americano, ma poi ha scoperto che il nostro stipendio è pagato in pesce fresco.",
    "Il nostro GM ha un piano: aspettare il giocatore perfetto, anche se questo significa aspettare fino al 2050.",
    "Ci serviva un tiratore, ma il presidente ha detto che prima dobbiamo pagare le bollette della palestra.",
    "Il nostro scout ha trovato un super talento, peccato che avesse già firmato con qualcun altro… tre mesi fa.",
    "Abbiamo fatto un'offerta, ma il giocatore ha risposto solo con una risata.",
    "Il nostro budget permette un solo acquisto: un poster di Michael Jordan per motivare la squadra.",
    "Il giocatore era interessato, ma poi ha visto il nostro bilancio e ha deciso di cambiare sport.",
    "Abbiamo quasi chiuso, poi il GM ha detto 'magari tra un paio di mesi ci ripensiamo'.",
    "Ci serviva un playmaker, ma alla fine abbiamo preso un nuovo fornitore di Gatorade."
];

function generaScusa() {
    const indice = Math.floor(Math.random() * scuse.length);
    document.getElementById("scusa").textContent = scuse[indice];
}
