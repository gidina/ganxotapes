export const ganxotapesPrimavera24 = {
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
