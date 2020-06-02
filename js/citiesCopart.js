const citiesCopart = [
  {
    "city": "Birmingham",
    "port": "ga",
    "state": "al",
    "price": 431
  },
  {
    "city": "Mobil",
    "port": "ga",
    "state": "al",
    "price": 441
  },
  {
    "city": "Montgomery",
    "port": "ga",
    "state": "al",
    "price": 471
  },
  {
    "city": "Tanner",
    "port": "ga",
    "state": "al",
    "price": 441
  },
  {
    "city": "Fayetteville",
    "port": "ga",
    "state": "ar",
    "price": 611
  },
  {
    "city": "Little Rock",
    "port": "ga",
    "state": "ar",
    "price": 561
  },
  {
    "city": "Lumberton",
    "port": "ga",
    "state": "ar",
    "price": 691
  },
  {
    "city": "Phoenix",
    "port": "ca",
    "state": "az",
    "price": 720
  },
  {
    "city": "Tucson",
    "port": "ca",
    "state": "az",
    "price": 720
  },
  {
    "city": "Antelope",
    "port": "ca",
    "state": "ca",
    "price": 670
  },
  {
    "city": "Bakersfield",
    "port": "ca",
    "state": "ca",
    "price": 640
  },
  {
    "city": "Fresno",
    "port": "ca",
    "state": "ca",
    "price": 590
  },
  {
    "city": "Hayward",
    "port": "ca",
    "state": "ca",
    "price": 720
  },
  {
    "city": "Long Beach",
    "port": "ca",
    "state": "ca",
    "price": 490
  },
  {
    "city": "Los Angeles",
    "port": "ca",
    "state": "ca",
    "price": 490
  },
  {
    "city": "Martinez",
    "port": "ca",
    "state": "ca",
    "price": 690
  },
  {
    "city": "Rancho Cucamonda",
    "port": "ca",
    "state": "ca",
    "price": 520
  },
  {
    "city": "Sacramento",
    "port": "ca",
    "state": "ca",
    "price": 670
  },
  {
    "city": "San Bernandino",
    "port": "ca",
    "state": "ca",
    "price": 570
  },
  {
    "city": "San Diego",
    "port": "ca",
    "state": "ca",
    "price": 550
  },
  {
    "city": "San Jose",
    "port": "ca",
    "state": "ca",
    "price": 690
  },
  {
    "city": "So Sacramento",
    "port": "ca",
    "state": "ca",
    "price": 690
  },
  {
    "city": "San Valley",
    "port": "ca",
    "state": "ca",
    "price": 490
  },
  {
    "city": "Vallejo",
    "port": "ca",
    "state": "ca",
    "price": 690
  },
  {
    "city": "Van Nuys",
    "port": "ca",
    "state": "ca",
    "price": 470
  },
  {
    "city": "Colorado Springs",
    "port": "nj",
    "state": "co",
    "price": 779
  },
  {
    "city": "Denver",
    "port": "nj",
    "state": "co",
    "price": 690
  },
  {
    "city": "Denver Central",
    "port": "nj",
    "state": "co",
    "price": 690
  },
  {
    "city": "Denver South",
    "port": "ga",
    "state": "co",
    "price": 693
  },
  {
    "city": "Harford",
    "port": "nj",
    "state": "ct",
    "price": 360
  },
  {
    "city": "Harford Springfield",
    "port": "nj",
    "state": "ct",
    "price": 284
  },
  {
    "city": "Washington DC",
    "port": "nj",
    "state": "dc",
    "price": 360
  },
  {
    "city": "Seaford",
    "port": "nj",
    "state": "de",
    "price": 440
  },
  {
    "city": "Ft. Piece",
    "port": "fl",
    "state": "fl",
    "price": 282
  },
  {
    "city": "Jacksonville East",
    "port": "fl",
    "state": "fl",
    "price": 315
  },
  {
    "city": "Jacksonville West",
    "port": "fl",
    "state": "fl",
    "price": 329
  },
  {
    "city": "Miami Central",
    "port": "fl",
    "state": "fl",
    "price": 249
  },
  {
    "city": "Miami North",
    "port": "fl",
    "state": "fl",
    "price": 227
  },
  {
    "city": "Miami South",
    "port": "fl",
    "state": "fl",
    "price": 280
  },
  {
    "city": "Ocala",
    "port": "fl",
    "state": "fl",
    "price": 320
  },
  {
    "city": "Orlando North",
    "port": "fl",
    "state": "fl",
    "price": 320
  },
  {
    "city": "Orlando South",
    "port": "fl",
    "state": "fl",
    "price": 305
  },
  {
    "city": "Punta Gorda",
    "port": "fl",
    "state": "fl",
    "price": 266
  },
  {
    "city": "Talahassee",
    "port": "ga",
    "state": "fl",
    "price": 1371
  },
  {
    "city": "Tampa South",
    "port": "fl",
    "state": "fl",
    "price": 363
  },
  {
    "city": "West Palm Beach",
    "port": "fl",
    "state": "fl",
    "price": 312
  },
  {
    "city": "Atlanta East",
    "port": "ga",
    "state": "ga",
    "price": 321
  },
  {
    "city": "Atlanta North",
    "port": "ga",
    "state": "ga",
    "price": 321
  },
  {
    "city": "Atlanta South",
    "port": "ga",
    "state": "ga",
    "price": 311
  },
  {
    "city": "Atlanta West",
    "port": "ga",
    "state": "ga",
    "price": 311
  },
  {
    "city": "Cartersville",
    "port": "ga",
    "state": "ga",
    "price": 328
  },
  {
    "city": "Macon",
    "port": "ga",
    "state": "ga",
    "price": 311
  },
  {
    "city": "Savannah",
    "port": "ga",
    "state": "ga",
    "price": 221
  },
  {
    "city": "Tifton",
    "port": "ga",
    "state": "ga",
    "price": 351
  },
  {
    "city": "Honolulu",
    "port": "ca",
    "state": "hi",
    "price": 2190
  },
  {
    "city": "Davenport",
    "port": "nj",
    "state": "ia",
    "price": 620
  },
  {
    "city": "Des Moines",
    "port": "nj",
    "state": "ia",
    "price": 740
  },
  {
    "city": "Boise",
    "port": "ca",
    "state": "id",
    "price": 940
  },
  {
    "city": "Chicago North",
    "port": "nj",
    "state": "il",
    "price": 540
  },
  {
    "city": "Chicago South",
    "port": "nj",
    "state": "il",
    "price": 540
  },
  {
    "city": "Peoria",
    "port": "nj",
    "state": "il",
    "price": 660
  },
  {
    "city": "Southern Illinois",
    "port": "nj",
    "state": "il",
    "price": 560
  },
  {
    "city": "Wheeling",
    "port": "nj",
    "state": "il",
    "price": 570
  },
  {
    "city": "Hammond",
    "port": "nj",
    "state": "in",
    "price": 560
  },
  {
    "city": "Harford City",
    "port": "nj",
    "state": "in",
    "price": 610
  },
  {
    "city": "Indiapolis",
    "port": "nj",
    "state": "in",
    "price": 540
  },
  {
    "city": "Cleveland East",
    "port": "NJ",
    "state": "OH",
    "price": 510
  },
  {
    "city": "Cleveland West",
    "port": "NJ",
    "state": "OH",
    "price": 510
  },
  {
    "city": "Columbus",
    "port": "NJ",
    "state": "OH",
    "price": 520
  },
  {
    "city": "Dayton",
    "port": "NJ",
    "state": "OH",
    "price": 560
  },
  {
    "city": "Oklahoma City",
    "port": "GA",
    "state": "OK",
    "price": 621
  },
  {
    "city": "Tulsa",
    "port": "GA",
    "state": "OK",
    "price": 538
  },
  {
    "city": "Eugene",
    "port": "CA",
    "state": "OR",
    "price": 860
  },
  {
    "city": "Portland North",
    "port": "CA",
    "state": "OR",
    "price": 860
  },
  {
    "city": "Portland South",
    "port": "CA",
    "state": "OR",
    "price": 830
  },
  {
    "city": "Altoona",
    "port": "NJ",
    "state": "PA",
    "price": 460
  },
  {
    "city": "Chambersburg",
    "port": "NJ",
    "state": "PA",
    "price": 420
  },
  {
    "city": "Harrisburg",
    "port": "NJ",
    "state": "PA",
    "price": 410
  },
  {
    "city": "Philadelphia",
    "port": "NJ",
    "state": "PA",
    "price": 310
  },
  {
    "city": "Philadelphia East",
    "port": "NJ",
    "state": "PA",
    "price": 310
  },
  {
    "city": "Pittsburg East",
    "port": "NJ",
    "state": "PA",
    "price": 470
  },
  {
    "city": "Pittsburg North",
    "port": "NJ",
    "state": "PA",
    "price": 460
  },
  {
    "city": "Pittsburg South",
    "port": "NJ",
    "state": "PA",
    "price": 510
  },
  {
    "city": "Pitsburg West",
    "port": "NJ",
    "state": "PA",
    "price": 460
  },
  {
    "city": "Scranton",
    "port": "NJ",
    "state": "PA",
    "price": 340
  },
  {
    "city": "York Haven",
    "port": "NJ",
    "state": "PA",
    "price": 420
  },
  {
    "city": "Exeten",
    "port": "NJ",
    "state": "RI",
    "price": 471
  },
  {
    "city": "Columbia",
    "port": "GA",
    "state": "SC",
    "price": 269
  },
  {
    "city": "Green",
    "port": "GA",
    "state": "SC",
    "price": 371
  },
  {
    "city": "Notrh Charleston",
    "port": "GA",
    "state": "SC",
    "price": 319
  },
  {
    "city": "Sparatnburg",
    "port": "GA",
    "state": "SC",
    "price": 471
  },
  {
    "city": "Knoxville",
    "port": "GA",
    "state": "TN",
    "price": 441
  },
  {
    "city": "Memphis",
    "port": "GA",
    "state": "TN",
    "price": 521
  },
  {
    "city": "Nashville",
    "port": "GA",
    "state": "TN",
    "price": 461
  },
  {
    "city": "Abilene",
    "port": "TX",
    "state": "TX",
    "price": 621
  },
  {
    "city": "Amarillo",
    "port": "TX",
    "state": "TX",
    "price": 521
  },
  {
    "city": "Andrews",
    "port": "TX",
    "state": "TX",
    "price": 554
  },
  {
    "city": "Austin",
    "port": "TX",
    "state": "TX",
    "price": 491
  },
  {
    "city": "Corpus Christi",
    "port": "TX",
    "state": "TX",
    "price": 441
  },
  {
    "city": "CrashedToys Dallas",
    "port": "TX",
    "state": "TX",
    "price": 492
  },
  {
    "city": "Dallas",
    "port": "TX",
    "state": "TX",
    "price": 492
  },
  {
    "city": "Dallas South",
    "port": "TX",
    "state": "TX",
    "price": 492
  },
  {
    "city": "DRIVE Dallas",
    "port": "TX",
    "state": "TX",
    "price": 492
  },
  {
    "city": "El Paso",
    "port": "TX",
    "state": "TX",
    "price": 641
  },
  {
    "city": "Ft. Worth",
    "port": "TX",
    "state": "TX",
    "price": 541
  },
  {
    "city": "Houston",
    "port": "TX",
    "state": "TX",
    "price": 361
  },
  {
    "city": "Longview",
    "port": "TX",
    "state": "TX",
    "price": 511
  },
  {
    "city": "Lufkin",
    "port": "TX",
    "state": "TX",
    "price": 461
  },
  {
    "city": "McAllen",
    "port": "TX",
    "state": "TX",
    "price": 511
  },
  {
    "city": "San Antonio",
    "port": "TX",
    "state": "TX",
    "price": 441
  },
  {
    "city": "Waco",
    "port": "TX",
    "state": "TX",
    "price": 521
  },
  {
    "city": "Ogden",
    "port": "CA",
    "state": "UT",
    "price": 860
  },
  {
    "city": "Salt Lake City",
    "port": "CA",
    "state": "UT",
    "price": 810
  },
  {
    "city": "Danville",
    "port": "NJ",
    "state": "VA",
    "price": 490
  },
  {
    "city": "Fredericksburg",
    "port": "NJ",
    "state": "VA",
    "price": 420
  },
  {
    "city": "Hampton",
    "port": "NJ",
    "state": "VA",
    "price": 490
  },
  {
    "city": "Richmond",
    "port": "NJ",
    "state": "VA",
    "price": 410
  },
  {
    "city": "Richmond East",
    "port": "NJ",
    "state": "VA",
    "price": 410
  },
  {
    "city": "Graham",
    "port": "CA",
    "state": "WA",
    "price": 860
  },
  {
    "city": "North Seattle",
    "port": "CA",
    "state": "WA",
    "price": 970
  },
  {
    "city": "Pasco",
    "port": "CA",
    "state": "WA",
    "price": 1120
  },
  {
    "city": "Spokane",
    "port": "CA",
    "state": "WA",
    "price": 1070
  },
  {
    "city": "Jacson",
    "port": "GA",
    "state": "US",
    "price": 461
  },
  {
    "city": "Billings",
    "port": "NJ",
    "state": "UT",
    "price": 1049
  },
  {
    "city": "Helena",
    "port": "NJ",
    "state": "UT",
    "price": 1049
  },
  {
    "city": "China Grove",
    "port": "GA",
    "state": "NC",
    "price": 391
  },
  {
    "city": "Concord",
    "port": "GA",
    "state": "NC",
    "price": 391
  },
  {
    "city": "Lumberton",
    "port": "GA",
    "state": "NC",
    "price": 496
  },
  {
    "city": "Lumbertonia",
    "port": "GA",
    "state": "NC",
    "price": 496
  },
  {
    "city": "Mebane",
    "port": "GA",
    "state": "NC",
    "price": 391
  },
  {
    "city": "Mocksville",
    "port": "GA",
    "state": "NC",
    "price": 401
  },
  {
    "city": "Raleigh",
    "port": "GA",
    "state": "NC",
    "price": 421
  },
  {
    "city": "Lincoln",
    "port": "NJ",
    "state": "NE",
    "price": 690
  },
  {
    "city": "Candia",
    "port": "NJ",
    "state": "NH",
    "price": 490
  },
  {
    "city": "Glassboro East",
    "port": "NS",
    "state": "NJ",
    "price": 310
  },
  {
    "city": "Glassboro West",
    "port": "NS",
    "state": "NJ",
    "price": 320
  },
  {
    "city": "Somerville",
    "port": "NS",
    "state": "NJ",
    "price": 240
  },
  {
    "city": "Trenton",
    "port": "NS",
    "state": "NJ",
    "price": 240
  },
  {
    "city": "Albuquerque",
    "port": "TX",
    "state": "NM",
    "price": 691
  },
  {
    "city": "Las Vegas",
    "port": "CA",
    "state": "NV",
    "price": 710
  },
  {
    "city": "Reno",
    "port": "CA",
    "state": "NV",
    "price": 760
  },
  {
    "city": "Albany",
    "port": "NJ",
    "state": "NY",
    "price": 370
  },
  {
    "city": "Buffalo",
    "port": "NJ",
    "state": "NY",
    "price": 490
  },
  {
    "city": "Long Island",
    "port": "NJ",
    "state": "NY",
    "price": 330
  },
  {
    "city": "Newburgh",
    "port": "NJ",
    "state": "NY",
    "price": 310
  },
  {
    "city": "Rochester",
    "port": "NJ",
    "state": "NY",
    "price": 460
  },
  {
    "city": "Syracuse",
    "port": "NJ",
    "state": "NY",
    "price": 400
  },
  {
    "city": "Kansas City",
    "port": "NJ",
    "state": "KS",
    "price": 620
  },
  {
    "city": "Wichita",
    "port": "TX",
    "state": "KS",
    "price": 791
  },
  {
    "city": "Lexington East",
    "port": "GA",
    "state": "KY",
    "price": 511
  },
  {
    "city": "Lexington West",
    "port": "GA",
    "state": "KY",
    "price": 511
  },
  {
    "city": "Louisville",
    "port": "GA",
    "state": "KY",
    "price": 541
  },
  {
    "city": "Walton",
    "port": "GA",
    "state": "KY",
    "price": 561
  },
  {
    "city": "Baton Rouge",
    "port": "GA",
    "state": "LA",
    "price": 491
  },
  {
    "city": "New Orleans",
    "port": "TX",
    "state": "LA",
    "price": 511
  },
  {
    "city": "Shreverport",
    "port": "TX",
    "state": "LA",
    "price": 584
  },
  {
    "city": "North Boston",
    "port": "NJ",
    "state": "MA",
    "price": 390
  },
  {
    "city": "South Boston",
    "port": "NJ",
    "state": "MA",
    "price": 410
  },
  {
    "city": "West Warren",
    "port": "NJ",
    "state": "MA",
    "price": 370
  },
  {
    "city": "Baltimore",
    "port": "NJ",
    "state": "MA",
    "price": 360
  },
  {
    "city": "Lyman",
    "port": "NJ",
    "state": "ME",
    "price": 520
  },
  {
    "city": "Detroit",
    "port": "NJ",
    "state": "MI",
    "price": 540
  },
  {
    "city": "Flint",
    "port": "NJ",
    "state": "MI",
    "price": 580
  },
  {
    "city": "Ionia",
    "port": "NJ",
    "state": "MI",
    "price": 580
  },
  {
    "city": "Kincheloe",
    "port": "NJ",
    "state": "MI",
    "price": 580
  },
  {
    "city": "Lansing",
    "port": "NJ",
    "state": "MI",
    "price": 590
  },
  {
    "city": "Crashedtoys Minneapolis",
    "port": "NJ",
    "state": "MN",
    "price": 660
  },
  {
    "city": "Minneapolis",
    "port": "NJ",
    "state": "MN",
    "price": 660
  },
  {
    "city": "Minneapolis North",
    "port": "NJ",
    "state": "MN",
    "price": 660
  },
  {
    "city": "St. Cloud",
    "port": "NJ",
    "state": "MN",
    "price": 690
  },
  {
    "city": "Columbia",
    "port": "GA",
    "state": "MO",
    "price": 621
  },
  {
    "city": "Sikeston",
    "port": "GA",
    "state": "MO",
    "price": 611
  },
  {
    "city": "Springfield",
    "port": "GA",
    "state": "MO",
    "price": 621
  },
  {
    "city": "St. Louis",
    "port": "GA",
    "state": "MO",
    "price": 571
  },
  {
    "city": "Appleton",
    "port": "NJ",
    "state": "WI",
    "price": 730
  },
  {
    "city": "Madison",
    "port": "NJ",
    "state": "WI",
    "price": 610
  },
  {
    "city": "Milwaukee",
    "port": "NJ",
    "state": "WI",
    "price": 570
  },
  {
    "city": "Charleston",
    "port": "NJ",
    "state": "WV",
    "price": 520
  },
  {
    "city": "Casper",
    "port": "NJ",
    "state": "WY",
    "price": 1249
  }
];
