import IconClusterA from "@/components/icons/IconClusterA";
import IconClusterASolid from "@/components/icons/IconClusterASolid";
import IconClusterB from "@/components/icons/IconClusterB";
import IconClusterBSolid from "@/components/icons/IconClusterBSolid";
import IconClusterC from "@/components/icons/IconClusterC";
import IconClusterCSolid from "@/components/icons/IconClusterCSolid";
import IconClusterD from "@/components/icons/IconClusterD";
import IconClusterDSolid from "@/components/icons/IconClusterDSolid";
import IconClusterE from "@/components/icons/IconClusterE";
import IconClusterESolid from "@/components/icons/IconClusterESolid";
import IconClusterF from "@/components/icons/IconClusterF";
import IconClusterFSolid from "@/components/icons/IconClusterFSolid";

export type TypeImage = {
  id: string;
  src: string;
  title: string | undefined;
  description: string | undefined;
  author: string | undefined;
  author_id?: string;
  year: string | undefined;
};

export const staticClusters = [
  {
    id: "B",
    name: "Nascondersi",
    hiddenIcon: <IconClusterB />,
    icon: <IconClusterBSolid />,
    percentage: 0,
  },
  {
    id: "A",
    name: "Disegnarsi",
    hiddenIcon: <IconClusterA />,
    icon: <IconClusterASolid />,
    percentage: 0,
  },
  {
    id: "C",
    name: "Presentarsi",
    hiddenIcon: <IconClusterC />,
    icon: <IconClusterCSolid />,

    percentage: 0,
  },
  {
    id: "D",
    name: "Mascherarsi",
    hiddenIcon: <IconClusterD />,
    icon: <IconClusterDSolid />,
    percentage: 0,
  },
  {
    id: "E",
    name: "(S)comporsi",
    hiddenIcon: <IconClusterE />,
    icon: <IconClusterESolid />,
    percentage: 0,
  },
  {
    id: "F",
    name: "Sottrarsi",
    hiddenIcon: <IconClusterF />,
    icon: <IconClusterFSolid />,
    percentage: 0,
  },
];

export const staticImages: TypeImage[] = [
  {
    id: "a.1",
    src: "/cluster-images/a.1.jpg",
    title: "Marilyn",
    description:
      "Vi siete mai chiesti cosa significa davvero essere un’icona? L’immagine che vedete è una delle opere più celebri di Andy Warhol, un artista che ha trasformato il modo in cui ci rapportiamo con le immagini. Sapete chi è lei, vero? È Marilyn Monroe, ma non proprio ‟lei‟. È una versione di lei, rielaborata, coloratissima, un po’ fuori dagli schemi.\n\nWarhol l’ha creata nel 1962, pochi mesi dopo la morte dell’attrice. Strano, vero? Era ossessionato dall’idea di fama, di celebrità, ma anche dal fatto che tutto ciò che ci sembra eterno può svanire in un attimo. Forse lo capite anche voi: quante volte vedete una foto sui social che sembra ‟perfetta‟, ma sapete che dietro c’è molto di più?\n\nLa sua immagine è stata presa da una foto promozionale del film Niagara (1953) e Warhol l’ha trasformata in qualcosa di nuovo, usando una tecnica chiamata serigrafia. Ha scelto colori vivissimi – rosa shocking, giallo acceso, nero profondo – per esagerare i tratti del volto. Non è più una persona reale, ma diventa un simbolo. Eppure, guardandola, forse vedete anche qualcosa di fragile, di spezzato. Warhol era affascinato da come la fama può renderti brillante ma anche ‟finto‟, quasi come una maschera.\n\nE voi, come la vedete? Un’opera d’arte? Un simbolo? O una riflessione su quanto sia difficile capire chi siamo davvero in mezzo a tutto questo caos di immagini? Forse un po’ di tutto.",
    author: "Andy Warhol",
    year: "1962",
  },
  {
    id: "a.2",
    src: "/cluster-images/a.2.jpg",
    title: "Autoritratto con spalla nuda sollevata",
    description:
      "Vi siete mai guardati allo specchio e sentiti... strani? Come se quello che vedete non fosse solo ‟voi‟, ma qualcosa di più, qualcosa di diverso?  È proprio quello che Egon Schiele sembra dirci con questo autoritratto del 1912. Guardatelo: il suo viso è distorto, le sue spalle sembrano troppo grandi, troppo vicine, eppure è tutto intenzionale. Schiele non voleva solo mostrarsi com’era. No, lui voleva farci sentire il suo stato d’animo, la sua inquietudine, il suo senso di fragilità. All'epoca, l'arte tradizionale cercava di rappresentare la realtà in modo perfetto, ma Schiele, con le sue pennellate nervose, ha deciso di rompere le regole. Lui voleva che voi vedeste lui — non solo il suo corpo, ma anche la sua anima. E cosa vedete voi? Un uomo che si osserva con occhi quasi spaventati, come se non fosse sicuro di ciò che sta guardando. Il corpo è storto… ma è reale. Non è forse così che vi sentite anche voi, a volte? Spesso cerchiamo di essere perfetti agli occhi degli altri, ma dentro siamo pieni di dubbi. Schiele aveva solo 22 anni quando ha dipinto quest’opera, ed era ossessionato dal tempo, dalla vita e dalla morte. Era un periodo difficile per lui, ma è proprio questa intensità che ci colpisce ancora oggi. E voi? Cosa vedete quando vi guardate allo specchio?",
    author: "Egon Schiele",
    year: "1912",
  },
  {
    id: "a.3",
    src: "/cluster-images/a.3.jpg",
    title: "Il cervo ferito",
    description:
      "Vi siete mai sentiti come se qualcuno vi avesse colpito proprio lì, dove fa più male? Ecco, quello che vedete è il dipinto Il Cervo Ferito di Frida Kahlo e lei, fidatevi, può capirvi.\n\nFrida l’ha realizzato nel 1946, in un periodo in cui il dolore era diventato parte della sua vita. Guardate: il corpo di un cervo e la testa della pittrice stessa. Sembra forte, con le sue corna imponenti, ma nonostante questo è ferita. Le frecce che la trafiggono parlano di sofferenza, non solo fisica ma anche emotiva.\n\nDietro di lei c’è un bosco, ma non è un luogo tranquillo. Gli alberi sembrano freddi, quasi spettrali, e il cielo azzurro lontano fa sembrare tutto ancora più isolato. La natura, che di solito dà conforto, qui sembra distante, incapace di aiutarla.\n\nrida non ha mai avuto paura di raccontare la sua fragilità. Questo quadro parla della sua lotta con il dolore cronico, causato da un terribile incidente che l’aveva segnata per sempre. Ma parla anche di un’altra ferita: quella del tradimento, della solitudine, della delusione.\n\nE voi? Quante volte vi siete sentiti così? Forti fuori, ma pieni di cicatrici dentro? Eppure, nonostante tutto, continuate ad andare avanti, proprio come faccio lei in questa foresta. Perché, anche feriti, possiamo ancora correre. Anche se fa male.",
    author: "Frida Kahlo",
    year: "1946",
  },
  {
    id: "a.4",
    src: "/cluster-images/a.4.jpg",
    title: "Sleep",
    description:
      "Vi è mai capitato di sentirvi come se foste in bilico tra sogno e realtà? Ecco, questo è il dipinto Il Sonno di Salvador Dalí, e vive proprio lì, in quel confine sottile.\n\nGuardatelo: è un volto gigantesco, morbido, sospeso nel nulla. Non ha corpo, ma si regge su delle stampelle fragili, come se fosse sul punto di crollare. È così che Dalí ha voluto rappresentare il sonno: qualcosa di leggero e delicato, ma anche instabile e misterioso.\n\nSapete che il sogno è uno dei temi preferiti di Dalí? Lui era un maestro del Surrealismo, un movimento artistico che cercava di esplorare il nostro inconscio, quel mondo strano e un po' inquietante che si manifesta quando dormiamo. Per lui, il sogno era come una finestra su tutto ciò che nascondiamo a noi stessi.\n\nNotate come tutto qui sia sospeso: il volto non tocca terra, le stampelle sembrano trattenere qualcosa che potrebbe scivolare via da un momento all'altro. E poi c’è quel paesaggio vuoto e silenzioso… surreale. Vi dà l’idea di uno spazio infinito, ma anche solitario.\n\nE voi? Vi capita mai di sognare qualcosa di così strano da sembrare quasi reale? È questo il potere dell'arte di Dalí: mostrarci che, anche nel caos dei nostri sogni, possiamo trovare qualcosa di noi stessi.",
    author: "Salvador Dalí",
    year: "1937",
  },
  {
    id: "a.5",
    src: "/cluster-images/a.5.jpg",
    title: "Portrait of Madame Matisse",
    description:
      "Vi è mai successo di rimanere intrappolati in un pensiero che non vuole andarsene? Come quella volta che vi siete chiesti se qualcuno vi stesse ignorando o se, invece, ci fosse qualcosa di più. L’opera che vedete è M-Maybe (A Girl's Picture) di Roy Lichtenstein, e rende bene quella sensazione.\n\nGuardatela: è una ragazza che pensa, con lo sguardo perso e un’espressione malinconica. La nuvoletta di pensiero dice: ‟M-Maybe he became ill and couldn’t leave the studio!‟ (Forse si è ammalato e non è potuto uscire dallo studio!). Ma chi lo sa davvero? La risposta non c’è, rimane tutto sospeso.\n\nLichtenstein l’ha creata nel 1965, ispirandosi ai fumetti che si leggevano all’epoca. È un mix tra arte e cultura pop: semplice in apparenza, ma con tanto da dire.\n\nE voi? Non vi sembra di conoscerla? Lichtenstein voleva che guardaste oltre l'immagine, che vi fermaste a pensare: quante volte nella nostra vita ci troviamo bloccati in quei forse?",
    author: "Henri Matisse",
    year: "1905",
  },
  {
    id: "a.6",
    src: "/cluster-images/a.6.jpg",
    title: "M-Maybe (A Girl s Picture)",
    description:
      "Vi siete mai sentiti divisi, come se dentro di voi ci fossero due parti in lotta? Quello che vedete è il Ritratto di Madame Matisse, dipinto da Henri Matisse nel 1905, e rende bene questa sensazione.\n\nGuardatelo: il su volto è tagliato in due da una linea verde che scende sulla sua fronte, sul naso, fino al mento. È come se Matisse volesse dirvi che non siamo mai una cosa sola. Siamo luci e ombre, colori caldi e freddi, emozioni che si scontrano e si mescolano.\n\nMatisse era un artista fauve, uno di quei pittori che amavano i colori forti, puri, e li usavano non per rappresentare la realtà com’è, ma per mostrare quello che sentivano. Qui ha dipinto sua moglie Amélie, ma non come la vedevano gli altri. Ha scelto il rosa e l’arancione per una parte del viso, il verde e l’azzurro per l’altra, quasi a sottolineare che ognuno di noi è fatto di contrasti.\n\nE voi? Vi riconoscete in questo gioco di opposti? Quante volte vi siete sentiti diversi, anche solo da un giorno all’altro? Questo quadro ci ricorda che va bene essere complessi, cambiare, avere dentro tanti colori. Perché è proprio questa complessità che ci rende unici.\n\nForse Matisse non voleva solo ritrarre sua moglie, ma dirci che la bellezza sta nell’imperfezione, nella mescolanza, in quel verde che separa e, allo stesso tempo, unisce tutto.",
    author: "Roy Lichtenstein",
    year: "1965",
  },
  {
    id: "a.7",
    src: "/cluster-images/a.7.jpg",
    title: "Tête de Femme (Head of a Woman)",
    description:
      "Vi siete mai sentiti come se ci fossero mille versioni di voi stessi, tutte mescolate insieme? Il quadro che vedete è la Tête de Femme di Pablo Picasso, e  ci dice che è normale sentirsi come un puzzle.\n\nGuardatelo: il suo viso non è fatto di linee dritte o proporzioni perfette. Ci sono angoli, curve, occhi enormi, nasi che si sovrappongono, eppure è una persona intera. Picasso l’ha creato così nel 1962, usando una tecnica chiamata linocut, dove le forme e i colori vengono intagliati e stampati. Ma non aspettatevi un ritratto realistico: quello che vedete è una rappresentazione di ciò che c’è oltre la realtà.\n\n Picasso era un maestro del Cubismo, un movimento che voleva rompere le regole. Perché rappresentare le persone in modo perfetto quando siamo tutti fatti di sfaccettature? Nell’opera potete vedere tanti punti di vista: un profilo, un volto frontale, tutto insieme. È come se vi guardaste allo specchio e vedeste non solo il vostro riflesso, ma anche i vostri pensieri, i ricordi, le emozioni.\n\nE voi? Come vi vedete? Quali parti di voi mostrano agli altri e quali tenete nascoste? Picasso ci insegna che non dobbiamo scegliere. Possiamo essere tutto: caos e armonia, linee e colori, luci e ombre. Perché è proprio questo che ci rende vivi, unici e pieni di storia.",
    author: "Pablo Picasso",
    year: "1962",
  },
  {
    id: "a.8",
    src: "/cluster-images/a.8.jpg",
    title: "L’Impératrice",
    description:
      "Avete mai avuto la sensazione che qualcuno vi stia osservando, anche se tutto intorno a voi è silenzio? Quello che vedete è un dipinto di Paul Delvaux, guardatelo: gli occhi sono grandi, ipnotici, fuori misura rispetto al resto del volto. Sembrano voler catturare qualcosa di voi, mentre dietro, un paesaggio di colonne bianche e un cielo profondo blu creano un’atmosfera sospesa, quasi onirica. È un luogo reale? O forse è un sogno?  Delvaux, che l’ha dipinto negli anni ’40 ci racconta un mondo calmo, ma allo stesso tempo misterioso. Le colonne richiamano l’antichità, un tempo lontano che non possiamo toccare. Eppure l’immagine è senza tempo.\n\nCosa vedete guardandola? Forse serenità, forse qualcosa di inquietante. Questo è ciò che Delvaux amava fare: creare immagini che provocano domande invece di darci risposte.\n\nE voi? Vi siete mai sentiti fuori dal tempo, in bilico tra sogno e realtà? Forse state solo aspettando di scoprire cosa si nasconde dietro il silenzio.",
    author: "Paul Delvaux",
    year: "1974",
  },
  {
    id: "a.9",
    src: "/cluster-images/a.9.jpg",
    title: "Self-Portrait",
    description:
      "Vi siete mai chiesti da dove nasce il vostro modo di esprimervi? Quello che vedete è l’autoritratto di Raymond Pettibon, realizzato nel 1991. Guardatelo: il suo volto è disegnato con linee semplici, quasi come un fumetto, al centro di una grande stella nera. Sopra di lui c’è una frase che dice: ‟The first lines of my art develop themselves…‟ (Le prime linee della mia arte si sviluppano da sole…). È un messaggio semplice, ma profondo. Pettibon vuole dirvi che l’arte è qualcosa che si evolve, che prende forma da dentro di voi, senza bisogno di controllarla troppo.\n\nPettibon era noto per il suo stile grafico e le sue opere cariche di significato. Ha lavorato spesso con immagini e testi. La stella nera che circonda il suo volto potrebbe rappresentare molte cose: un simbolo di fama, di ambizione, o forse il lato oscuro che accompagna ogni percorso creativo.\n\nE voi? Come iniziano le vostre ‟prime linee‟? Quando prendete in mano una matita, una penna o anche solo un’idea, pensate a cosa volete creare o lasciate che tutto fluisca da solo? Pettibon ci insegna che non importa il punto di partenza, ma il viaggio che ogni linea, ogni pensiero può intraprendere.\n\nLa prossima volta che vi mettete a creare, ricordatevi di lui: lasciate che le vostre linee trovino la loro strada.",
    author: "Raymond Pettibon",
    year: "1991",
  },
  {
    id: "a.10",
    src: "/cluster-images/a.10.jpg",
    title: "Self-portrait-with-Straw-Hat",
    description:
      "Vi siete mai guardati allo specchio e avete visto non solo il vostro volto, ma tutto quello che avete dentro? Quello che vedete è Autoritratto con cappello di paglia di Vincent van Gogh, dipinto tra il 1887 e il 1888, e ha tanto da raccontarvi.\n\nGuardatelo: il suo volto è intenso, scavato da linee di colore che sembrano quasi muoversi. Il giallo, il blu, l’arancione si intrecciano per dare vita a qualcosa di più di un semplice ritratto. Sono un’esplosione di emozioni, un riflesso di ciò che Vincent provava mentre dipingeva.\n\nVan Gogh si è autoritratto decine di volte, non perché fosse narcisista, ma perché era il modo più economico e immediato per esplorare se stesso. Vedete i suoi occhi stanchi ma pieni di passione, il suo cappello, lo sguardo diretto. Dietro di lui, quel vortice di pennellate ci fa entrare nella sua mente, sempre in movimento, sempre in cerca di risposte.\n\nE voi? Cosa vedete quando vi osservate? Vi soffermate sui dettagli, sui difetti, o riuscite a vedere tutto ciò che siete e ciò che potreste diventare? Van Gogh ci insegna che non importa come appariamo agli altri: ciò che conta è il modo in cui ci raccontiamo.",
    author: "Vincent Van Gogh",
    year: "1887-88",
  },
  {
    id: "b.1",
    src: "/cluster-images/b.1.jpg",
    title: "Un gesto del capo",
    description:
      "Vi siete mai sentiti come se un singolo momento fosse troppo veloce per essere afferrato, ma abbastanza lento da lasciare un segno? Un gesto del capo di Anton Giulio Bragaglia, è una foto scattata nel 1911, e racconta proprio questo: il movimento.\n\nGuardatela: non è un ritratto statico, ma una sovrapposizione di istanti. Il volto sembra sfumare nello spazio, come se stesse lasciando una traccia, un’eco visiva di ciò che è stato. Questa tecnica si chiama ‟fotodinamismo‟, e Bragaglia l’ha usata per esplorare il concetto di movimento, molto caro ai Futuristi, il movimento artistico di cui faceva parte.\n\nI Futuristi amavano la velocità, il dinamismo, il cambiamento. Per loro, l’arte doveva rappresentare non solo ciò che vediamo, ma anche ciò che percepiamo: il flusso del tempo, l’energia del gesto, la tensione del momento. E l’immagine racconta proprio questo: il tentativo di catturare un attimo che sfugge.\n\nE voi? Vi capita mai di sentirvi in bilico tra presente, passato e futuro, come se ogni gesto avesse dentro di sé una storia intera? Vi invito a pensare al movimento, non solo fisico, ma anche emotivo, mentale. Ogni gesto lascia un segno, anche quando sembra svanire.",
    author: "Anton Giulio Bragaglia",
    year: "1911",
  },
  {
    id: "b.2",
    src: "/cluster-images/b.2.jpg",
    title: "Ohne titel",
    description:
      "Vi siete mai sentiti divisi tra come vi vedete voi stessi e come vi vedono gli altri? L’immagine che vedete è una fotografia di Birgit Jürgenssen, scattata nel 1972, e parla proprio di questo: la complessità dell’identità.\n\nGuardatela: metà del mio volto è chiara, visibile, mentre l’altra metà è nascosta dietro una sagoma sfocata. È come se stesse cercando di mostrarvi qualcosa, ma allo stesso tempo la stesse proteggendo. Questo gioco di visibile e invisibile è una riflessione su cosa significhi essere visti, interpretati e, a volte, fraintesi.\n\nBirgit Jürgenssen era un’artista che amava esplorare il rapporto tra identità, corpo e società. Questa foto, semplice ma potente, ci mette davanti a una domanda: quanto di quello che mostriamo agli altri corrisponde a ciò che siamo davvero? La sagoma davanti al suo viso potrebbe essere uno specchio, o forse un filtro che ci separa dagli altri.\n\nE voi? Vi siete mai sentiti sfocati, come se una parte di voi fosse sempre nascosta, fuori fuoco? Questa immagine vi invita a riflettere sul modo in cui vi percepite e su come lasciate che gli altri vi vedano.\n\nForse non possiamo mai mostrarci del tutto. Ma va bene così: è proprio in quel contrasto tra chi siamo e chi sembriamo che si nasconde la nostra unicità.",
    author: "Birgit Jürgenssen",
    year: "1972",
  },
  {
    id: "b.3",
    src: "/cluster-images/b.3.jpg",
    title: "España 164 B",
    description:
      "Avete mai sentito il bisogno di dire ‟basta‟ senza usare le parole? Quella che vedete è una fotografia di Christer Strömholm, scattata tra il 1958 e il 1959, e rappresenta quel momento in cui un gesto vale più di mille frasi.\n\nGuardatela: una mano guantata alzata, decisa, quasi a fermare chi sta osservando. Dietro di me, il volto del ragazzo è nascosto, sfocato, quasi secondario. È la mano la vera protagonista, un simbolo di rifiuto, di protezione, forse di resistenza. Non sappiamo cosa stia succedendo, ma possiamo sentire l’energia di quel gesto, forte e immediato.\n\nStrömholm era un fotografo che amava catturare momenti di vita reale, crudi e autentici. Qui, il bianco e nero amplifica la drammaticità della scena, rendendola universale. Potrebbe essere un lavoratore stanco, una persona in protesta, o semplicemente qualcuno che vuole spazio. Non importa chi sia, perché questo gesto parla per tutti noi.\n\nE voi? Quando è stata l’ultima volta che avete alzato una mano, metaforicamente o letteralmente, per dire ‟no‟? Questa immagine ci ricorda che a volte basta un solo movimento per esprimere tutto ciò che proviamo, senza bisogno di spiegazioni.\n\nDietro ogni gesto c’è una storia. Qual è la vostra?",
    author: "Christer Strömholm",
    year: "1958-1959",
  },
  {
    id: "b.4",
    src: "/cluster-images/b.4.jpg",
    title: "Autoritratto",
    description:
      "Vi siete mai trovati a guardare qualcosa e a chiedervi chi stia osservando chi? Quella che vedete è una fotografia di Luigi Ghirri, e racconta il sottile confine tra realtà e rappresentazione.\n\nGuardatela: c’è una finestra, un riflesso di un paesaggio urbano e una figura che sembra scattare una foto. Ma non sono solo questo. Al centro, c’è un dettaglio che cattura l’attenzione: un piccolo specchio circolare che riflette un altro frammento della scena. È come se Ghirri volesse dire che la realtà non è mai una sola, ma una stratificazione di sguardi, prospettive, dettagli.\n\nGhirri era un maestro nel catturare l’ordinario, rendendolo straordinario. In quest’immagine c’è qualcosa di intimo e universale: è il momento in cui ci fermiamo a osservare il mondo e, senza accorgercene, diventiamo parte di esso. Il vetro riflette non solo ciò che è fuori, ma anche chi sta dietro la macchina fotografica.\n\nE voi? Quante volte vi siete ritrovati a riflettere – letteralmente o metaforicamente – su ciò che vedete? Questa foto ci invita a considerare che ogni punto di vista è un riflesso, un frammento di un insieme più grande.\n\nLa prossima volta che guardate una finestra, chiedetevi: cosa vedo davvero? E cosa dice di me?",
    author: "Luigi Ghirri",
    year: "1976",
  },
  {
    id: "b.5",
    src: "/cluster-images/b.5.jpg",
    title: "First Reflection",
    description:
      "Vi siete mai sentiti divisi tra luce e ombra? Quella che vedete è una fotografia di Man Ray che vuole raccontarvi di quel confine sottile tra ciò che mostriamo e ciò che nascondiamo.\n\nGuardatela: metà del mio volto è illuminato, l’altra metà è immersa nell’ombra. Non è solo un ritratto, ma una metafora. La luce rivela, mette a nudo i dettagli del suo sguardo, della sua espressione. L’ombra, invece, custodisce il mistero, protegge ciò che non vuole mostrare. È un gioco di opposti, di equilibrio.\n\nMan Ray era un maestro della fotografia. Per lui, l’immagine non era mai solo quello che sembrava. Qui, il contrasto tra luce e oscurità diventa un racconto visivo: la dualità di ognuno di noi, l’incontro tra il visibile e l’invisibile.\n\nE voi? Vi siete mai chiesti quali parti di voi lasciate alla luce e quali preferite tenere nell’ombra? Questa foto ci invita a riflettere sul fatto che non dobbiamo scegliere: siamo entrambe le cose, una fusione di trasparenza e segreti.\n\nLa prossima volta che vedete un gioco di luce e ombra, ricordate: non può esserci luce senza le tenebre. ",
    author: "Lisette Model",
    year: "1983",
  },
  {
    id: "b.6",
    src: "/cluster-images/b.6.jpg",
    title: "Memories of Passersby I",
    description:
      "Vi siete mai chiesti quante versioni di voi stessi convivono nello stesso momento? L’imamgine che vedete fa parte di un’opera di Mario Klingemann, artista del digitale, e rappresenta proprio questa frammentazione: il volto dell’identità che si sdoppia, si moltiplica, si fonde.\n\nGuardatela: non è un volto normale. I contorni si mescolano, i tratti si confondono. I suoi occhi vi osservano, ma sembrano appartenere a due persone diverse. Le labbra si sovrappongono, creano tensione, e non esiste un confine netto tra ciò che è reale e ciò che è artificiale.\n\nKlingemann utilizza l’intelligenza artificiale per creare opere che sfidano il nostro modo di vedere l’arte e noi stessi. Qui, la tecnologia non è solo uno strumento, ma diventa parte dell’immagine, un modo per raccontare il caos e la complessità di ciò che siamo. Questa fusione di volti ci invita a riflettere sul modo in cui ci definiamo, nel mondo reale e quello virtuale, tra passato e futuro.\n\nE voi? Quante versioni di voi stessi sentite di avere? Siamo un’unica identità o tante maschere che cambiano a seconda del contesto? Questa immagine ci ricorda che la nostra identità non è mai fissa: si adatta, si reinventa, si moltiplica.\n\nForse è proprio questo che ci rende umani: essere sempre un po’ più di quello che sembriamo.",
    author: "Mario Klingemann",
    year: "2018",
  },
  {
    id: "b.7",
    src: "/cluster-images/b.7.jpg",
    title: "Fanon",
    description:
      "Vi è mai capitato di guardare un volto e sentire che vi sta sfuggendo, che non riuscite a definirlo del tutto? Quella che vedete è un’opera di Trevor Paglen, Fanon (Even the Dead Are Not Safe) (2017), e rappresenta proprio questa sensazione di incertezza, di qualcosa che sta per essere visto ma rimane nascosto.\n\nGuardatela: i suoi tratti sono sfocati, come in un sogno. Potreste riconoscerla, ma non del tutto. È un volto, sì, ma non si manifesta nella sua chiarezza. Questo effetto non è casuale: Paglen lavora con l’intelligenza artificiale per creare immagini che sembrano umane, ma sono generate da dati e algoritmi. È un modo per farci riflettere su come la tecnologia ci osserva, ci categorizza, ci trasforma in pixel e numeri.\n\nFanon, richiama Frantz Fanon, lo psichiatra e filosofo che ha parlato di identità, razzismo e alienazione. È un volto universale, ma proprio per questo diventa ambiguo. È tutti e nessuno, è il riflesso di un mondo che cerca di catturare l’essenza dell’uomo, ma spesso lo riduce a un’immagine.\n\nE voi? Quanto di ciò che siete viene davvero visto, e quanto rimane sfocato agli occhi degli altri? Questa immagine ci ricorda che l’identità è un territorio complesso, fatto di luci, ombre e dettagli che a volte sfuggono.\n\nNon sempre dobbiamo essere definiti chiaramente. A volte, è proprio nel mistero che ci troviamo davvero.",
    author: "Trevor Paglen",
    year: "2017",
  },
  {
    id: "b.8",
    src: "/cluster-images/b.8.jpg",
    title: "Ana",
    description:
      "Avete mai chiuso gli occhi per un istante, lasciando che il sole vi accarezzasse il viso? L’immagine che vedete è una fotografia scattata da Saul Leiter negli anni ’50, s’intitola Ana. Racconta un momento di silenzio…  Guardatela: il viso della ragazza è diviso tra l’ombra e il bagliore del sole. Un occhio è in ombra, l’altro è parzialmente illuminato. Le sue labbra sembrano ferme, come in attesa di un sospiro che non si vuole svelare. Leiter, maestro nel catturare l’intimità, ha fermato un attimo di calma assoluta, ma con un sottile senso di mistero.\n\nSaul Leiter era noto per il suo modo di cogliere l’ordinario e renderlo poetico. Qui, il bianco e nero enfatizza il contrasto tra ciò che è visibile e ciò che rimane nell’ombra. Non sono solo un volto, ma un gioco di luci, un respiro, un pensiero sospeso.\n\nE voi? Avete mai trovato bellezza in un momento di quiete, in un raggio di sole che si posa su di voi? Questa foto ci invita a fermarci, a osservare la semplicità di un gesto e a coglierne l’intensità.",
    author: "Saul Leiter",
    year: "1950",
  },
  {
    id: "b.9",
    src: "/cluster-images/b.9.jpg",
    title:
      "Portrait No. 29 (Double Exposure- Full Face and Profile) Portrait of Marcel Duchamp",
    description:
      "Avete mai pensato a quante versioni di voi stessi convivono nello stesso momento? La foto che vedete ritrae l’artista Marcel Duchamp, ed è stata scattata da Victor Obsatz nel 1953. Guardatela: è un gioco di sovrapposizioni. Il profilo di Duchamp e il suo volto frontale si intrecciano, si confondono, ma restano comunque distinti. La doppia esposizione non è un errore, è un’intenzione.\n\nÈ il modo con cui Obsatz cattura l’essenza di Duchamp, l’artista che ha fatto della provocazione la sua firma.\n\nMarcel Duchamp non era solo un pittore o uno scultore, era un rivoluzionario. Con il Ready-made, ha sfidato il mondo dell’arte, mostrando che ogni oggetto può diventare arte se lo guardiamo nel modo giusto. Questo ritratto riflette la sua natura complessa: un uomo che si muove tra le idee, tra le dimensioni, tra ciò che è e ciò che sembra essere.\n\nE voi? Quante volte vi siete sentiti divisi tra ciò che mostrate e ciò che siete davvero? Questa immagine ci ricorda che la nostra identità non è mai fissa: cambia, si sdoppia, si adatta.\n\nForse non dobbiamo scegliere una sola versione di noi stessi. Possiamo essere tante cose, tutte insieme.",
    author: "Victor Obsatz",
    year: "1953",
  },
  {
    id: "c.1",
    src: "/cluster-images/c.1.jpg",
    title: "Il silenzio degli innocenti",
    description:
      "Vi siete mai sentiti osservati, anche quando pensate di essere soli? L’immagine che vedete è un fotogramma tratto dal film Il silenzio degli innocenti (1991), un capolavoro di suspense e tensione, e racconta il momento in cui due mondi (lontani) si incontrano.\n\nGuardatela: in primo piano c’è Clarice Starling, giovane e vulnerabile, ma con uno sguardo che cela coraggio. Dietro di lei, quasi come un’ombra, c’è Hannibal Lecter, un uomo tanto affascinante quanto pericoloso. Lui non si limita a guardare, penetra oltre la superficie, cercando di insinuarsi dentro ogni piega della mente di Clarice.\n\nQuesto gioco di riflessi e sovrapposizioni non è casuale. Il regista Jonathan Demme utilizza l’inquadratura per mostrarci il rapporto complesso tra i due: Clarice, forte ma ancora inesperta, e Lecter, un manipolatore geniale che, paradossalmente, diventa la chiave per risolvere il caso.\n\nE voi? Avete mai affrontato una situazione in cui vi siete sentiti messi alla prova da qualcosa o qualcuno più grande di voi? Questa scena ci invita a riflettere su come, a volte, il confronto con le nostre paure più profonde sia ciò che ci permette di crescere.\n\nOgni sguardo, ogni riflesso in questa immagine racconta una storia. Qual è la vostra?",
    author: "Jonathan Demme",
    year: "1991",
  },
  {
    id: "c.2",
    src: "/cluster-images/c.2.jpg",
    title: "Marcello mio",
    description:
      "Vi siete mai chiesti cosa significhi interpretare un ruolo, esplorare un’identità diversa, reinventarsi? Quello che vedete è un fotogramma tratto dal film Marcello Mio (2024), e racconta proprio questa ricerca: un omaggio, una trasformazione, un dialogo tra cinema e vita.\n\nGuardatelo: il suo stile ricorda Marcello Mastroianni, icona del cinema italiano. Il cappello nero, gli occhiali spessi, la giacca elegante – sono tutti dettagli che richiamano la sua classe senza tempo. Ma qui, nel riflesso sul vetro, c’è qualcosa di nuovo. Si moltiplica, si sdoppio. È una reinterpretazione di quell’eleganza, una celebrazione del passato che diventa presente.\n\nSiamo nel pieno di un viaggio tra maschile e femminile, tra il sé e l’altro, tra ciò che è stato e ciò che possiamo essere. Il riflesso non è casuale: parla di identità che si intrecciano, di un ruolo che diventa maschera ma anche specchio di una parte nascosta.\n\nE voi? Vi siete mai chiesti chi potreste diventare se vi permetteste di giocare con la vostra immagine? Questo fotogramma ci invita a farlo, a esplorare il nostro modo di vedere il mondo e, soprattutto, di vedere noi stessi.\n\nPerché, in fondo, siamo tutti un po’ riflessi di qualcosa che amiamo. Chi è il vostro Marcello Mio?",
    author: "Christophe Honoré",
    year: "2024",
  },
  {
    id: "c.3",
    src: "/cluster-images/c.3.jpg",
    title: "White Portrait",
    description:
      "Vi siete mai sentiti come se doveste urlare al mondo tutto quello che avete dentro? La fotografia che vedete è un ritratto iconico di Margaret Bourke-White, una delle prime donne fotoreporter, e rappresenta proprio quel momento in cui non si può più restare in silenzio.\n\nGuardatela: Margaret indossa una divisa militare, un simbolo di disciplina e rigore, ma il suo gesto rompe ogni aspettativa. Con la bocca spalancata, l’urlo, che è anche un ruggito, diventa una dichiarazione di forza, di individualità, di sfida alle convenzioni. Non è solo una figura, sono un’esplosione di energia che cattura l’attenzione e rifiuta di passare inosservata.\n\nBourke-White amava raccontare storie di resilienza e coraggio. Questo scatto non parla solo di un momento di ribellione, ma di una generazione che ha saputo farsi avanti, rompendo barriere e aspettative. L’espressione non è solo un grido, è un invito a esprimersi, a non trattenere ciò che si sente.\n\nE voi? Quando è stata l’ultima volta che avete avuto voglia di gridare, di liberarvi di ciò che vi pesa? Questa immagine ci ricorda che a volte, per farci ascoltare, dobbiamo smettere di sussurrare e iniziare a urlare, con tutto il coraggio che abbiamo.",
    author: "Margaret Bourke",
    year: "1943",
  },
  {
    id: "c.4",
    src: "/cluster-images/c.4.jpg",
    title: "GAN-generated faces",
    description:
      "Vi siete mai guardati e vi siete chiesti: ‟Chi sono davvero?‟ Quella che vedete è un’opera di Mike Tyka, un artista che esplora l’intersezione tra intelligenza artificiale e individui, e rappresenta il confine tra il riconoscibile e l’ignoto.\n\nGuardatela: il suo volto sembra reale, eppure è sfuggente. I suoi occhi vi fissano, ma i contorni si confondono, si dissolvono in una texture organica. Non è una persona vera, è il risultato di algoritmi che creano qualcosa di nuovo partendo da dati e immagini.\n\nÈ un volto che non esiste, ma che potrebbe appartenere a chiunque.\n\nMike Tyka usa la tecnologia per riflettere sulla natura dell’identità. Le sue opere pongono molte domande: cosa ci rende umani? Come ci vediamo e come ci vede la macchina? Il volto è un ibrido, un luogo dove l’arte incontra la scienza, dove il familiare si mescola con il perturbante.\n\nE voi? Vi siete mai sentiti divisi tra ciò che siete e ciò che gli altri percepiscono? Questa immagine ci invita a riflettere su come costruiamo la nostra identità in un mondo sempre più digitalizzato, dove il confine tra reale e artificiale si fa sottile.\n\nÈ un volto che non c’è, ma che potrebbe raccontare la storia di tutti noi. Voi, cosa vedete in me?",
    author: "Mike Tyka",
    year: "2017",
  },
  {
    id: "c.5",
    src: "/cluster-images/c.5.jpg",
    title: "Oppenheimer",
    description:
      "Vi siete mai trovati di fronte a una scelta capace di cambiare tutto? Quello che vedete è un fotogramma tratto dal film di Christopher Nolan Oppenheimer (2024), e racconta un momento di profondità assoluta, un istante in cui il peso del mondo sembra ricadere tutto su uno sguardo.\n\nGuardatelo: gli occhi, di ghiaccio, sono fissi, ma non guardano davvero ciò che sta davanti.\n\nScrutano dentro, tra pensieri e decisioni che hanno lasciato un segno indelebile. Il cappello e il completo elegante raccontano un uomo che vuole mantenere il controllo, ma le sfumature del suo volto rivelano qualcosa di più: il dubbio, la consapevolezza di un futuro che non si può fermare.\n\nQuesto fotogramma incarna l’essenza di J. Robert Oppenheimer, l’uomo dietro la creazione della bomba atomica. La luce fredda, il paesaggio sfocato alle spalle, sembrano amplificare il contrasto tra il mondo esterno, vasto e indifferente, e quello interiore, pieno di conflitti morali.\n\nE voi? Vi siete mai trovati a dover scegliere tra ciò che è possibile e ciò che è giusto? Questo momento ci invita a riflettere sul potere delle nostre decisioni, sull’impatto che possono avere, non solo su di noi, ma su chi ci circonda.\n\nOgni sguardo racconta una storia… quale storia racconterebbe il vostro?",
    author: "Christopher Nolan",
    year: "2023",
  },
  {
    id: "c.6",
    src: "/cluster-images/c.6.jpg",
    title: "Vivre sa vie",
    description:
      "Vi siete mai voltati lasciando che il mondo intorno a voi parlasse al vostro posto? Quello che vedete è un fotogramma di Questa è la mia vita (1962), un film diretto da Jean-Luc Godard, e racconta un momento di introspezione.\n\nGuardatelo: la nuca della protagonista è rivolta verso di voi. Non vediamo il suo volto, ma questo non ci impedisce di percepire la sua presenza, la sua storia. Di fronte, lo specchio riflette un bar, un frammento del quotidiano. Ma in quel riflesso, nella sua lontananza, si intravede qualcosa di più: una distanza emotiva, un'assenza che racconta di solitudine e desiderio.\n\nGodard ci invita a vedere ciò che non è detto, a leggere i gesti, i dettagli che parlano anche senza parole. E voi? Vi siete mai sentiti come questa ragazza, che osserva il mondo da lontano, senza essere davvero parte di esso? Questo momento ci invita a riflettere sul nostro rapporto con ciò che ci circonda: siamo dentro o fuori da ciò che viviamo?  A volte, è proprio quando non guardiamo che capiamo di più. Cosa vedete voi in questo riflesso?",
    author: "Jean-Luc Godard",
    year: "1962",
  },
  {
    id: "c.7",
    src: "/cluster-images/c.7.jpg",
    title: "da No Surprises",
    description:
      "Vi siete mai sentiti intrappolati, come se il mondo intorno vi stesse lentamente soffocando? Quello che vedete è un fotogramma tratto dal videoclip No Surprises dei Radiohead, diretto da Grant Gee.\n\n Guardatelo: il volto di Thom Yorke è illuminato da una luce fredda, sospeso tra riflessi di vetro e l’acqua che lo deforma. Il suo sguardo è fisso, quasi rassegnato, mentre la sua voce canta di alienazione, di un mondo che sembra non lasciare via di fuga. Il vetro trasparente che lo separa da noi diventa una barriera invisibile.\n\nIl video di No Surprises è essenziale, ma estremamente potente. Non servono effetti speciali complessi: basta un viso, una luce e l’acqua che lentamente avvolge il cantante per trasmettere il senso di pressione e di isolamento che la canzone comunica.\n\nÈ una rappresentazione visiva della fragilità, del desiderio di rompere il ciclo monotono della vita moderna.\n\nE voi? Vi siete mai sentiti come Thom in questo momento, in bilico tra il bisogno di resistere e il desiderio di lasciarvi andare? Questo fotogramma ci invita a riflettere sul valore della semplicità, sulla bellezza dell’onestà emotiva, anche quando è difficile da guardare.\n\nA volte, è nella resa che troviamo la forza di ripartire. Che cosa vi tiene sospesi?",
    author: "Radiohead & Grant Gee",
    year: "1997",
  },
  {
    id: "c.8",
    src: "/cluster-images/c.8.jpg",
    title: "Twin Peaks s03e02",
    description:
      "Avete mai avuto la sensazione di trovarvi in un luogo che sfida la logica, dove ogni cosa è sospesa tra sogno e realtà? Quello che vedete è un fotogramma tratto dalla terza stagione di Twin Peaks (2017), e racconta un momento di assoluta tensione, un istante che sembra congelato nel tempo.\n\nGuardatelo: lo sguardo dell’agente Dale Cooper è fisso, ma inquieto. Alle sue spalle, il rosso intenso delle tende di velluto avvolge la scena, creando un’atmosfera calda ma straniante. Il pavimento a zig-zag bianco e nero sembra un labirinto, un simbolo del caos e del dualismo che si riflette nel mondo esterno. L’agente Cooper in quel momento non è più solo un uomo, è  il centro di un enigma, di un mondo in cui nulla è come sembra.\n\nDavid Lynch, il regista, ha costruito questo spazio – la Loggia Nera – come un luogo al di fuori della realtà, un riflesso della mente e dei suoi misteri. Qui, il tempo e lo spazio perdono senso, e ogni dettaglio – dal rosso delle tende al silenzio carico di tensione – parla di un mondo nascosto che sfida ogni logica.\n\nE voi? Avete mai affrontato una situazione in cui la realtà sembrava sfuggirvi di mano, lasciandovi con più domande che risposte? Questo fotogramma ci invita a esplorare l’ignoto, a trovare significati nel mistero e nell’incertezza.\n\nForse anche voi siete seduti in un luogo che non capite del tutto. La domanda è: siete pronti a scoprire cosa si nasconde dietro le tende?",
    author: "David Lynch",
    year: "2017",
  },
  {
    id: "c.9",
    src: "/cluster-images/c.9.jpg",
    title: "The Royal Tenenbaums",
    description:
      "Vi siete mai sentiti bloccati in un momento della vostra vita, come se ogni passo fosse circondato da un’aura di malinconia? Quello che vedete è un fotogramma di The Royal Tenenbaums (2001).\n\nGuardatelo: Il primo piano è di Richie Tenenbaum, un ex campione di tennis che porta addosso il peso del suo passato. La fascia sportiva, gli occhiali scuri e la barba disordinata sono i segni di una persona che cerca di nascondersi dal mondo, ma il blu freddo che lo avvolge rivela il contrario: non può più sfuggire a ciò che sente.\n\nWes Anderson, con le sue geometrie visive utilizza ogni dettaglio per raccontare le contraddizioni dell’animo umano. Le linee pulite e i colori contrastati creano un’atmosfera nostalgica, fatta di fallimenti e della ricerca di un nuovo inizio. Richie è un personaggio in bilico, un uomo che cerca di ricomporsi mentre affronta la sua vulnerabilità.\n\nE voi? Vi siete mai trovati a fare i conti con le ombre del passato, cercando di trovare una via d’uscita? Questo fotogramma ci invita a riconoscere le nostre fragilità, a guardarle in faccia e a trasformarle in un nuovo punto di partenza.\n\nSotto la superficie, anche i momenti più difficili hanno una loro bellezza. ",
    author: "Wes Anderson",
    year: "2001",
  },
  {
    id: "c.10",
    src: "/cluster-images/c.10.jpg",
    title: "Young Boy, Gondeville, Charente",
    description:
      "Avete mai guardato qualcuno negli occhi e sentito che raccontavano una storia? La foto che vedete è un ritratto catturato da Paul Strand.\n\nGuardatelo: È un ragazzo giovane, ma il suo viso racconta qualcosa di più di una semplice età. I suoi occhi sono pieni di forza, di una serietà che non lascia spazio ai sorrisi. Indossa una salopette e una semplice canottiera, dietro di lui il legno grezzo della porta crea uno sfondo che risalta la sua presenza.\n\nPaul Strand, maestro del bianco e nero, non si limitava a scattare fotografie: raccontava le persone, i luoghi, le vite. Ogni dettaglio, dalla texture della pelle alla luce che scolpisce il viso, è un frammento di realtà che diventa eterno. In questa immagine, lo sguardo del ragazzo vi chiede qualcosa: siete pronti ad ascoltare la sua storia, o preferite guardare altrove?  E voi? Vi siete mai sentiti così, fermi davanti al mondo, con il desiderio di essere compresi ma senza parole per spiegarvi? Questo ritratto ci invita a fermarci, a osservare e a connetterci, perché ogni volto che incontriamo ha una storia unica da raccontare.\n\nCosa vedete in me? Forse qualcosa che conoscete già, forse qualcosa che state cercando.",
    author: "Paul Strand",
    year: "1951",
  },
  {
    id: "d.1",
    src: "/cluster-images/d.1.jpg",
    title: "Selfwithfur",
    description:
      "The È sicuramente un po’ inquietante, e chiaramente provocatorio, quello che vedete in questo autoritratto fotografico del 1974 firmato dall’artista austriaca Birgit Jürgenssen: il suo volto è nascosto, celato dalla pelliccia di una volpe che le rende visibile soltanto il dettaglio dell’espressione corrucciata delle labbra. Non vedete quanto la sua scelta fosse coraggiosa?\n\n Non è mai semplice una lettura simbolica, ma questa immagine dovrebbe instillarvi dubbi, o domande... In fondo non siete soltanto quello che apparite o che la società vi chiede, (o persino ordina!), di essere: quelle varie etichette che spesso vi sono affibbiate, (genere?, ruolo sociale?, provenienza? scelte politiche?...). Forse potreste cercare quello che siete molto più in profondità. Io vi consiglierei di non escludere dalla vostra ricerca di voi stessi quello stato animale (ferino, aggressivo, selvaggio, ma libero, profondamente libero) che vi abita da sempre.\n\n Certo! L’immagine che sono vi potrà sembrare surreale, e persino violenta, ma fidatevi della Jürgenssen, che non ha esitato a mascherare il proprio volto per dirci quello che credeva, in quegli anni ’70 che stavano urlando il bisogno di una “svolta antropologica” su tutti i fronti: fate i conti con la parte “animale” che vi abita, ascoltatela, perché è vostra; anche per non finire preda di convenzioni incomprese, che talvolta solo un sano umorismo, e un po’ di ironica dissimulazione, potranno seriamente allentare. Austrian Birgit Jürgenssen (1949 - 2003, Vienna) is one of the most prominent artists of the feminist avant-garde. Based on the emancipatory potential of Surrealism and in dialogue with the socio-critical discourse of her generation, she developed a multilayered and stylistically manifold art starting in the late sixties. The female body and its metamorphoses are the center of her works dominated by drawing, print and photography.",
    author: "Birgit Jürgenssen",
    year: "1974",
  },
  {
    id: "d.2",
    src: "/cluster-images/d.2.jpg",
    title: "Untitled Film Still #17",
    description:
      "Una giovane donna, con un elegante cappello anni ’30, cammina tra le strade di una periferia americana. Sembra un’immagine tratta da un film. Potreste immaginare cosa accade dopo: un tradimento, un assassinio, una colazione in un ristorante di classe? Vi deludo, o forse no: non si tratta affatto di un film. Anzi: la celebre serie degli Untitled Film Still di Cindy Sherman, che apre la carriera della giovane artista in pieno clima Pop, è una raccolta di autoritratti fotografici. Scatti unici, nonostante quanto potrebbe sembrare. La Sherman comprende l’importanza con cui il cinema e le sue narrazioni condizionino e definiscano il nostro modo di stare nella realtà, persino il portamento dei nostri corpi. Insomma: comprende la rilevanza culturale di ogni immaginario costituito. Mi seguite? Allora, con l’ironia giocosa che le sarà consueta, imita, volutamente, i film stessi. Non film in particolare, ma il loro linguaggio. Riprende la loro estetica, le loro inquadrature, i loro vestiti, i loro classici stereotipi, in tutte le forme e i generi possibili. I media, nelle sue fotografie, dialogano a distanza, ecco: si rispecchiano. Anche lei dialoga a distanza con gli stereotipi del suo tempo. Potreste un po’ imparare da questo insegnamento: riconoscere, diciamo così, gli stereotipi della vostra realtà sociale, e ricrearli artisticamente… per vederli meglio.",
    author: "Cindy Sherman",
    year: "1978",
  },
  {
    id: "d.3",
    src: "/cluster-images/d.3.jpg",
    title: "Cremaster 4",
    author: "Matthew Barney",
    description:
      "Lo so, sembra un sogno, e forse è un incubo.\n\nProvate a definire quello che vedete, e a dare un nome alla creatura che vi si para dinanzi. È un uomo? È una donna? È un animale? È un satiro? E dove sta andando, vestito elegante di seta, e con riccioli ben descritti sopra la fronte? Vi confesso che se non fosse per il trucco fin troppo esibito, per l’espressione forzata e velatamente ironica, che sembra tradire un gioco di allusioni e di velata finzione teatrale, si sarebbe tentati a credere alla natura aliena della sua spericolata presenza: le lunghe orecchie, il naso leporino, la fronte troppo ampia. Difficile immaginare di cosa si tratti...\n\n Eppure, ragazzi e ragazze, questo autoritratto di Matthew Barney nelle vesti del personaggio protagonista della pentalogia filmica Cremaster (1994-2002), vi assicuro che un po’ vi riguarda. Per chi non sapesse cosa è il cremastere (da cui il titolo), ecco qui: è il muscolo involontario che regola i movimenti testicolari in relazione agli stimoli esterni. Una bella metafora universale, non trovate, per parlare in forma simbolica di come si costruisca e distingua la sessualità e la nostra identità con essa.\n\n Ecco, in fondo, quel quasi-uomo, cos’è. Non stupitevi se ne deriva l’onirico e il visionario, il mostruoso e il complesso: chi, quando entra nella ricerca di se stesso, ed è disposto a scendere “in basso”, saprà trovare qualcosa di razionale, comprensibile, raccontabile… Chi si riconoscerà, metaforicamente parlando, del tutto antropomorfo?",
    year: "1995",
  },
  {
    id: "d.4",
    src: "/cluster-images/d.4.jpg",
    title: "UMA THURMAN",
    description:
      "Ora guardate il volto dell’attrice statunitense Uma Thurman in questa adamantina fotografia di David La Chapelle, del 1997. Vi mostro un primissimo piano, senza nessuna connotazione ambientale, isolato nella sua nitidissima presenza. Lo avvertite anche voi? C’è qualcosa di sacro nell’affacciarsi del suo viso di celebrità mondana verso di voi che la guardate. I suoi occhi verdi si stagliano luminosi sulla pelle chiara, accesi da un trucco iridescente, e incorniciati dai capelli dorati che ne precisano i contorni lineari, nobilitandoli in una glitterata luminescenza. È tutto a tal punto brillante e perfetto da sembrare, quasi, soltanto un’immagine pervasa di magia.\n\n Se non fosse però, lo avete notato?, per quel tratto finale, forse dissimulato, che offusca la nettezza del rossetto sulle labbra, sbavandolo verso il mento: un errore strano, persino conturbante, nella perfezione dell’insieme. Perturbante, vero? E inatteso, in una logica iperrealista, super-colorata e glamour come quella perpetrata dall’artista, dal respiro internazionale. Forse, vi potrei dire, in un’epoca di iper-visualità, c’è molto più da cercare nel dettaglio che sfugge dall’ordine… che nella perfezione di moda, già attesa.",
    author: "David LaChapelle",
    year: "1997",
  },
  {
    id: "d.5",
    src: "/cluster-images/d.5.jpg",
    title: "Boy and Girl",
    description:
      "Vi siete mai sentiti interiormente doppi? Come se dentro di voi ci fossero voci diverse e forme diverse, entrambe capaci di dire ed esprimere la vostra vera identità? Non è una cosa inconsueta, sapete? A tutte le età l’uomo e la donna si devono confrontare con i propri sogni, i propri desideri, le proprie voci nascoste. I ritratti scattati da Gus Van Sant fanno spesso, di questa duplicità intima e delicata, il proprio oggetto. Una tecnica semplice, per dire una verità complessa: più immagini, che si sovrappongono e si “intrecciano” a descrivere un’identità singolare. Guardate questo bellissimo profilo che vi mostro: Boy and Girl, un ragazzo e una ragazza, appunto. Chi è lei o lui? È davvero necessario che si ponga un confine netto tra aspetti che talvolta vengono vissuti e avvertiti nella loro necessaria relazione? Non è soltanto questione di generi, ma di sensibilità, di sguardi… il maschile e il femminile. Gli occhi di lui e di lei sono puntati nei vostri, ragazzi: vi interrogano. Concedetevi di osservare i dettagli dei vestiti, la scelta dell’ornamento, l’espressione seria, e un po’ assorta, della persona che avete dinanzi, in immagine, e che si sta rivelando a voi stessi. Non vi sembra, nonostante le apparenze, tutto così autentico, e unitario? ",
    author: "Gus Van Sant",
    year: "2010",
  },
  {
    id: "d.6",
    src: "/cluster-images/d.6.jpg",
    title: "da The Dorian Gray Syndrome",
    description:
      "Conoscete, ragazzi, la Sindrome Dorian Gray? Cioè quella vera e propria forma ipocondriaca che ti porta a guardare con paura e ossessione ogni personale cambiamento fisico, soprattutto se non aderente ai canoni di bellezza più diffusi? Agli standard? Sembra un problema piuttosto diffuso, oggi che siamo abituati continuamente a mostrarci per mezzo di rappresentazioni di noi stessi, a cui demandiamo il nostro pseudo-io... Guardate questa immagine: l’artista Ines Alpha parte esattamente da quella paura, e ci porta a riflettere sul modo con cui la tecnologia digitale descrive e costruisce la nostra immagine, proprio come in uno specchio in stile Dorian Gray, in cui ci vediamo e ci amiamo.\n\n La sua idea è essenziale e meravigliosa: usando software per il rendering 3D, combina make up e tecnologia per creare una sorta di “spazio di bellezza” generato dal programma e applicato al viso di chi si specchiasse sul dispositivo. Interessante parlare di un futurismo di bellezza in questo modo, non trovate? E molto attuale. Nell’immagine che vi mostro, al trucco “fisico” che colora le palpebre e le gote dell’artista, tali filtri aumentati sovrappongono infatti, digitalmente, l’effetto di una protesi ornamentale che pare di origine ittica o vegetale, e che valorizza, in chiave espressiva, i delicati tratti del viso.\n\n Non c’è dubbio, del resto: la tecnologia plasma il nostro modo di apparire. Non è che però ci nasconde, al contempo, dietro una maschera bella?",
    author: "Ines Alpha & Esmay Wagemans",
    year: "2024",
  },
  {
    id: "d.7",
    src: "/cluster-images/d.7.jpg",
    title: "Il Cavaliere Oscuro",
    description: "La faccia truccata di Joker piace. La si vede ovunque, icona mortale di un caos irrazionale che domina nei mondi sotterranei dell’umano. Joker: il folle geniale, l’inatteso terrificante, il contrario della società dei buoni, deforme e non conforme ad essa. L’assassino e lo scarto. Se avete visto il film diretto da Cristopher Nolan nel 2008, il cavaliere oscuro, ricorderete la spaesante interpretazione che ne ha fatto Heath Ledger, drammatizzando il personaggio originale, segnandolo di una tragedia inconfessabile. A pensarci, c’è da tremare.\n\n Della sua storia non si conosce nulla. O forse voi credete che i suoi racconti sull’origine delle terribili cicatrici che gli segnano la faccia siano degne di fede? Joker mente e al contempo ha ragione. Ma la sua faccia parla per lui: guardatela, in questo ritratto. La pelle corrugata del suo volto, deformato da ferite profonde che ne storpiano la fisionomia, ulteriormente mascherato da un trucco da clown che ne valorizza la deformità e l’intensità sempre sfuggente e violenta.\n\n La faccia di Joker è inquietante perché mostra solo una traccia di quella che era la sua umanità. Lo si impara: la violenza chesi subisce e che si fa spesso nasconde, e dilania, il nostro vero volto, che resta una traccia, nell’oblio.",  
    author: "Christopher Nolan",
    year: "2008",
  },
  {
    id: "d.8",
    src: "/cluster-images/d.8.jpg",
    title: "Pinocchio",
    description: "Un breve accenno storico. Ricordate quello che avete studiato di arte? Fin dal Quattrocento i ritratti di profilo hanno sempre mantenuto una certa aura nobilitante, dalla lontana eco classica. Capite? Pensate a Piero della Francesca… a Paolo Uccello… a Pollaiolo. Ecco: l’uomo nobile si rappresenta di lato, come nelle monete antiche. Vi assicuro che l’artista Luigi Ontani, fosse pienamente consapevole di quanto la postura assunta nella fotografia che vi sto mostrando richiamasse a quei modelli lontani. Eppure, mascherarsi da Pinocchio, in fondo, tradiva in parte quell’aria sublime.\n\n Fidatevi di me: Ontani amava giocare con le immagini. Anche perché il travestimento, in questo come in altri casi, è chiaramente esibito: il naso, di carta e non di legno, non nasconde un tratto del naso, sul quale si sovrappone in modo impreciso. Ontani, che non è Pinocchio, si autoritrae fingendo di esserlo. \n\n Autoritrarsi, sembra dirvi infatti l’artista, significa sempre, in fondo, travestirsi. La nostra identità non potrà mai essere del tutto definita da una fisionomia, o dall’immagine che ci facciamo di noi stessi. Ci portiamo dietro storia, scelte, che ci costruiscono, ci travestono a loro volta. Dove siamo? Molte volte, o forse sempre, l’immagine che crediamo di avere, come Pinocchio, mente. L’importane, quando ci si osserva, è anche sapere giocare con ciò che sembriamo a noi stessi.",
    author: "Luigi Ontani",
    year: "1972",
  },
  {
    id: "d.9",
    src: "/cluster-images/d.9.jpg",
    title: "Maurizio Cattelan",
    description:
      "Molto spesso le persone sono contradditorie: dicono cose che non pensano, pensano cose che non vogliono pensare, e hanno menti affollate di pensieri distratti che le distolgono da ciò che cercano, o amano. È intelligente imparare a guardare questa condizione un po’ paradossale, ma realissima, dell’uomo e della donna di ogni tempo. Guardate qui: ’un genio moderno del paradosso e della provocazione, l’artista Maurizio Cattelan, in un ritratto in primo piano scattato dal suo amico fotografo Paolo Ferrari per la rivista Studio. Guardate, e leggete: lì non si parla soltanto un linguaggio “visivo”. Cattelan ha il volto “tatuato” di parole, quasi fossero pensieri liberi, liberamente scritte su tutta la sua faccia. Nulla, antropologicamente, di così strano: scrivere sul proprio corpo significa farne veicolo di comunicazione e di presenza. Leggete: i campi semantici che sono descritti da quei lessemi sparsi sembrano davvero irriducibili a circoscrivere un messaggio univoco. Sembrano così distanti e strani! Tra Hot dog e il Suicide, tra Shame ed Over, tra Poison e Pervert, tra Moist e Crint … quale contatto? Spesso del resto voi oscillate tra barlumi di pensiero, di cui faticate a trovare l’accordo. Non è forse così? Ecco, vedete: scrivendoli sul volto, l’artista li ha resi presenti a se stesso. Li ha resi, diciamo, visibili nella loro ordinaria e comune, anche drammatica e sconcertante verità. ",
    author: "Paolo Ferrari",
    year: "2017",
  },
  {
    id: "d.10",
    src: "/cluster-images/d.10.jpg",
    title: "da Open my Glad",
    description:
      "Ora immaginate di essere a Times Square, New York, nel traffico ingombrante megalopolitano, tra iper-schermi e immagini pubblicitarie continue, nel caos del nostro mondo consumistico. Poi alzate gli occhi, e vedete scorrere, per un po’ di tempo prestabilito, dei video completamente differenti da quello che vi circonda. Sono video brevi, circa 16 segmenti della durata di circa un minuto, in cui attraverso primi piani e riprese sperimentali vengono trasmesse dichiarazioni poetiche o filosofiche. Pipilotti Rist, con questo suo primo lavoro pubblico, aveva intenzione di interrogare il senso dell’immagine nel mondo tecnicizzato che abitiamo, e finiva per capovolgerne, di fatto, il significato. Guardate un po’ questo fermo-immagine tratto da uno dei video: il volto dell’artista, schiacciato sulla superficie trasparente di un vetro, con il trucco violentemente sfumato, la fisionomia della faccia alterata e ormai incomprensibile… il contrario di qualsiasi logica perfezionistica o edonistica; di qualsiasi sfavillante colore… il contrario di Times Square. Bella provocazione!. Quasi che volesse uscire dallo schermo che la chiude, l’immagine che vi presento contesta, intelligentemente, la superficialità che ci circonda e che spesso è alla portata di un touch. Non trovate che il suo discorso sia sempre più attuale?",
    author: "Pipilotti Rist",
    year: "2005",
  },
  {
    id: "e.1",
    src: "/cluster-images/e.1.jpg",
    title: "Autoportrait morcelé",
    description:
      "Ho l’impressione, cari studenti, che voi che vivete nell’epoca del selfie comprendiate abbastanza facilmente come ci si possa raccontare mostrando soltanto un frammento di sé: per esempio, il dettaglio di un occhio, o di una bocca. Non è forse vero che nel volto di una persona ci sono infiniti dettagli che si possono guardare con entusiasmo? Questa fotografia di cui mi faccio tramite è un autoritratto della regista francese Agnés Varda, tra le più sottili sperimentatrici degli ultimi decenni. Notate che bel sorriso le adorna il viso. Vedete, Varda qui ne fa proprio una questione di composizione multipla, di dettaglio e di insieme. Vedere, vi dice, è comporre i dettagli. Così Agnés prende molti specchi. Li sparpaglia su una superficie, e poi si fotografa attraverso quella superficie… Semplice, e geniale! Il volto è uno, ma gli scorci sono tanti. Un po’ come tutti voi: singoli e inimitabili, ma ricchi di molti dettagli preziosi. O meglio: una sola identità, e molti frammenti per guardarla. Vi sembra complesso?\n\n Forse lo è, ma solo se ci dimentichiamo quella ironica e deliziosa semplicità che la regista sempre ha saputo insegnarci; anche a me, che sono solo un’immagine. Vedete, quel sorriso giocoso è importante: se è reale, chissà, forse resiste ad ogni frammentazione.",
    author: "Agnès Varda",
    year: "2009",
  },
  {
    id: "e.2",
    src: "/cluster-images/e.2.jpg",
    title: "Autoritratto in mosaico",
    description:
      "Forse tutti voi avete riflettuto sull’importanza storica della bellezza dei mosaici. Usato nelle chiese più antiche, in Occidente come in Oriente, il mosaico rimandava al sacro. Fate attenzione, cari studenti: la luce si rifletteva sulla pasta di vetro che ne costituiva i tasselli, e si rifrangeva negli spazi del sacro, che ne venivano pervasi e illuminati. Un effetto sbalorditivo, se lo avete visto dal vivo: le forme dovevano essere semplici, non dovevano imitare troppo la realtà… bastava che fossero piene di luce. Ora, guardate l’autoritratto che vi mostro, che è un mosaico attualissimo.\n\n La regista e artista Agnés Varda, tra le personalità più intelligenti e sottili del panorama cinematografico degli ultimi decenni, ci si mostra rappresentandosi con le tessere mosaicali. Proprio lei, da giovane, che avrebbe sperimentato con le più aggiornate tecnologie digitali per trovare nuove chiavi di interpretazione del nostro mondo. Interessante, e di certo ironico: fare del proprio volto moderno una sorta di icona antica, con quel suo caschetto volutamente androgino.\n\n Interessante anche chiedere a un’immagine, nell’età dei pixel quasi immateriali, la materialità giocosa delle tessere di luce. Strano e divertito paradosso.",
    author: "Agnès Varda",
    year: "1949",
  },
  {
    id: "e.3",
    src: "/cluster-images/e.3.jpg",
    title: "Ça a été",
    description:
      "Provate a pensare a qualcosa di vago e sfuggente come un’antica fotografia trovata sulla lapida di qualche cimitero, l’immagine che attesta una presenza che c’è stata, e che ora non c’è più; e pensatela, ora, in relazione a qualcosa di stabile, forse persino perenne, come la pietra. Chantal Stoman vuole scovare e testimoniare questa sfuggente e suggestiva contraddizione: quella di un’immagine che vuole farsi pietra, di un’assenza che vuole farsi presenza. E la trova, appunto, sulla superficie dei sepolcri: fotografie “stampate” su ceramica, frammentate, scisse, evocate. Come la nostra stessa memoria, i suoi ritratti di ritratti non vi parlano solo del passato, se li guardate bene.\n\n Qui, un ritratto di una donna. Chissà che ne è stato di lei. Nemmeno troviamo il suo nome. Sembra quasi un fantasma: non ne sappiamo nulla, nemmeno se ne comprendono i lineamenti. Ha un vestito elegante, una posa che sembra austera. Chissà qual era il suo nome. Raccogliere i cocci di un “non più”, come se fosse fatto di materia toccabile: spesso la vostra memoria non è così diversa; frammenti da unificare, parti da ricostruire, volti da ritrovare in noi stessi.\n\n I ritratti di Stoman, appunto, non parlano solo del passato: siamo tutti frammenti di memoria, anche ora, qui.",
    author: "Chantal Stoman",
    year: "2021",
  },
  {
    id: "e.4",
    src: "/cluster-images/e.4.jpg",
    title: "David Lynch Portrait",
    description:
      "David Lynch è molto riconoscibile, in particolare, per l’ampio ciuffo bianco che si innalza sopra la fronte. Poi, lo sguardo penetrante ricco di sogni. In questo ritratto fotografico di Paul Wright, del 2015, di Lynch, come fossimo in uno dei suoi sogni filmici, ne osserviamo molti. Molti, in una sola immagine. Wright costruisce il volto come fosse un tecnico del montaggio: non vi sembra quasi un puzzle? Gli occhi sono lontani, le orecchie si moltiplicano, il naso si sovraimprime a se stesso, in una sorta di magica e confusiva illusione di sovrapposizione onirica, direi quasi pittorica. Un ottimo modo per onorare l’ambivalenza dell’inconscio cinematografico lynchiano.\n\n Che interessante, non trovate? Decostruire e costruire un volto, per coglierne il senso e il significato… Non è qualcosa che fate anche voi? L’importante, talvolta, è proprio saperci giocare, con le immagini di noi stessi. Saperne così cogliere, come Lynch ci ha insegnato, il mistero profondo. Costruendolo.",
    author: "P. J. Wright",
    year: "2015",
  },
  {
    id: "e.5",
    src: "/cluster-images/e.5.jpg",
    title: "OMOTE / Real-Time Face Tracking & Projection Mapping",
    description:
      "Omote, in giapponese, significa “maschera”. Io sono stata estratta da un video chiamato così. “Omote”. Se poteste vedere quel video per intero e l’opera d’arte di cui era testimonianza! La bellissima ragazza che campeggia al centro dell’inquadratura, con quei puntini bianchi che ne “tatuano” di luce il volto, beh, non sarebbe apparsa molto simile, poco prima e poco dopo, a come la vedete voi. Anzi, se devo dirvi la verità, per tutta la durata del video, la modella “vera” nemmeno la avreste vista. Sembra lei, ma in realtà il suo viso è nascosto da una proiezione di luce, controllata da un computer che genera immagini ad esso applicabili, e che quasi gliele “dipinge” sui lineamenti: Generative Art.\n\n Nabumichi Asai, artista e designer nipponica, collaborando con Hiroto Kwahara e Paul Lacroix, è stata molto intuitiva … credo lo riconosciate. Ha capito che l’identità, del nostro mondo moderno, è molto spesso questione di “proiezione”. Ascoltate bene: non è, diciamo, qualcosa di stabile. Essa, la nostra identità, si camuffa, si trasforma, si modella continuamente. Allora Asai, per presentarci questa splendida intuizione, ha scommesso tutto sulla tecnologia generativa.\n\n Anch’essa si trasforma, è instabile, cambia… basta informarla con i giusti ordini, e poi va da sé. Il risultato? Una maschera di tecnologia continuamente nuova, che viene proiettata su noi stessi. Non vi sembra, e vi parlo da immagine, che “Omote” dica molto anche di voi?",
    author: "Nobumichi Asai, Hiroto Kwahara, Paul Lacroix",
    year: "2014",
  },
  {
    id: "e.6",
    src: "/cluster-images/e.6.jpg",
    title: "Galatea delle Sfere",
    description:
      "Bolle o sfere. Regolari e irregolarmente disposte. Vicine e lontane: mare, cielo e volto. Vi dirò: tutto e niente. Non sto immaginando nulla: è la realtà di quello che sono, o che credete che sia. No, anzi, una faccia non è una faccia. Una bocca non è una bocca. Un’immagine non è un’immagine. Quando il surrealista Salvador Dalì dipinse il quadro che sto facendo finta di mostrarvi sullo schermo del vostro telefonino, immaginò che i suoi spettatori pensassero: “Venere”, di Sandro Botticelli, e quindi Rinascimento, Firenze, Uffizi, anno 1485 circa. Lo previse, sì, ma non dipinse affatto la “Venere”. Più precisamente, dipinse la sua moglie Gala Éluard Dalí nei panni di Venere. Però non dipinse proprio lei. Lo dovreste vedere: non ci sono che sfere sospese su un fondo azzurro di cielo.\n\n Se vedete altro (la Venere-Galatea), forse è perché lo state sottilmente costruendo voi, nella vostra mente, ricucendo insieme i dettagli delle sfere, e i tratti più scuri che sembrano unirle. Non è vero? Non c’è nessun volto. Dalì vi direbbe che non ci sono nemmeno sfere. Sapete, però, cosa c’è? C’è il vostro inconscio e ci sono i vostri sogni. I sogni sono reali, sapete?\n\n L’inconscio dei vostri sogni vi porta a scoprire nei frammenti l’unità. Non potete proprio farne a meno… Ci sono sfere, e vedete un volto. A volte le illusioni dicono molto di noi… Non vi sorprendete a vedervi così meravigliosamente artisti?",
    author: "Salvador Dalí",
    year: "1952",
  },
  {
    id: "e.7",
    src: "/cluster-images/e.7.jpg",
    title: "Cracked Mirror Self Portrait",
    description:
      "Vi è mai capitato di sentirvi “frammentati”? Come se quello che siete fosse a rischio di essere distrutto da un momento all’altro, senza possibilità di fuggire a questo destino? Vi è mai capitato, cioè, di sentirvi profondamente fragili, delicati, quasi sottili. Che la vostra identità stessa, meno sicura di quanto non credeste, fosse sul limite di cadere a pezzi? Ecco, il fotografo americano Irving Penn, quando ha scattato la fotografia che vedete, nel 1986, probabilmente si era sentito in un modo simile a questo. Immagino che un po’ lo possiate capire. Autoritrarsi allo specchio è pratica abbastanza comune, come potete immaginare. Anche voi spesso lo fate. Lo specchio ci riflette così come appariamo.\n\n È divertente giocare con i suoi riflessi. È un modo piuttosto interessante per raccontarci agli altri e dire, con un po’ di narcisismo, “ci sono”, “appaio così”. Autoritrarsi però davanti a uno specchio rotto, come immaginate, è ben altra cosa. Significa dire, probabilmente, sempre con un po’ di narcisismo, “ci sono, ma non sono proprio io”, “non appaio proprio così”. Penn ha fatto in modo che la frattura dello specchio cadesse proprio sul suo occhio sinistro e sulla sua bocca.\n\n Certo, è in gioco la chiarezza del nostro modo di guardarci e di parlare di noi. Guardarci e raccontarci nella fragilità e nella rottura non è facile. A volte le immagini, come me, facilitano questo lavoro: ma per vederci rotti, ci vuole coraggio.",
    author: "Irving Penn",
    year: "1986",
  },
  {
    id: "e.8",
    src: "/cluster-images/e.8.jpg",
    title: "AI Image",
    description:
      "La “testa di carciofo” che vi sto mostrando sfida di sicuro, e di molto, la vostra credulità. Forse, anche la vostra sensibilità al grottesco. Guardate questo ritratto fantastico tenendo presente che la faccia è il luogo principale in cui la vostra soggettività si palesa agli altri. Ecco: questo “ritratto” ha prima di tutto la forma infantile di un bambino o di una bambina. Guardate meglio: i capelli sono un patchwork digitale di sagome vegetali; sì, di carciofi; anche la bocca è un ritaglio di un carciofo; gli occhi: carciofi. Il naso: un altro carciofo. Perché?\n\n Certo che se questi ritagli fossero minimamente più definiti e nitidi, e fossero resi, cioè, un pochino più credibili, forse finiremmo per credere che ci sono bambini-carciofo reali. Invece no. La tessitura tra le parti non è chiara, e anzi la sua imprecisione definisce un’estetica dell’errore e del caos. L’artista, Mario Klingermann, di questi piccoli Frankenstein moderni, ne ha realizzati molti, sapete, per esplorare le possibilità plastiche della tecnologia.\n\n C’è da essere stupiti davvero: in realtà, lui si è limitato a dare indicazioni a un dispositivo, e nient’altro: ha dispiegato un algoritmo. Al resto – cioè mescolare liberamente e secondo logica bambini e carciofi – ci ha pensato l’intelligenza artificiale. Insomma: errori dis-umani, o oltre-umani. Resta un nuovo senso dell’arte, non trovate?",
    author: "Mario Klingemann",
    year: "1986",
  },
  {
    id: "e.9",
    src: "/cluster-images/e.9.jpg",
    title: "Self-Portrait",
    description:
      "Vorrei mostrarvi un autoritratto di profilo del fotografo surrealista Man Ray. Non è un ritratto consueto. Ray, come forse sapete, aveva consacrato la sua ricerca artistica ad ogni forma di libero sperimentalismo tecnico e formale, inventando modi di costruzione e di decostruzione dell’immagine o escogitando sguardi inconsueti. Ve lo assicuro: un vero e proprio artigiano dell’immagine. Allora, insomma, non stupitevi, se sperimentando sul volto dell’uomo, cioè sull’immagine più densa di potere significante, ne cercasse punti di vista inauditi…\n\n Nel caso che vi sto mostrando, ecco, Ray scommetteva, in un certo senso, sugli strati dell’immagine. Muoveva da una tradizionale fotografia con inquadratura laterale, e poi la sezionava a strati, e quegli strati li ricomponeva in un’unica e organica rappresentazione. Basta davvero un poco di scollamento tra le linee di profilo di un volto, per fare di un’immagine il luogo della nostra decostruzione. Il suo risultato?\n\n Una frequenza mossa, commossa, irriducibile ad unità. Che poi, se ci pensate, noi non siamo diversi. Chi di noi davvero crederebbe di essere “riducibile” ad unità. Non siamo forse, anche noi, fatti a strati, come questa fotografia? Pensateci, mentre mi guardate.",
    author: "Man Ray",
    year: "1932",
  },
  {
    id: "f.1",
    src: "/cluster-images/f.1.jpg",
    title: "Portrait de femme derrière du verre",
    description:
      "Vedete: quando i confini di un’immagine non sono nitidi o chiaramente definiti (linee ben riconoscibili, forme geometriche, contorni evidenti…), l’effetto di una vaghezza diffusa conduce ad un sorprendente stile indeterminato. André Steiner, nell’Austria degli anni ’30, ebbe l’intuizione di realizzare una serie di ritratti fotografici attraverso vetri marmorizzati, nella ricerca innovativa di quell’effetto ambiguo e suggestivo. Dietro un vetro marmorizzato, infatti, la forma dell’umano si sfuma e smarrisce la propria nitida trasparenza. La si vede, per così dire, appannata.\n\n Lo vedete molto bene nello scatto che vi sto mostrando: a mala pena riconoscibile, possiamo indovinare il profilo di una donna, dagli occhi profondi e un cappello ampio, e un’espressione vaga, senza espressioni particolari, neutra. Ammettetelo, molto lo dovete lasciare alla fantasia, che “riempia” così quanto non riuscite a percepire con i sensi.\n\n Mettere al centro l’imprecisione significa quasi sempre onorare la nostra capacità di interpretare le forme. Pensate un po’, però, quante cose Steiner riesce a dire dell’umanità scegliendo di sfumarne la presenza: non siamo forse sempre incapaci di vederci davvero, non siamo forse indefiniti, o indefinibili?",
    author: "André Steiner",
    year: "1938",
  },
  {
    id: "f.2",
    src: "/cluster-images/f.2.jpg",
    title: "Hidden Place Music Video",
    description:
      "Qualcosa di nascosto e imprevisto abita i recessi di quello che siamo. La canzone di Bjork da cui sono tratta, Hidden Place, vi parla anche di questo: di un luogo misterioso, che è la culla dell’amore, in cui si nasconde una passione invisibile, forte e divina. Mentre lei canta, vedete il suo primo piano. Notate quale stranezza accade sotto i vostri occhi: qualcosa sta letteralmente grondando fuori dall’occhio destro. Se poteste vedere come prosegue la scena!: quel liquido viola, che pare una lumaca, si trasformerà in un filo nero di colore corposo, entrerà dalla bocca, percorrerà il cervello, uscirà dall’altro occhio, ripetendosi con poche ambigue variazioni. Un entrare e uscire dallo spazio nascosto dell’interiorità cerebrale.\n\n Vi starete chiedendo le ragioni di una simile sequenza, e ne potreste essere un po’ infastiditi! Vi assicuro che Bjork non era estranea a sperimentazioni così alambiccate. Ma vi stupite davvero? Seriamente vi lascia meravigliati questo surrealismo digitale in CGI? Di cosa si potrebbe trattare: un sogno simbolico? Una metafora di un amore perduto e lontano che vive, come un organismo, nei pensieri di una donna?\n\n Fidatevi di me: qualcosa si nasconde dentro di voi, ed è reale,  a prescindere dalle nostre interpretazioni. Il vostro volto, molto spesso, è solo il teatro della sua presenza indicibile.",
    author: "Bjork, Inez Van lamsweerde, Vinoodh Matadin",
    year: "2001",
  },
  {
    id: "f.3",
    src: "/cluster-images/f.3.jpg",
    title: "Ingrid White Eyes",
    description:
      "Vi è mai capitato di guardare qualcosa con tale assuefazione da perdervici dentro, dimenticando, nell’atto stesso di guardare, di voi stessi? Vi è capitato di entrare in un’immagine, quindi, restandone quasi accecati… come se vi incantasse? Ecco, l’artista Douglas Gordon voleva parlare proprio di questo potere di incanto proprio delle rappresentazioni… se ci abbandoniamo ad esse. Così nella Blind Star Series prende le fotografie delle star del cinema (qui Ingrid Bergman), immagini ammalianti di per sé, veri e propri idoli dello sguardo, e, in una maniera simbolicamente assai violenta, cava loro gli occhi. Cioè riflette, nella rappresentazione, la cecità di noi guardanti, per vedere quale potesse esserne l’effetto.\n\n Paradossalmente, ve ne sarete accorti, per questi occhi ritagliati o bruciati, eredi un po’ del surrealismo, un po’ del ready-made, un po’ della pop art, l’effetto perturbante dell’atto iconoclastico finiva per incrementare la magia di quello che guardavamo.\n\n Questi ritratti, in fondo, pareva che ci fissassero con ancora più forza e potere. L’essere umano si lascia pervadere anche da quello che non riesce a comprendere. Non vi pare?",
    author: "Douglas Gordon",
    year: "2002",
  },
  {
    id: "f.4",
    src: "/cluster-images/f.4.jpg",
    title: "Head #3",
    description:
      "Inquietante, e senza parole. È inquietante un qualcosa che sembra umano, ma non lo è, e dell’umano non mantiene che una traccia, lontana. L’assenza di un volto e il vuoto opaco che questa eclissi di umanità lascia mostruosamente scoperto: il regista e artista David Lynch, nella serie fotografica delle Teste, (e questa che vedete è la Head #3), mette al centro il perturbante che nasce dal tradimento di questa sospesa attesa dell’umano. Non solo, infatti, sulla fronte della sagoma antropomorfa di quello che sembra un manichino grafico (si nota la forma della testa, le orecchia accennate, il collo semplificato) non compare niente che ci riconduca alla sua creduta umanità, ma al posto dei consueti lineamenti dell’identità, all’altezza degli occhi, si apre in questo caso una sottile fessura orizzontale, incomprensibile nel suo significato semantico, dalla quale sembrano grondare verso il basso piccole gocce d’acqua, che paiono lacrime, e la cui ombra segna la levigata compostezza del Senza-volto.\n\n Un’icona allucinante, in cui astrazione e surrealismo si traducono in un incubo indicibile. Il volto è ridotto ad un sistema di segni conturbanti, e niente di più. Perché, secondo voi, il maestro Lynch ci mostra questo mistero?",
    author: "David Lynch",
    year: "2013",
  },
  {
    id: "f.5",
    src: "/cluster-images/f.5.jpg",
    title: "Happy",
    description:
      "Avete presente quando affermiamo di avvertire sentimenti differenti da quelli che in realtà ci abitano? E quando, per questa ragione, si percepiamo, in un certo senso, divisi e moltiplicati in noi stessi? Mettendo da sempre al centro la propria vita e il proprio stato d’animo, il duo artistico Gilbert & Georges hanno fatto qualcosa di molto simile. La serie Happy, costituita da 16 fotografie sviluppate nei primi anni ‘80, non mostra apparentemente niente di particolarmente felice, come vorrebbe il titolo. Anzi, gli spazi neri profondi, che ricordano quelli di una vetrata gotica, e i colori saturi che dipingono le originarie immagini in bianco e nero, si rifanno più al cinema horror delle origini che a situazioni gradevolmente rasserenanti.\n\n Ecco, sopra George, con aria un po’ austera e scientificamente inquietante; sotto Gilbert, e la follia dell’assassino vampiresco; l’uno si riflette nell’altro, con un effetto Narciso traslato, in salsa macabra. Non è che la vostra apparente “felicità” molto spesso si rifletta in qualche incubo in stile Jeckyll and Hyde? Perché organizzare le immagini e ordinarle significa anche sapere raccontare storie, solo con esse. Quanti racconti potreste inventare, leggendo il titolo, a partire da quelle figure inusuali? A quante vostre personali duplicità potreste ispirarvi?",
    author: "Gilbert & George",
    year: "1980",
  },
  {
    id: "f.6",
    src: "/cluster-images/f.6.jpg",
    title: "Le double",
    description:
      "A volte, senza dubbio, avrete avuto l’impressione di essere profondamente legati negli ambienti che vi circondano. Un sentirsi imbevuti di paesaggio, in una sorta di panismo. Capite quello che dico? Ogni ambiente ci avvolge non soltanto fisicamente… Ogni ambiente è un’atmosfera che può dire molto di noi. Jean Moral, nella fotografia che vi mostro, ritrae la giovane Jeanne Bastide sovraimprimendo la sua immagine ad un paesaggio marittimo. Che effetto stupendo… lei e la spiaggia, nell’immagine, diventano quasi una sola cosa, si compenetrano. Il profilo della ragazza si staglia così, indefinito in un bianco e nero tenue e senza contrasti forti, sulla figura di un litorale irradiato dal sole, sul quale camminano alcune figure minuscole, poco riconoscibili, lontane.\n\n I tratti del volto della modella si perdono diffondendosi delicatamente nella luminosità attenuata del cielo. Sarebbe senza dubbio importante riflettere su quanto di vostro c’è nei luoghi che abitate; su quanto, quei luoghi, e la loro anima, vi coinvolgano e vi esprimano. Qualcosa di molto concreto… se vi guardate intorno.",
    author: "Jean Moral",
    year: "1934",
  },
  {
    id: "f.7",
    src: "/cluster-images/f.7.jpg",
    title: "Lo sconosciuto",
    description:  "Sono un’immagine. Anzi, sono l’immagine di un quadro. Per la precisione, sono l’immagine che ripete, sul vostro smartphone, un’altra immagine, realizzata con colore ad olio su tela, da un pittore che si chiama René Magritte, famoso per i suoi giochi linguistici; e un po’ li vorrei rispettare, se mi è concesso. Precisamente, l’immagine di cui sono immagine si trova in una galleria reale, e risale a circa mezzo secolo fa, pensate un po’. Vi starete chiedendo il perché di tanti discorsi complessi. Il fatto è che non sono chiara come il tratto della pennellata di Magritte vorrebbe farmi sembrare. Magritte, insieme a quell’opera famosa, che senza dubbio conoscete (Ceci n’est pas une pipe), ne ha dipinte di simili invenzioni “semiotiche”… Siete sicuri di sapere cosa vi sto mostrando?\n\n Certo, i colori dello sfondo richiamano, a voi tutti, quelli del cielo, trapunto di nuvole. Sì, non vorrei dirvi che è solo olio azzurro con un po’ di bianco sopra… Pensatelo pure, che ci sia dipinto un “cielo”. Poi un “cappello nero”, sospeso; e un “cappotto elegante”, sotto. Niente di più? Credo che la vostra immaginazione, che tende a riempire gli spazi vuoti con una continua fantasia, sia portata a credere che nello spazio dipinto che si trova tra il cappello e il cappotto, ci possa essere un qualcuno di invisibile.\n\n Vero? Non state fantasticando che ci sia, lì, un qualcuno? Forse c’è, ma non esagerate. Anche la vostra identità, molto spesso, è fatta di parole, o di colori. Come me, appunto, è un’immagine, di qualcosa che forse non esiste.",
    author: "René Magritte",
    year: "Anni '60",
  },
  {
    id: "f.8",
    src: "/cluster-images/f.8.jpg",
    title: "Le Temps déborde",
    description: "Dora Maar, con sguardo da sfinge, in una fotografia di Man Ray, stampata per una raccolta realizzata insieme a Paul Eluard, intitolata Le temps debordé, cioè il Tempo traboccato. Dora Maar ispiratrice: il suo volto elegante e aristocratico, incorniciato da un’acconciatura vibrante e ordinata, e le mani lunghe che sfiorano le gote, e un anello di vetro. L’essenziale di una presenza, che sembra senza tempo. Come vedete, Man Ray le sottrae anche il collo, perché bastasse a voi che la guardate il suo sguardo misterioso. Nel volto delle persone si può imparare a guardare molto più di quanto non si veda a prima vista.\n\n A volte sottrarre parti di realtà favorisce l’ingresso nella sua profonda incognita. Esercitatevi alla meraviglia di cogliere il segreto nascosto nelle cose, nelle pose, nei dettagli del mondo. Cari ragazzi, e vi parlo io che sono un’immagine, innamoratevi, come Man Ray, della fascinazione surreale del reale. ",
    author: "Man Ray, Dora Maar, Paul Eluard",
    year: "1947",
  },
  {
    id: "f.9",
    src: "/cluster-images/f.9.jpg",
    title: "Larmes",
    description: "Un gioiello, quasi. Un occhio, incorniciato dal trucco nero e piccoli punti luce (Larmes, lacrime), quasi diamanti, che ne imperlano la presenza. Un occhio, preso da solo, ha qualcosa di impressionante e sfuggente: non pare anche a voi una creatura straniera, emersa da qualche oceano sovrannaturale? Man Ray molto spesso ha giocato con questi effetti inattesi. In questo caso, gli era bastato avvicinarsi a tal punto al volto di una donna, da trasfigurarne quasi il dettaglio, e testimoniarne l’assoluta estraneità.\n\n Concedetevi di stare un pochino a guardare i fini dettagli di questo Occhio Surreale, “oltre-reale”: scoprirete una realtà minuscola che non vi aspettereste di trovare. Un grande insegnamento, quello di Ray: ci si può lasciare stupire da ciò che sembra a portata di sguardo, e su cui molto raramente ci sappiamo soffermare. Appuntatelo sui vostri telefoni, che forse vi potranno aiutare in questo scavo del visibile: imparate a guardare; che ogni cosa, se ben osservata, rivela mondi che ci stupiscono e sgomentano.",
    author: "Man Ray",
    year: "1930-32",
  },
  {
    id: "f.10",
    src: "/cluster-images/f.10.jpg",
    title: "Fotografia a raggi X",
    description:  "Ecco quello che c’è sotto la pelle di ciascuno di voi: guardate il cranio di profilo, come sotto l’osso frontale si incastri quello sfenoidale, come il processo occipitale si sviluppi in apofisi zigomatica; notate il profilo etmoidale, o il vomere, o l’eleganza dell’osso mentoidale, con i suoi sottili fori mentali. Non è strano poterli vedere così da vicino? Non credo che i vostri occhi sappiano vedere a raggi X, eppure la tecnologia ci dona il potere di osservare anche le cose invisibili: un oltre-vedere. Se ci pensate, sono molto più le cose che non si vedono, che quelle che si vedono. Ogni singolo osso che vedete costituisce la struttura sotterranea di quello che poi voi chiamate “testa”, e a cui in seguito associate la fisionomia di una precisa identità.\n\n Molte identità diverse, certo, ma sotto la pelle, ve lo assicuro, sembrate tutti davvero molto simili. È una bellezza aliena, quella che ci attraversa da sotto, non è vero? Mi basta sappiate che c’è un universo sotto di voi, e che questo universo, oggi, è osservabile, documentabile, studiabile. Non vi preoccupate, però, per adesso soltanto le macchine sanno guardare così in profondità, e attraverso. Per adesso.",
    author: "Anonimo",
    year: undefined,
  },
];
