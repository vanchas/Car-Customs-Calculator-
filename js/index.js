const cities = [
  {
    "city": "Birmingham",
    "port": "ga",
    "state": "al",
    "price": "281"
  },
  {
    "city": "Mobil",
    "port": "ga",
    "state": "al",
    "price": "291"
  },
  {
    "city": "Montgomery",
    "port": "ga",
    "state": "al",
    "price": "321"
  },
  {
    "city": "Tanner",
    "port": "ga",
    "state": "al",
    "price": "291"
  },
  {
    "city": "Fayetteville",
    "port": "ga",
    "state": "ar",
    "price": "461"
  },
  {
    "city": "Little Rock",
    "port": "ga",
    "state": "ar",
    "price": "411"
  },
  {
    "city": "Lumberton",
    "port": "ga",
    "state": "ar",
    "price": "541"
  },
  {
    "city": "Phoenix",
    "port": "ca",
    "state": "az",
    "price": "570"
  },
  {
    "city": "Tucson",
    "port": "ca",
    "state": "az",
    "price": "570"
  },
  {
    "city": "Antelope",
    "port": "ca",
    "state": "ca",
    "price": "520"
  },
  {
    "city": "Bakersfield",
    "port": "ca",
    "state": "ca",
    "price": "490"
  },
  {
    "city": "Fresno",
    "port": "ca",
    "state": "ca",
    "price": "440"
  },
  {
    "city": "Hayward",
    "port": "ca",
    "state": "ca",
    "price": "570"
  },
  {
    "city": "Long Beach",
    "port": "ca",
    "state": "ca",
    "price": "340"
  },
  {
    "city": "Los Angeles",
    "port": "ca",
    "state": "ca",
    "price": "340"
  },
  {
    "city": "Martinez",
    "port": "ca",
    "state": "ca",
    "price": "540"
  },
  {
    "city": "Rancho Cucamonda",
    "port": "ca",
    "state": "ca",
    "price": "370"
  },
  {
    "city": "Sacramento",
    "port": "ca",
    "state": "ca",
    "price": "520"
  },
  {
    "city": "San Bernandino",
    "port": "ca",
    "state": "ca",
    "price": "420"
  },
  {
    "city": "San Diego",
    "port": "ca",
    "state": "ca",
    "price": "400"
  },
  {
    "city": "San Jose",
    "port": "ca",
    "state": "ca",
    "price": "540"
  },
  {
    "city": "So Sacramento",
    "port": "ca",
    "state": "ca",
    "price": "540"
  },
  {
    "city": "San Valley",
    "port": "ca",
    "state": "ca",
    "price": "340"
  },
  {
    "city": "Vallejo",
    "port": "ca",
    "state": "ca",
    "price": "540"
  },
  {
    "city": "Van Nuys",
    "port": "ca",
    "state": "ca",
    "price": "320"
  },
  {
    "city": "Colorado Springs",
    "port": "nj",
    "state": "co",
    "price": "629"
  },
  {
    "city": "Denver",
    "port": "nj",
    "state": "co",
    "price": "540"
  },
  {
    "city": "Denver Central",
    "port": "nj",
    "state": "co",
    "price": "540"
  },
  {
    "city": "Denver South",
    "port": "ga",
    "state": "co",
    "price": "543"
  },
  {
    "city": "Harford",
    "port": "nj",
    "state": "ct",
    "price": "210"
  },
  {
    "city": "Harford Springfield",
    "port": "nj",
    "state": "ct",
    "price": "134"
  },
  {
    "city": "Washington DC",
    "port": "nj",
    "state": "dc",
    "price": "210"
  },
  {
    "city": "Seaford",
    "port": "nj",
    "state": "de",
    "price": "290"
  },
  {
    "city": "Ft. Piece",
    "port": "fl",
    "state": "fl",
    "price": "132"
  },
  {
    "city": "Jacksonville East",
    "port": "fl",
    "state": "fl",
    "price": "165"
  },
  {
    "city": "Jacksonville West",
    "port": "fl",
    "state": "fl",
    "price": "179"
  },
  {
    "city": "Miami Central",
    "port": "fl",
    "state": "fl",
    "price": "99"
  },
  {
    "city": "Miami North",
    "port": "fl",
    "state": "fl",
    "price": "77"
  },
  {
    "city": "Miami South",
    "port": "fl",
    "state": "fl",
    "price": "130"
  },
  {
    "city": "Ocala",
    "port": "fl",
    "state": "fl",
    "price": "170"
  },
  {
    "city": "Orlando North",
    "port": "fl",
    "state": "fl",
    "price": "170"
  },
  {
    "city": "Orlando South",
    "port": "fl",
    "state": "fl",
    "price": "155"
  },
  {
    "city": "Punta Gorda",
    "port": "fl",
    "state": "fl",
    "price": "116"
  },
  {
    "city": "Talahassee",
    "port": "ga",
    "state": "fl",
    "price": "1221"
  },
  {
    "city": "Tampa South",
    "port": "fl",
    "state": "fl",
    "price": "213"
  },
  {
    "city": "West Palm Beach",
    "port": "fl",
    "state": "fl",
    "price": "162"
  },
  {
    "city": "Atlanta East",
    "port": "ga",
    "state": "ga",
    "price": "171"
  },
  {
    "city": "Atlanta North",
    "port": "ga",
    "state": "ga",
    "price": "171"
  },
  {
    "city": "Atlanta South",
    "port": "ga",
    "state": "ga",
    "price": "161"
  },
  {
    "city": "Atlanta West",
    "port": "ga",
    "state": "ga",
    "price": "161"
  },
  {
    "city": "Cartersville",
    "port": "ga",
    "state": "ga",
    "price": "178"
  },
  {
    "city": "Macon",
    "port": "ga",
    "state": "ga",
    "price": "161"
  },
  {
    "city": "Savannah",
    "port": "ga",
    "state": "ga",
    "price": "71"
  },
  {
    "city": "Tifton",
    "port": "ga",
    "state": "ga",
    "price": "201"
  },
  {
    "city": "Honolulu",
    "port": "ca",
    "state": "hi",
    "price": "2040"
  },
  {
    "city": "Davenport",
    "port": "nj",
    "state": "ia",
    "price": "470"
  },
  {
    "city": "Des Moines",
    "port": "nj",
    "state": "ia",
    "price": "590"
  },
  {
    "city": "Boise",
    "port": "ca",
    "state": "id",
    "price": "790"
  },
  {
    "city": "Chicago North",
    "port": "nj",
    "state": "il",
    "price": "390"
  },
  {
    "city": "Chicago South",
    "port": "nj",
    "state": "il",
    "price": "390"
  },
  {
    "city": "Peoria",
    "port": "nj",
    "state": "il",
    "price": "510"
  },
  {
    "city": "Southern Illinois",
    "port": "nj",
    "state": "il",
    "price": "410"
  },
  {
    "city": "Wheeling",
    "port": "nj",
    "state": "il",
    "price": "420"
  },
  {
    "city": "Hammond",
    "port": "nj",
    "state": "in",
    "price": "410"
  },
  {
    "city": "Harford City",
    "port": "nj",
    "state": "in",
    "price": "460"
  },
  {
    "city": "Indiapolis",
    "port": "nj",
    "state": "in",
    "price": "390"
  },
  {
    "city": "Cleveland East",
    "port": "NJ",
    "state": "OH",
    "price": "360"
  },
  {
    "city": "Cleveland West",
    "port": "NJ",
    "state": "OH",
    "price": "360"
  },
  {
    "city": "Columbus",
    "port": "NJ",
    "state": "OH",
    "price": "370"
  },
  {
    "city": "Dayton",
    "port": "NJ",
    "state": "OH",
    "price": "410"
  },
  {
    "city": "Oklahoma City",
    "port": "GA",
    "state": "OK",
    "price": "471"
  },
  {
    "city": "Tulsa",
    "port": "GA",
    "state": "OK",
    "price": "388"
  },
  {
    "city": "Eugene",
    "port": "CA",
    "state": "OR",
    "price": "710"
  },
  {
    "city": "Portland North",
    "port": "CA",
    "state": "OR",
    "price": "710"
  },
  {
    "city": "Portland South",
    "port": "CA",
    "state": "OR",
    "price": "680"
  },
  {
    "city": "Altoona",
    "port": "NJ",
    "state": "PA",
    "price": "310"
  },
  {
    "city": "Chambersburg",
    "port": "NJ",
    "state": "PA",
    "price": "270"
  },
  {
    "city": "Harrisburg",
    "port": "NJ",
    "state": "PA",
    "price": "260"
  },
  {
    "city": "Philadelphia",
    "port": "NJ",
    "state": "PA",
    "price": "160"
  },
  {
    "city": "Philadelphia East",
    "port": "NJ",
    "state": "PA",
    "price": "160"
  },
  {
    "city": "Pittsburg East",
    "port": "NJ",
    "state": "PA",
    "price": "320"
  },
  {
    "city": "Pittsburg North",
    "port": "NJ",
    "state": "PA",
    "price": "310"
  },
  {
    "city": "Pittsburg South",
    "port": "NJ",
    "state": "PA",
    "price": "360"
  },
  {
    "city": "Pitsburg West",
    "port": "NJ",
    "state": "PA",
    "price": "310"
  },
  {
    "city": "Scranton",
    "port": "NJ",
    "state": "PA",
    "price": "190"
  },
  {
    "city": "York Haven",
    "port": "NJ",
    "state": "PA",
    "price": "270"
  },
  {
    "city": "Exeten",
    "port": "NJ",
    "state": "RI",
    "price": "321"
  },
  {
    "city": "Columbia",
    "port": "GA",
    "state": "SC",
    "price": "119"
  },
  {
    "city": "Green",
    "port": "GA",
    "state": "SC",
    "price": "221"
  },
  {
    "city": "Notrh Charleston",
    "port": "GA",
    "state": "SC",
    "price": "169"
  },
  {
    "city": "Sparatnburg",
    "port": "GA",
    "state": "SC",
    "price": "321"
  },
  {
    "city": "Knoxville",
    "port": "GA",
    "state": "TN",
    "price": "291"
  },
  {
    "city": "Memphis",
    "port": "GA",
    "state": "TN",
    "price": "371"
  },
  {
    "city": "Nashville",
    "port": "GA",
    "state": "TN",
    "price": "311"
  },
  {
    "city": "Abilene",
    "port": "TX",
    "state": "TX",
    "price": "471"
  },
  {
    "city": "Amarillo",
    "port": "TX",
    "state": "TX",
    "price": "371"
  },
  {
    "city": "Andrews",
    "port": "TX",
    "state": "TX",
    "price": "404"
  },
  {
    "city": "Austin",
    "port": "TX",
    "state": "TX",
    "price": "341"
  },
  {
    "city": "Corpus Christi",
    "port": "TX",
    "state": "TX",
    "price": "291"
  },
  {
    "city": "CrashedToys Dallas",
    "port": "TX",
    "state": "TX",
    "price": "342"
  },
  {
    "city": "Dallas",
    "port": "TX",
    "state": "TX",
    "price": "342"
  },
  {
    "city": "Dallas South",
    "port": "TX",
    "state": "TX",
    "price": "342"
  },
  {
    "city": "DRIVE Dallas",
    "port": "TX",
    "state": "TX",
    "price": "342"
  },
  {
    "city": "El Paso",
    "port": "TX",
    "state": "TX",
    "price": "491"
  },
  {
    "city": "Ft. Worth",
    "port": "TX",
    "state": "TX",
    "price": "391"
  },
  {
    "city": "Houston",
    "port": "TX",
    "state": "TX",
    "price": "211"
  },
  {
    "city": "Longview",
    "port": "TX",
    "state": "TX",
    "price": "361"
  },
  {
    "city": "Lufkin",
    "port": "TX",
    "state": "TX",
    "price": "311"
  },
  {
    "city": "McAllen",
    "port": "TX",
    "state": "TX",
    "price": "361"
  },
  {
    "city": "San Antonio",
    "port": "TX",
    "state": "TX",
    "price": "291"
  },
  {
    "city": "Waco",
    "port": "TX",
    "state": "TX",
    "price": "371"
  },
  {
    "city": "Ogden",
    "port": "CA",
    "state": "UT",
    "price": "710"
  },
  {
    "city": "Salt Lake City",
    "port": "CA",
    "state": "UT",
    "price": "660"
  },
  {
    "city": "Danville",
    "port": "NJ",
    "state": "VA",
    "price": "340"
  },
  {
    "city": "Fredericksburg",
    "port": "NJ",
    "state": "VA",
    "price": "270"
  },
  {
    "city": "Hampton",
    "port": "NJ",
    "state": "VA",
    "price": "340"
  },
  {
    "city": "Richmond",
    "port": "NJ",
    "state": "VA",
    "price": "260"
  },
  {
    "city": "Richmond East",
    "port": "NJ",
    "state": "VA",
    "price": "260"
  },
  {
    "city": "Graham",
    "port": "CA",
    "state": "WA",
    "price": "710"
  },
  {
    "city": "North Seattle",
    "port": "CA",
    "state": "WA",
    "price": "820"
  },
  {
    "city": "Pasco",
    "port": "CA",
    "state": "WA",
    "price": "970"
  },
  {
    "city": "Spokane",
    "port": "CA",
    "state": "WA",
    "price": "920"
  },
  {
    "city": "Jacson",
    "port": "GA",
    "state": "US",
    "price": "311"
  },
  {
    "city": "Billings",
    "port": "NJ",
    "state": "UT",
    "price": "899"
  },
  {
    "city": "Helena",
    "port": "NJ",
    "state": "UT",
    "price": "899"
  },
  {
    "city": "China Grove",
    "port": "GA",
    "state": "NC",
    "price": "241"
  },
  {
    "city": "Concord",
    "port": "GA",
    "state": "NC",
    "price": "241"
  },
  {
    "city": "Lumberton",
    "port": "GA",
    "state": "NC",
    "price": "346"
  },
  {
    "city": "Lumbertonia",
    "port": "GA",
    "state": "NC",
    "price": "346"
  },
  {
    "city": "Mebane",
    "port": "GA",
    "state": "NC",
    "price": "241"
  },
  {
    "city": "Mocksville",
    "port": "GA",
    "state": "NC",
    "price": "251"
  },
  {
    "city": "Raleigh",
    "port": "GA",
    "state": "NC",
    "price": "271"
  },
  {
    "city": "Lincoln",
    "port": "NJ",
    "state": "NE",
    "price": "540"
  },
  {
    "city": "Candia",
    "port": "NJ",
    "state": "NH",
    "price": "340"
  },
  {
    "city": "Glassboro East",
    "port": "NS",
    "state": "NJ",
    "price": "160"
  },
  {
    "city": "Glassboro West",
    "port": "NS",
    "state": "NJ",
    "price": "170"
  },
  {
    "city": "Somerville",
    "port": "NS",
    "state": "NJ",
    "price": "90"
  },
  {
    "city": "Trenton",
    "port": "NS",
    "state": "NJ",
    "price": "90"
  },
  {
    "city": "Albuquerque",
    "port": "TX",
    "state": "NM",
    "price": "541"
  },
  {
    "city": "Las Vegas",
    "port": "CA",
    "state": "NV",
    "price": "560"
  },
  {
    "city": "Reno",
    "port": "CA",
    "state": "NV",
    "price": "610"
  },
  {
    "city": "Albany",
    "port": "NJ",
    "state": "NY",
    "price": "220"
  },
  {
    "city": "Buffalo",
    "port": "NJ",
    "state": "NY",
    "price": "340"
  },
  {
    "city": "Long Island",
    "port": "NJ",
    "state": "NY",
    "price": "180"
  },
  {
    "city": "Newburgh",
    "port": "NJ",
    "state": "NY",
    "price": "160"
  },
  {
    "city": "Rochester",
    "port": "NJ",
    "state": "NY",
    "price": "310"
  },
  {
    "city": "Syracuse",
    "port": "NJ",
    "state": "NY",
    "price": "250"
  },
  {
    "city": "Kansas City",
    "port": "NJ",
    "state": "KS",
    "price": "470"
  },
  {
    "city": "Wichita",
    "port": "TX",
    "state": "KS",
    "price": "641"
  },
  {
    "city": "Lexington East",
    "port": "GA",
    "state": "KY",
    "price": "361"
  },
  {
    "city": "Lexington West",
    "port": "GA",
    "state": "KY",
    "price": "361"
  },
  {
    "city": "Louisville",
    "port": "GA",
    "state": "KY",
    "price": "391"
  },
  {
    "city": "Walton",
    "port": "GA",
    "state": "KY",
    "price": "411"
  },
  {
    "city": "Baton Rouge",
    "port": "GA",
    "state": "LA",
    "price": "341"
  },
  {
    "city": "New Orleans",
    "port": "TX",
    "state": "LA",
    "price": "361"
  },
  {
    "city": "Shreverport",
    "port": "TX",
    "state": "LA",
    "price": "434"
  },
  {
    "city": "North Boston",
    "port": "NJ",
    "state": "MA",
    "price": "240"
  },
  {
    "city": "South Boston",
    "port": "NJ",
    "state": "MA",
    "price": "260"
  },
  {
    "city": "West Warren",
    "port": "NJ",
    "state": "MA",
    "price": "220"
  },
  {
    "city": "Baltimore",
    "port": "NJ",
    "state": "MA",
    "price": "210"
  },
  {
    "city": "Lyman",
    "port": "NJ",
    "state": "ME",
    "price": "370"
  },
  {
    "city": "Detroit",
    "port": "NJ",
    "state": "MI",
    "price": "390"
  },
  {
    "city": "Flint",
    "port": "NJ",
    "state": "MI",
    "price": "430"
  },
  {
    "city": "Ionia",
    "port": "NJ",
    "state": "MI",
    "price": "430"
  },
  {
    "city": "Kincheloe",
    "port": "NJ",
    "state": "MI",
    "price": "430"
  },
  {
    "city": "Lansing",
    "port": "NJ",
    "state": "MI",
    "price": "440"
  },
  {
    "city": "Crashedtoys Minneapolis",
    "port": "NJ",
    "state": "MN",
    "price": "510"
  },
  {
    "city": "Minneapolis",
    "port": "NJ",
    "state": "MN",
    "price": "510"
  },
  {
    "city": "Minneapolis North",
    "port": "NJ",
    "state": "MN",
    "price": "510"
  },
  {
    "city": "St. Cloud",
    "port": "NJ",
    "state": "MN",
    "price": "540"
  },
  {
    "city": "Columbia",
    "port": "GA",
    "state": "MO",
    "price": "471"
  },
  {
    "city": "Sikeston",
    "port": "GA",
    "state": "MO",
    "price": "461"
  },
  {
    "city": "Springfield",
    "port": "GA",
    "state": "MO",
    "price": "471"
  },
  {
    "city": "St. Louis",
    "port": "GA",
    "state": "MO",
    "price": "421"
  },
  {
    "city": "Appleton",
    "port": "NJ",
    "state": "WI",
    "price": "580"
  },
  {
    "city": "Madison",
    "port": "NJ",
    "state": "WI",
    "price": "460"
  },
  {
    "city": "Milwaukee",
    "port": "NJ",
    "state": "WI",
    "price": "420"
  },
  {
    "city": "Charleston",
    "port": "NJ",
    "state": "WV",
    "price": "370"
  },
  {
    "city": "Casper",
    "port": "NJ",
    "state": "WY",
    "price": "1099"
  }
];

const states = [
  {
    "Code_state": "AL",
    "Name_state": "Alabama",
    "Price_port": "475",
    "Port": "SAV"
  },
  {
    "Code_state": "AK",
    "Name_state": "Alaska",
    "Price_port": "1500",
    "Port": "SEA"
  },
  {
    "Code_state": "AZ",
    "Name_state": "Arizona",
    "Price_port": "400",
    "Port": "LA"
  },
  {
    "Code_state": "AR",
    "Name_state": "Arkansas",
    "Price_port": "650",
    "Port": "NY"
  },
  {
    "Code_state": "CA",
    "Name_state": "California",
    "Price_port": "350",
    "Port": "LA"
  },
  {
    "Code_state": "CO",
    "Name_state": "Colorado",
    "Price_port": "650",
    "Port": "LA"
  },
  {
    "Code_state": "CT",
    "Name_state": "Connecticut",
    "Price_port": "350",
    "Port": "NY"
  },
  {
    "Code_state": "DE",
    "Name_state": "Delaware",
    "Price_port": "450",
    "Port": "NY"
  },
  {
    "Code_state": "FL",
    "Name_state": "Florida",
    "Price_port": "250",
    "Port": "MIA"
  },
  {
    "Code_state": "GA",
    "Name_state": "Georgia",
    "Price_port": "350",
    "Port": "SAV"
  },
  {
    "Code_state": "HI",
    "Name_state": "Hawaii",
    "Price_port": "1600",
    "Port": "LA"
  },
  {
    "Code_state": "ID",
    "Name_state": "Idaho",
    "Price_port": "500",
    "Port": "SEA"
  },
  {
    "Code_state": "IL",
    "Name_state": "Illinois",
    "Price_port": "275",
    "Port": "CHI"
  },
  {
    "Code_state": "IN",
    "Name_state": "Indiana",
    "Price_port": "350",
    "Port": "CHI"
  },
  {
    "Code_state": "IA",
    "Name_state": "Iowa",
    "Price_port": "450",
    "Port": "CHI"
  },
  {
    "Code_state": "KS",
    "Name_state": "Kansas",
    "Price_port": "475",
    "Port": "CHI"
  },
  {
    "Code_state": "KY",
    "Name_state": "Kentucky",
    "Price_port": "475",
    "Port": "CHI"
  },
  {
    "Code_state": "LA",
    "Name_state": "Louisiana",
    "Price_port": "475",
    "Port": "HOU"
  },
  {
    "Code_state": "ME",
    "Name_state": "Maine",
    "Price_port": "550",
    "Port": "NY"
  },
  {
    "Code_state": "MD",
    "Name_state": "Maryland",
    "Price_port": "400",
    "Port": "NY"
  },
  {
    "Code_state": "MA",
    "Name_state": "Massachusetts",
    "Price_port": "475",
    "Port": "NY"
  },
  {
    "Code_state": "MI",
    "Name_state": "Michigan",
    "Price_port": "450",
    "Port": "CHI"
  },
  {
    "Code_state": "MN",
    "Name_state": "Minnesota",
    "Price_port": "425",
    "Port": "CHI"
  },
  {
    "Code_state": "MS",
    "Name_state": "Mississippi",
    "Price_port": "500",
    "Port": "HOU"
  },
  {
    "Code_state": "MO",
    "Name_state": "Missouri",
    "Price_port": "400",
    "Port": "CHI"
  },
  {
    "Code_state": "MT",
    "Name_state": "Montana",
    "Price_port": "850",
    "Port": "SEA"
  },
  {
    "Code_state": "NE",
    "Name_state": "Nebraska",
    "Price_port": "550",
    "Port": "CHI"
  },
  {
    "Code_state": "NV",
    "Name_state": "Nevada",
    "Price_port": "450",
    "Port": "LA"
  },
  {
    "Code_state": "NH",
    "Name_state": "New Hampshire",
    "Price_port": "525",
    "Port": "NY"
  },
  {
    "Code_state": "NJ",
    "Name_state": "New Jersey",
    "Price_port": "225",
    "Port": "NY"
  },
  {
    "Code_state": "NM",
    "Name_state": "New Mexico",
    "Price_port": "600",
    "Port": "HOU"
  },
  {
    "Code_state": "NY",
    "Name_state": "New York",
    "Price_port": "400",
    "Port": "NY"
  },
  {
    "Code_state": "NC",
    "Name_state": "North Carolina",
    "Price_port": "425",
    "Port": "SAV"
  },
  {
    "Code_state": "ND",
    "Name_state": "North Dakota",
    "Price_port": "550",
    "Port": "CHI"
  },
  {
    "Code_state": "OH",
    "Name_state": "Ohio",
    "Price_port": "525",
    "Port": "CHI"
  },
  {
    "Code_state": "OK",
    "Name_state": "Oklahoma",
    "Price_port": "500",
    "Port": "HOU"
  },
  {
    "Code_state": "OR",
    "Name_state": "Oregon",
    "Price_port": "325",
    "Port": "SEA"
  },
  {
    "Code_state": "PA",
    "Name_state": "Pennsylvania",
    "Price_port": "475",
    "Port": "NY"
  },
  {
    "Code_state": "RI",
    "Name_state": "Rhode Island",
    "Price_port": "450",
    "Port": "NY"
  },
  {
    "Code_state": "SC",
    "Name_state": "South Carolina",
    "Price_port": "375",
    "Port": "SAV"
  },
  {
    "Code_state": "SD",
    "Name_state": "South Dakota",
    "Price_port": "550",
    "Port": "CHI"
  },
  {
    "Code_state": "TN",
    "Name_state": "Tennessee",
    "Price_port": "475",
    "Port": "SAV"
  },
  {
    "Code_state": "TX",
    "Name_state": "Texas",
    "Price_port": "300",
    "Port": "HOU"
  },
  {
    "Code_state": "UT",
    "Name_state": "Utah",
    "Price_port": "550",
    "Port": "LA"
  },
  {
    "Code_state": "VT",
    "Name_state": "Vermont",
    "Price_port": "450",
    "Port": "NY"
  },
  {
    "Code_state": "VA",
    "Name_state": "Virginia",
    "Price_port": "500",
    "Port": "NY"
  },
  {
    "Code_state": "WA",
    "Name_state": "Washington",
    "Price_port": "250",
    "Port": "SEA"
  },
  {
    "Code_state": "WV",
    "Name_state": "West Virginia",
    "Price_port": "550",
    "Port": "NY"
  },
  {
    "Code_state": "WI",
    "Name_state": "Wisconsin",
    "Price_port": "300",
    "Port": "CHI"
  },
  {
    "Code_state": "WY",
    "Name_state": "Wyoming",
    "Price_port": "600",
    "Port": "LA"
  },
  {
    "Code_state": "DC",
    "Name_state": "Washington",
    "Price_port": "400",
    "Port": "NY"
  }
];

const gasolineUrl = './images/customs/mercedes.png';
const dieselUrl = './images/customs/cruiser.png';
const hybridUrl = './images/customs/toyota.png';
const electroUrl = './images/customs/nissan.jpg';
const allCarsUrl = './images/customs/american.png';


let fuel = '';
let auction = 'iaai';
let carYear = 0;
let carPrice = 0;
let carVolume = 0;

let auctionPrice = 0;
let excisePrice = 0;
let dutyPrice = 0;
let ndsPrice = 0;

let baseRate = 0;
let engineCoefficient = 0;
let ageCoefficient = 0;

let state = 'FL';
let port = 'lit';
let category = 1;
let landState = '';

let customsPrice = 0;
let deliveryPrice = 0;
let portDeliveryPrice = 0;
let insurancePrice = carPrice * 0.009;
let landDeliveryPrice = 0;

let standard = 500;
let standardPlus = 600;
let expert = 300;
let service = 0;

function deliveryPriceCount() {
  if (carPrice > 0) {
    if (port === 'ukr') {
      if (state === 'NJ') {
        portDeliveryPrice = 700 + 450;
        if (category === 1) deliveryPrice = 700 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 700 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'GA') {
        portDeliveryPrice = 700 + 450;
        if (category === 1) deliveryPrice = 700 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 700 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'FL') {
        portDeliveryPrice = 730 + 450;
        if (category === 1) deliveryPrice = 730 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 730 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'TX') {
        portDeliveryPrice = 750 + 450;
        if (category === 1) deliveryPrice = 750 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 750 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'CA') {
        portDeliveryPrice = 975 + 450;
        if (category === 1) deliveryPrice = 975 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 975 + 300 + 100 + carPrice * 0.009;
      }
    } else {
      if (state === 'NJ') {
        portDeliveryPrice = 600 + 250;
        if (category === 1) deliveryPrice = 600 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 600 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'GA') {
        portDeliveryPrice = 600 + 250;
        if (category === 1) deliveryPrice = 600 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 600 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'FL') {
        portDeliveryPrice = 700 + 250;
        if (category === 1) deliveryPrice = 700 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 700 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'TX') {
        portDeliveryPrice = 675 + 250;
        if (category === 1) deliveryPrice = 675 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 675 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'CA') {
        portDeliveryPrice = 925 + 250;
        if (category === 1) deliveryPrice = 925 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 925 + 300 + 100 + carPrice * 0.009;
      }
    }
  }
}
$('.big-car-image').css('padding', '3em 0');
function handleFuelChanges() {
  if (fuel === 'gasoline') {
    $('.big-car-image').fadeOut(300, function () {
      $('.big-car-image').attr('src', gasolineUrl).fadeIn(300);
      $('.big-car-image').css('padding', '0 3em');
    });

    dutyPrice = +carPrice * 0.1;
    if (+carVolume * 1000 <= 3000) {
      baseRate = 50;
      excisePrice = 50 * +engineCoefficient * +ageCoefficient;
      ndsPrice = (+carPrice + +excisePrice + +dutyPrice) * 0.2;
      customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    } else {
      baseRate = 100;
      excisePrice = 100 * +engineCoefficient * +ageCoefficient;
      ndsPrice = (+carPrice + +excisePrice + +dutyPrice) * 0.2;
      customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    }
  } else if (fuel === 'diesel') {
    $('.big-car-image').fadeOut(300, function () {
      $('.big-car-image').attr('src', dieselUrl).fadeIn(300);
      $('.big-car-image').css('padding', '1em 0');
    });

    dutyPrice = +carPrice * 0.1;
    if (+carVolume * 1000 <= 3500) {
      baseRate = 75;
      excisePrice = 75 * +engineCoefficient * +ageCoefficient;
      ndsPrice = (+carPrice + +excisePrice + +dutyPrice) * 0.2;
      customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    } else {
      baseRate = 150;
      excisePrice = 150 * +engineCoefficient * +ageCoefficient;
      ndsPrice = (+carPrice + +excisePrice + +dutyPrice) * 0.2;
      customsPrice = +excisePrice + +dutyPrice + +ndsPrice;

    }
  } else if (fuel === 'hybrid') {
    $('.big-car-image').fadeOut(300, function () {
      $('.big-car-image').attr('src', hybridUrl).fadeIn(300);
      $('.big-car-image').css('padding', '0 3em');
    });

    dutyPrice = +carPrice * 0.1;
    if (+carVolume * 1000 <= 3000) {
      baseRate = 50;
      excisePrice = 50 * +engineCoefficient * +ageCoefficient;
      ndsPrice = (+carPrice + +excisePrice + +dutyPrice) * 0.2;
      customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    } else {
      baseRate = 100;
      excisePrice = 100 * +engineCoefficient * +ageCoefficient;
      ndsPrice = (+carPrice + +excisePrice + +dutyPrice) * 0.2;
      customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    }
  } else if (fuel === 'electro') {
    $('.big-car-image').fadeOut(300, function () {
      $('.big-car-image').attr('src', electroUrl).fadeIn(300);
      $('.big-car-image').css('padding', '0 3em');
    });

    baseRate = 50;
    dutyPrice = 0;
    excisePrice = +carVolume * 1.08;
    ndsPrice = 0;
    customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
  }
}
function countAuctionPrice() {
  if (auction === 'copart') {
    if (carPrice >= 0 && carPrice <= 49.99) {
      auctionPrice = 1;
    } else if (carPrice >= 50 && carPrice <= 99.99) {
      auctionPrice = 1;
    } else if (carPrice >= 100 && carPrice <= 199.99) {
      auctionPrice = (25 + 29);
    } else if (carPrice >= 200 && carPrice <= 299.99) {
      auctionPrice = (50 + 29);
    } else if (carPrice >= 300 && carPrice <= 349.99) {
      auctionPrice = (75 + 29);
    } else if (carPrice >= 350 && carPrice <= 399.99) {
      auctionPrice = (75 + 29);
    } else if (carPrice >= 400 && carPrice <= 449.99) {
      auctionPrice = (110 + 29);
    } else if (carPrice >= 450 && carPrice <= 499.99) {
      auctionPrice = (110 + 29);
    } else if (carPrice >= 500 && carPrice <= 549.99) {
      auctionPrice = (125 + 39);
    } else if (carPrice >= 550 && carPrice <= 599.99) {
      auctionPrice = (130 + 39);
    } else if (carPrice >= 600 && carPrice <= 699.99) {
      auctionPrice = (140 + 39);
    } else if (carPrice >= 700 && carPrice <= 799.99) {
      auctionPrice = (155 + 39);
    } else if (carPrice >= 800 && carPrice <= 899.99) {
      auctionPrice = (170 + 39);
    } else if (carPrice >= 900 && carPrice <= 999.99) {
      auctionPrice = (185 + 39);
    } else if (carPrice >= 1000 && carPrice <= 1199.99) {
      auctionPrice = (200 + 59);
    } else if (carPrice >= 1200 && carPrice <= 1299.99) {
      auctionPrice = (225 + 59);
    } else if (carPrice >= 1300 && carPrice <= 1399.99) {
      auctionPrice = (240 + 59);
    } else if (carPrice >= 1400 && carPrice <= 1499.99) {
      auctionPrice = (250 + 59);
    } else if (carPrice >= 1500 && carPrice <= 1599.99) {
      auctionPrice = (260 + 69);
    } else if (carPrice >= 1600 && carPrice <= 1699.99) {
      auctionPrice = (270 + 69);
    } else if (carPrice >= 1700 && carPrice <= 1799.99) {
      auctionPrice = (285 + 69);
    } else if (carPrice >= 1800 && carPrice <= 1999.99) {
      auctionPrice = (300 + 69);
    } else if (carPrice >= 2000 && carPrice <= 2399.99) {
      auctionPrice = (325 + 79);
    } else if (carPrice >= 2400 && carPrice <= 2499.99) {
      auctionPrice = (335 + 79);
    } else if (carPrice >= 2500 && carPrice <= 2999.99) {
      auctionPrice = (350 + 79);
    } else if (carPrice >= 3000 && carPrice <= 3499.99) {
      auctionPrice = (400 + 79);
    } else if (carPrice >= 3500 && carPrice <= 3999.99) {
      auctionPrice = (450 + 79);
    } else if (carPrice >= 4000 && carPrice <= 4499.99) {
      auctionPrice = (475 + 89);
    } else if (carPrice >= 4500 && carPrice <= 4999.99) {
      auctionPrice = (500 + 89);
    } else if (carPrice >= 5000 && carPrice <= 5999.99) {
      auctionPrice = (525 + 89);
    } else if (carPrice >= 6000 && carPrice <= 7499.99) {
      auctionPrice = (550 + 99);
    } else if (carPrice >= 7499 && carPrice <= 7999.99) {
      auctionPrice = (575 + 99);
    } else if (carPrice >= 8000 && carPrice <= 9999.99) {
      auctionPrice = (575 + 119);
    } else if (carPrice >= 10000 && carPrice <= 14999.99) {
      auctionPrice = (600 + 119);
    } else if (carPrice >= 15000 && carPrice <= 19999.99) {
      auctionPrice = (carPrice * 0.04 + 119);
    } else if (carPrice >= 20000 && carPrice <= 24999.99) {
      auctionPrice = (carPrice * 0.04 + 119);
    } else if (carPrice >= 250000 && carPrice <= 29999.99) {
      auctionPrice = (carPrice * 0.04 + 119);
    } else if (carPrice >= 300000 && carPrice <= 34999.99) {
      auctionPrice = (carPrice * 0.04 + 119);
    } else if (carPrice >= 350000 && carPrice <= 1000000000) {
      auctionPrice = (carPrice * 0.04 + 119);
    } else {
      auctionPrice = (carPrice * 0.20);
    }
  } else if (auction === 'iaai') {
    if (carPrice >= 0 && carPrice <= 99.99) {
      auctionPrice = (1 + 59);
    } else if (carPrice >= 100 && carPrice <= 199.99) {
      auctionPrice = (40 + 29 + 59);
    } else if (carPrice >= 200 && carPrice <= 299.99) {
      auctionPrice = (60 + 29 + 59);
    } else if (carPrice >= 300 && carPrice <= 349.99) {
      auctionPrice = (75 + 29 + 59);
    } else if (carPrice >= 350 && carPrice <= 399.99) {
      auctionPrice = (90 + 29 + 59);
    } else if (carPrice >= 400 && carPrice <= 499.99) {
      auctionPrice = (100 + 29 + 59);
    } else if (carPrice >= 500 && carPrice <= 599.99) {
      auctionPrice = (130 + 39 + 59);
    } else if (carPrice >= 600 && carPrice <= 699.99) {
      auctionPrice = (145 + 39 + 59);
    } else if (carPrice >= 700 && carPrice <= 799.99) {
      auctionPrice = (160 + 39 + 59);
    } else if (carPrice >= 800 && carPrice <= 899.99) {
      auctionPrice = (175 + 39 + 59);
    } else if (carPrice >= 900 && carPrice <= 999.99) {
      auctionPrice = (190 + 39 + 59);
    } else if (carPrice >= 1000 && carPrice <= 1099.99) {
      auctionPrice = (205 + 59 + 59);
    } else if (carPrice >= 1100 && carPrice <= 1199.99) {
      auctionPrice = (220 + 59 + 59);
    } else if (carPrice >= 1200 && carPrice <= 1299.99) {
      auctionPrice = (230 + 59 + 59);
    } else if (carPrice >= 1300 && carPrice <= 1399.99) {
      auctionPrice = (240 + 59 + 59);
    } else if (carPrice >= 1400 && carPrice <= 1499.99) {
      auctionPrice = (255 + 59 + 59);
    } else if (carPrice >= 1500 && carPrice <= 1599.99) {
      auctionPrice = (270 + 69 + 59);
    } else if (carPrice >= 1600 && carPrice <= 1699.99) {
      auctionPrice = (290 + 69 + 59);
    } else if (carPrice >= 1700 && carPrice <= 1799.99) {
      auctionPrice = (300 + 69 + 59);
    } else if (carPrice >= 1800 && carPrice <= 1999.99) {
      auctionPrice = (310 + 69 + 59);
    } else if (carPrice >= 2000 && carPrice <= 2199.99) {
      auctionPrice = (325 + 79 + 59);
    } else if (carPrice >= 2200 && carPrice <= 2399.99) {
      auctionPrice = (330 + 79 + 59);
    } else if (carPrice >= 2400 && carPrice <= 2499.99) {
      auctionPrice = (345 + 79 + 59);
    } else if (carPrice >= 2500 && carPrice <= 2999.99) {
      auctionPrice = (360 + 79 + 59);
    } else if (carPrice >= 3000 && carPrice <= 3499.99) {
      auctionPrice = (400 + 79 + 59);
    } else if (carPrice >= 3500 && carPrice <= 3999.99) {
      auctionPrice = (450 + 79 + 59);
    } else if (carPrice >= 4000 && carPrice <= 4499.99) {
      auctionPrice = (475 + 89 + 59);
    } else if (carPrice >= 4500 && carPrice <= 4999.99) {
      auctionPrice = (500 + 89 + 59);
    } else if (carPrice >= 5000 && carPrice <= 5999.99) {
      auctionPrice = (525 + 89 + 59);
    } else if (carPrice >= 6000 && carPrice <= 7499.99) {
      auctionPrice = (550 + 99 + 59);
    } else if (carPrice >= 7500 && carPrice <= 19999.99) {
      auctionPrice = (carPrice * 0.01 + 500 + 119 + 59);
    } else if (carPrice >= 20000) {
      auctionPrice = (carPrice * 0.04 + 119 + 59);
    }
  } else console.log('manheim')
}

$('#year').on('input', e => {
  new Promise(res => {
    carYear = +e.target.value;
    ageCoefficient = new Date().getFullYear() - carYear;
    excisePrice = baseRate * +engineCoefficient * +ageCoefficient;
    customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    res();
  }).then(() => updateDocumentValues());
});
$('#price').on('input', e => {
  new Promise(res => {
    carPrice = +e.target.value;
    dutyPrice = +e.target.value * 0.1;
    excisePrice = baseRate * +engineCoefficient * +ageCoefficient;
    ndsPrice = (+e.target.value + +excisePrice + +dutyPrice) * 0.2;
    insurancePrice = +e.target.value * 0.009;
    customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    $('#standard').attr('checked', 'checked');
    service = 500;
    res();
  }).then(() => countAuctionPrice())
    .then(() => deliveryPriceCount())
    .then(() => updateDocumentValues())
});
$('#volume').on('input', e => {
  let value;

  new Promise(res => {
    (e.target.value.split(',').length > 1)
      ? value = +e.target.value.split(',').join('.')
      : value = +e.target.value;

    res();
  }).then(() => {
    carVolume = +value;
    engineCoefficient = +value;
    excisePrice = baseRate * +engineCoefficient * +ageCoefficient;
    ndsPrice = (+carPrice + +excisePrice + +dutyPrice) * 0.2;
    customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
  }).then(() => handleFuelChanges())
    .then(() => updateDocumentValues())
});
$('.fuel').on('change', e => {
  new Promise(res => {
    fuel = e.target.value;
    res();
  }).then(() => {
    for (let node of $('.fuel')) {
      if ($(node).not(e.target).parent().hasClass('active')) {
        $(node).parent().removeClass('active');
      }
    }
    $(e.target).parent().addClass('active');
  }).then(() => handleFuelChanges())
    .then(() => updateDocumentValues())
});
$('.auction').on('change', e => {
  new Promise(res => {
    auction = e.target.value;
    for (let node of $('.auction')) {
      if ($(node).not(e.target).parent().hasClass('active')) {
        $(node).parent().removeClass('active');
      }
    }
    $(e.target).parent().addClass('active');
    res();
  }).then(() => countAuctionPrice())
    .then(() => updateDocumentValues());
});
$('.port img').on('click', e => {
  new Promise(res => {
    port = $(e.target).attr('data');
    res();
  }).then(() => {
    for (let node of $('.port img')) {
      if ($(node).not(e.target).hasClass('active')) {
        $(node).removeClass('active');
      }
    }
    $(e.target).addClass('active');
  }).then(() => deliveryPriceCount())
    .then(() => updateDocumentValues())
});
$('.category').on('change', e => {
  new Promise(res => {
    if ($(e.target).attr('id') === 'first') category = 1;
    if ($(e.target).attr('id') === 'second') category = 2;
    for (let node of $('.category')) {
      if ($(node).not(e.target).parent().hasClass('active')) {
        $(node).parent().removeClass('active');
      }
    }
    $(e.target).parent().addClass('active');
    res();
  }).then(() => deliveryPriceCount())
    .then(() => updateDocumentValues())
});
$('.select-local-state').on('change', e => {
  new Promise(res => {
    state = e.target.value;
    res();
  }).then(() => deliveryPriceCount())
    .then(() => updateDocumentValues())
});
$('.service').on('change', e => {
  new Promise(res => {
    service = +e.target.value;
    res();
  }).then(() => updateDocumentValues());
});
$('.state').on('click', e => {
  for (let node of $('.hover-map')) {
    if ($(node).not(e.target).hasClass('state-active')) {
      $(node).removeClass('state-active');
    }
  }
  $(e.target).addClass('state-active');

  new Promise(res => {
    const value = e.target.classList[0].split('--')[1].toLowerCase();
    res(value);
  }).then(value => {
    states.forEach(s => {
      if (s.Code_state.toLowerCase() === value) {
        landDeliveryPrice = +s.Price_port;
      }
    });
  }).then(() => updateDocumentValues())
    .catch(err => console.log(err));
});
$('.map-select').on('change', e => {
  new Promise(res => {
    const value = e.target.value.split('--')[1].toLowerCase();
    res(value);
  }).then(value => {
    states.forEach(s => {
      if (s.Code_state.toLowerCase() === value) {
        landDeliveryPrice = +s.Price_port;
      }
    });
  }).then(() => updateDocumentValues())
    .catch(err => console.log(err));
});

function updateDocumentValues() {
  $('.price-display').text(`$${carPrice}`);
  $('.auction-display').text(`$${Math.round(auctionPrice)}`);
  $('.excise-display').text(`$${Math.round(excisePrice)}`);
  $('.duty-display').text(`$${Math.round(dutyPrice)}`);
  $('.nds-display').text(`$${Math.round(ndsPrice)}`);
  $('.customs-sum-display').text(`$${Math.round(customsPrice)}`);

  $('.broker-display').text(`$${400 + 200}`);
  $('.delivery-sum-display').text(`$${Math.round(portDeliveryPrice + landDeliveryPrice + 200 + 400)}`);
  $('.port-delivery-display').text(`$${Math.round(portDeliveryPrice)}`);
  $('.land-delivery-display').text(`$${landDeliveryPrice}`);

  $('.insurance-display').text(`$${insurancePrice.toFixed(2)}`);
  $('.standard').text(`$${standard}`);
  $('.standardPlus').text(`$${standardPlus}`);
  $('.expert').text(`$${expert}`);
  $('.total-sum-display').text(`$${+carPrice + +customsPrice + +auctionPrice + +insurancePrice.toFixed(2) + +portDeliveryPrice + +landDeliveryPrice + 200 + 400 + +service}`);

  // console.log('=== CUSTOMS ===');
  // console.log('insurancePrice:', insurancePrice);
  // console.log('auctionPrice:', auctionPrice);
  // console.log('excisePrice:', excisePrice);
  // console.log('dutyPrice:', dutyPrice);
  // console.log('ndsPrice:', ndsPrice);
  // console.log('customsPrice:', customsPrice);
  // console.log('=== DELIVERY ===');
  // console.log('landDeliveryPrice:', landDeliveryPrice);
  // console.log('deliveryPrice:', deliveryPrice);
  // console.log('portDeliveryPrice:', portDeliveryPrice);
  // console.log('Итоговая стоимость со всем платежами:', +carPrice + +customsPrice + +auctionPrice + +insurancePrice.toFixed(2) + +portDeliveryPrice + +landDeliveryPrice + 200 + 400 + +service);
}
