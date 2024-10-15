export type IGanxoTapa = {
    id: string;
    type: "tapa" | "menu";
    img: string;
    price: string;
    restaurant: string;
    address: string;
    telephone: string;
    telephone2?: string;
    website?: string;
    title?: string;
    schedule2: string;
    schedule: Array<Array<string>>;
    holidays?: Array<Array<string>>;
    timetable?: Array<Array<Date>>;
    allergies2?: string;
    allergies?: Array<"celiac" | "vegetarian" | "vegan">;
    menu?: string;
    coordinates: number[];
  };
  
  type IGanxoTapes = {
    season: string;
    duration: string[];
    menu: IGanxoTapa[];
    cover: string;
    description: string;
    awards?: string;
  };
  
  const ganxotapesTardor23: IGanxoTapes = {
    season: "Tardor 23",
    cover: "ganxotapes-tardor-23.png",
    duration: ["2023-10-20", "2023-11-19"],
    description: `Del 20 d’octubre al 19 de novembre 2023
    Ganxotapa + Beguda*. Preu 3€
    Menú de 6 tapes + 2 Begudes*
    *cervesa, vi o aigua
    La millor Ganxotapa Tardor 2023
    Ens ajudeu a escollir la millor Ganxotapa? A la zona dels segells trobareu un espai per valorar les Ganxotapes que proveu. S’han de puntuar de l’1 a 4. Cal demanar el segell de l’establiment per comprovar que s’ha tastat la Ganxotapa. S’hauran de portar els llibrets amb les puntuacions abans del dilluns 27 de novembre de 2023 a l’Oficina de Turisme, La Rambla, 22.
    Els llibrets són personals i intransferibles.
    Cal tenir un mínim de 10 segells per poder votar. Només serà vàlid un vot per persona.
    La tapa que tingui la valoració proporcional més alta serà la guanyadora i serà considerada “La millor Ganxotapa Tardor 2023”. Les tapes hauran de tenir, com a mínim, la meitat de vots del participant més votat per poder optar a ser “La Millor Ganxotapa Tardor 2023”.`,
    awards: `-Premi a la “millor Ganxotapa Tardor 2023”
    -Premi als “ruteros”. Les persones que facin la ruta del Ganxotapes i vulguin participar al sorteig, hauran de demanar els segells dels establiments on facin les Ganxotapes. Entraran al sorteig de diferents premis, dividits en 3 franges: 1a franja, llibrets que tinguin entre 10 i 17 segells; 2a franja, llibrets que tinguin entre 18 i 26 segells i 3a franja, llibrets que tinguin 27 segells o més. Si un premi queda desert, s’adjudicarà al llibret de la franja anterior amb més segells.
    Cada llibret només podrà participar en una franja.
    Tots els premis es faran públics abans del diumenge 3 de desembre de 2023 a les xarxes socials i al web www.visitguixols.com.
    L’organització es reserva el dret de desqualificar aquells participants o establiments que no compleixen les bases del concurs.
    La resolució dels premis serà inapel·lable.
    Fotografies de Xevi F. Güell
    Disseny de Global Gràfic`,
    menu: [
      {
        id: "220_sushi",
        type: "tapa",
        img: "220_sushi.re",
        price: "3",
        restaurant: "220 SUSHI",
        address: "C/ Major, 30",
        telephone: "683 557 956",
        website: "www.220sushi.com",
        title: "Futomaki de pernil salat i brie calent",
        schedule2: `De dijous a dilluns de 19 a 20 h
          De divendres a diumenge de 12 a 13.30 h`,
        schedule: [
          ["12-13:30", "19-20"], //dg
          ["19-20"], // dill
          [], // dts
          [], // dmc
          ["19-20"], // dj
          ["12-13:30", "19-20"], // dv
          ["12-13:30", "19-20"], //dss
        ],
        coordinates: [41.782046079108376, 3.0309332972241947],
        // timetable: [
        //   ["2023-10-01 08", "2023-10-01 12"], ["2023-10-01 14", "2023-10-01 18"],
        //   ["2023-10-02 08", "2023-10-02 12"], ["2023-10-02 14", "2023-10-02 18"],
        //   ["2023-10-08 14", "2023-10-08 18"],
        // ]
      },
      {
        id: "cubano",
        type: "tapa",
        img: "cubano.re",
        price: "3",
        restaurant: "A LO CUBANO",
        address: "C/ Sant Pere, 29",
        telephone: "632 068 535",
        title: "Tostón farcit de carn picada",
        schedule2: `De dimarts a dissabte de 10 a 24 h`,
        schedule: [
          [], //dg
          [], // dill
          ["10-00"], // dts
          ["10-00"], // dmc
          ["10-00"], // dj
          ["10-00"], // dv
          ["10-00"], //dss
        ],
        coordinates: [41.78130240043708, 3.0290778998126267],
      },
      {
        id: "avenida",
        type: "tapa",
        img: "avenida.re",
        price: "3",
        restaurant: "BAR AVENIDA",
        address: "Av. Catalunya, 101",
        telephone: "972 32 30 54",
        title: "Brioix d'elaboració pròpia de pulled pork amb ceba i alvocat",
        schedule2: `De dimecres a dilluns d'11 a 13 h
          De dimecres a diumenge de 19.30 a 21.30 h
          Dilluns tarda i dimarts tancat`,
        schedule: [
          ["11-13", "19:30-21:30"], //dg
          ["11-13"], // dill
          [], // dts
          ["11-13", "19:30-21:30"], // dmc
          ["11-13", "19:30-21:30"], // dj
          ["11-13", "19:30-21:30"], // dv
          ["11-13", "19:30-21:30"], //dss
        ],
        coordinates: [41.79280039631767, 3.0215253928202768],
      },
      {
        id: "irla",
        type: "tapa",
        img: "irla.re",
        price: "3",
        restaurant: "BAR CASA IRLA",
        address: "C/ Algavira, 65-69",
        telephone: "688 421 157",
        title: "Niu de carbassó farcit de crema tàrtara",
        allergies2: `*Apta per a celíacs, vegetarians i vegans`,
        allergies: ["celiac", "vegetarian", "vegan"],
        schedule2: `De dimecres a diumenge de 13 a 14.30 h i de 19 a 20.30 h
          Dilluns i dimarts tancat`,
        schedule: [
          ["13-14:30", "19-20:30"], //dg
          [], // dill
          [], // dts
          ["13-14:30", "19-20:30"], // dmc
          ["13-14:30", "19-20:30"], // dj
          ["13-14:30", "19-20:30"], // dv
          ["13-14:30", "19-20:30"], //dss
        ],
        coordinates: [41.7842548115285, 3.0299850450701085],
      },
      {
        id: "les_dunes",
        type: "tapa",
        img: "les_dunes.re",
        price: "3",
        restaurant: "BARCAROLA HOTEL-RESTAURANT LES DUNES",
        address: "C/ Pablo Picasso, 1-19",
        telephone: "972 32 69 32",
        website: "www.hotelbarcarola.es",
        title: "Boti-Roll",
        schedule2: `Cada dia d'11 a 13 h`,
        schedule: [
          ["11-13"], //dg
          ["11-13"], // dill
          ["11-13"], // dts
          ["11-13"], // dmc
          ["11-13"], // dj
          ["11-13"], // dv
          ["11-13"], //dss
        ],
        coordinates: [41.79085997035012, 3.0472307914956467],
      },
      {
        id: "colao",
        type: "tapa",
        img: "colao.re",
        price: "3",
        restaurant: "CAFÉ COLAO",
        address: "Av. Catalunya, 105",
        telephone: "972 97 34 88",
        title: "Croqueta d'albergínia amb guacamole",
        schedule2: `De dimarts a diumenge d'11 a 13.30 h i de 19 a 22 h
          Dilluns tancat`,
        schedule: [
          ["11-13:30", "19-22"], //dg
          [], // dill
          ["11-13:30", "19-22"], // dts
          ["11-13:30", "19-22"], // dmc
          ["11-13:30", "19-22"], // dj
          ["11-13:30", "19-22"], // dv
          ["11-13:30", "19-22"], //dss
        ],
        coordinates: [41.79300691927974, 3.0215333350942783],
      },
      {
        id: "stop",
        type: "tapa",
        img: "stop.re",
        price: "3",
        restaurant: "CAFETERIA STOP",
        address: "Paratge Bujonis, s/n",
        telephone: "972 32 71 80",
        website: " www.stopself.cat",
        title: "Puça serrana",
        schedule2: `De dilluns a divendres de 9 a 18 h`,
        schedule: [
          [], //dg
          ["9-18"], // dill
          ["9-18"], // dts
          ["9-18"], // dmc
          ["9-18"], // dj
          ["9-18"], // dv
          [], //dss
        ],
        coordinates: [41.79381039201868, 3.019579130191797],
      },
      {
        id: "can_jordi",
        type: "tapa",
        img: "can_jordi.re",
        price: "3",
        restaurant: "CAN JORDI",
        address: "Pg. del Mar, 5-7 baixos",
        telephone: "633 406 965",
        title: "Verdura de temporada Can Jordi",
        allergies2: `*Apta per a celíacs, vegetarians i vegans`,
        allergies: ["celiac", "vegetarian", "vegan"],
        schedule2: `Dilluns, dimarts, dijous, divendres i dissabte de 10 a 12 h i de 19 a 21 h.
          Dimecres tancat`,
        schedule: [
          [], //dg
          ["10-12", "19-21"], // dill
          ["10-12", "19-21"], // dts
          [], // dmc
          ["10-12", "19-21"], // dj
          ["10-12", "19-21"], // dv
          ["10-12", "19-21"], //dss
        ],
        coordinates: [41.78000447905984, 3.028752609061523],
      },
      {
        id: "kiku",
        type: "tapa",
        img: "kiku.re",
        price: "3",
        restaurant: "CAN KIKU",
        address: "C/ Major, 10-12  ",
        telephone: "972 28 22 95 ",
        website: "www.restaurantcankiku.com",
        title:
          "Cruixent de caneló de melós de vedella, amb xampinyons, reducció de Pedro Ximénez i compota de poma verda",
        schedule2: `Cada dia de 10.30 a 12.30 h i de 16.30 a 19.30 h`,
        schedule: [
          ["10:30-12:30", "16:30-19:30"], //dg
          ["10:30-12:30", "16:30-19:30"], // dill
          ["10:30-12:30", "16:30-19:30"], // dts
          ["10:30-12:30", "16:30-19:30"], // dmc
          ["10:30-12:30", "16:30-19:30"], // dj
          ["10:30-12:30", "16:30-19:30"], // dv
          ["10:30-12:30", "16:30-19:30"], //dss
        ],
        coordinates: [41.78162490218806, 3.0301914238992214],
      },
      {
        id: "diferent",
        type: "tapa",
        img: "diferent.re",
        price: "3",
        restaurant: "DIFFERENT RESTAURANT ",
        address: "C/ Sant Pere, 33",
        telephone: "872 26 51 01",
        website: "www.differentrestaurant.cat",
        title: "Ceviche de la Cucha",
        schedule2: `De dimecres a diumenge de 13 a 14 h.
          De dimecres a dissabte de 19.30 a 20.30 h
          Diumenge tarda, dilluns i dimarts tancat.
          Dimecres 25/10 tancat`,
        schedule: [
          ["13-14"], //dg
          [], // dill
          [], // dts
          ["13-14", "19:30-20:30"], // dmc
          ["13-14", "19:30-20:30"], // dj
          ["13-14", "19:30-20:30"], // dv
          ["13-14", "19:30-20:30"], //dss
        ],
        holidays: [["2023-10-25", "2023-10-25"]],
        coordinates: [41.781299733714114, 3.029072195828873],
      },
      {
        id: "tinglado",
        type: "tapa",
        img: "tinglado.re",
        price: "3",
        restaurant: "EL TINGLADO ",
        address: "Escullera del port, s/n",
        telephone: "972 82 26 05 ",
        website: "www.eltinglado.cat",
        title: "Cassoleta de sèpia amb pèsols",
        allergies2: `*Apta per a celíacs`,
        allergies: ["celiac"],
        schedule2: `Cada dia d'11 a 13 h. Divendres i dissabte de 20 a 21 h`,
        schedule: [
          ["11-13"], //dg
          ["11-13"], // dill
          ["11-13"], // dts
          ["11-13"], // dmc
          ["11-13"], // dj
          ["11-13", "20-21"], // dv
          ["11-13", "20-21"], //dss
        ],
        coordinates: [41.77872149378369, 3.0382235721772575],
      },
      {
        id: "trinquet",
        type: "tapa",
        img: "trinquet.re",
        price: "3",
        restaurant: "EL TRINQUET",
        address: "C/Sant Pere, 26 ",
        telephone: "722 550 156",
        website: "WEBSITE",
        title: 'Russa "El Trinquet"',
        allergies2: `*Adaptable per a celíacs.`,
        allergies: ["celiac"],
        schedule2: `De dimecres a diumenge de 12 a 13 h i de 19.30 a 20.30 h.
          Diumenge nit, dilluns i dimarts tancat.`,
        schedule: [
          ["12-13"], //dg
          [], // dill
          [], // dts
          ["12-13", "19:30-20:30"], // dmc
          ["12-13", "19:30-20:30"], // dj
          ["12-13", "19:30-20:30"], // dv
          ["12-13", "19:30-20:30"], //dss
        ],
        coordinates: [41.78126923209342, 3.0291835074997953],
      },
      {
        id: "mercat",
        type: "tapa",
        img: "mercat.re",
        price: "3",
        restaurant: "EURO DEL MERCAT",
        address: "Plaça del Mercat (interior Mercat Cobert, 1r pis)",
        telephone: "972 32 39 50",
        title: "Delícies de bacallà mediterrani",
        allergies2: `*Apta per a celíacs`,
        allergies: ["celiac"],
        schedule2: `De dimarts a diumenge de 10 a 12.30 h
          Dilluns tancat`,
        schedule: [
          ["10-12:30"], //dg
          [], // dill
          ["10-12:30"], // dts
          ["10-12:30"], // dmc
          ["10-12:30"], // dj
          ["10-12:30"], // dv
          ["10-12:30"], //dss
        ],
        coordinates: [41.78065967678729, 3.0290825818897815],
      },
      {
        id: "formatgeria_quim",
        type: "tapa",
        img: "formatgeria_quim_re",
        price: "3",
        restaurant: "FORMATGERIA CAN QUIM  ",
        address: "Passeig del Mar, 13-16",
        telephone: "605 167 737",
        website: "www.canquim.es",
        title: "Roll de carbassó, formatge, ceba i pernil",
        allergies2: `*Adaptable per a vegetarians`,
        allergies: ["vegetarian"],
        schedule2: `De dimecres a divendres de 18 a 20 h. 
          Dissabte de 12 a 14 h i de 19.30 a 20.30 h 
          Diumenge d'11 a 14 h`,
        schedule: [
          ["11-14"], //dg
          [], // dill
          [], // dts
          ["18-20"], // dmc
          ["18-20"], // dj
          ["18-20"], // dv
          ["12-14", "19:30-20:30"], //dss
        ],
        coordinates: [41.78071767718076, 3.0294083648679],
      },
      {
        id: "pg_del_mar",
        type: "tapa",
        img: "pg_del_mar.re",
        price: "3",
        restaurant: "GASTROBAR PASSEIG DEL MAR",
        address: "Pg. del Mar, 30",
        telephone: "972 78 18 21",
        title:
          "Cruixent de Presa i pernil ibèric sobre parmentier de vainilla amb vinagreta de xocolata i infusió d'ibèric",
        schedule2: `Dilluns, dimecres i dijous d'11 a 12.30 h
          Divendres i dissabte de 20 a 22 h
          Dimarts tancat`,
        schedule: [
          [], //dg
          ["11-12:30"], // dill
          [], // dts
          ["11-12:30"], // dmc
          ["11-12:30"], // dj
          ["20-22"], // dv
          ["20-22"], //dss
        ],
        coordinates: [41.78118800296187, 3.0308358427023823],
      },
      {
        id: "green_burguer",
        type: "tapa",
        img: "green_burguer.re",
        price: "3",
        restaurant: "GREEN & BURGER BY BIOCENTER",
        address: "C/ Sant Joan, 36",
        telephone: "872 00 75 00",
        title: "Energy burger",
        allergies2: `*Apta per a vegetarians / vegans.`,
        allergies: ["vegetarian", "vegan"],
        schedule2: `De dijous a diumenge de 13 a 15.30 h i de 19.30 a 22.30 h`,
        schedule: [
          ["13-15:30", "19:30-22:30"], //dg
          [], // dill
          [], // dts
          [], // dmc
          ["13-15:30", "19:30-22:30"], // dj
          ["13-15:30", "19:30-22:30"], // dv
          ["13-15:30", "19:30-22:30"], //dss
        ],
        coordinates: [41.781378280154016, 3.028772897224204],
      },
      {
        id: "hot_dog",
        type: "tapa",
        img: "hot_dog.re",
        price: "3",
        restaurant: "HOT-DOG",
        address: "C/ Sant Antoni, 40",
        telephone: "616 65 53 42",
        title: "Bao de llardons amb puré de moniato i salsa criolla",
        schedule2: `Cada dia de 12 a 22 h
          Dijous tancat`,
        schedule: [
          ["12-22"], //dg
          ["12-22"], // dill
          ["12-22"], // dts
          ["12-22"], // dmc
          [], // dj
          ["12-22"], // dv
          ["12-22"], //dss
        ],
        coordinates: [41.78252077745284, 3.0302381107170118],
      },
      {
        id: "baleada",
        type: "tapa",
        img: "baleada.re",
        price: "3",
        restaurant: "LA BALEADA",
        address: "C/ Sant Domènec, 5",
        telephone: "611 179 304",
        title: "Enchilada catracha",
        allergies2: `*Apta per a celíacs`,
        allergies: ["celiac"],
        schedule2: `De divendres a dimecres de 10 a 16 h i de 18 a 22 h
          Dijous tancat`,
        schedule: [
          ["10-16", "18-22"], //dg
          ["10-16", "18-22"], // dill
          ["10-16", "18-22"], // dts
          ["10-16", "18-22"], // dmc
          [], // dj
          ["10-16", "18-22"], // dv
          ["10-16", "18-22"], //dss
        ],
        coordinates: [41.78132551032867, 3.0307272132390137],
      },
      {
        id: "mar_salada",
        type: "tapa",
        img: "mar_salada.re",
        price: "3",
        restaurant: "LA MAR SALADA",
        address: "Ronda Narcís Massanas, 70",
        telephone: "722 89 73 91",
        title: "La Saladeta - Tàrtar de fuet amb bastonets de formatge cruixent",
        schedule2: `De divendres a diumenge d'11 a 20 h`,
        schedule: [
          ["11-20"], //dg
          [], // dill
          [], // dts
          [], // dmc
          [], // dj
          ["11-20"], // dv
          ["11-20"], //dss
        ],
        coordinates: [41.78057620078311, 3.0218012829467176],
      },
      {
        id: "muralla",
        type: "tapa",
        img: "muralla.re",
        price: "3",
        restaurant: "LA MURALLA",
        address: "Plaça del Mercat, 20",
        telephone: "652 91 58 48",
        website: "lamuralla.weebly.com",
        title:
          "Mini coca mallorquina – Sobrassada de Mallorca, formatge de cabra i nous amb un toc de mel",
        allergies2: `*Adaptable per a celíacs`,
        allergies: ["celiac"],
        schedule2: `De dilluns, dimarts, dimecres, divendres i dissabte d'11 a 14 h i de 17 a 21 h
          Diumenge de 12 a 14 h
          Dijous tancat 
          Vacances del 20 al 27 d'octubre (ambdós inclosos)`,
        schedule: [
          [], //dg
          ["11-14", "17-21"], // dill
          ["11-14", "17-21"], // dts
          ["11-14", "17-21"], // dmc
          [], // dj
          ["11-14", "17-21"], // dv
          ["11-14", "17-21"], //dss
        ],
        holidays: [["2023-10-20", "2023-10-27"]],
        coordinates: [41.780195112187805, 3.028230477858629],
      },
      {
        id: "gordacos",
        type: "tapa",
        img: "gordacos_re",
        price: "3",
        restaurant: "LOS GORDACOS",
        address: "C/ Mossèn Cinto Verdaguer, 12",
        telephone: "615 644 458",
        title:
          "Miniranchburger – Hamburguesa de vedella, enciam, formatge cheddar, tomàquet i salsa ranxera casolana",
        schedule2: `Dilluns, dimarts, dijous, divendres, dissabte i diumenge de 10.30 a 13.30 h i de 16 a 20h
          Dimecres tancat`,
        schedule: [
          ["10:30-13:30", "16-20"], //dg
          ["10:30-13:30", "16-20"], // dill
          ["10:30-13:30", "16-20"], // dts
          [], // dmc
          ["10:30-13:30", "16-20"], // dj
          ["10:30-13:30", "16-20"], // dv
          ["10:30-13:30", "16-20"], //dss
        ],
        coordinates: [41.78196374211213, 3.029696900375177],
      },
      {
        id: "malcriat",
        type: "tapa",
        img: "malcriat.re",
        price: "3",
        restaurant: "MALCRIAT",
        address: "Pg. del Mar, 33-35 baixos",
        telephone: "972 32 10 23",
        title:
          "Pulled pork croissant - Planxat de pa de croissant farcit de pulled pork, gouda fumat i maionesa de xilé chipotle amb mel",
        schedule2: `De dimarts a diumenge de 12 a 22 h
          Dilluns tancat`,
        schedule: [
          ["12-22"], //dg
          [], // dill
          ["12-22"], // dts
          ["12-22"], // dmc
          ["12-22"], // dj
          ["12-22"], // dv
          ["12-22"], //dss
        ],
        coordinates: [41.781342511217915, 3.0310785826112614],
      },
      {
        id: "cortijo",
        type: "tapa",
        img: "cortijo.re",
        price: "3",
        restaurant: "MESÓN EL CORTIJO",
        address: "C/ Corunya, 5",
        telephone: "680 36 66 29",
        title: "Torradeta d'hummus amb un toc de la Virgi",
        allergies2: "*Adaptable per a vegetarians / vegans",
        allergies: ["vegetarian", "vegan"],
        schedule2: `De dilluns a dijous de 10 a 16 h
          Divendres de 9 a 19 h
          Dissabte i diumenge tancat`,
        schedule: [
          [], //dg
          ["10-16"], // dill
          ["10-16"], // dts
          ["10-16"], // dmc
          ["10-16"], // dj
          ["9-19"], // dv
          [], //dss
        ],
        coordinates: [41.791293582728194, 3.0281866613343897],
      },
      {
        id: "pizzeria_argentina",
        type: "tapa",
        img: "pizzeria_argentina.re",
        price: "3",
        restaurant:
          "24- PIZZERIA ARGENTINA,                                                                      ",
        address: "Avinguda de Saragossa, 115",
        telephone: "605 82 70 36",
        title: "Empanada argentina",
        schedule2: `Cada dia de 12 a 15 h i de 19 a 22 h
          Dimarts tarda tancat`,
        schedule: [
          ["12-15", "19-22"], //dg
          ["12-15", "19-22"], // dill
          ["12-15"], // dts
          ["12-15", "19-22"], // dmc
          ["12-15", "19-22"], // dj
          ["12-15", "19-22"], // dv
          ["12-15", "19-22"], //dss
        ],
        coordinates: [41.793862663241526, 3.0227026239026973],
      },
      {
        id: "tacos_king",
        type: "tapa",
        img: "tacos_king.re",
        price: "3",
        restaurant: "TACO'S KING",
        address: "C/ de la Indústria, 42, Local 2",
        telephone: "674 06 31 29",
        title: "Samosa",
        allergies2: "*Apte per a vegetarians",
        allergies: ["vegetarian"],
        schedule2: `Cada dia de 12.30 a 20 h
          Dimarts tancat`,
        schedule: [
          ["12:30-20"], //dg
          ["12:30-20"], // dill
          [], // dts
          ["12:30-20"], // dmc
          ["12:30-20"], // dj
          ["12:30-20"], // dv
          ["12:30-20"], //dss
        ],
        coordinates: [41.78386345299835, 3.034288554730909],
      },
      {
        id: "villa_laura",
        type: "tapa",
        img: "villa_laura.re",
        price: "3",
        restaurant: "VILLA LAURA",
        address: "Passeig de Sant Pol, 135",
        telephone: "972 32 63 38",
        website: "www.hotelsantpol.com",
        title:
          "Suquet de clova amb moixernons, mandonguilles de pollastre i croqueta de gamba esparracada",
        schedule2: `De dilluns a diumenge d'11 a 13 h i dissabte de 20 a 22 h.
          Dimecres tancat.
          *Tancat del 8 al 22 de novembre`,
        schedule: [
          ["11-13"], //dg
          ["11-13"], // dill
          ["11-13"], // dts
          [], // dmc
          ["11-13"], // dj
          ["11-13"], // dv
          ["11-13", "20-22"], //dss
        ],
        holidays: [["2023-11-08", "2023-11-22"]],
        coordinates: [41.79077455405764, 3.048265483731843],
      },
      {
        id: "dau_miquel",
        type: "menu",
        img: "dau_miquel.re",
        price: "24.95",
        restaurant: "EL DAU DE CAN MIQUEL",
        address: "C/ Especiers, 5",
        telephone: "616 770 854",
        website: "www.canmiquel.cat",
        menu: `
          MENÚ (taula completa)
          
          Crema de carbassa amb espuma de formatge Stilton
          Perles XL de bacallà
          Núvol d'ibèric amb ou poché
          Carpaccio de magret d'ànec a la sal amb tocs de moniato i castanya
          Xuixo a la brasa farcit amb cua de vedella a baixa temperatura
          Gintònic d'autor amb textures
    
          Copa de vi o cervesa o aigua / persona                                                                                                                                        
          
          Preu: 24,95 € /persona (IVA inclòs)
          `,
        schedule2: `Divendres, dissabte i diumenge migdia: 1r inici a les 13.30 h i 2n inici a les 14 h
          Divendres i dissabte nit: 1r inici a les 20.30 h 2n inici a les 21 h`,
        schedule: [
          ["13:30-14"], //dg
          [], // dill
          [], // dts
          [], // dmc
          [], // dj
          ["13:30-14", "20:30-21"], // dv
          ["13:30-14", "20:30-21"], //dss
        ], // WARNING
        coordinates: [41.78100268210256, 3.0286596837314104],
      },
      {
        id: "llevanti",
        type: "menu",
        img: "llevanti.re",
        price: "35",
        restaurant: "LLEVANTÍ",
        address: "Passeig dels Guíxols, 8",
        telephone: "972 10 38 18",
        menu: `
          MENÚ (taula completa)
          
          Ostra Gillardeau nº2
          Timbalet de patata amb tàrtara i salmó marinat al perfum d'anet
          Tapa de pop amb parmentier i verduretes
          Anell de calamar a la romana
          Tataki de tonyina de Balfegó
          Rotllet de peu de porc farcit de botifarra negra amb espardenyes i carn de garotes
    
          Copa de vi o cava o cervesa /persona
          
          Preu: 35€ / persona (IVA inclòs)
          `,
        schedule2: `De dimecres a diumenge de 20 a 23 h
          Dilluns i dimarts tancat`,
        schedule: [
          ["20-23"], //dg
          [], // dill
          [], // dts
          ["20-23"], // dmc
          ["20-23"], // dj
          ["20-23"], // dv
          ["20-23"], //dss
        ],
        coordinates: [41.781924679825266, 3.0327461837314926],
      },
      {
        id: "metronon",
        type: "menu",
        img: "metronon.re",
        price: "22",
        restaurant: "METRONON GASTRO BAR",
        address: "Rambla Portalet, 8-10 ",
        telephone: "872 20 21 08",
        website: "www.elkehotel.com",
        menu: `
          MENÚ
          
          Ensaladilla de gambó amb maionesa de kimtxi
          Samosa d'ànec amb algues i compota
          Pasta de full amb vedella i cremós de moniato
          Mini hamburguesa de pollastre amb formatge fos, ceba i patata palla
          Mini caneló rostit amb beixamel de foie
          Espuma de toffee amb poma rostida i gelat de vainilla
    
          Copa de vi o cervesa o aigua / persona
          
          Preu: 22€ / persona (IVA inclòs)
          `,
        schedule2: `Divendres i dissabte de 12.30 a 14.30 h i de 19 a 20.30 h
          Diumenge de 12.30 a 14.30 h`,
        schedule: [
          ["12:30-14:30"], //dg
          [], // dill
          [], // dts
          [], // dmc
          [], // dj
          ["12:30-14:30", "19-20:30"], // dv
          ["12:30-14:30", "19-20:30"], //dss
        ],
        coordinates: [41.781942091327984, 3.0318554204996544],
      },
      {
        id: "nomo",
        type: "menu",
        img: "nomo.re",
        price: "40",
        restaurant: "NOMO NÀUTIC",
        address: "Escullera del Port, s/n",
        telephone: "972 28 21 00",
        website: "www.gruponomo.com",
        menu: `
          MENÚ (taula completa)
          
          Edamame de tòfona
          Gyozas de sobrassada
          Tataki de tonyina
          Fideus yakisoba amb truita i carn
          Assortiment de sushi
          Panna cotta de Taro
    
          Aigua, refresc, cervesa, vi blanc o negre / persona
          
          Preu: 40€ / persona (IVA inclòs)
          `,
        schedule2: `De dimarts a diumenge de 13 a 15 h i de 20 a 22 h`,
        schedule: [
          ["13-15", "20-22"], //dg
          [], // dill
          ["13-15", "20-22"], // dts
          ["13-15", "20-22"], // dmc
          ["13-15", "20-22"], // dj
          ["13-15", "20-22"], // dv
          ["13-15", "20-22"], //dss
        ],
        coordinates: [41.77870005772045, 3.0388964541940178],
      },
      {
        id: "esguard",
        type: "menu",
        img: "esguard_re",
        price: "30",
        restaurant: "RESTAURANT L'ESGUARD ALÀBRIGA",
        address: "Ctra. de Sant Pol, 634",
        telephone: "872 20 06 06",
        website: "www.hotelalabriga.com",
        menu: `
          MENÚ
          
          Esqueixada de bacallà amb mongetes del ganxet en dues temperatures i amb tres salses
          Ostra en la seva petxina amb crema àcida, llima, llimona, vainilla i aigua de roses
          Llom de salmó fumat amb mousse de coco i gingebre, crema de cítrics i alvocat agredolç
          Amanida d'algues, goma wakame, hijiki, escarola, rúcula i minicrudités
          Sopa agredolça amb foie gras i shitake
          Anguila unagi a la barbacoa en la seva salsa i arròs blanc confitat
    
          Copa de vi o cava /persona
          
          Preu: 30€ / persona (IVA inclòs)         
          `,
        schedule2: `De dilluns a divendres 12.30 a 15.30 h i de 19.30 a 22 h
          Dissabte  de 12.30 a 15.30 h
          Diumenge 12.30 a 15.30 h i de 19.30 a 22 h`,
        schedule: [
          ["12:30-15:30", "19:30-22"], //dg
          ["12:30-15:30", "19:30-22"], // dill
          ["12:30-15:30", "19:30-22"], // dts
          ["12:30-15:30", "19:30-22"], // dmc
          ["12:30-15:30", "19:30-22"], // dj
          ["12:30-15:30", "19:30-22"], // dv
          ["12:30-15:30"], //dss
        ],
        coordinates: [41.78550756917424, 3.045163039552858],
      },
      {
        id: "sabors",
        type: "menu",
        img: "sabors.re",
        price: "21",
        restaurant: "SABORS",
        address: "Passeig dels Guíxols, 21",
        telephone: "972 04 97 57",
        website: "www.restaurantsabors.com",
        menu: `
          MENÚ (taula completa)
          
          Taco de Blat de moro amb guacamole, carn picada, ceba morada i salsa picant
          Bikini de sobrassada i formatge brie amb ceba caramel·litzada i mel
          Ceviche de corball i gamba
          Hummus de moniato amb pa libanès
          Mini burger de vedella amb tostón de plàtan matxo
          Gelat de caramel amb flor de sal
          
          Canya, copa de vi blanc, rosat o negre, aigua amb o sense gas / persona
          
          Preu: 21€ / persona (IVA inclòs)
          `,
        schedule2: `De dimecres a diumenge de 12.30 a 14 h
          Divendres i dissabte de 20 a 21.30 h`,
        schedule: [
          ["12:30-14"], //dg
          [], // dill
          [], // dts
          ["12:30-14"], // dmc
          ["12:30-14"], // dj
          ["12:30-14", "20-21:30"], // dv
          ["12:30-14", "20-21:30"], //dss
        ],
        coordinates: [41.78189238029576, 3.0337763818811885],
      },
    ],
  };
  
  const ganxotapesPrimavera24: IGanxoTapes = {
    season: "Primavera 24",
    cover: "ganxotapes-primavera-24.jpeg",
    description: "TODO description",
    duration: ["2024-04-19", "2024-05-19"],
    menu: [
      {
        id: "220_sushi",
        type: "tapa",
        // img: "220_sushi.re",
        img: "220_sushi-4",
        price: "3",
        restaurant: "220 SUSHI",
        address: "C/ Major, 30",
        telephone: "683 557 956",
        website: "www.220sushi.com",
        title: "Minibao de tàrtar de salmó, maionesa de wasabi i ceba encurtida",
        schedule2: `Dilluns i Dijous de 19.00 a 20.00 h
        De divendres a diumenge de 12.00 a 13.30 h i de 19.00 a 20.00 h`,
        schedule: [
          ["12-13:30", "19-20"], //dg
          ["19-20"], // dill
          ["19-20"], // dts
          ["19-20"], // dmc
          ["19-20"], // dj
          ["12-13:30", "19-20"], // dv
          ["12-13:30", "19-20"], //dss
        ],
        coordinates: [41.782046079108376, 3.0309332972241947],
        // timetable: [
        //   ["2023-10-01 08", "2023-10-01 12"], ["2023-10-01 14", "2023-10-01 18"],
        //   ["2023-10-02 08", "2023-10-02 12"], ["2023-10-02 14", "2023-10-02 18"],
        //   ["2023-10-08 14", "2023-10-08 18"],
        // ]
      },
      {
        id: "cubano",
        type: "tapa",
        // img: "cubano.re",
        img: "a_lo_cubano-OK",
        price: "3",
        restaurant: "A LO CUBANO",
        address: "C/ Sant Pere, 29",
        telephone: "632 068 535",
        title: "Montadito de ropa vieja",
        schedule2: `De dimarts a dissabte d'11 a 17 h i de 19 a 22 h`,
        schedule: [
          [], //dg
          [], // dill
          ["11-17", "19-22"], // dts
          ["11-17", "19-22"], // dmc
          ["11-17", "19-22"], // dj
          ["11-17", "19-22"], // dv
          ["11-17", "19-22"], //dss
        ],
        coordinates: [41.78130240043708, 3.0290778998126267],
      },
      {
        id: "irla",
        type: "tapa",
        // img: "irla.re",
        img: "casa_irla-OK",
        price: "3",
        restaurant: "BAR CASA IRLA",
        address: "C/ Algavira, 65-69",
        telephone: "688 421 157",
        title:
          "Roll vegetal de truita de carbassó, pastanaga i formatge crema amb puré de moniato i ceba cruixent",
        allergies2: `*Apta per a vegetarians`,
        // allergies: ["celiac", "vegetarian", "vegan"],
        allergies: ["vegetarian"],
        schedule2: `De dimecres a diumenge de 13 a 15.30 h i de 19.30 a 23 h
        Dilluns i dimarts tancat`,
        schedule: [
          ["13-15:30", "19:30-23"], //dg
          [], // dill
          [], // dts
          ["13-15:30", "19:30-23"], // dmc
          ["13-15:30", "19:30-23"], // dj
          ["13-15:30", "19:30-23"], // dv
          ["13-15:30", "19:30-23"], //dss
        ],
        coordinates: [41.7842548115285, 3.0299850450701085],
      },
      {
        id: "les_dunes",
        type: "tapa",
        // img: "les_dunes.re",
        img: "les_dunes-OK",
        price: "3",
        restaurant: "BARCAROLA HOTEL-RESTAURANT LES DUNES",
        address: "C/ Pablo Picasso, 1-19",
        telephone: "972 32 69 32",
        website: "www.hotelbarcarola.es",
        title: "Torradeta de tàrtar de bacallà",
        schedule2: `Cada dia d'11 a 13 h`,
        schedule: [
          ["11-13"], //dg
          ["11-13"], // dill
          ["11-13"], // dts
          ["11-13"], // dmc
          ["11-13"], // dj
          ["11-13"], // dv
          ["11-13"], //dss
        ],
        coordinates: [41.79085997035012, 3.0472307914956467],
      },
      {
        id: "colao",
        type: "tapa",
        // img: "colao.re",
        img: "cafe_colao-OK",
        price: "3",
        restaurant: "CAFÉ COLAO",
        address: "Av. Catalunya, 105",
        telephone: "972 97 34 88",
        title: "Bola de iuca amb formatge i steak tàrtar",
        schedule2: `De dimarts a diumenge d'11 a 13 h i de 19.30 a 22 h
        Dilluns tancat`,
        schedule: [
          ["11-13", "19:30-22"], //dg
          [], // dill
          ["11-13", "19:30-22"], // dts
          ["11-13", "19:30-22"], // dmc
          ["11-13", "19:30-22"], // dj
          ["11-13", "19:30-22"], // dv
          ["11-13", "19:30-22"], //dss
        ],
        coordinates: [41.79300691927974, 3.0215333350942783],
      },
      {
        id: "stop",
        type: "tapa",
        // img: "stop.re",
        img: "cafeteria_Stop-OK",
        price: "3",
        restaurant: "CAFETERIA STOP",
        address: "Paratge Bujonis, s/n",
        telephone: "972 32 71 80",
        website: " www.stopself.cat",
        title: "Raba de calamar amb salsa de iogurt",
        schedule2: `De dilluns a divendres de 9 a 18 h`,
        schedule: [
          [], //dg
          ["9-18"], // dill
          ["9-18"], // dts
          ["9-18"], // dmc
          ["9-18"], // dj
          ["9-18"], // dv
          [], //dss
        ],
        coordinates: [41.79381039201868, 3.019579130191797],
      },
      {
        id: "can_julia",
        type: "tapa",
        img: "can_julia-OK",
        price: "3",
        restaurant: "CAN JULIÀ",
        address: "La Rambla, 46",
        telephone: "972 32 42 09",
        title: "Sabor a mar (vieira farcida de beixamel de marisc)",
        schedule2: `De dilluns a diumenge d'11 a 13 h
        Divendres i dissabte d'11 a 13 h i de 19 a 21 h
        Dimarts tancat   `,
        schedule: [
          ["11-13"], //dg
          ["11-13"], // dill
          [], // dts
          ["11-13"], // dmc
          ["11-13"], // dj
          ["11-13", "19-21"], // dv
          ["11-13", "19-21"], //dss
        ],
        coordinates: [41.78000447905984, 3.028752609061523],
      },
      {
        id: "kiku",
        type: "tapa",
        // img: "kiku.re",
        img: "can_kiku-OK",
        price: "3",
        restaurant: "CAN KIKU",
        address: "C/ Major, 10-12  ",
        telephone: "972 28 22 95 ",
        website: "www.restaurantcankiku.com",
        title:
          "Costella de porc de castanya a baixa temperatura amb parmentier de patata i all negre amb salsa hoisin i cruixents de iuca",
        schedule2: `Cada dia de 10.30 a 12.15 h i de 16.30 a 19.15 h`,
        schedule: [
          ["10:30-12:15", "16:30-19:15"], //dg
          ["10:30-12:15", "16:30-19:15"], // dill
          ["10:30-12:15", "16:30-19:15"], // dts
          ["10:30-12:15", "16:30-19:15"], // dmc
          ["10:30-12:15", "16:30-19:15"], // dj
          ["10:30-12:15", "16:30-19:15"], // dv
          ["10:30-12:15", "16:30-19:15"], //dss
        ],
        coordinates: [41.78162490218806, 3.0301914238992214],
      },
      {
        id: "centre_civic_tueda",
        type: "tapa",
        img: "c.c._tueda-OK",
        price: "3",
        restaurant: "CENTRE CÍVIC TUEDA",
        address: "C/ Gravina, 19-41",
        telephone: "686 534 068",
        title: "Coca de calçots amb gelat de piparra",
        allergies2: `*Apta per a vegetarians`,
        allergies: ["vegetarian"],
        schedule2: `De dilluns a divendres de 12 a 15 h
        Diumenge de 12 a 15 h
        Dissabte tancat`,
        schedule: [
          ["12-15"], //dg
          ["12-15"], // dill
          ["12-15"], // dts
          ["12-15"], // dmc
          ["12-15"], // dj
          ["12-15"], // dv
          [], //dss
        ],
        coordinates: [41.784519500471276, 3.035551311640185],
      },
      {
        id: "diferent",
        type: "tapa",
        // img: "diferent.re",
        img: "different-OK",
        price: "3",
        restaurant: "DIFFERENT RESTAURANT ",
        address: "C/ Sant Pere, 33",
        telephone: "872 26 51 01",
        website: "www.differentrestaurant.cat",
        title: "Melós de porc amb parmentier de patata a la seva salsa",
        schedule2: `De dimecres a diumenge de 13 a 14 h
        De dimecres a dissabte de 19.30 a 20.30 h
        Diumenge tarda, dilluns i dimarts tancat`,
        schedule: [
          ["13-14"], //dg
          [], // dill
          [], // dts
          ["13-14", "19:30-20:30"], // dmc
          ["13-14", "19:30-20:30"], // dj
          ["13-14", "19:30-20:30"], // dv
          ["13-14", "19:30-20:30"], //dss
        ],
        coordinates: [41.781299733714114, 3.029072195828873],
      },
      {
        id: "camping_santpol",
        type: "tapa",
        img: "petit_pol-OK",
        price: "3",
        restaurant: "EL PETIT POL - CÀMPING SANT POL",
        address: "C/ Dr. Fleming, 118-134",
        telephone: "682 627 900",
        website: "www.campingsantpol.com",
        title: "Bao ganxó picant (pollastre amb salsa de tomàquet)",
        schedule2: `De dimarts a divendres de 18 a 22 h
        Dissabte, diumenge i dilluns de 13 a 15.30 h i de 18 a 22 h`,
        schedule: [
          ["13-15:30", "18-22"], //dg
          ["13-15:30", "18-22"], // dill
          ["18-22"], // dts
          ["18-22"], // dmc
          ["18-22"], // dj
          ["18-22"], // dv
          ["13-15:30", "18-22"], //dss
        ],
        coordinates: [41.78685396580596, 3.041379955672133],
      },
      {
        id: "tinglado",
        type: "tapa",
        img: "tinglado-OK",
        price: "3",
        restaurant: "EL TINGLADO ",
        address: "Escullera del port, s/n",
        telephone: "972 82 26 05 ",
        website: "www.eltinglado.cat",
        title: "Mandonguilla de vedella de Girona amb pèsols i sípia",
        allergies2: `*Apta per a celíacs`,
        allergies: ["celiac"],
        schedule2: `Cada dia d'11 a 13 h. Divendres i dissabte de 20 a 21 h`,
        schedule: [
          ["11-13"], //dg
          ["11-13"], // dill
          ["11-13"], // dts
          ["11-13"], // dmc
          ["11-13"], // dj
          ["11-13", "20-21"], // dv
          ["11-13", "20-21"], //dss
        ],
        coordinates: [41.77872149378369, 3.0382235721772575],
      },
      {
        id: "mercat",
        type: "tapa",
        img: "euro_del_mercat-OK",
        price: "3",
        restaurant: "EURO DEL MERCAT",
        address: "Plaça del Mercat (interior Mercat Cobert, 1r pis)",
        telephone: "972 32 39 50",
        title: "Dolç de Dorada (peix i fruits secs)",
        schedule2: `De dimarts a diumenge de 9 a 13 h
          Dilluns tancat`,
        schedule: [
          ["9-13"], //dg
          [], // dill
          ["9-13"], // dts
          ["9-13"], // dmc
          ["9-13"], // dj
          ["9-13"], // dv
          ["9-13"], //dss
        ],
        coordinates: [41.78065967678729, 3.0290825818897815],
      },
      {
        id: "formatgeria_quim",
        type: "tapa",
        img: "can_quim-OK",
        price: "3",
        restaurant: "FORMATGERIA CAN QUIM",
        address: "Passeig del Mar, 13-16",
        telephone: "605 167 737",
        website: "www.canquim.es",
        title: "Bolets amb cremós de formatge i tòfona",
        allergies2: `*Apta per a vegetarians i celíacs`,
        allergies: ["vegetarian", "celiac"],
        schedule2: `De dilluns a dissabte de 10 a 14.30 h
        Dimecres, dijous i divendres de 18.30 a 20 h
        Dissabte de 19.30 a 20 h
        Diumenge de 10.30 a 14 h
        
        Tancat del 12 al 17 de maig (ambdós inclosos)`,
        schedule: [
          ["10:30-14"], //dg
          ["10-14:30"], // dill
          ["10-14:30"], // dts
          ["10-14:30", "18:30-20"], // dmc
          ["10-14:30", "18:30-20"], // dj
          ["10-14:30", "18:30-20"], // dv
          ["10-14:30", "19:30-20"], //dss
        ],
        holidays: [["2024-05-12", "2024-05-17"]],
        coordinates: [41.78071767718076, 3.0294083648679],
      },
      {
        id: "pg_del_mar",
        type: "tapa",
        img: "gastrobar_del_passeig-OK",
        price: "3",
        restaurant: "GASTROBAR PASSEIG DEL MAR",
        address: "Pg. del Mar, 30",
        telephone: "972 78 18 21",
        title:
          "Del Maresme a la Costa Brava (favetes del Maresme amb botifarra negra, cloïsses i gamba sobre llit de pa ofegat al pimentó)",
        schedule2: `Dilluns, dijous, divendres i dissabte d'11 a 13 h
        Dimarts i dimecres tancat`,
        schedule: [
          [], //dg
          ["11-13"], // dill
          [], // dts
          [], // dmc
          ["11-13"], // dj
          ["11-13"], // dv
          ["11-13"], //dss
        ],
        coordinates: [41.78118800296187, 3.0308358427023823],
      },
      {
        id: "green_burguer",
        type: "tapa",
        img: "greenburguer-OK",
        price: "3",
        restaurant: "GREEN & BURGER BY BIOCENTER",
        address: "C/ Sant Joan, 36",
        telephone: "872 00 75 00",
        title: "Fantàstic burger",
        allergies2: `*Apta per a vegetarians / vegans.`,
        allergies: ["vegetarian", "vegan"],
        schedule2: `De dijous a dissabte de 13 a 15.30 h i de 19.30 a 22.00 h
        Diumenge de 13 a 15.30 h`,
        schedule: [
          ["13-15:30"], //dg
          [], // dill
          [], // dts
          [], // dmc
          ["13-15:30", "19:30-22"], // dj
          ["13-15:30", "19:30-22"], // dv
          ["13-15:30", "19:30-22"], //dss
        ],
        coordinates: [41.781378280154016, 3.028772897224204],
      },
      {
        id: "guixols_cafe",
        type: "tapa",
        img: "sant_benet-OK",
        price: "3",
        restaurant: "GUÍXOLS CAFÈ",
        address: "C/ Gravina, 1",
        telephone: "645 603 785",
        title:
          "Pepito Guíxols (carn de vedella amb maionesa de la casa i pico de gallo)",
        schedule2: `Cada dia de 9 a 23 h
        Dimarts tancat`,
        schedule: [
          ["9-23"], //dg
          ["9-23"], // dill
          [], // dts
          ["9-23"], // dmc
          ["9-23"], // dj
          ["9-23"], // dv
          ["9-23"], //dss
        ],
        coordinates: [41.783309427356194, 3.0364971116056036],
      },
      {
        id: "hot_dog",
        type: "tapa",
        img: "hot_dog-OK",
        price: "3",
        restaurant: "HOT-DOG",
        address: "C/ Sant Antoni, 40",
        telephone: "616 65 53 42",
        title: "Xapata de pernil ibèric i salmorejo cordovès",
        schedule2: `Cada dia de 12 a 23 h
          Dijous tancat`,
        schedule: [
          ["12-23"], //dg
          ["12-23"], // dill
          ["12-23"], // dts
          ["12-23"], // dmc
          [], // dj
          ["12-23"], // dv
          ["12-23"], //dss
        ],
        coordinates: [41.78252077745284, 3.0302381107170118],
      },
      {
        id: "gaviota",
        type: "tapa",
        img: "la_gaviota-OK",
        price: "3",
        restaurant: "LA GAVIOTA BAR TAPES",
        address: "La Rambla, 40",
        telephone: "972 32 46 14",
        title: "Empanada criolla",
        schedule2: `De dimarts a dissabte d'11 a 12.30 h i de 19 a 20.30 h
        Diumenge d'11 a 12.30 h
        Dilluns tancat `,
        schedule: [
          ["11-12:30"], //dg
          [], // dill
          ["11-12:30", "19-20:30"], // dts
          ["11-12:30", "19-20:30"], // dmc
          ["11-12:30", "19-20:30"], // dj
          ["11-12:30", "19-20:30"], // dv
          ["11-12:30", "19-20:30"], //dss
        ],
        coordinates: [41.78177019605842, 3.0293571221020223],
      },
      {
        id: "mar_salada",
        type: "tapa",
        img: "mar_salada-OK",
        price: "3",
        restaurant: "LA MAR SALADA",
        address: "Ronda Narcís Massanas, 70",
        telephone: "722 89 73 91",
        title: "Aupa Mar Salada !",
        schedule2: `Divendres de 17 a 21 h
        Dissabte de 9 a 21 h
        Diumenge de 9 a 20 h`,
        schedule: [
          ["9-20"], //dg
          [], // dill
          [], // dts
          [], // dmc
          [], // dj
          ["17-21"], // dv
          ["9-21"], //dss
        ],
        coordinates: [41.78057620078311, 3.0218012829467176],
      },
      {
        id: "muralla",
        type: "tapa",
        img: "la_muralla-OK",
        price: "3",
        restaurant: "LA MURALLA",
        address: "Plaça del Mercat, 20",
        telephone: "652 91 58 48",
        website: "lamuralla.weebly.com",
        title: "Mini sandwich vegetal de pollastre",
        schedule2: `Dilluns, dimarts, dimecres, divendres i dissabte d'11 a 13.30 h i de 17 a 21 h
        Diumenge de 12 a 14 h
        Dijous tancat`,
        schedule: [
          ["12-14"], //dg
          ["11-13:30", "17-21"], // dill
          ["11-13:30", "17-21"], // dts
          ["11-13:30", "17-21"], // dmc
          [], // dj
          ["11-13:30", "17-21"], // dv
          ["11-13:30", "17-21"], //dss
        ],
        coordinates: [41.780195112187805, 3.028230477858629],
      },
      {
        id: "trobada",
        type: "tapa",
        img: "la_trobada-OK",
        price: "3",
        restaurant: "LA TROBADA",
        address: "C/ Indústria, 1",
        telephone: "972 00 67 05",
        title: "El Trobat (xarrup de foie amb melmelada de festucs)",
        schedule2: `De dilluns a diumenge d'11 a 14.30 h
        Dijous tancat`,
        schedule: [
          ["11-14:30"], //dg
          ["11-14:30"], // dill
          ["11-14:30"], // dts
          ["11-14:30"], // dmc
          [], // dj
          ["11-14:30"], // dv
          ["11-14:30"], //dss
        ],
        coordinates: [41.782391867454166, 3.034963302333823],
      },
      {
        id: "gordacos",
        type: "tapa",
        img: "los_gordacos-OK",
        price: "3",
        restaurant: "LOS GORDACOS",
        address: "C/ Mossèn Cinto Verdaguer, 12",
        telephone: "615 644 458",
        title: "Amanida de patata a la mostassa",
        allergies2: "*Apta per a vegetarians",
        allergies: ["vegetarian"],
        schedule2: `Dilluns, dimarts, divendres, dissabte i diumenge d’11 a 13 h i de 16 a 20 h
        Dijous de 16 a 20 h
        Dimecres tancat`,
        schedule: [
          ["11-13", "16-20"], //dg
          ["11-13", "16-20"], // dill
          ["11-13", "16-20"], // dts
          [], // dmc
          ["16-20"], // dj
          ["11-13", "16-20"], // dv
          ["11-13", "16-20"], //dss
        ],
        coordinates: [41.78196374211213, 3.029696900375177],
      },
      {
        id: "malcriat",
        type: "tapa",
        img: "malcriat-OK",
        price: "3",
        restaurant: "MALCRIAT",
        address: "Pg. del Mar, 33-35 baixos",
        telephone: "972 32 10 23",
        title:
          "Rotlle mediterrani de pasta fil·lo farcit de musclos i cranc de roca, amb maionesa d’algues, melmelada de pebrot del piquillo i glacejat de cheddar",
        schedule2: `De dimarts a dissabte de 12.30 a 22 h
        Diumenge de 12.30 a 15 h
        Diumenge tarda i dilluns tancat`,
        schedule: [
          ["12:30-15"], //dg
          [], // dill
          ["12:30-22"], // dts
          ["12:30-22"], // dmc
          ["12:30-22"], // dj
          ["12:30-22"], // dv
          ["12:30-22"], //dss
        ],
        coordinates: [41.781342511217915, 3.0310785826112614],
      },
      {
        id: "maya",
        type: "tapa",
        img: "maya_delicies-OK",
        price: "3",
        restaurant: "MAYA DELÍCIES",
        address: "C/ Major, 31",
        telephone: "872 50 97 59",
        title:
          "Taco daurat de patata amb chipotle, salsa verda de coriandre, alvocat amb un toc de jalapeño i formatge",
        allergies2: "*Apta per a vegetarians i celíacs",
        allergies: ["vegetarian", "celiac"],
        schedule2: `De dilluns a dijous de 18 a 20 h
        De divendres a diumenge de 12 a 13 h i de 18 a 19.30 h`,
        schedule: [
          ["12-13", "18-19:30"], //dg
          ["18-20"], // dill
          ["18-20"], // dts
          ["18-20"], // dmc
          ["18-20"], // dj
          ["12-13", "18-19:30"], // dv
          ["12-13", "18-19:30"], //dss
        ],
        coordinates: [41.782271678786365, 3.0308090845079367],
      },
      {
        id: "cortijo",
        type: "tapa",
        img: "meson_cortijo-OK",
        price: "3",
        restaurant: "MESÓN EL CORTIJO",
        address: "C/ Corunya, 5",
        telephone: "680 36 66 29",
        title: "Llom a baixa temperatura amb un toc de la Virgi",
        schedule2: `De dilluns a divendres de 10 a 16.30 h
        Dissabte i diumenge tancat`,
        schedule: [
          [], //dg
          ["10-16:30"], // dill
          ["10-16:30"], // dts
          ["10-16:30"], // dmc
          ["10-16:30"], // dj
          ["10-16:30"], // dv
          [], //dss
        ],
        coordinates: [41.791293582728194, 3.0281866613343897],
      },
      {
        id: "sant_benet",
        type: "tapa",
        img: "guixols_cafe-OK",
        price: "3",
        restaurant:
          "SANT BENET,                                                                      ",
        address: "Passeig del Mar, 5",
        telephone: "645 603 785",
        title: "Sant Benet cheese",
        allergies2: "*Apta per a vegetarians",
        allergies: ["vegetarian"],
        schedule2: `Cada dia de 9 a 22 h
        Dilluns tancat`,
        schedule: [
          ["9-22"], //dg
          [], // dill
          ["9-22"], // dts
          ["9-22"], // dmc
          ["9-22"], // dj
          ["9-22"], // dv
          ["9-22"], //dss
        ],
        coordinates: [41.780147605746734, 3.028789288404415],
      },
      {
        id: "sea_club_alabriga",
        type: "tapa",
        img: "sea_club-OK",
        price: "3",
        restaurant: "SEA CLUB ALÀBRIGA",
        address: "Ctra. de Sant Pol, 633",
        telephone: "872 20 06 06",
        website: "www.hotelalabriga.com",
        title: "Peix a la flama",
        schedule2: `Dijous i divendres de 13 a 16 h`,
        schedule: [
          [], //dg
          [], // dill
          [], // dts
          [], // dmc
          ["13-16"], // dj
          ["13-16"], // dv
          [], //dss
        ],
        coordinates: [41.78550756917424, 3.045163039552858],
      },
      {
        id: "tacos_king",
        type: "tapa",
        img: "tacos_king-OK",
        price: "3",
        restaurant: "TACO'S KING",
        address: "C/ de la Indústria, 42, Local 2",
        telephone: "674 06 31 29",
        title: "Tikki pakora",
        allergies2: "*Apte per a vegetarians / vegans",
        allergies: ["vegetarian", "vegan"],
        schedule2: `Cada dia de 12.30 a 20 h`,
        schedule: [
          ["12:30-20"], //dg
          ["12:30-20"], // dill
          ["12:30-20"], // dts
          ["12:30-20"], // dmc
          ["12:30-20"], // dj
          ["12:30-20"], // dv
          ["12:30-20"], //dss
        ],
        coordinates: [41.78386345299835, 3.034288554730909],
      },
      {
        id: "taverna_andaluz",
        type: "tapa",
        img: "taberna_andaluz-OK",
        price: "3",
        restaurant: "TAVERNA EL ANDALUZ",
        address: "C/ Almeria, 31",
        telephone: "641 659 404",
        title: "Paletilla a l'Alegria",
        schedule2: `De dilluns a diumenge de 17 a 21 h`,
        schedule: [
          ["17-21"], //dg
          ["17-21"], // dill
          ["17-21"], // dts
          ["17-21"], // dmc
          ["17-21"], // dj
          ["17-21"], // dv
          ["17-21"], //dss
        ],
        coordinates: [41.7908798590244, 3.0269362030268887],
      },
      {
        id: "pink_elephant",
        type: "tapa",
        img: "pink_elephant-OK",
        price: "3",
        restaurant: "THE PINK ELEPHANT",
        website: "www.thepinkelephant.com",
        address: "Passeig de Sant Pol, 97",
        telephone: "972 82 68 51",
        title: "Pani puri farcit d'ensaladilla amb anguila fumada",
        schedule2: `De dijous a diumenge d'11 a 12.30 h`,
        schedule: [
          ["11-12:30"], //dg
          [], // dill
          [], // dts
          [], // dmc
          ["11-12:30"], // dj
          ["11-12:30"], // dv
          ["11-12:30"], //dss
        ],
        coordinates: [41.789947395750936, 3.0468435790381974],
      },
      {
        id: "tucan_beach",
        type: "tapa",
        img: "tucan_beach-OK",
        price: "3",
        restaurant: "TACO'S KING",
        website: "www.hotelbarcarola.es",
        address: "Passeig de Sant Pol, s/n",
        telephone: "972 32 01 39",
        title: "Xoripita (xoriç)",
        schedule2: `De dilluns a diumenge d’11 a 13 h`,
        schedule: [
          ["11-13"], //dg
          ["11-13"], // dill
          ["11-13"], // dts
          ["11-13"], // dmc
          ["11-13"], // dj
          ["11-13"], // dv
          ["11-13"], //dss
        ],
        coordinates: [41.78386345299835, 3.034288554730909],
      },
      {
        id: "villa_laura",
        type: "tapa",
        img: "villa_laura-OK",
        price: "3",
        restaurant: "VILLA LAURA",
        address: "Passeig de Sant Pol, 135",
        telephone: "972 32 63 38",
        website: "www.hotelsantpol.com",
        title: "Garota de carbonara amb bastons de pollastre picantets",
        schedule2: `De dilluns a divendres d'11 a 13 h
        Dissabte d’11.30 a 13 h i de 20 a 22 h
        Diumenges d’11.30 a 13 h
        Dimecres tancat`,
        schedule: [
          ["11:30-13"], //dg
          ["11-13"], // dill
          ["11-13"], // dts
          [], // dmc
          ["11-13"], // dj
          ["11-13"], // dv
          ["11:30-13", "20-22"], //dss
        ],
        coordinates: [41.79077455405764, 3.048265483731843],
      },
      {
        id: "dau_miquel",
        type: "menu",
        img: "dau_can_miquel-OK",
        price: "25.95",
        restaurant: "EL DAU DE CAN MIQUEL",
        address: "C/ Especiers, 5",
        telephone: "616 770 854",
        website: "www.canmiquel.cat",
        menu: `
          MENÚ (taula completa)
          
          Vichyssoise de pera amb form gorgonzola i nous del país
          Ensaladilla marinera “Costa Brava Style”
          Carxofa trossejada al toc de brasa amb cansalada i encenalls d’ibèric
          Niu de patates palla & ou poché i perles cruixents de sobrassada
          Costella Angus infiltrada sobre llit de parmentier trufat i el seu suc...
          Bunyol XL de vent farcit amb xoco negre Valrhona
    
          Copa de vi o cervesa o aigua / persona                                                                                                                                        
          
          Preu: 25,95 € /persona (IVA inclòs)
          `,
        schedule2: `Divendres, dissabte i diumenge migdia: 1r inici a les 13.30 h i 2n inici a les 14 h
          Divendres i dissabte nit: 1r inici a les 20.30 h 2n inici a les 21 h`,
        schedule: [
          ["13:30-14"], //dg
          [], // dill
          [], // dts
          [], // dmc
          [], // dj
          ["13:30-14", "20:30-21"], // dv
          ["13:30-14", "20:30-21"], //dss
        ], // WARNING
        coordinates: [41.78100268210256, 3.0286596837314104],
      },
      {
        id: "llevanti",
        type: "menu",
        img: "llevanti-OK",
        price: "35",
        restaurant: "LLEVANTÍ",
        address: "Passeig dels Guíxols, 8",
        telephone: "972 10 38 18",
        menu: `
          MENÚ (taula completa)
          
          Barqueta de endívia amb brandada de bacallà i anxoves de Sant Feliu 
          Tàrtar de Salmó
          Saltejat d’espàrrecs amb calamar i mongetes de Santa Pau 
          Suprema de corbina sobre llit de salsa de pèsols amb toc de cítrics 
          Lingot de carrillera de vedella amb reducció de salsa de prunes 
          Maduixes al pebre rosa amb gelat de vainilla de Madagascar 
    
          Copa de vi o cava o cervesa /persona
          
          Preu: 35€ / persona (IVA inclòs)
          `,
        schedule2: `De dimarts a diumenge de 20 a 23 h`,
        schedule: [
          ["20-23"], //dg
          [], // dill
          ["20-23"], // dts
          ["20-23"], // dmc
          ["20-23"], // dj
          ["20-23"], // dv
          ["20-23"], //dss
        ],
        coordinates: [41.781924679825266, 3.0327461837314926],
      },
      {
        id: "metronon",
        type: "menu",
        img: "metronon-OK",
        price: "22",
        restaurant: "METRONON GASTRO BAR – HOTEL ELKE",
        address: "Rambla Portalet, 8-10 ",
        telephone: "872 20 21 08",
        website: "www.elkehotel.com",
        menu: `
          MENÚ
          
          Formatge fregit i confitura de fruits vermells amb rúcula i tomata cherry
          Trinxat tradicional de patata, col i cansalada
          Mandonguilles guisades amb sípia i cremós d'all groc
          Rotlles de salmó en pasta de full amb suquet de peix i xocolata blanca
          Risotto cremós de bolets i gambes
          Xocolata en textures
    
          Copa de vi o cervesa o aigua / persona
          
          Preu: 23€ / persona (IVA inclòs)
          `,
        schedule2: `De dimecres a diumenge de 13.00 a 14.30 h i de 19.30 a 21.30 h`,
        schedule: [
          ["13-14:30", "19:30-21:30"], //dg
          [], // dill
          [], // dts
          ["13-14:30", "19:30-21:30"], // dmc
          ["13-14:30", "19:30-21:30"], // dj
          ["13-14:30", "19:30-21:30"], // dv
          ["13-14:30", "19:30-21:30"], //dss
        ],
        coordinates: [41.781942091327984, 3.0318554204996544],
      },
      {
        id: "nomo",
        type: "menu",
        img: "nomo-OK",
        price: "40",
        restaurant: "NOMO NÀUTIC",
        address: "Escullera del Port, s/n",
        telephone: "972 28 21 00",
        website: "www.gruponomo.com",
        menu: `
          MENÚ (taula completa)
          
          Edamame de tòfona 
          Croqueta de cua de bou
          Fideus cruixents amb llagostins i salsa picant
          Spicy tuna maki. Roll de tonyina i maionesa 
          Assortiment de sushi 
          Mochi de te verd
    
          Aigua, refresc, cervesa, vi blanc o negre / persona
          
          Preu: 40€ / persona (IVA inclòs)
          `,
        schedule2: `De dimarts a diumenge de 13.30 a 17 h i de 20 a 23 h`,
        schedule: [
          ["13:30-17", "20-23"], //dg
          [], // dill
          ["13:30-17", "20-23"], // dts
          ["13:30-17", "20-23"], // dmc
          ["13:30-17", "20-23"], // dj
          ["13:30-17", "20-23"], // dv
          ["13:30-17", "20-23"], //dss
        ],
        coordinates: [41.77870005772045, 3.0388964541940178],
      },
      {
        id: "terra",
        type: "menu",
        img: "terra-OK",
        price: "35",
        restaurant: "TERRA - HOTEL ALÀBRIGA",
        address: "Ctra. de Sant Pol, 634",
        telephone: "872 20 06 06",
        website: "www.hotelalabriga.com",
        menu: `
          MENÚ
          
          Ostra amb perla de Jeréz i boira marina
          Tàrtar de gamba vermella amb kumquat
          Sopa de bacallà semi-fumat amb verduretes i pasta de full
          Arròs de presa de porc Duroc amb bolets i foie
          Pop grill amb tomàquet confitat
          Magret d’ànec marinat amb compota de poma i emulsió d’herbes
    
          Copa de vi o cava /persona
          
          Preu: 35€ / persona (IVA inclòs)         
          `,
        schedule2: `Dilluns, dimarts, diumenges i festius de 13 a 16 h i de 20 a 23 h`, // WARNING
        schedule: [
          ["13-16", "20-23"], //dg
          ["13-16", "20-23"], // dill
          ["13-16", "20-23"], // dts
          [], // dmc
          [], // dj
          [], // dv
          [], //dss
        ],
        coordinates: [41.78550756917424, 3.045163039552858],
      },
    ],
  };

  const ganxotapesTardor24: IGanxoTapes = {
    season: "Tardor 24",
    cover: "ganxotapes-tardor-24.png",
    description: `
    Ganxotapes Tardor 2024 SANT FELIU DE GUÍXOLS

    Del 18 d'octubre al 17 de novembre de 2024

    Ganxotapa + beguda*. Preu 3€
    Menú de 6 tapes + 1 beguda* / persona

    *cervesa, vi o aigua
    `,
    duration: ["2024-10-18", "2024-11-17"],
    menu: [
      {
        id: "220_sushi",
        type: "tapa",
        img: "220_sushi-GTt24",
        price: "3",
        restaurant: "220 SUSHI",
        address: "C/ Major, 30",
        telephone: "683 557 956",
        website: "www.220sushi.com",
        title: "'Zamburiña' amb maio de kimchi, ous de peix volador i ratlladura de llima",
        schedule2: `De dimecres a diumenge de 12 a 13 h i de 19 a 20 h
          Dilluns i dimarts tancat`,
        schedule: [
          ["12-13", "19-20"], //dg
          [], // dill
          [], // dts
          ["12-13", "19-20"], // dmc
          ["12-13", "19-20"], // dj
          ["12-13", "19-20"], // dv
          ["12-13", "19-20"], //dss
        ],
        coordinates: [41.782046079108376, 3.0309332972241947],
        allergies: ["celiac"],
        allergies2: "*Apta per a celíacs"
      },
      {
        id: "irla",
        type: "tapa",
        img: "casa_irla-GTt24",
        price: "3",
        restaurant: "BAR CASA IRLA",
        address: "C/ Algavira, 65-69",
        telephone: "688 421 157",
        website: "www.restaurantcasairla.cat",
        title:
          "Amanida russa de pollastre amb focaccia",
        schedule2: `Dimecres de 20 a 22 h
          De dijous a diumenge de 13.30 a 15 h i de 20 a 22 h`,
        schedule: [
          ["13:30-15", "20-22"], //dg
          [], // dill
          [], // dts
          ["20-22"], // dmc
          ["13:30-15", "20-22"], // dj
          ["13:30-15", "20-22"], // dv
          ["13:30-15", "20-22"], //dss
        ],
        coordinates: [41.7842548115285, 3.0299850450701085],
      },
      {
        id: "latino",
        type: "tapa",
        img: "sabor_latino-GTt24",
        price: "3",
        restaurant: "BAR SABOR LATINO",
        address: "C/ Lugo, 10",
        telephone: "631 988 084",
        title:
          "Montadito saladito (Pa amb tomàquet, pernil salat i oliva)",
        schedule2: `Cada dia de 12 a 17 h`,
        schedule: [
          ["12-17"], //dg
          ["12-17"], // dill
          ["12-17"], // dts
          ["12-17"], // dmc
          ["12-17"], // dj
          ["12-17"], // dv
          ["12-17"], //dss
        ],
        coordinates: [41.789237, 3.0278511],
      },
      {
        id: "les_dunes",
        type: "tapa",
        img: "les_dunes-GTt24",
        price: "3",
        restaurant: "BARCAROLA HOTEL-RESTAURANT LES DUNES",
        address: "C/ Pablo Picasso, 1-19",
        telephone: "972 32 69 32",
        website: "www.hotelbarcarola.es",
        title: "Galeta salada de gamba blanca de la costa",
        schedule2: `Cada dia de 12 a 13 h`,
        schedule: [
          ["12-13"], //dg
          ["12-13"], // dill
          ["12-13"], // dts
          ["12-13"], // dmc
          ["12-13"], // dj
          ["12-13"], // dv
          ["12-13"], //dss
        ],
        coordinates: [41.79085997035012, 3.0472307914956467],
      },
      {
        id: "estacio",
        type: "tapa",
        img: "cafè_lestació-GTt24",
        price: "3",
        restaurant: "BURGER CAFÈ L'ESTACIÓ",
        address: "Rambla de la Generalitat, 27",
        telephone: "972 32 62 74",
        title: "Schiacciata de mortadel·la, burrata i pesto de festucs",
        schedule2: `De dilluns a divendres de 19 a 21 h
          Dissabte de 12 a 14 h i de 19 a 21 h
          Diumenge de 12 a 14 h`,
        schedule: [
          ["12-14"], //dg
          ["19-21"], // dill
          ["19-21"], // dts
          ["19-21"], // dmc
          ["19-21"], // dj
          ["19-21"], // dv
          ["12-14", "19-21"], //dss
        ],
        coordinates: [41.7871111, 3.0314534],
      },
      {
        id: "colao",
        type: "tapa",
        img: "cafè_colao-GTt24",
        price: "3",
        restaurant: "CAFÉ COLAO",
        address: "Av. Catalunya, 107",
        telephone: "972 97 34 88",
        title: "Torrada de “zamburiñas” al Bloody Mary",
        allergies: ["celiac"],
        allergies2: "*Apta per a celíacs",
        schedule2: `De dimarts a diumenge d'11.30 a 13 h i de 19.30 a 21.30 h
          Dilluns tancat`,
        schedule: [
          ["11:30-13", "19:30-21:30"], //dg
          [], // dill
          ["11:30-13", "19:30-21:30"], // dts
          ["11:30-13", "19:30-21:30"], // dmc
          ["11:30-13", "19:30-21:30"], // dj
          ["11:30-13", "19:30-21:30"], // dv
          ["11:30-13", "19:30-21:30"], //dss
        ],
        coordinates: [41.79300691927974, 3.0215333350942783],
      },
      {
        id: "stop",
        type: "tapa",
        img: "cafeteria_stop-GTt24",
        price: "3",
        restaurant: "CAFETERIA STOP",
        address: "Paratge Bujonis, s/n",
        telephone: "972 32 71 80",
        website: " www.stopself.com",
        title: "Canelons Portobello",
        schedule2: `De dilluns a divendres de 9 a 18 h`,
        schedule: [
          [], //dg
          ["9-18"], // dill
          ["9-18"], // dts
          ["9-18"], // dmc
          ["9-18"], // dj
          ["9-18"], // dv
          [], //dss
        ],
        coordinates: [41.79381039201868, 3.019579130191797],
      },
      {
        id: "can_jordi",
        type: "tapa",
        img: "can_jordi-GTt24",
        price: "3",
        restaurant: "CAN JORDI",
        address: "Passeig del Mar, 5, local 1",
        telephone: "633 406 569",
        telephone2: "642 407 604",
        title: "Pastisset hondureny",
        allergies2: "*Apta per a celíacs",
        allergies: ["celiac"],
        schedule2: `Dilluns, dimarts, dimecres, divendres i dissabte de 10 a 13 h
          Dijous tancat`,
        schedule: [
          ["10-13"], //dg
          ["10-13"], // dill
          ["10-13"], // dts
          ["10-13"], // dmc
          [], // dj
          ["10-13"], // dv
          ["10-13"], //dss
        ],
        coordinates: [41.7800917, 3.0284587],
      },
      {
        id: "can_julia",
        type: "tapa",
        img: "can_julià-GTt24",
        price: "3",
        restaurant: "CAN JULIÀ",
        address: "La Rambla, 46",
        telephone: "972 32 42 09",
        title: "Bacallà confitat amb mussolina d'allets tendres",
        allergies2: "*Apta per a celíacs",
        allergies: ["celiac"],
        schedule2: `Dilluns, dimecres, dijous, divendres, dissabte i diumenge d'11 a 13 h i de 19 a 21 h
          Dimarts tancat`,
        schedule: [
          ["11-13", "19-21"], //dg
          ["11-13", "19-21"], // dill
          [], // dts
          ["11-13", "19-21"], // dmc
          ["11-13", "19-21"], // dj
          ["11-13", "19-21"], // dv
          ["11-13", "19-21"], //dss
        ],
        coordinates: [41.78000447905984, 3.028752609061523],
      },
      {
        id: "kiku",
        type: "tapa",
        img: "can_kiku-GTt24",
        price: "3",
        restaurant: "CAN KIKU",
        address: "C/ Major, 10-12",
        telephone: "972 28 22 95 ",
        website: "www.restaurantcankiku.com",
        title:
          "Xurrasco de vaca madurada amb espècies, cremós d’api i nap, patata kennebec amb salsa chimichurri i xips de plàtan mascle",
        allergies2: "*Apta per a celíacs",
        allergies: ["celiac"],
        schedule2: `Cada dia de 10.30 a 12.15 h i de 16.30 a 19.15 h`,
        schedule: [
          ["10:30-12:15", "16:30-19:15"], //dg
          ["10:30-12:15", "16:30-19:15"], // dill
          ["10:30-12:15", "16:30-19:15"], // dts
          ["10:30-12:15", "16:30-19:15"], // dmc
          ["10:30-12:15", "16:30-19:15"], // dj
          ["10:30-12:15", "16:30-19:15"], // dv
          ["10:30-12:15", "16:30-19:15"], //dss
        ],
        coordinates: [41.78162490218806, 3.0301914238992214],
      },
      {
        id: "centre_civic_vilartagues",
        type: "tapa",
        img: "cc_vilartagues-GTt24",
        price: "3",
        restaurant: "CENTRE CÍVIC VILARTAGUES",
        address: "Pl. Salvador Espriu, s/n",
        telephone: "626 438 204",
        title: "Seitó farcit de gambes de la Costa Brava",
        schedule2: `Dilluns, dimarts, dimecres, divendres, dissabte i diumenge d'11 a 13 h i de 17 a 19 h
          Dijous tancat`,
        schedule: [
          ["11-13", "17-19"], //dg
          ["11-13", "17-19"], // dill
          ["11-13", "17-19"], // dts
          ["11-13", "17-19"], // dmc
          [], // dj
          ["11-13", "17-19"], // dv
          ["11-13", "17-19"], //dss
        ],
        coordinates: [41.7921033, 3.0241836],
      },
      {
        id: "raco_sant_pol",
        type: "tapa",
        img: "racó_st._pol-GTt24",
        price: "3",
        restaurant: "EL RACÓ DE SANT POL (CA LA CARMEN)",
        address: "Platja de Sant Pol, s/n",
        telephone: "972 82 24 84",
        title: "Flam d'alls tendres amb gambes i crema de ceps",
        allergies2: `*Apta per a celíacs`,
        allergies: ["celiac"],
        schedule2: `Dilluns, dimecres, dijous, divendres, dissabte i diumenge de 12.45 a 14 h i de 19.45 a 21 h
          Dimarts tancat`,
        schedule: [
          ["12:45-14", "19:45-21"], //dg
          ["12:45-14", "19:45-21"], // dill
          [], // dts
          ["12:45-14", "19:45-21"], // dmc
          ["12:45-14", "19:45-21"], // dj
          ["12:45-14", "19:45-21"], // dv
          ["12:45-14", "19:45-21"], //dss
        ],
        coordinates: [41.7887241, 3.0449325],
      },
      {
        id: "tinglado",
        type: "tapa",
        img: "tinglado-GTt24",
        price: "3",
        restaurant: "EL TINGLADO ",
        address: "Escullera del port, s/n",
        telephone: "972 82 26 05 ",
        website: "www.eltinglado.cat",
        title: "Rotllet de salmó macerat amb espàrrec blanc i un toc d'all i oli",
        schedule2: `Cada dia d'11 a 13 h
          Divendres i dissabte de 20 a 21 h`,
        schedule: [
          ["11-13"], //dg
          ["11-13"], // dill
          ["11-13"], // dts
          ["11-13"], // dmc
          ["11-13"], // dj
          ["11-13", "20-21"], // dv
          ["11-13", "20-21"], //dss
        ],
        coordinates: [41.77872149378369, 3.0382235721772575],
      },
      {
        id: "mercat",
        type: "tapa",
        img: "euro_mercat-GTt24",
        price: "3",
        restaurant: "EURO DEL MERCAT",
        address: "Plaça del Mercat (interior Mercat Cobert, 1r pis)",
        telephone: "659 222 122",
        title: "Cassoleta de calamarsets amb ceba",
        allergies2: `*Apta per a celíacs`,
        allergies: ["celiac"],
        schedule2: `De dimarts a diumenge de 10 a 12:30 h
          Dilluns tancat`,
        schedule: [
          ["10-12:30"], //dg
          [], // dill
          ["10-12:30"], // dts
          ["10-12:30"], // dmc
          ["10-12:30"], // dj
          ["10-12:30"], // dv
          ["10-12:30"], //dss
        ],
        coordinates: [41.78065967678729, 3.0290825818897815],
      },
      {
        id: "formatgeria_quim",
        type: "tapa",
        img: "can_quim-GTt24",
        price: "3",
        restaurant: "FORMATGERIA CAN QUIM",
        address: "Passeig del Mar, 13-16",
        telephone: "605 167 737",
        website: "www.canquim.es",
        title: "Coulant de formatge amb salsa de ceps i un toc de tòfona",
        allergies2: `*Apta per a vegetarians i celíacs`,
        allergies: ["vegetarian", "celiac"],
        schedule2: `De dilluns a diumenge d'11 a 14 h
          Dimecres, dijous i divendres de 18.30 a 20 h
          Dissabte de 19 a 20 h

          Vacances a consultar`,
        schedule: [
          ["11-14"], //dg
          ["11-14"], // dill
          ["11-14"], // dts
          ["11-14", "18:30-20"], // dmc
          ["11-14", "18:30-20"], // dj
          ["11-14", "18:30-20"], // dv
          ["11-14", "19-20"], //dss
        ],
        coordinates: [41.78071767718076, 3.0294083648679],
      },
      {
        id: "green_burguer",
        type: "tapa",
        img: "green_burguer-GTt24",
        price: "3",
        website: "https://www.greenandburger.com/",
        restaurant: "GREEN & BURGER BY BIOCENTER",
        address: "C/ Sant Joan, 36",
        telephone: "872 00 75 00",
        title: "Chévere Burger",
        allergies2: `*Apta per a vegetarians, vegans i celíacs`,
        allergies: ["vegetarian", "vegan", "celiac"],
        schedule2: `De dijous a dissabte de 13 a 15.30 h i de 19.30 a 22.00 h
        Diumenge de 13 a 15.30 h`,
        schedule: [
          ["13-15:30"], //dg
          [], // dill
          [], // dts
          [], // dmc
          ["13-15:30", "19:30-22"], // dj
          ["13-15:30", "19:30-22"], // dv
          ["13-15:30", "19:30-22"], //dss
        ],
        coordinates: [41.781378280154016, 3.028772897224204],
      },
      {
        id: "guixols_cafe",
        type: "tapa",
        img: "guíxols_cafè-GTt24",
        price: "3",
        restaurant: "GUÍXOLS CAFÈ",
        address: "C/ Gravina, 1",
        telephone: "645 603 785",
        title:
          "Pilota Guíxols (pa, carn picada, patata i hummus de cigrons)",
        schedule2: `Cada dia de 9 a 23 h
        Dimarts tancat`,
        schedule: [
          ["9-23"], //dg
          ["9-23"], // dill
          [], // dts
          ["9-23"], // dmc
          ["9-23"], // dj
          ["9-23"], // dv
          ["9-23"], //dss
        ],
        coordinates: [41.783309427356194, 3.0364971116056036],
      },
      {
        id: "hot_dog",
        type: "tapa",
        img: "hot_dog-GTt24",
        price: "3",
        restaurant: "HOT-DOG",
        address: "C/ Sant Antoni, 40",
        telephone: "616 65 53 42",
        title: "La piloteta de bacó",
        schedule2: `Cada dia de 12 a 23 h
          Dijous tancat`,
        schedule: [
          ["12-23"], //dg
          ["12-23"], // dill
          ["12-23"], // dts
          ["12-23"], // dmc
          [], // dj
          ["12-23"], // dv
          ["12-23"], //dss
        ],
        holidays: [["2024-11-11", "2024-11-17"]],
        coordinates: [41.78252077745284, 3.0302381107170118],
      },
      {
        id: "gaviota",
        type: "tapa",
        img: "la_gaviota-GTt24",
        price: "3",
        restaurant: "LA GAVIOTA BAR TAPES",
        address: "La Rambla, 40",
        telephone: "972 32 46 14",
        title: "Empanada de pollastre",
        schedule2: `De dimarts a dissabte d'11 a 12.30 h i de 19 a 20.30 h
        Diumenge d'11 a 12.30 h
        Dilluns tancat`,
        schedule: [
          ["11-12:30"], //dg
          [], // dill
          ["11-12:30", "19-20:30"], // dts
          ["11-12:30", "19-20:30"], // dmc
          ["11-12:30", "19-20:30"], // dj
          ["11-12:30", "19-20:30"], // dv
          ["11-12:30", "19-20:30"], //dss
        ],
        coordinates: [41.78177019605842, 3.0293571221020223],
      },
      {
        id: "muralla",
        type: "tapa",
        img: "la_muralla-GTt24",
        price: "3",
        restaurant: "LA MURALLA",
        address: "Plaça del Mercat, 20",
        telephone: "652 91 58 48",
        website: "www.lamuralla.weebly.com",
        title: "Mini enchilada hondurenya",
        allergies2: "*Apta per a celíacs i adaptable per a vegetarians i vegans",
        allergies: ["celiac", "vegan", "vegetarian"],
        schedule2: `Dilluns, dimarts, dimecres, divendres i dissabte d'11 a 13.30 h i de 17.30 a 21 h
          Diumenge d'11 a 13.30 h
          Dijous tancat `,
        schedule: [
          ["11-13:30"], //dg
          ["11-13:30", "17:30-21"], // dill
          ["11-13:30", "17:30-21"], // dts
          ["11-13:30", "17:30-21"], // dmc
          [], // dj
          ["11-13:30", "17:30-21"], // dv
          ["11-13:30", "17:30-21"], //dss
        ],
        coordinates: [41.780195112187805, 3.028230477858629],
      },
      {
        id: "trobada",
        type: "tapa",
        img: "la_trobada-GTt24",
        price: "3",
        restaurant: "LA TROBADA",
        address: "C/ Indústria, 1",
        telephone: "972 00 67 05",
        title: "Niu de la tardor (hummus de castanya amb olivada, parmesà i castanya confitada)",
        allergies: ["vegan", "vegetarian"],
        allergies2: "*Apta per a vegetarians i vegans",
        schedule2: `De dilluns a diumenge d'11 a 14.30 h
        Dijous tancat`,
        schedule: [
          ["11-14:30"], //dg
          ["11-14:30"], // dill
          ["11-14:30"], // dts
          ["11-14:30"], // dmc
          [], // dj
          ["11-14:30"], // dv
          ["11-14:30"], //dss
        ],
        coordinates: [41.782391867454166, 3.034963302333823],
      },
      {
        id: "gordacos",
        type: "tapa",
        img: "gordacos-GTt24",
        price: "3",
        restaurant: "LOS GORDACOS",
        address: "C/ Mossèn Cinto Verdaguer, 12",
        telephone: "615 644 458",
        title: "TaContento (Truita de blat, farcida de pollastre i salses de la casa)",
        allergies2: "*Apta per a celíacs",
        allergies: ["celiac"],
        schedule2: `Dilluns, dimarts, divendres, dissabte i diumenge d'11 a 13 h i de 16:30 a 20 h
        Dijous de 16:30 a 20 h
        Dimecres tancat`,
        schedule: [
          ["11-13", "16:30-20"], //dg
          ["11-13", "16:30-20"], // dill
          ["11-13", "16:30-20"], // dts
          [], // dmc
          ["16:30-20"], // dj
          ["11-13", "16:30-20"], // dv
          ["11-13", "16:30-20"], //dss
        ],
        coordinates: [41.78196374211213, 3.029696900375177],
      },
      {
        id: "malcriat",
        type: "tapa",
        img: "malcriat-GTt24",
        price: "3",
        restaurant: "MALCRIAT",
        address: "Pg. del Mar, 33-35 baixos",
        telephone: "972 32 10 23",
        title:
          "Pizza turca amb carn de kebab de pollastre, crema agra de burrata i salsa siracha amb vinagre de magrana",
        schedule2: `De dimarts a diumenge de 12.45 a 15.30 h i de 20 a 22.30 h
          Dilluns tancat`,
        schedule: [
          ["12:45-15:30", "20-22:30"], //dg
          [], // dill
          ["12:45-15:30", "20-22:30"], // dts
          ["12:45-15:30", "20-22:30"], // dmc
          ["12:45-15:30", "20-22:30"], // dj
          ["12:45-15:30", "20-22:30"], // dv
          ["12:45-15:30", "20-22:30"], //dss
        ],
        coordinates: [41.781342511217915, 3.0310785826112614],
      },
      {
        id: "sant_benet",
        type: "tapa",
        img: "st._benet-GTt24",
        price: "3",
        restaurant:
          "SANT BENET,                                                                      ",
        address: "Passeig del Mar, 5",
        telephone: "645 603 785",
        title: "Cruxi Benet (Botifarra de perol, pasta brie, alfàbrega i melmelada de tomàquet)",
        schedule2: `Cada dia de 12 a 22 h
        Dilluns tancat`,
        schedule: [
          ["12-22"], //dg
          [], // dill
          ["12-22"], // dts
          ["12-22"], // dmc
          ["12-22"], // dj
          ["12-22"], // dv
          ["12-22"], //dss
        ],
        coordinates: [41.780147605746734, 3.028789288404415],
      },
      {
        id: "pink_elephant",
        type: "tapa",
        img: "pink_elephant-GTt24",
        price: "3",
        restaurant: "THE PINK ELEPHANT",
        website: "www.thepinkelephant.com",
        address: "Passeig de Sant Pol, 97",
        telephone: "972 82 68 51",
        title: "Causa Pink (salsa golf, gamba de Palamós, maionesa de maizena i alvocat )",
        allergies2: "*Apta per a celíacs",
        allergies: ["celiac"],
        schedule2: `De dijous a diumenge de 10 a 18 h`,
        schedule: [
          ["10-18"], //dg
          [], // dill
          [], // dts
          [], // dmc
          ["10-18"], // dj
          ["10-18"], // dv
          ["10-18"], //dss
        ],
        coordinates: [41.789947395750936, 3.0468435790381974],
      },
      {
        id: "villa_laura",
        type: "tapa",
        img: "villa_laura-GTt24",
        price: "3",
        restaurant: "VILLA LAURA",
        address: "Passeig de Sant Pol, 135",
        telephone: "972 32 63 38",
        website: "www.hotelsantpol.com",
        title: "Bondiola a la cervesa amb mel i mostassa, patates a l’antiga i ou fregit",
        schedule2: `De dilluns a divendres d'11 a 13 h
        Dissabte d’11.30 a 13 h i de 20 a 22 h
        Diumenges d’11.30 a 13 h
        Dimecres tancat`,
        schedule: [
          ["11:30-13"], //dg
          ["11-13"], // dill
          ["11-13"], // dts
          [], // dmc
          ["11-13"], // dj
          ["11-13"], // dv
          ["11:30-13", "20-22"], //dss
        ],
        coordinates: [41.79077455405764, 3.048265483731843],
      },
      {
        id: "diferent",
        type: "menu",
        img: "different-GTt24",
        price: "25",
        restaurant: "DIFFERENT BY MIQUEL PELLÓ",
        address: "C/ Sant Pere, 33",
        telephone: "872 26 51 01",
        website: "www.differentrestaurant.cat",
        menu: `MENÚ (taula completa)

          Vieires amb foie
          Crema d’espàrrecs verds amb encenalls de pernil
          Cistell de plàtan verd farcit de ceviche de corvina, mango i poma
          Rotllet de llenguado de la costa al cava
          Timbal de parmentier de moniato i galta de porc en la seva salsa
          Crema de llimona casolana

          Copa de vi o cervesa o aigua / persona

          Preu: 25 € /persona (IVA inclòs)
        `,
        allergies2: "*Apta per a celíacs",
        allergies: ["celiac"],
        schedule2: `De dimecres a dissabte migdia: 1r inici a les 13.30 i 2n inici a les 14.30 h
          De dimecres a dissabte vespre: 1r inici 20.30 i 2n inici 21.30 h
          Diumenge migdia: 1r inici a les 13.30 i 2n inici a 14.30 h
          Diumenge tarda, dilluns i dimarts tancat`,
        schedule: [
          ["13:30-14:30"], //dg
          [], // dill
          [], // dts
          ["13:30-14:30", "20:30-21:30"], // dmc
          ["13:30-14:30", "20:30-21:30"], // dj
          ["13:30-14:30", "20:30-21:30"], // dv
          ["13:30-14:30", "20:30-21:30"], //dss
        ], // WARNING
        holidays: [["2023-10-14", "2023-10-22"]],
        coordinates: [41.781299733714114, 3.029072195828873],
      },
      {
        id: "dau_miquel",
        type: "menu",
        img: "dau_can_miquel-GTt24",
        price: "27.50",
        restaurant: "EL DAU DE CAN MIQUEL",
        address: "C/ Especiers, 5",
        telephone: "616 770 854",
        website: "www.canmiquel.cat",
        menu: `MENÚ (taula completa)

          Lingot cremós de perol trompetes de la mort i ceba caramel·litzada
          Tempura de shiso, stracciatella, cansalada ibèrica i oli trufat
          Ravioli XL de porro i gamba amb salsa mediterrània
          Trencadís de flor de carxofa amb patata palla, ibèric i ou pouché
          Brioix d’steak tàrtar “entre boires”
          Mojito cubà a la nostra manera
          Copa de vi o cervesa o aigua / persona                                                                                                                                         

          Preu: 27,50 € /persona (IVA inclòs)
          `,
        schedule2: `Divendres, dissabte i diumenge migdia: 1r inici a les 13.30 h i 2n inici a les 14 h
          Divendres i dissabte nit: 1r inici a les 20.30 h 2n inici a les 21 h`,
        schedule: [
          ["13:15-14"], //dg
          [], // dill
          [], // dts
          [], // dmc
          [], // dj
          ["13:15-14", "20:15-21"], // dv
          ["13:15-14", "20:15-21"], //dss
        ], // WARNING
        coordinates: [41.78100268210256, 3.0286596837314104],
      },
      {
        id: "trinquet",
        type: "menu",
        img: "el_trinquet-GTt24",
        price: "32",
        restaurant: "EL TRINQUET",
        address: "C/Sant Pere, 26 ",
        telephone: "722 550 156",
        menu: `MENÚ (taula completa)

        Vermut artesanal acompanyat de la nostra gilda casolana amb anxova de l’Escala, “piparra” i oliva farcida d’anxova
        Steak tàrtar de vedella sobre milfulls de patata brava
        Croqueta de garoina
        Crema de nyàmeres i les seves xips
        Catxoflino de cuixa de pollastre de pagès rostida amb escamarlans
        Pastís de formatge
        Copa de vi o cervesa o aigua / persona                                                                                                                                        

        Preu: 32 € /persona (IVA inclòs)
        `,
        schedule2: `De dimecres a diumenge de 13 a 15 h`,
        schedule: [
          ["13-15"], //dg
          [], // dill
          [], // dts
          ["13-15"], // dmc
          ["13-15"], // dj
          ["13-15"], // dv
          ["13-15"], //dss
        ],
        coordinates: [41.78126923209342, 3.0291835074997953],
      },
      {
        id: "metronon",
        type: "menu",
        img: "metronon-GTt24",
        price: "27",
        restaurant: "METRONON GASTRO BAR – HOTEL ELKE",
        address: "Rambla Portalet, 8-10 ",
        telephone: "872 20 21 08",
        website: "www.elkehotel.com",
        menu: `MENÚ

          Albergínia en escabetx lleugera
          Xarrup de crema de carbassa i tàrtar de gamba amb un toc d’anís
          Cua de bou amb parmentier de patata a la vainilla amb algues i salsa de tomàquet
          Mini bao amb melós de braó a baixa temperatura i salsa de mostassa
          Taco de bacallà gratinat amb formatge de cabra i cremós de moniato al caramel
          Mousse de carbassa i mandarina amb castanya i gelat de xocolata i crumble
          Copa de vi o cervesa o aigua/persona

          Preu: 27€ / persona (IVA inclòs)
          `,
        schedule2: `De dimecres a diumenge de 13 a 15.30 h i de 20 a 22.30 h`,
        schedule: [
          ["13-15:30", "20-22:30"], //dg
          [], // dill
          [], // dts
          ["13-15:30", "20-22:30"], // dmc
          ["13-15:30", "20-22:30"], // dj
          ["13-15:30", "20-22:30"], // dv
          ["13-15:30", "20-22:30"], //dss
        ],
        coordinates: [41.781942091327984, 3.0318554204996544],
      },
      {
        id: "nomo",
        type: "menu",
        img: "nomo-GTt24",
        price: "40",
        restaurant: "NOMO NÀUTIC",
        address: "Escullera del Port, s/n",
        telephone: "972 28 21 00",
        website: "www.gruponomo.com",
        menu: `MENÚ (taula completa)

          Edamame amb sèsam picant
          Croqueta japonesa de pop
          Fideus cruixents amb llagostins i salsa picant
          Spicy Salmon maki. Roll de salmó i maionesa
          Rainbow Tuna Roll. Roll de ventresca, tempura d’alvocat i ceba caramel·litzada.
          Panna Cotta de Taro
          Aigua, refresc, cervesa, vi blanc o negre /persona 

          Preu: 40,00 € /persona (IVA inclòs)
          `,
        schedule2: `De dimarts a diumenge de 13.30 a 17 h i de 20 a 23 h`,
        schedule: [
          ["13:30-17", "20-23"], //dg
          [], // dill
          ["13:30-17", "20-23"], // dts
          ["13:30-17", "20-23"], // dmc
          ["13:30-17", "20-23"], // dj
          ["13:30-17", "20-23"], // dv
          ["13:30-17", "20-23"], //dss
        ],
        coordinates: [41.77870005772045, 3.0388964541940178],
      },
      {
        id: "tacos_king",
        type: "menu",
        img: "tacos_king-GTt24",
        price: "15",
        restaurant: "TACO'S KING",
        address: "C/ de la Indústria, 42, Local 2",
        telephone: "674 06 31 29",
        menu: `MENÚ

        Aletes Barboue
        Samosas
        Calamars
        Pollastre Tandori
        Pastís de formatge
        Pastís de xocolata
        Aigua, cervesa o copa de vi/persona

        Preu: 15€ / persona (IVA inclòs)    
        `,
        schedule2: `Cada dia de 12.30 a 20.30 h
          Dimarts tancat`,
        schedule: [
          ["12:30-20:30"], //dg
          ["12:30-20:30"], // dill
          [], // dts
          ["12:30-20:30"], // dmc
          ["12:30-20:30"], // dj
          ["12:30-20:30"], // dv
          ["12:30-20:30"], //dss
        ],
        coordinates: [41.78386345299835, 3.034288554730909],
      },
      {
        id: "terra",
        type: "menu",
        img: "terra-GTt24",
        price: "38",
        restaurant: "TERRA - HOTEL ALÀBRIGA",
        address: "Ctra. de Sant Pol, 634",
        telephone: "872 20 06 06",
        website: "www.hotelalabriga.com",
        menu: `MENÚ

          Sopa de crema de ceps a l'Armagnac
          Bikini de llom ibèric amb formatge comté i tòfona
          Tàrtar de vedella amb duo de maioneses: all blanc i rovell
          Llom de lluç amb garoines
          Tataki de magret a la taronja
          Brownie de nou pecana amb bruma d'or
          Copa de vi/persona

          Preu: 38€ / persona (IVA inclòs)       
          `,
        schedule2: `Tots els dies de 13 a 15 h i de 20 a 22 h`, // WARNING
        schedule: [
          ["13-15", "20-22"], //dg
          ["13-15", "20-22"], // dill
          ["13-15", "20-22"], // dts
          ["13-15", "20-22"], // dmc
          ["13-15", "20-22"], // dj
          ["13-15", "20-22"], // dv
          ["13-15", "20-22"], //dss
        ],
        coordinates: [41.78550756917424, 3.045163039552858],
      },
    ],
  };
  
  const getEnumeratedGanxotapes = (ganxotapesData: IGanxoTapes): IGanxoTapes => {
    const ganxotapesMenuWithTitle = ganxotapesData.menu.map(
      (ganxotapa, index) => ({
        ...ganxotapa,
        restaurant: `${index + 1}- ${ganxotapa.restaurant}`,
      }),
    );
  
    return { ...ganxotapesData, menu: ganxotapesMenuWithTitle };
  };
  
  export default getEnumeratedGanxotapes(ganxotapesTardor24);
  