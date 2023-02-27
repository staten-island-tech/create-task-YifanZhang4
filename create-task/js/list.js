const fishList = [
  {
    name: "Crimson Jobfish",
    sciName: "Pristipomoides filamentosus",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-07/640x427-Opakapaka-pink-snapper.png?itok=uj6-PmkG",
    imgAlt:
      "Reddish-orange backed fish that fades to a white under side, with yellow pectoral fins and irises.",
    weight: "Up to 18 pounds",
    long: "Up to 17-20 inches",
    lifespan: "Up to 43 years",
    region: "Tropical Pacific Ocean",
  },
  {
    name: "White Hake",
    sciName: "Urophycis tenuis",
    imgSrc:
      "https://media.fisheries.noaa.gov/2020-12/640x427-Hake_White_NB_W.jpg?itok=yHy_AuTT",
    imgAlt:
      "Dark brown fish with a large mouth that extends below the eyes, three fins, and a barbel on its chin",
    weight: "Up to 49 pounds",
    long: "Up to 53 inches",
    lifespan: "Up to 10 years",
    region: "Northwest Atlantic Ocean",
  },
  {
    name: "Atlantic Chub Mackerel",
    sciName: "Scomber colias",
    imgSrc:
      "https://media.fisheries.noaa.gov/2021-04/640x427-Atlantic-chub-mackerel-FNL_NB_W.jpg?itok=TtyvYmrx",
    imgAlt:
      "Blueish-green fish with dark striped back, pale belly, and forked tail",
    weight: "Up to 3.5 pounds",
    long: "Up to 22 inches",
    lifespan: "8 to 10 years",
    region: "Western Atlantic Ocean",
  },
  {
    name: "Shortfin Squid",
    sciName: "Illex illecebrosus",
    imgSrc:
      "https://media.fisheries.noaa.gov/2021-03/squid_illex_nb_w_0.png?itok=Gms9hXDg",
    imgAlt:
      "Orange squid with a brown stripe that extends along the top side of the squid's mantle.",
    weight: "26-29 pounds",
    long: "7 to 12 inches (female), 7.1 to 10.6 in (male)",
    lifespan: "Less than 1 year",
    region: "Northwest Atlantic Ocean",
  },
  {
    name: "American Lobster",
    sciName: "Homarus americanus",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-american-lobster.png?itok=FX0oMipE",
    imgAlt:
      "Greenish-brown crustacean with reddish speckles, it has a large segmented body and 10 legs, of which 2 are large claws.",
    weight: "Up to 44 pounds",
    long: "Up to 25 inches",
    lifespan: "At least 100 years",
    region: "Northwest Atlantic Ocean",
  },
  {
    name: "Yellowtail Rockfish",
    sciName: "Sebastes flavidus",
    imgSrc:
      "https://media.fisheries.noaa.gov/dam-migration/640x427-rockfish_yellowtail_nb_w.jpg?itok=Ymb-q1-n",
    imgAlt:
      "Greyish-brown fish that fades to a white under side, with yellowish-green fins.",
    weight: "Up to 5.5 pounds",
    long: "Up to 26 inches",
    lifespan: "Up to 50 years",
    region: "Northeast Pacific",
  },
  {
    name: "Bocaccio",
    sciName: "Sebastes paucispinis",
    imgSrc:
      "https://media.fisheries.noaa.gov/dam-migration/640x427-bocaccio.jpg?itok=4DrgNj6Y",
    imgAlt:
      "Burnt orange fish with a long jaw extending past the eye, and a pink stomach.",
    weight: "Up to 21 pounds",
    long: "Up to 36 inches",
    lifespan: "Up to 50 years",
    region: "Pacific Coast",
  },
  {
    name: "Sablefish",
    sciName: "Anoplopoma fimbria",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-10/640x427-Sablefish-NOAAFisheries.png?itok=A4gT6-in",
    imgAlt:
      "Black fish that fades to a lighter gray under side and two separated dorsal fins.",
    weight: "Up to 55 pounds",
    long: "Up to 45 inches",
    lifespan: "Up to 94 years",
    region: "Gulf of Alaska, Pacific Coast",
  },
  {
    name: "Atlantic Halibut",
    sciName: "Hippoglossus hippoglossus",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-08/640x427-Halibut-Atlantic-right-NOAAFisheries.png?itok=uPvRdIBx",
    imgAlt:
      "Orangish-brown flatfish with both eyes on the right side of the body.",
    weight: "Up to 710 pounds",
    long: "Up to 180 inches",
    lifespan: "Up to 50 years",
    region: "North Atlantic Ocean",
  },
  {
    name: "Shortspine Thornyhead",
    sciName: "Sebastolobus alascanus",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-10/640x427-Shortspine-Thornyhead-NOAAFisheries.png?itok=4MzpLpIP",
    imgAlt:
      "Bright red fish with a large head and bulging eyes, there is a spiny ridge on its back and 16 dorsal spines.",
    weight: "Up to 2.8 pounds",
    long: "Up to 80 inches",
    lifespan: "Up to 100 years",
    region: "Northern Pacific Ocean, Northeastern Pacific Ocean",
  },
  {
    name: "Canary Rockfish",
    sciName: "Sebastes pinniger",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/dam-migration/640x427-canary_rockfish.png?itok=M8fN95a_",
    imgAlt:
      "Bright orange fish with a gray under side, 3 orange stripes across the head, a gray line across the body and orange fins.",
    weight: "Up to 10 pounds",
    long: "Up to 30 inches",
    lifespan: "Up to 75 years",
    region: "Pacific Coast",
  },
  {
    name: "Black Grouper",
    sciName: "Mycteroperca bonaci",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-08/640x427-Grouper-Black-NOAAFisheries.png?itok=FyvNY-hf",
    imgAlt: "Olive-gray fish with black blotches.",
    weight: "Up to 180 pounds",
    long: "Up to 60 inches",
    lifespan: "Up to 30 years",
    region: "Western Atlantic Ocean",
  },
  {
    name: "Striped Marlin",
    sciName: "Kajikia audax",
    imgSrc:
      "https://media.fisheries.noaa.gov/dam-migration/640x427-striped-marlin.png?itok=m4pf6a8F",
    imgAlt:
      "Large blue-black fish with a silvery white under side, a long bill, tall dorsal fin, and rows of silver stripes.",
    weight: "250 - 450 pounds",
    long: "Up to 168 inches",
    lifespan: "Up to 20 years",
    region:
      "Tropical and Subtropical Pacific Ocean, Tropical and Subtropical Indian Ocean",
  },
  {
    name: "Red Hake",
    sciName: "Urophycis chuss",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-09/640x427-Hake-Red-NOAAFisheries.png?itok=SyCYEmmm",
    imgAlt:
      "Olive-brown fish with a white underside, pale spots, and a barbel.",
    weight: "Up to 4.4 pounds",
    long: "Up to 20 inches",
    lifespan: "Up to 14 years",
    region: "Atlantic Ocean",
  },
  {
    name: "Atlantic Sharpnose Shark",
    sciName: "Rhizoprionodon terraenovae",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-08/640x427-Shark-Atlantic-Sharpnose-NOAAFisheries.png?itok=ojXcPEbt",
    imgAlt:
      "Gray shark with a long, pointy snout and white spots along the side.",
    weight: "Up to 8.8 pounds",
    long: "Up to 48 inches",
    lifespan: "Up to 12 years",
    region: "Northwestern Atlantic Ocean",
  },
  {
    name: "Pacific Sardine",
    sciName: "Sardinops sagax caerulea",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-09/640x427-Sardine-Pacific-NOAAFisheries.png?itok=419HINFe",
    imgAlt: "Small fish with a blue-green back and light yellow under side.",
    weight: "Up to 1 pound",
    long: "Up to 16 inches",
    lifespan: "Up to 13 years",
    region: " Pacific Ocean, Indian Ocean",
  },
  {
    name: "Atlantic Salmon",
    sciName: "Salmo salar",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-08/640x427-Salmon-Atlantic-NOAAFisheries.png?itok=z_tFH1qP",
    imgAlt:
      "Fish with a black back that fades to silvery white, the body is rounded in the middle and tapered at each end.",
    weight: "Up to 30 pounds",
    long: "Up to 28-30 inches ",
    lifespan: "3-7 years",
    region: "Northern Atlantic Ocean",
  },
  {
    name: "Butterfish",
    sciName: "Peprilus triacanthus",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-08/640x427-Butterfish-NOAAFisheries.png?itok=hBVbVwT4",
    imgAlt: "Dull blue fish with pale sides and a silvery belly",
    weight: "Up to 1.25 pounds",
    long: "Up to 6-12 inches",
    lifespan: "Up to 3 years",
    region: "Western Atltantic Ocean",
  },
  {
    name: "Winter Skate",
    sciName: "Leucoraja ocellata",
    imgSrc:
      "https://media.fisheries.noaa.gov/dam-migration/640x427-skate-winter.jpg?itok=Lww3lMl4",
    imgAlt:
      "Light brown kite-shaped fish with small dark spots and spines covering the back.",
    weight: "Up to 15 pounds",
    long: "Up to 60 inches",
    lifespan: "Up to 20 years",
    region: "Northeastern North America",
  },
  {
    name: "Pink Salmon",
    sciName: "Oncorhynchus gorbuscha",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-10/640x427-Salmon-Pink-NOAAFisheries.png?itok=2k7D_Sp9",
    imgAlt:
      "Olive green backed fish with a white under side, they have green fins and a pink stripe down the side.",
    weight: "Up to 3.5-5 pounds",
    long: "Up to 20-25 inches",
    lifespan: "Up to 2 years",
    region: "Pacific Coast, Arctic Coast",
  },
  {
    name: "Atlantic Northern Shrimp",
    sciName: "Pandalus borealis",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-08/640x427-Shrimp-Atlantic-Northern-NOAAFisheries.png?itok=9Tw56Qw6",
    imgAlt: "Small reddish-pink crustacean with a segmented body and 10 legs.",
    weight: "Up to 0.03 pounds",
    long: "up to 6.5 inches (female), Up to 4.7 inches (male)",
    lifespan: "Up to 8 years",
    region: "Northern Atlantic Ocean, Northern Pacific Ocean",
  },
  {
    name: "Swordfish",
    sciName: "Xiphias gladius",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-09/640x427-Swordfish-NOAAFisheries.png?itok=D35ccWSJ",
    imgAlt:
      "Black backed fish with a light gray under side, a long bill, crescent-shaped tail, and stout body.",
    weight: "Up to 1,200 pounds",
    long: "Up to 168 inches",
    lifespan: "Up to 9 years",
    region:
      "Tropical and Temperate Atlantic Ocean, Tropical and Temperate Pacific Ocean, Tropical and Temperate Indian Ocean",
  },
  {
    name: "Atlantic Mackerel",
    sciName: "Scomber scombrus",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-08/640x427-Mackerel-Atlantic-NOAAFisheries.png?itok=RzeGQbqy",
    imgAlt:
      "Blu-green fish with a silvery white underbelly, 20 to 309 wavy black bars along the top half of their body, and a spindle shaped body.",
    weight: "Up to 2.2 pounds",
    long: "Up to 16.5 inches",
    lifespan: "Up to 20 years",
    region: "Temperate Mediterranean Sea, Black Sea, Northern Atlantic Ocean",
  },
  {
    name: "Atlantic Bigeye Tuna",
    sciName: "Thunnus obesus",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-07/640x427-Tuna-Bigeye-NOAAFisheries.png?itok=Q060vnPR",
    imgAlt:
      "Dark metallic fish with a white underside, the first fin is deep yellow, second and anal are pale yellow, and finlets are bright yellow with black edges.",
    weight: "Up to 400 pounds",
    long: "Up to 98 inches",
    lifespan: "Up to 9 years",
    region:
      "Tropical and Temperate Atlantic Ocean, Tropical and Temperate Pacific Ocean, Tropical and Temperate Indian Ocean",
  },
  {
    name: "North Atlantic Albacore Tuna",
    sciName: "Thunnus alalunga",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-09/640x427-Tuna-Albacore-NOAAFisheries.png?itok=DEcB-5AE",
    imgAlt:
      "Metallic, dark blue backed fish with silvery-white sides and underside, their pectoral fins are exceptionally long.",
    weight: "Up to 88 pounds",
    long: "Up to 48 inches",
    lifespan: "Up to 13 years",
    region:
      "Tropical and Temperate Atlantic Ocean, Tropical and Temperate Pacific Ocean, Tropical and Temperate Indian Ocean",
  },
  {
    name: "Acadian Redfish",
    sciName: "Sebastes fasciatus",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-07/640x427-Acadian-Redfish-NOAAFisheries.png?itok=2MlNuAf5",
    imgAlt:
      "Flame red fish with a paler under side, large eyes and mouth, and a continuous spiky dorsal fin.",
    weight: "Up to 5 pounds",
    long: "Up to 18-20 inches",
    lifespan: "Up to 50 years",
    region: "Northwestern Atlantic Ocean",
  },
  {
    name: "Atlantic Skipjack Tuna",
    sciName: "Katsuwonus pelamis",
    imgSrc:
      "https://media.fisheries.noaa.gov/2022-08/640x427-Tuna-Skipjack-NOAAFisheries.png?itok=Bhor3KIJ",
    imgAlt:
      "Dark purplish-blue fish with silvery sides and under side and 4 to 6 dark bands down the sides.",
    weight: "Up to 4 pounds",
    long: "Up to 36 inches",
    lifespan: "Up to 7 years",
    region:
      "Tropical Atlantic Ocean, Tropical Pacific Ocean, Tropical Indian Ocean",
  },
  {
    name: "Atlantic Pollock",
    sciName: "Pollachius virens",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-08/640x427-Pollock-Atlantic-NOAAFisheries.png?itok=ZFoDB-Qr",
    imgAlt:
      "Brownish-green fish with a slightly pale under side and a small barbel.",
    weight: "Up to 35 pounds",
    long: "Up to 39-47 inches",
    lifespan: "Up to 23 years",
    region: "Northwest Atlantic Ocean",
  },
  {
    name: "Atlantic Yellowfin Tuna",
    sciName: "Thunnus albacares",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-08/640x427-Tuna-Yellowfin-NOAAFisheries.png?itok=M1e9FdZz",
    imgAlt:
      "Torpedo shaped fish with a metallic dark blue back and upper sides, that change to yellow then white on the under side, their fins are bright yellow.",
    weight: "Up to 400 pounds",
    long: "Up to 94 inches",
    lifespan: "Up to 7 years",
    region: "Atlantic Ocean, Pacific Ocean, Indian Ocean",
  },
  {
    name: "Longfin Squid",
    sciName: "Doryteuthis pealeii",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-08/640x427-Squid-Longfin-v1-NOAAFisheries.png?itok=xDRXvWUM",
    imgAlt: "Pink squid mottled with brown, with long fins.",
    weight: "Up to 0.23 pounds",
    long: "Up to 19.75 inches",
    lifespan: "Up to 6-8 months",
    region: "North Atlantic Ocean",
  },
  {
    name: "Scup",
    sciName: "Stenotomus chrysops",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-09/640x427-Scup-NOAAFisheries_0.png?itok=5nyrKyh-",
    imgAlt:
      "Silvery fish with dark brown fins and bodies that are deeper then they are wide.",
    weight: "Up to 4 pounds",
    long: "Up to 20 inches",
    lifespan: "Up to 20 years",
    region: "Atlantic Ocean",
  },
  {
    name: "White Shrimp",
    sciName: "Litopenaeus setiferus",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-09/640x427-Shrimp-White-NOAAFisheries.png?itok=k5jAysoc",
    imgAlt: "Light gray crustacean with a segmented body and 15 legs.",
    weight: "Up to .13 pounds",
    long: "Up to 7-8 inches",
    lifespan: "Up to 2 years",
    region: "Atlantic Coast, Gulf of Mexico",
  },
  {
    name: "Silver Hake",
    sciName: "Merluccius bilinearis",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-09/640x427-Hake-Silver-NOAAFisheries.png?itok=PSc8vRMw",
    imgAlt:
      "Silvery fish with a brownish back, white under side, black speckles, and long pectoral fins.",
    weight: "Up to 5 pounds",
    long: "Up 28 inches",
    lifespan: "Up to 14 years",
    region: "Northwest Atlantic Ocean",
  },
  {
    name: "Yellowtail Flounder",
    sciName: "Limanda ferruginea",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-09/640x427-Flounder-Yellowtail-NOAAFisheries.png?itok=NaMhXUQP",
    imgAlt:
      "Yellowish-brown flat fish with a small mouth, olive fins, a yellow tail, and white under side.",
    weight: "Up to 2.2 pounds",
    long: "Up to 22 inches",
    lifespan: "Up to 17 years",
    region: "Northwestern Atlantic Ocean",
  },
  {
    name: "Winter Flounder",
    sciName: "Pseudopleuronectes americanus",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2021-05/640x427-Flounder-Winter-NB-W.jpg?itok=9o7VgcdV",
    imgAlt:
      "Dark reddish-brown, oval shaped fish with lighter splotches and white under side.",
    weight: "Up to 13 pounds",
    long: "Up to 24 inches",
    lifespan: "Up to 18 years",
    region: "Northwestern Atlantic Coast",
  },
  {
    name: "Coho Salmon",
    sciName: "Oncorhynchus kisutch",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-10/640x427-Salmon-Coho-NOAAFisheries.png?itok=96HmMKOh",
    imgAlt: "Dark blue metallic fish with silver sides and a light belly.",
    weight: "Up to 12 pounds",
    long: "Up to 30 inches",
    lifespan: "Up to 4 years",
    region: "North Pacific Ocean",
  },
  {
    name: "Chum Salmon",
    sciName: "Oncorhynchus keta",
    imgSrc:
      "https://media.fisheries.noaa.gov/styles/original/s3/2022-10/640x427-Salmon-Chum-NOAAFisheries.png?itok=3pwhTe33",
    imgAlt: "Metallic greenish-blue fish with black speckles.",
    weight: "Up to 35 pounds",
    long: "Up to 42 inches",
    lifespan: "Up to 5 years",
    region: "North Pacific Ocean, Arctic Ocean",
  },
];
