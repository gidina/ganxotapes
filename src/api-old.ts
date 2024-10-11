export type IGanxoTapa = {
  id: string;
  type: "tapa" | "menu";
  img: string;
  price: string;
  restaurant: string;
  address: string;
  telephone: string;
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
};

const ganxotapesTardor23: IGanxoTapes = {
  season: "Tardor 23",
  duration: ["2023-10-20", "2023-11-19"],
  menu: [
    {
      id: "220_sushi",
      type: "tapa",
      img: "220_sushi.re",
      price: "3",
      restaurant: "1- 220 SUSHI",
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
      restaurant: "2- A LO CUBANO",
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
      restaurant: "3- BAR AVENIDA",
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
      restaurant: "4- BAR CASA IRLA",
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
      restaurant: "5- BARCAROLA HOTEL-RESTAURANT LES DUNES",
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
      restaurant: "6- CAFÉ COLAO",
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
      restaurant: "7- CAFETERIA STOP",
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
      restaurant: "8- CAN JORDI",
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
      restaurant: "9- CAN KIKU",
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
      restaurant: "10- DIFFERENT RESTAURANT ",
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
      restaurant: "11- EL TINGLADO ",
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
      restaurant: "12- EL TRINQUET",
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
      restaurant: "13- EURO DEL MERCAT",
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
      restaurant: "14- FORMATGERIA CAN QUIM  ",
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
      restaurant: "15- GASTROBAR PASSEIG DEL MAR",
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
      restaurant: "16- GREEN & BURGER BY BIOCENTER",
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
      restaurant: "17- HOT-DOG",
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
      restaurant: "18- LA BALEADA",
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
      restaurant: "19- LA MAR SALADA",
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
      restaurant: "20- LA MURALLA",
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
      restaurant: "21- LOS GORDACOS",
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
      restaurant: "22- MALCRIAT",
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
      restaurant: "23- MESÓN EL CORTIJO",
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
      restaurant: "25- TACO'S KING",
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
      restaurant: "26- VILLA LAURA",
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
      restaurant: "27- EL DAU DE CAN MIQUEL",
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
      restaurant: "28- LLEVANTÍ",
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
      restaurant: "29- METRONON GASTRO BAR",
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
      restaurant: "30- NOMO NÀUTIC",
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
      restaurant: "31- RESTAURANT L'ESGUARD ALÀBRIGA",
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
      restaurant: "32- SABORS",
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

export default ganxotapesTardor23;
