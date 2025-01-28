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
    name: "Limite",
    hiddenIcon: <IconClusterB />,
    icon: <IconClusterBSolid />,
    percentage: 0,
  },
  {
    id: "A",
    name: "Stile",
    hiddenIcon: <IconClusterA />,
    icon: <IconClusterASolid />,
    percentage: 0,
  },
  {
    id: "C",
    name: "Presenza",
    hiddenIcon: <IconClusterC />,
    icon: <IconClusterCSolid />,

    percentage: 0,
  },
  {
    id: "D",
    name: "Finzione",
    hiddenIcon: <IconClusterD />,
    icon: <IconClusterDSolid />,
    percentage: 0,
  },
  {
    id: "E",
    name: "Creazione",
    hiddenIcon: <IconClusterE />,
    icon: <IconClusterESolid />,
    percentage: 0,
  },
  {
    id: "F",
    name: "Assenza",
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
    description: `Vi siete mai chiesti cosa significa davvero essere un’icona? L’immagine che vedete è una delle opere più celebri di Andy Warhol, un artista che ha trasformato il modo in cui ci rapportiamo con le immagini. Sapete chi è lei, vero? È Marilyn Monroe, ma non proprio ‟lei‟. È una versione di lei, rielaborata, coloratissima, un po’ fuori dagli schemi.
    Warhol l’ha creata nel 1962, pochi mesi dopo la morte dell’attrice. Strano, vero? Era ossessionato dall’idea di fama, di celebrità, ma anche dal fatto che tutto ciò che ci sembra eterno può svanire in un attimo. Forse lo capite anche voi: quante volte vedete una foto sui social che sembra ‟perfetta‟, ma sapete che dietro c’è molto di più?
    La sua immagine è stata presa da una foto promozionale del film Niagara (1953) e Warhol l’ha trasformata in qualcosa di nuovo, usando una tecnica chiamata serigrafia. Ha scelto colori vivissimi – rosa shocking, giallo acceso, nero profondo – per esagerare i tratti del volto. Non è più una persona reale, ma diventa un simbolo. Eppure, guardandola, forse vedete anche qualcosa di fragile, di spezzato. Warhol era affascinato da come la fama può renderti brillante ma anche ‟finto‟, quasi come una maschera.
    E voi, come la vedete? Un’opera d’arte? Un simbolo? O una riflessione su quanto sia difficile capire chi siamo davvero in mezzo a tutto questo caos di immagini? Forse un po’ di tutto. `
    ,
    author: "Andy Warhol",
    year: "1962",
  },
  {
    id: "a.2",
    src: "/cluster-images/a.2.jpg",
    title: "Autoritratto con spalla nuda sollevata",
    description: `Vi siete mai guardati allo specchio e sentiti... strani? Come se quello che vedete non fosse solo ‟voi‟, ma qualcosa di più, qualcosa di diverso?  È proprio quello che Egon Schiele sembra dirci con questo autoritratto del 1912.
    Guardatelo: il suo viso è distorto, le sue spalle sembrano troppo grandi, troppo vicine, eppure è tutto intenzionale. Schiele non voleva solo mostrarsi com’era. No, lui voleva farci sentire il suo stato d’animo, la sua inquietudine, il suo senso di fragilità.
    All'epoca, l'arte tradizionale cercava di rappresentare la realtà in modo perfetto, ma Schiele, con le sue pennellate nervose, ha deciso di rompere le regole. Lui voleva che voi vedeste lui — non solo il suo corpo, ma anche la sua anima.
    E cosa vedete voi? Un uomo che si osserva con occhi quasi spaventati, come se non fosse sicuro di ciò che sta guardando. Il corpo è storto… ma è reale. Non è forse così che vi sentite anche voi, a volte? Spesso cerchiamo di essere perfetti agli occhi degli altri, ma dentro siamo pieni di dubbi.
    Schiele aveva solo 22 anni quando ha dipinto quest’opera, ed era ossessionato dal tempo, dalla vita e dalla morte. Era un periodo difficile per lui, ma è proprio questa intensità che ci colpisce ancora oggi.
    E voi? Cosa vedete quando vi guardate allo specchio?
    Frida
    Vi siete mai sentiti come se qualcuno vi avesse colpito proprio lì, dove fa più male? Ecco, quello che vedete è il dipinto Il Cervo Ferito di Frida Kahlo e lei, fidatevi, può capirvi.
    Frida l’ha realizzato nel 1946, in un periodo in cui il dolore era diventato parte della sua vita. Guardate: il corpo di un cervo e la testa della pittrice stessa. Sembra forte, con le sue corna imponenti, ma nonostante questo è ferita. Le frecce che la trafiggono parlano di sofferenza, non solo fisica ma anche emotiva.
    Dietro di lei c’è un bosco, ma non è un luogo tranquillo. Gli alberi sembrano freddi, quasi spettrali, e il cielo azzurro lontano fa sembrare tutto ancora più isolato. La natura, che di solito dà conforto, qui sembra distante, incapace di aiutarla.
    `,
    author: "Egon Schiele",
    year: "1912",
  },
  {
    id: "a.3",
    src: "/cluster-images/a.3.jpg",
    title: "Il cervo ferito",
    description: undefined,
    author: "Frida Kahlo",
    year: "1946",
  },
  {
    id: "a.4",
    src: "/cluster-images/a.4.jpg",
    title: "Sleep",
    description: undefined,
    author: "Salvador Dalí",
    year: "1937",
  },
  {
    id: "a.5",
    src: "/cluster-images/a.5.jpg",
    title: "Portrait of Madame Matisse",
    description: undefined,
    author: "Henri Matisse",
    year: "1905",
  },
  {
    id: "a.6",
    src: "/cluster-images/a.6.jpg",
    title: "M-Maybe (A Girl s Picture)",
    description: undefined,
    author: "Roy Lichtenstein",
    year: "1965",
  },
  {
    id: "a.7",
    src: "/cluster-images/a.7.jpg",
    title: "Tête de Femme (Head of a Woman)",
    description: undefined,
    author: "Pablo Picasso",
    year: "1962",
  },
  {
    id: "a.8",
    src: "/cluster-images/a.8.jpg",
    title: "L’Impératrice",
    description: undefined,
    author: "Paul Delvaux",
    year: "1974",
  },
  {
    id: "a.9",
    src: "/cluster-images/a.9.jpg",
    title: "Self-Portrait",
    description: undefined,
    author: "Raymond Pettibon",
    year: "1991",
  },
  {
    id: "a.10",
    src: "/cluster-images/a.10.jpg",
    title: "Self-portrait-with-Straw-Hat",
    description: undefined,
    author: "Vincent Van Gogh",
    year: "1887-88",
  },
  {
    id: "b.1",
    src: "/cluster-images/b.1.jpg",
    title: "Un gesto del capo",
    description: undefined,
    author: "Anton Giulio Bragaglia",
    year: "1911",
  },
  {
    id: "b.2",
    src: "/cluster-images/b.2.jpg",
    title: "Ohne titel",
    description: undefined,
    author: "Birgit Jürgenssen",
    year: "1972",
  },
  {
    id: "b.3",
    src: "/cluster-images/b.3.jpg",
    title: "España 164 B",
    description: undefined,
    author: "Christer Strömholm",
    year: "1958-1959",
  },
  {
    id: "b.4",
    src: "/cluster-images/b.4.jpg",
    title: "Autoritratto",
    description: undefined,
    author: "Luigi Ghirri",
    year: "1976",
  },
  {
    id: "b.5",
    src: "/cluster-images/b.5.jpg",
    title: "First Reflection",
    description: undefined,
    author: "Lisette Model",
    year: "1983",
  },
  {
    id: "b.6",
    src: "/cluster-images/b.6.jpg",
    title: "Memories of Passersby I",
    description: undefined,
    author: "Mario Klingemann",
    year: "2018",
  },
  {
    id: "b.7",
    src: "/cluster-images/b.7.jpg",
    title: "Fanon",
    description: undefined,
    author: "Trevor Paglen",
    year: "2017",
  },
  {
    id: "b.8",
    src: "/cluster-images/b.8.jpg",
    title: "Ana",
    description: undefined,
    author: "Saul Leiter",
    year: "1950",
  },
  {
    id: "b.9",
    src: "/cluster-images/b.9.jpg",
    title:
      "Portrait No. 29 (Double Exposure- Full Face and Profile) Portrait of Marcel Duchamp",
    description: undefined,
    author: "Victor Obsatz",
    year: "1953",
  },
  {
    id: "c.1",
    src: "/cluster-images/c.1.jpg",
    title: "Il silenzio degli innocenti",
    description: undefined,
    author: "Jonathan Demme",
    year: "1991",
  },
  {
    id: "c.2",
    src: "/cluster-images/c.2.jpg",
    title: "Marcello mio",
    description: undefined,
    author: "Christophe Honoré",
    year: "2024",
  },
  {
    id: "c.3",
    src: "/cluster-images/c.3.jpg",
    title: "White Portrait",
    description: undefined,
    author: "Margaret Bourke",
    year: "1943",
  },
  {
    id: "c.4",
    src: "/cluster-images/c.4.jpg",
    title: "GAN-generated faces",
    description: undefined,
    author: "Mike Tyka",
    year: "2017",
  },
  {
    id: "c.5",
    src: "/cluster-images/c.5.jpg",
    title: "Oppenheimer",
    description: undefined,
    author: "Christopher Nolan",
    year: "2023",
  },
  {
    id: "c.6",
    src: "/cluster-images/c.6.jpg",
    title: "Vivre sa vie",
    description: undefined,
    author: "Jean-Luc Godard",
    year: "1962",
  },
  {
    id: "c.7",
    src: "/cluster-images/c.7.jpg",
    title: "No Surprises",
    description: undefined,
    author: "Radiohead & Grant Gee",
    year: "1997",
  },
  {
    id: "c.8",
    src: "/cluster-images/c.8.jpg",
    title: "Twin Peaks s03e02",
    description: undefined,
    author: "David Lynch",
    year: "2017",
  },
  {
    id: "c.9",
    src: "/cluster-images/c.9.jpg",
    title: "The Royal Tenenbaums",
    description: undefined,
    author: "Wes Anderson",
    year: "2001",
  },
  {
    id: "c.10",
    src: "/cluster-images/c.10.jpg",
    title: "Young Boy, Gondeville, Charente",
    description: undefined,
    author: "Paul Strand",
    year: "1951",
  },
  {
    id: "d.1",
    src: "/cluster-images/d.1.jpg",
    title: "Selfwithfur",
    description: `The Austrian Birgit Jürgenssen (1949 - 2003, Vienna) is one of the most prominent artists of the feminist avant-garde. Based on the emancipatory potential of Surrealism and in dialogue with the socio-critical discourse of her generation, she developed a multilayered and stylistically manifold art starting in the late sixties. The female body and its metamorphoses are the center of her works dominated by drawing, print and photography.`,
    author: "Birgit Jürgenssen",
    year: "1974",
  },
  {
    id: "d.2",
    src: "/cluster-images/d.2.jpg",
    title: "Untitled Film Still #17",
    description:
      "Cindy Sherman is a contemporary master of socially critical photography. In her work, she stages herself in various roles, often in the style of Hollywood film stills.",
    author: "Cindy Sherman",
    year: "1978",
  },
  {
    id: "d.3",
    src: "/cluster-images/d.3.jpg",
    title: "Cremaster 4",
    author: "Matthew Barney",
    description:
      "Matthew Barney is an American artist who works in sculpture, photography, drawing and film. His early works are characterized by their complex narrative structures and the use of unusual materials.",
    year: undefined,
  },
  {
    id: "d.4",
    src: "/cluster-images/d.4.jpg",
    title: "UMA THURMAN",
    description:
      "David LaChapelle is an American photographer and director. His works are characterized by their colorful, surreal and often provocative style.",
    author: "David LaChapelle",
    year: undefined,
  },
  {
    id: "d.5",
    src: "/cluster-images/d.5.jpg",
    title: "Boy and Girl",
    description:
      "Gus Van Sant is an American director, screenwriter, producer and photographer. His films often deal with the lives of marginalized people and are characterized by their poetic and melancholic style.",
    author: "Gus Van Sant",
    year: "2010",
  },
  {
    id: "d.6",
    src: "/cluster-images/d.6.jpg",
    title: "The Dorian Gray Syndrome",
    description:
      "Ines Alpha is a 3D artist and art director based in Paris. Her work is characterized by its colorful, surreal and futuristic style. She often collaborates with other artists and designers.",
    author: "Ines Alpha & Esmay Wagemans",
    year: "2024",
  },
  {
    id: "d.7",
    src: "/cluster-images/d.7.jpg",
    title: undefined,
    description: undefined,
    author: undefined,
    year: undefined,
  },
  {
    id: "d.8",
    src: "/cluster-images/d.8.jpg",
    title: "Pinocchio",
    description: undefined,
    author: "Luigi Ontani",
    year: "1972",
  },
  {
    id: "d.9",
    src: "/cluster-images/d.9.jpg",
    title: "Maurizio Cattelan",
    description: undefined,
    author: "Paolo Ferrari",
    year: "2017",
  },
  {
    id: "d.10",
    src: "/cluster-images/d.10.jpg",
    title: undefined,
    description: "Video Installation Soundtracks & Ear Fruits",
    author: "Pipilotti Rist",
    year: "2005",
  },
  {
    id: "e.1",
    src: "/cluster-images/e.1.jpg",
    title: "Autoportrait morcelé",
    description: undefined,
    author: "Agnès Varda",
    year: "2009",
  },
  {
    id: "e.2",
    src: "/cluster-images/e.2.jpg",
    title: "Mosaic Self-Portrait",
    description: undefined,
    author: "Agnès Varda",
    year: "1949",
  },
  {
    id: "e.3",
    src: "/cluster-images/e.3.jpg",
    title: "Ça a été",
    description: undefined,
    author: "Chantal Stoman",
    year: "2021",
  },
  {
    id: "e.4",
    src: "/cluster-images/e.4.jpg",
    title: "David Lynch Portrait",
    description: undefined,
    author: "P. J. Wright",
    year: "2015",
  },
  {
    id: "e.5",
    src: "/cluster-images/e.5.jpg",
    title: "OMOTE / Real-Time Face Tracking & Projection Mapping",
    description: undefined,
    author: "Nobumichi Asai, Hiroto Kwahara, Paul Lacroix",
    year: "2014",
  },
  {
    id: "e.6",
    src: "/cluster-images/e.6.jpg",
    title: "Galatea delle Sfere",
    description: undefined,
    author: "Salvador Dalí",
    year: "1952",
  },
  {
    id: "e.7",
    src: "/cluster-images/e.7.jpg",
    title: "Cracked Mirror Self Portrait",
    description: undefined,
    author: "Irving Penn",
    year: "1986",
  },
  {
    id: "e.8",
    src: "/cluster-images/e.8.jpg",
    title: "Selected AI Work",
    description: undefined,
    author: "Mario Klingemann",
    year: "1986",
  },
  {
    id: "e.9",
    src: "/cluster-images/e.9.jpg",
    title: "Self-Portrait",
    description: undefined,
    author: "Man Ray",
    year: "1932",
  },
  {
    id: "f.1",
    src: "/cluster-images/f.1.jpg",
    title: "Portrait de femme derrière du verre",
    description: undefined,
    author: "André Steiner",
    year: "1938",
  },
  {
    id: "f.2",
    src: "/cluster-images/f.2.jpg",
    title: "Hidden Place Music Video",
    description: undefined,
    author: "Bjork, Inez Van lamsweerde, Vinoodh Matadin",
    year: "2001",
  },
  {
    id: "f.3",
    src: "/cluster-images/f.3.jpg",
    title: "Ingrid White Eyes",
    description: undefined,
    author: "Douglas Gordon",
    year: "2002",
  },
  {
    id: "f.4",
    src: "/cluster-images/f.4.jpg",
    title: "Head 3",
    description: undefined,
    author: "David Lynch",
    year: "2013",
  },
  {
    id: "f.5",
    src: "/cluster-images/f.5.jpg",
    title: "Happy",
    description: undefined,
    author: "Gilbert & George",
    year: "1980",
  },
  {
    id: "f.6",
    src: "/cluster-images/f.6.jpg",
    title: "Le double",
    description: undefined,
    author: "Jean Moral",
    year: "1934",
  },
  {
    id: "f.7",
    src: "/cluster-images/f.7.jpg",
    title: undefined,
    description: undefined,
    author: "René Magritte",
    year: undefined,
  },
  {
    id: "f.8",
    src: "/cluster-images/f.8.jpg",
    title: "Le Temps déborde",
    description: undefined,
    author: "Man Ray, Dora Maar, Paul Eluard",
    year: "1947",
  },
  {
    id: "f.9",
    src: "/cluster-images/f.9.jpg",
    title: "Larmes",
    description: undefined,
    author: "Man Ray",
    year: "1930-32",
  },
  {
    id: "f.10",
    src: "/cluster-images/f.10.jpg",
    title: "Skull x-ray image of Human skull",
    description: undefined,
    author: undefined,
    year: undefined,
  },
];
