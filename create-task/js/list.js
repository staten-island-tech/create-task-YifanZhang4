const fishList = [
  {
    name: "Crimson Jobfish",
    sciName: "Pristipomoides filamentosus",
    aka: "Opakapaka, Hawaiian pink snapper",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-07/640x427-Opakapaka-pink-snapper.png?itok=uj6-PmkG",
    imgAlt: "",
    weight: "Up to 18 pounds",
    long: "Up to 17-20 inches",
    lifespan: "Up to 43 years",
    region: "Tropical Pacific Ocean",
  },
  {
    name: "White Hake",
    sciName: "Urophycis tenuis",
    aka: "Mud Hake, Boston Hake",
    imgSrc:
      "https://media.fisheries.noaa.gov/2020-12/640x427-Hake_White_NB_W.jpg?itok=yHy_AuTT",
    imgAlt: "",
    weight: "Up to 49 pounds",
    long: "Up to 53 inches",
    lifespan: "Up to 10 years",
    region: "Northwest Atlantic Ocean",
  },
  {
    name: "Atlantic Chub Mackerel",
    sciName: "Scomber colias",
    aka: "Tinker mackerel",
    imgSrc:
      "https://media.fisheries.noaa.gov/2021-04/640x427-Atlantic-chub-mackerel-FNL_NB_W.jpg?itok=TtyvYmrx",
    imgAlt: "",
    weight: "Up to 3.5 pounds",
    long: "Up to 22 inches",
    lifespan: "8 to 10 years",
    region: "Western Atlantic Ocean",
  },
  {
    name: "Shortfin Squid",
    sciName: "Illex illecebrosus",
    aka: "Illex Squid, Summer Squid",
    imgSrc:
      "https://media.fisheries.noaa.gov/2021-03/squid_illex_nb_w_0.png?itok=Gms9hXDg",
    imgAlt: "",
    weight: "26-29 pounds",
    long: "7 to 12 inches (female), 7.1 to 10.6 in (male)",
    lifespan: "Less than 1 year",
    region: "Northwest Atlantic Ocean",
  },
  {
    name: "American Lobster",
    sciName: "Homarus americanus",
    aka: null,
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-american-lobster.png?itok=FX0oMipE",
    imgAlt: "",
    weight: "Up to 44 pounds",
    long: "Up to 25 inches",
    lifespan: "At least 100 years",
    region: "Northwest Atlantic Ocean",
  },
  {
    name: "Yellowtail Rockfish",
    sciName: "Sebastes flavidus",
    aka: "Yellow Seaperch, Green Rockfish",
    imgSrc:
      "https://media.fisheries.noaa.gov/dam-migration/640x427-rockfish_yellowtail_nb_w.jpg?itok=Ymb-q1-n",
    imgAlt: "",
    weight: "Up to 5.5 pounds",
    long: "Up to 26 inches",
    lifespan: "Up to 50 years",
    region: "Northeast Pacific",
  },
  {
    name: "Bocaccio Rockfish",
    sciName: "Sebastes paucispinis",
    aka: "Rock Salmon,Salmon Rockfish, Pacific Red Snapper, Pacific Snapper, Oregon Snapper",
    imgSrc:
      "https://media.fisheries.noaa.gov/dam-migration/640x427-bocaccio.jpg?itok=4DrgNj6Y",
    imgAlt: "",
    weight: "Up to 21 pounds",
    long: "Up to 36 inches",
    lifespan: "Up to 50 years",
    region: "Pacific Coast",
  },
  {
    name: "Sablefish",
    sciName: "Anoplopoma fimbria",
    aka: "Black Cod",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-10/640x427-Sablefish-NOAAFisheries.png?itok=A4gT6-in",
    imgAlt: "",
    weight: "Up to 55 pounds",
    long: "Up to 45 inches",
    lifespan: "Up to 94 years",
    region: "Gulf of Alaska, Pacific Coast",
  },
  {
    name: "Atlantic Halibut",
    sciName: "Hippoglossus hippoglossus",
    aka: null,
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-08/640x427-Halibut-Atlantic-right-NOAAFisheries.png?itok=uPvRdIBx",
    imgAlt: "",
    weight: "Up to 710 pounds",
    long: "Up to 180 inches",
    lifespan: "Up to 50 years",
    region: "North Atlantic Ocean",
  },
  {
    name: "Shortspine Thornyhead",
    sciName: "Sebastolobus alascanus",
    aka: "Idiot Fish, Idiot Cod",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-10/640x427-Shortspine-Thornyhead-NOAAFisheries.png?itok=4MzpLpIP",
    imgAlt: "",
    weight: "Up to 2.8 pounds",
    long: "Up to 80 inches",
    lifespan: "Up to 100 years",
    region: "Northern Pacific Ocean, Northeastern Pacific Ocean",
  },
  {
    name: "Canary Rockfish",
    sciName: "Sebastes pinniger",
    aka: null,
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-canary_rockfish.png?itok=M8fN95a_",
    imgAlt: "",
    weight: "Up to 10 pounds",
    long: "Up to 30 inches",
    lifespan: "Up to 75 years",
    region: "Pacific Coast",
  },
  {
    name: "Black Grouper",
    sciName: "Mycteroperca bonaci",
    aka: null,
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-08/640x427-Grouper-Black-NOAAFisheries.png?itok=FyvNY-hf",
    imgAlt: "",
    weight: "Up to 180 pounds",
    long: "Up to 60 inches",
    lifespan: "Up to 30 years",
    region: "Western Atlantic Ocean",
  },
  {
    name: "Striped Marlin",
    sciName: "Kajikia audax",
    aka: "Nairagi, Striped Swordfish",
    imgSrc:
      "https://media.fisheries.noaa.gov/dam-migration/640x427-striped-marlin.png?itok=m4pf6a8F",
    imgAlt: "",
    weight: "250 - 450 pounds",
    long: "Up to 168 inches",
    lifespan: "Up to 20 years",
    region:
      "Tropical and Subtropical Pacific Ocean, Tropical and Subtropical Indian Ocean",
  },
  {
    name: "Red Hake",
    sciName: "Urophycis chuss",
    aka: "Squirrel Hake",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-09/640x427-Hake-Red-NOAAFisheries.png?itok=SyCYEmmm",
    imgAlt: "",
    weight: "Up to 4.4 pounds",
    long: "Up to 20 inches",
    lifespan: "Up to 14 years",
    region: "Atlantic Ocean",
  },
  {
    name: "Atlantic Sharpnose Shark",
    sciName: "Rhizoprionodon terraenovae",
    aka: null,
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-08/640x427-Shark-Atlantic-Sharpnose-NOAAFisheries.png?itok=ojXcPEbt",
    imgAlt: "",
    weight: "Up to 8.8 pounds",
    long: "Up to 48 inches",
    lifespan: "Up to 12 years",
    region: "Northwestern Atlantic Ocean",
  },
  {
    name: "Pacific Sardine",
    sciName: "Sardinops sagax caerulea",
    aka: "California Sardine, California Pilchard",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-09/640x427-Sardine-Pacific-NOAAFisheries.png?itok=419HINFe",
    imgAlt: "",
    weight: "Up to 1 pound",
    long: "Up to 16 inches",
    lifespan: "Up to 13 years",
    region: " Pacific Ocean, Indian Ocean",
  },
  {
    name: "Atlantic Salmon",
    sciName: "Salmo salar",
    aka: null,
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-08/640x427-Salmon-Atlantic-NOAAFisheries.png?itok=z_tFH1qP",
    imgAlt: "",
    weight: "Up to 30 pounds",
    long: "Up to 28-30 inches ",
    lifespan: "3-7 years",
    region: "Northern Atlantic Ocean",
  },
  {
    name: "Butterfish",
    sciName: "Peprilus triacanthus",
    aka: "American Butterfish, Atlatnic Butterfish",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-08/640x427-Butterfish-NOAAFisheries.png?itok=hBVbVwT4",
    imgAlt: "",
    weight: "Up to 1.25 pounds",
    long: "Up to 6-12 inches",
    lifespan: "Up to 3 years",
    region: "Western Atltantic Ocean",
  },
  {
    name: "Winter Skate",
    sciName: "Leucoraja ocellata",
    aka: null,
    imgSrc:
      "https://media.fisheries.noaa.gov/dam-migration/640x427-skate-winter.jpg?itok=Lww3lMl4",
    imgAlt: "",
    weight: "Up to 15 pounds",
    long: "Up to 60 inches",
    lifespan: "Up to 20 years",
    region: "Northeastern North America",
  },
  {
    name: "Pink Salmon",
    sciName: "Oncorhynchus gorbuscha",
    aka: "Humpback Salmon",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-10/640x427-Salmon-Pink-NOAAFisheries.png?itok=2k7D_Sp9",
    imgAlt: "",
    weight: "Up to 3.5-5 pounds",
    long: "Up to 20-25 inches",
    lifespan: "Up to 2 years",
    region: "Pacific Coast, Arctic Coast",
  },
  {
    name: "Atlantic Northern Shrimp",
    sciName: "Pandalus borealis",
    aka: "Coldwater Shrimp, Deepwater Prawn",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-08/640x427-Shrimp-Atlantic-Northern-NOAAFisheries.png?itok=9Tw56Qw6",
    imgAlt: "",
    weight: "Up to 0.03 pounds",
    long: "up to 6.5 inches (female), Up to 4.7 inches (male)",
    lifespan: "Up to 8 years",
    region: "Northern Atlantic Ocean, Northern Pacific Ocean",
  },
  {
    name: "North Pacific Swordfish",
    sciName: "Xiphias gladius",
    aka: "Broadbill Swordfish",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-09/640x427-Swordfish-NOAAFisheries.png?itok=D35ccWSJ",
    imgAlt: "",
    weight: "Up to 1,200 pounds",
    long: "Up to 168 inches",
    lifespan: "Up to 9 years",
    region:
      "Tropical and Temperate Atlantic Ocean, Tropical and Temperate Pacific Ocean, Tropical and Temperate Indian Ocean",
  },
  {
    name: "Atlantic Mackerel",
    sciName: "Scomber scombrus",
    aka: "Boston Mackerel, Common Mackerel, Norwegian Mackerel, Scottish Mackerel",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-08/640x427-Mackerel-Atlantic-NOAAFisheries.png?itok=RzeGQbqy",
    imgAlt: "",
    weight: "Up to 2.2 pounds",
    long: "Up to 16.5 inches",
    lifespan: "Up to 20 years",
    region: "Temperate Mediterranean Sea, Black Sea, Northern Atlantic Ocean",
  },
  {
    name: "Atlantic Bigeye Tuna",
    sciName: "Thunnus obesus",
    aka: null,
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-07/640x427-Tuna-Bigeye-NOAAFisheries.png?itok=Q060vnPR",
    imgAlt: "",
    weight: "Up to 400 pounds",
    long: "Up to 98 inches",
    lifespan: "Up to 9 years",
    region:
      "Tropical and Temperate Atlantic Ocean, Tropical and Temperate Pacific Ocean, Tropical and Temperate Indian Ocean",
  },
  {
    name: "North Atlantic Albacore Tuna",
    sciName: "Thunnus alalunga",
    aka: "Longfin Tuna",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-09/640x427-Tuna-Albacore-NOAAFisheries.png?itok=DEcB-5AE",
    imgAlt: "",
    weight: "Up to 88 pounds",
    long: "Up to 48 inches",
    lifespan: "Up to 13 years",
    region:
      "Tropical and Temperate Atlantic Ocean, Tropical and Temperate Pacific Ocean, Tropical and Temperate Indian Ocean",
  },
  {
    name: "Acadian Redfish",
    sciName: "Sebastes fasciatus",
    aka: "Labrador Redfish",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-07/640x427-Acadian-Redfish-NOAAFisheries.png?itok=2MlNuAf5",
    imgAlt: "",
    weight: "Up to 5 pounds",
    long: "Up to 18-20 inches",
    lifespan: "Up to 50 years",
    region: "Northwestern Atlantic Ocean",
  },
  {
    name: "Atlantic Skipjack Tuna",
    sciName: "Katsuwonus pelamis",
    aka: "Ocean Bonito",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-08/640x427-Tuna-Skipjack-NOAAFisheries.png?itok=Bhor3KIJ",
    imgAlt: "",
    weight: "Up to 4 pounds",
    long: "Up to 36 inches",
    lifespan: "Up to 7 years",
    region:
      "Tropical Atlantic Ocean, Tropical Pacific Ocean, Tropical Indian Ocean",
  },
  {
    name: "Atlantic Pollock",
    sciName: "Pollachius virens",
    aka: "Saithe, Coalfish",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-08/640x427-Pollock-Atlantic-NOAAFisheries.png?itok=ZFoDB-Qr",
    imgAlt: "",
    weight: "Up to 35 pounds",
    long: "Up to 39-47 inches",
    lifespan: "Up to 23 years",
    region: "Northwest Atlantic Ocean",
  },
  {
    name: "Atlantic Yellowfin Tuna",
    sciName: "Thunnus albacares",
    aka: null,
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-08/640x427-Tuna-Yellowfin-NOAAFisheries.png?itok=M1e9FdZz",
    imgAlt: "",
    weight: "Up to 400 pounds",
    long: "Up to 94 inches",
    lifespan: "Up to 7 years",
    region: "Atlantic Ocean, Pacific Ocean, Indian Ocean",
  },
  {
    name: "Longfin Inshore Squid",
    sciName: "Doryteuthis pealeii",
    aka: "Longfin Squid, Winter Squid",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-08/640x427-Squid-Longfin-v1-NOAAFisheries.png?itok=xDRXvWUM",
    imgAlt: "",
    weight: "Up to 0.23 pounds",
    long: "Up to 19.75 inches",
    lifespan: "Up to 6-8 months",
    region: "North Atlantic Ocean",
  },
  {
    name: "Scup",
    sciName: "Stenotomus chrysops",
    aka: "Porgy",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-09/640x427-Scup-NOAAFisheries_0.png?itok=5nyrKyh-",
    imgAlt: "",
    weight: "Up to 4 pounds",
    long: "Up to 20 inches",
    lifespan: "Up to 20 years",
    region: "Atlantic Ocean",
  },
  {
    name: "White Shrimp",
    sciName: "Litopenaeus setiferus",
    aka: "Gray Shrimp, Lake Shrimp, Green Shrimp, Common Shrimp, Daytona Shrimp, Southern Shrimp",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-09/640x427-Shrimp-White-NOAAFisheries.png?itok=k5jAysoc",
    imgAlt: "",
    weight: "Up to .13 pounds",
    long: "Up to 7-8 inches",
    lifespan: "Up to 2 years",
    region: "Atlantic Coast, Gulf of Mexico",
  },
  {
    name: "Silver Hake",
    sciName: "Merluccius bilinearis",
    aka: "New England Hake, Atlantic Hake",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-09/640x427-Hake-Silver-NOAAFisheries.png?itok=PSc8vRMw",
    imgAlt: "",
    weight: "Up to 5 pounds",
    long: "Up 28 inches",
    lifespan: "Up to 14 years",
    region: "Northwest Atlantic Ocean",
  },
  // {
  //     name: "Pacific Skipjack Tuna",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "North Atlantic Swordfish",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Brown Rock Shrimp",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Yellowtail Flounder",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Winter Flounder",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Coho Salmon",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Chum Salmon",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Brown Shrimp",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Mackerel",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Bluefin Tuna",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Opah",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Atlantic Herring",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Vermillion Snapper",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Atlantic Blacktip Shark",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Haddock",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Chinook Salmon",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Bigeye Tuna",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Atlantic Shortfin Mako Shark",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Atlantic Common Thresher Shark",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Yellowfin Sole",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Yellowfin Tuna",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Whiting",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Spanish Mackerel",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Rock Sole",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Wahoo",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "King Mackerel",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Greenland Turbot",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "California Market Squid",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Atlantic Wahoo",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Gag Grouper",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Flathead Sole",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Summer Flounder",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Rex Sole",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Red Grouper",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "English Sole",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Dover Sole",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Caribbean Spiny Lobster",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Albacore Tuna",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Wreckfish",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Queen Conch",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Red King Crab",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Spiny Dogfish",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Halibut",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Atlantic Spiny Dogfish",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Arrowtooth Flounder",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Alaska Snow Crab",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Gray Triggerfish",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Bluefish",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Black Sea Bass",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Petrale Sole",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Greater Amberjack",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Common Thresher Shark",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Cod",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Blue Marlin",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Northern Anchovy",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Lingcod",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Atlantic Striped Bass",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Shortfin Mako Shark",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Ocean Perch",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Pacific Mahimahi",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Widow Rockfish",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Western Atlantic Bluefin Tuna",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Tilefish",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Red Snapper",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Sockeye Salmon",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Sablefish",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Alaska Pollock",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Monkfish",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Atlantic Mahimahi",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Cobia",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
  // {
  //     name: "Atlantic Cod",
  //     sciName: "",
  //     aka: "" && "",
  //     imgSrc: "",
  //     imgAlt: "",
  //     weight: "",
  //     long: "",
  //     lifespan: "",
  //     region: "",
  // },
];

export { fishList };
