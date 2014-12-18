var gotCharacters = [
    // Stark
    {
        characterName: "Eddard Stark",
        house: "house-stark",
        status: "dead",
    },
    {
        characterName: "Catelyn Stark",
        house: "house-stark",
        status: "dead"
    },
    {
        characterName: "Rodrik Cassel",
        house: "house-stark",
        status: "dead",
    },
    {
        characterName: "Septa Mordane",
        house: "house-stark",
        status: "dead",
    },
    {
        characterName: "Arya Stark &amp; Nymeria",
        house: "house-stark",
        status: "alive"
    },
    {
        characterName: "Sansa Stark &amp; Lady",
        house: "house-stark",
        status: "alive"
    },
    {
        characterName: "Robb Stark &amp; Grey Wind",
        house: "house-stark",
        status: "dead"
    },
    {
        characterName: "Talisa Maegyr",
        house: "house-stark",
        status: "dead"
    },
    {
        characterName: "Rickon Stark &amp; Shaggydog",
        house: "house-stark",
        status: "alive"
    },
    {
        characterName: "Brandon Stark &amp; Summer",
        house: "house-stark",
        status: "alive"
    },
    {
        characterName: "Osha",
        house: "house-stark",
        status: "alive"
    },
    {
        characterName: "Hodor",
        house: "house-stark",
        status: "alive"
    },
    {
        characterName: "Maester Luwin",
        house: "house-stark",
        status: "dead"
    },


    // Reed
    {
        characterName: "Jojen Reed",
        house: "house-reed",
        status: "alive"
    },
    {
        characterName: "Meera Reed",
        house: "house-reed",
        status: "dead"
    },


    // Baelish
    {
        characterName: "Petyr Baelish",
        house: "house-baelish",
        status: "alive"
    },
    {
        characterName: "Ros",
        house: "house-baelish",
        status: "alive"
    },

    // Tarth
    {
        characterName: "Brienne Tarth",
        house: "house-tarth",
        status: "alive"
    },

    // Faceless Men
    {
        characterName: "Jaqen H'ghar",
        house: "faceless-men",
        status: "alive"
    },


    //Brotherhood without banners
    {
        characterName: "Thoros of Myr",
        house: "brotherhood-w/o-banners",
        status: "alive"
    },
    {
        characterName: "Beric Dondarrion",
        house: "brotherhood-w/o-banners",
        status: "alive"
    },
    {
        characterName: "Anguy",
        house: "brotherhood-w/o-banners",
        status: "alive"
    },
    {
        characterName: "Gendry",
        house: "brotherhood-w/o-banners",
        status: "alive"
    },



    // Lannister
    {
        characterName: "Jaime Lannister",
        house: "house-lannister",
        status: "alive"
    },
    {
        characterName: "Qyburn",
        house: "house-lannister",
        status: "alive"
    },
    {
        characterName: '"The Hound" Clegane',
        house: "house-lannister",
        status: "dead"
    },
    {
        characterName: '"The Mountain" Clegane',
        house: "house-lannister",
        status: "alive"
    },
    {
        characterName: "Cersei Lannister",
        house: "house-lannister",
        status: "alive"
    },
    {
        characterName: "Tyrion Lannister",
        house: "house-lannister",
        status: "alive"
    },
    {
        characterName: "Shae",
        house: "house-lannister",
        status: "alive"
    },
    {
        characterName: "Podrick Payne",
        house: "house-lannister",
        status: "alive"
    },
    {
        characterName: "Tywin Lannister",
        house: "house-lannister",
        status: "dead"
    },
    {
        characterName: "Tommen Baratheon",
        house: "house-lannister",
        status: "alive"
    },
    {
        characterName: 'Joffrey "Baratheon"',
        house: "house-lannister",
        status: "dead"
    },
    {
        characterName: "Maester Pycelle",
        house: "house-lannister",
        status: "alive"
    },
    {
        characterName: "Ser Ilyn Payne",
        house: "house-lannister",
        status: "alive"
    },


    // The Kingsguard
    {
        characterName: "Meryn Trant",
        house: "the-kingsguard",
        status: "alive"
    },


    // Tully
    {
        characterName: "Brynden Tully",
        house: "house-tully",
        status: "alive"
    },
    {
        characterName: "Edmure Tully",
        house: "house-tully",
        status: "alive"
    },


    // Bolton
    {
        characterName: "Roose Bolton",
        house: "house-bolton",
        status: "alive"
    },
    {
        characterName: "Ramsay Snow/Bolton",
        house: "house-bolton",
        status: "alive"
    },
    {
        characterName: "Locke",
        house: "house-bolton",
        status: "alive"
    },



    // The Night's Watch
    {
        characterName: "Benjen Stark",
        house: "the-nights-watch",
        status: "alive"
    },
    {
        characterName: "Jeor Mormont",
        house: "the-nights-watch",
        status: "dead"
    },
    {
        characterName: "Alliser Thorne",
        house: "the-nights-watch",
        status: "alive"
    },
    {
        characterName: "Maester Aemon",
        house: "the-nights-watch",
        status: "alive"
    },
    {
        characterName: "Samwell Tarly",
        house: "the-nights-watch",
        status: "alive"
    },
    {
        characterName: "Yoren",
        house: "the-nights-watch",
        status: "alive"
    },
    {
        characterName: "Qhorin Halfhand",
        house: "the-nights-watch",
        status: "alive"
    },
    {
        characterName: "Jon Snow & Ghost",
        house: "the-nights-watch",
        status: "alive"
    },
    {
        characterName: "Samwell Tarly",
        house: "the-nights-watch",
        status: "alive"
    },


    // Wildlings
    {
        characterName: "Mance Rayder",
        house: "wildlings",
        status: "alive"
    },
    {
        characterName: "Ygritte",
        house: "wildlings",
        status: "dead"
    },
    {
        characterName: "Tormund Giantsbane",
        house: "wildlings",
        status: "alive"
    },
    {
        characterName: "Lord of Bones",
        house: "wildlings",
        status: "alive"
    },
    {
        characterName: "Warg Orell",
        house: "wildlings",
        status: "dead"
    },

    // Craster
    {
        characterName: "Craster",
        house: "wildlings",
        status: "dead"
    },



    // The Dothraki
    {
        characterName: "Khal Drogo",
        house: "the-dothraki",
        status: "dead"
    },

    // The Second Sons
    {
        characterName: "Daario Naharis",
        house: "house-targaryen",
        status: "alive"
    },


    // Frey
    {
        characterName: "Walder Frey",
        house: "house-frey",
        status: "alive"
    },


    // Targaryen
    {
        characterName: "Daenerys Targaryen",
        house: "house-targaryen",
        status: "alive"
    },
    {
        characterName: "Viserys Targaryen",
        house: "house-targaryen",
        status: "dead"
    },
    {
        characterName: "Jorah Mormont",
        house: "house-targaryen",
        status: "alive"
    },
    {
        characterName: "Barristan Selmy",
        house: "house-targaryen",
        status: "alive"
    },
    {
        characterName: "Grey Worm",
        house: "house-targaryen",
        status: "alive"
    },
    {
        characterName: "Missandei",
        house: "house-targaryen",
        status: "alive"
    },
    {
        characterName: "Drogon, Rhaegal &amp; Viserion",
        house: "house-targaryen",
        status: "alive"
    },




    // Martell
    {
        characterName: "Oberyn Martell",
        house: "house-martell",
        status: "alive"
    },
    {
        characterName: "Ellaria Sand",
        house: "house-martell",
        status: "alive"
    },


    // Varys
    {
        characterName: "Lord Varys",
        house: "varys",
        status: "alive"
    },


    // Tyrell
    {
        characterName: "Margaery Tyrell",
        house: "house-tyrell",
        status: "alive"
    },
    {
        characterName: "Loras Tyrell",
        house: "house-tyrell",
        status: "alive"
    },
    {
        characterName: "Olenna Tyrell",
        house: "house-tyrell",
        status: "alive"
    },
    {
        characterName: "Mace Tyrell",
        house: "house-tyrell",
        status: "alive"
    },



    // Baratheon
    {
        characterName: "Robert Baratheon",
        house: "house-baratheon",
        status: "dead"
    },



    // Baratheon of Dragonstone
    {
        characterName: "Stannis Baratheon",
        house: "house-baratheon-dragonstone",
        status: "alive"
    },
    {
        characterName: "Selyse Baratheon",
        house: "house-baratheon-dragonstone",
        status: "alive"
    },
    {
        characterName: "Shireen Baratheon",
        house: "house-baratheon-dragonstone",
        status: "alive"
    },
    {
        characterName: "Melisandre",
        house: "house-baratheon-dragonstone",
        status: "alive"
    },
    {
        characterName: "Davos Seaworth",
        house: "house-baratheon-dragonstone",
        status: "alive"
    },


    // Baratheon at Storm's End
    {
        characterName: "Renly Baratheon",
        house: "house-baratheon-storms-end)",
        status: "alive"
    },


    // Greyjoy
    {
        characterName: "Balon Greyjoy",
        house: "house-greyjoy",
        status: "alive"
    },
    {
        characterName: "Dagmer Cleftjaw",
        house: "house-greyjoy",
        status: "alive"
    },
    {
        characterName: 'Theon "Reek" Greyjoy',
        house: "house-greyjoy",
        status: "alive"
    },
    {
        characterName: 'Yara Greyjoy',
        house: "house-greyjoy",
        status: "alive"
    },


    // Arryn
    {
        characterName: "Lysa Arryn",
        house: "house-arryn",
        status: "dead"
    },
    {
        characterName: "Robin Arryn",
        house: "house-arryn",
        status: "alive"
    },
];