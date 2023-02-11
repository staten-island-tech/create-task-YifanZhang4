const fishList = [
    {
        name: "Crimson Jobfish",
        sciName: "Pristipomoides filamentosus",
        aka: "Opakapaka, Hawaiian pink snapper",
        imgSrc: "https://media.fisheries.noaa.gov/2022-07/640x427-Opakapaka-pink-snapper.png?itok=uj6-PmkG",
        imgAlt: "",
        weight: "Up to 18 pounds",
        length: "17-20 inches",
        lifespan: "Up to 43 years",
        region: "Tropical Pacific Ocean",
    },
    {
        name: "White Hake",
        sciName: "Urophycis tenuis",
        aka: "Mud Hake, Boston Hake",
        imgSrc: "https://media.fisheries.noaa.gov/2020-12/640x427-Hake_White_NB_W.jpg?itok=yHy_AuTT",
        imgAlt: "",
        weight: "Up to 49 pounds",
        length: "Up to 53 inches",
        lifespan: "Up to 10 years",
        region: "Northwest Atlantic Ocean",
    },
    {
        name: "Atlantic Chub Mackerel",
        sciName: "Scomber colias",
        aka: "Tinker mackerel",
        imgSrc: "https://media.fisheries.noaa.gov/2021-04/640x427-Atlantic-chub-mackerel-FNL_NB_W.jpg?itok=TtyvYmrx",
        imgAlt: "",
        weight: "Up to 3.5 pounds",
        length: "Up to 22 inches",
        lifespan: "8 to 10 years",
        region: "Western Atlantic Ocean",
    },
    {
        name: "Shortfin Squid",
        sciName: "Illex illecebrosus",
        aka: "Illex Squid, Summer Squid",
        imgSrc: "https://media.fisheries.noaa.gov/2021-03/squid_illex_nb_w_0.png?itok=Gms9hXDg",
        imgAlt: "",
        weight: "26-29 pounds",
        length: "7 to 12 inches (female), 7.1 to 10.6 in (male)",
        lifespan: "Less than 1 year",
        region: "Northwest Atlantic Ocean",
    },
    {
        name: "American Lobster",
        sciName: "Homarus americanus",
        aka: null,
        imgSrc: "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-american-lobster.png?itok=FX0oMipE",
        imgAlt: "",
        weight: "Up to 44 pounds",
        length: "Up to 25 inches",
        lifespan: "At least 100 years",
        region: "Northwest Atlantic Ocean",
    },
    {
        name: "Yellowtail Rockfish",
        sciName: "Sebastes flavidus",
        aka: "Yellow Seaperch, Green Rockfish",
        imgSrc: "https://media.fisheries.noaa.gov/dam-migration/640x427-rockfish_yellowtail_nb_w.jpg?itok=Ymb-q1-n",
        imgAlt: "",
        weight: "Up to 5.5 pounds",
        length: "Up to 26 inches",
        lifespan: "Up to 50 years",
        region: "Northeast Pacific",
    },
    {
        name: "Bocaccio Rockfish",
        sciName: "Sebastes paucispinis",
        aka: "Rock Salmon,Salmon Rockfish, Pacific Red Snapper, Pacific Snapper, Oregon Snapper",
        imgSrc: "https://media.fisheries.noaa.gov/dam-migration/640x427-bocaccio.jpg?itok=4DrgNj6Y",
        imgAlt: "",
        weight: "Up to 21 pounds",
        length: "Up to 36 inches",
        lifespan: "Up to 50 years",
        region: "Pacific Coast",
    },
    {
        name: "Sablefish",
        sciName: "Anoplopoma fimbria",
        aka: "Black Cod",
        imgSrc: "https://media.fisheries.noaa.gov/2022-10/640x427-Sablefish-NOAAFisheries.png?itok=A4gT6-in",
        imgAlt: "",
        weight: "Up to 55 pounds",
        length: "Up to 45 inches",
        lifespan: "Up to 94 years",
        region: "Gulf of Alaska, Pacific Coast",
    },
    {
        name: "Atlantic Halibut",
        sciName: "Hippoglossus hippoglossus",
        aka: null,
        imgSrc: "https://media.fisheries.noaa.gov/2022-08/640x427-Halibut-Atlantic-right-NOAAFisheries.png?itok=uPvRdIBx",
        imgAlt: "",
        weight: "Up to 710 pounds",
        length: "Up to 180 inches",
        lifespan: "Up to 50 years",
        region: "North Atlantic Ocean",
    },
    {
        name: "Shortspine Thornyhead",
        sciName: "Sebastolobus alascanus",
        aka: "Idiot Fish, Idiot Cod",
        imgSrc: "https://media.fisheries.noaa.gov/styles/original/s3/2022-10/640x427-Shortspine-Thornyhead-NOAAFisheries.png?itok=4MzpLpIP",
        imgAlt: "",
        weight: "Up to 2.8 pounds",
        length: "Up to 80 inches",
        lifespan: "Up to 100 years",
        region: "Northern Pacific Ocean, Northeastern Pacific Ocean",
    },
    {
        name: "Canary Rockfish",
        sciName: "Sebastes pinniger",
        aka: null,
        imgSrc: "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-canary_rockfish.png?itok=M8fN95a_",
        imgAlt: "",
        weight: "Up to 10 pounds",
        length: "Up to 30 inches",
        lifespan: "Up to 75 years",
        region: "Pacific Coast",
    },
    {
        name: "Black Grouper",
        sciName: "Mycteroperca bonaci",
        aka: null,
        imgSrc: "https://media.fisheries.noaa.gov/styles/original/s3/2022-08/640x427-Grouper-Black-NOAAFisheries.png?itok=FyvNY-hf",
        imgAlt: "",
        weight: "Up to 180 pounds",
        length: "Up to 60 inches",
        lifespan: "Up to 30 years",
        region: "Western Atlantic Ocean",
    },
    {
        name: "Striped Marlin",
        sciName: "Kajikia audax",
        aka: "Nairagi, Striped Swordfish",
        imgSrc: "https://media.fisheries.noaa.gov/dam-migration/640x427-striped-marlin.png?itok=m4pf6a8F",
        imgAlt: "",
        weight: "250 - 450 pounds",
        length: "Up to 168 inches",
        lifespan: "Up to 20 years",
        region: "Tropical and Subtropical Pacific Ocean, Tropical and Subtropical Indian Ocean",
    },
    {
        name: "Red Hake",
        sciName: "Urophycis chuss",
        aka: "Squirrel Hake",
        imgSrc: "https://media.fisheries.noaa.gov/styles/original/s3/2022-09/640x427-Hake-Red-NOAAFisheries.png?itok=SyCYEmmm",
        imgAlt: "",
        weight: "Up to 4.4 pounds",
        length: "Up to 20 inches",
        lifespan: "Up to 14 years",
        region: "Atlantic Ocean",
    },
    {
        name: "Atlantic Sharpnose Shark",
        sciName: "Rhizoprionodon terraenovae",
        aka: null,
        imgSrc: "https://media.fisheries.noaa.gov/2022-08/640x427-Shark-Atlantic-Sharpnose-NOAAFisheries.png?itok=ojXcPEbt",
        imgAlt: "",
        weight: "Up to 8.8 pounds",
        length: "Up to 48 inches",
        lifespan: "Up to 12 years",
        region: "Northwestern Atlantic Ocean",
    },
    {
        name: "Pacific Sardine",
        sciName: "Sardinops sagax caerulea",
        aka: "California Sardine, California Pilchard",
        imgSrc: "https://media.fisheries.noaa.gov/2022-09/640x427-Sardine-Pacific-NOAAFisheries.png?itok=419HINFe",
        imgAlt: "",
        weight: "Up to 1 pound",
        length: "Up to 16 inches",
        lifespan: "Up to 13 years",
        region: " Pacific Ocean, Indian Ocean",
    },
    {
        name: "Atlantic Salmon",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Butterfish",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Winter Skate",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pink Salmon",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Northern Shrimp",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "North Pacific Swordfish",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Mackerel",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Bigeye Tuna",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "North Atlantic Albacore Tuna",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Acadian Redfish",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Skipjack Tuna",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Slamon",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Pollock",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Yellowfin Tuna",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Longfin Inshore Squid",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Scup",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pink Shrimp",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "White Shrimp",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Sliver Hake",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Skipjack Tuna",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "North Atlantic Swordfish",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Brown Rock Shrimp",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Yellowtail Flounder",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Winter Flounder",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Coho Salmon",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Chum Salmon",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Brown Shrimp",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Mackerel",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Bluefin Tuna",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Opah",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Herring",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Vermillion Snapper",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Blacktip Shark",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Haddock",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Chinook Salmon",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Bigeye Tuna",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Shortfin Mako Shark",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Common Thresher Shark",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Yellowfin Sole",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Yellowfin Tuna",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Whiting",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Spanish Mackerel",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Rock Sole",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Wahoo",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "King Mackerel",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Greenland Turbot",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "California Market Squid",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Wahoo",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Gag Grouper",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Flathead Sole",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Summer Flounder",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Rex Sole",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Red Grouper",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "English Sole",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Dover Sole",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Caribbean Spiny Lobster",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Albacore Tuna",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Wreckfish",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Queen Conch",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Red King Crab",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Spiny Dogfish",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Halibut",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Spiny Dogfish",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Arrowtooth Flounder",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Alaska Snow Crab",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Gray Triggerfish",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Bluefish",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Black Sea Bass",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Petrale Sole",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Greater Amberjack",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Common Thresher Shark",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Cod",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Blue Marlin",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Northern Anchovy",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Lingcod",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Striped Bass",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Shortfin Mako Shark",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Ocean Perch",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Pacific Mahimahi",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Widow Rockfish",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Western Atlantic Bluefin Tuna",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Tilefish",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Red Snapper",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Sockeye Salmon",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Sablefish",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Alaska Pollock",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Monkfish",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Mahimahi",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Cobia",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
    {
        name: "Atlantic Cod",
        sciName: "",
        aka: "" && "",
        imgSrc: "",
        imgAlt: "",
        weight: "",
        length: "",
        lifespan: "",
        habitat: "",
    },
]

export { fishList };