const list = [
    {name: "Australian Cattle Dog", 
        url: "https://images.unsplash.com/photo-1602431694956-0da68eb649b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1232&q=80", 
        description: "Sometimes called a Blue Heeler, the Australian Cattle Dog is a herding dog originating in Australia."},
    {name: "Basset Hound", 
        url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001044/Basset-Hound-On-White-03.jpg", 
        description: "The Basset Hound is a short-legged hound dog originally bred for hunting hare."},
    {name: "Beagle", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Bronco_the_Beagle.JPG/1920px-Bronco_the_Beagle.JPG", 
        description: "The Beagle is a small hound bred for hunting hare."},
    {name: "Border Collie", 
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Border_Collie_Macho_Blanco_y_Negro_%28Batman%2C_los_Baganes_Border_Collie%29.jpg", 
        description: "The Border Collie is a working and herding dog bred in Northumberland for herding livestock."},
    {name: "Boston Terrier", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Boston_Terrier_Eden_Forever.JPG/1920px-Boston_Terrier_Eden_Forever.JPG", 
        description: "The Boston Terrier is a non-sporting dog bred from the bull and terrier breeds of the late 19th and early 20th centuries."},
    {name: "Boxer", 
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Male_fawn_Boxer_undocked.jpg", 
        description: "The Boxer is a medium to large short-haired breed of dog developed in Germany."},
    {name: "Boykin Spaniel", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Boykin_spaniel.jpg/1920px-Boykin_spaniel.jpg", 
        description: "The Boykin Spaniel is a sporting dog bred to hunt wild turkeys and ducks in South Carolina.  It is also the state dog of South Carolina."},
    {name: "Bull Terrier", 
        url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Bull_terrier_2.jpg", 
        description: "The bull terrier is a dog that was originally bred to fight bulls.  Both President Theodore Roosevelt and General George S. Patton owned Bull Terriers."},
    {name: "Bulldog", 
        url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Bulldog_adult_male.jpg", 
        description: "Also known as the English Bulldog, the Bulldog is a medium sized, muscular dog originally used for bull-baiting."},
    {name: "Cavalier King Charles Spaniel", 
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/CarterBIS.Tiki.13.6.09.jpg", 
        description: "Not to be confused with the King Charles Spaniel, the Cavalier King Charles Spaniel is a small, toy breed dog."},
    {name: "Chihuahua", 
        url: "https://upload.wikimedia.org/wikipedia/commons/6/65/Chihuahuasmoothcoat.jpg", 
        description: "The Chihuahua is the smallest breed of dog, named after the Mexican state of Chihuahua.  They are thought to originate from the Techichi dog kept by the Toltec people."},
    {name: "Dachshund", 
        url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Kurzhaardackel.jpg", 
        description: "Also known as a Wiener Dog, the Dachshund is a small hound bred in Germany for hunting badgers."},
    {name: "Dalmation", 
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Binka_10_06.jpg", 
        description: "The dalmation is a medium sized dog noted for its black or brown spots.  It is often seen as a firehouse dog, a companion of the Budweiser beer wagon, and in the Disney film 101 Dalmations."},
    {name: "Doberman Pinscher", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Dobermann_handling.jpg/1920px-Dobermann_handling.jpg", 
        description: "The Dobermann, also known as a Doberman Pinscher is a medium-large breed of dog developed in Germany."},
    {name: "German Shepherd", 
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg", 
        description: "The German Shepherd is a medium to large working dog used for herding, assistance, search and rescue, police, and military roles."},
    {name: "Golden Retriever", 
        url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Golden_Retriever_standing_Tucker.jpg", 
        description: "The Golden Retriever is a friendly, medium-large dog bred to retrieve waterfowl and upland game birds during hunts."},
    {name: "Great Dane", 
        url: "https://i.imgur.com/xSHS4dL.jpg", 
        description: "The Great Dane is a German breed of dog known for it's large size. The tallest dog alive is a great dane.  This is my great dane named Harley! She's the best girl!"},
    {name: "Greyhound", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Greyhound...JPG/1920px-Greyhound...JPG", 
        description: "The Greyhound is a tall, slender dog known for it's speed. Often used for racing, they can reach speeds of up to 45 mph!"},
    {name: "Irish Setter", 
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a4/19032009_Fritz%26Enya02.jpg", 
        description: "The Irish setter is a bird dog and a family dog. It was originally develpoed in Ireland for setting (similar to pointing) gamebirds."},
    {name: "Jack Russell Terrier", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Gizmo_the_Jack_Russell.jpg/1920px-Gizmo_the_Jack_Russell.jpg", 
        description: "The Jack Russel Terrier is a small terrier bred for hunting foxes in England."},
    {name: "Labrador Retriever", 
        url: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Max_at_the_river2.jpg", 
        description: "The Labrador Retriever is a medium-large retriever originally used by fisherman in Newfoundland.  They are also popular for assistance and working."},
    {name: "Maltese", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Maltese_600.jpg/440px-Maltese_600.jpg", 
        description: "The Maltese is a small toy breed developed in south-central Europe from spitz dogs. Despite the name, they probably did not originate in Malta."},
    {name: "Miniature Pinscher", 
        url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Miniature_Pinscher_Murphy.jpg", 
        description: "The Miniature Pinscher, also known as the Zergpinscher and Min Pin is a small dog originating in Germany."},
    {name: "Norwegian Elkhound", 
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Norwegian_Elkhound.jpg", 
        description: "The Norwegian Elkhound is a spitz breed of dog bred for hunting in Norway.  It is also the National Dog of Norway!"},
    {name: "Old English Sheepdog", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Old_English_Sheepdog_%28side%29.jpg/440px-Old_English_Sheepdog_%28side%29.jpg", 
        description: "The Old English Sheepdog is a large breed of dog originating in England for shepherding."},
    {name: "Pembroke Welsh Corgi", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/440px-Welchcorgipembroke.JPG", 
        description: "The Pembroke Welsh Corgi is a small cattle herding dog breed.  Queen Elizabeth II has owned more than 30 during her reign!"},
    {name: "Pharaoh Hound", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pies_faraona_e34.jpg/440px-Pies_faraona_e34.jpg", 
        description: "The Pharaoh Hound is a Maltese breed of hunting dog.  It is originally used for rabbit hunting in the Maltese Islands."},
    {name: "Pomeranian", 
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Pomeranian_orange_sable_600.jpg", 
        description: "The Pomeranian is a spitz breed of dog named after the Pomerania region of Poland. It is a small toy breed dog known for it's thick, fluffy coat."},
    {name: "Poodle", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Full_attention_%288067543690%29.jpg/440px-Full_attention_%288067543690%29.jpg", 
        description: "The Poodle is a large dog breed developed as hunting dog to flush and retrieve waterfowl."},
    {name: "Portuguese Water Dog", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Cão_de_agua_Português_2.jpg/440px-Cão_de_agua_Português_2.jpg", 
        description: "The Portuguese Water Dog is a working dog developed in Portugal to herd fish and help fisherman and sailors."},
    {name: "Pug", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mops_oct09_cropped2.jpg/440px-Mops_oct09_cropped2.jpg", 
        description: "The Pug is a small companion dog originating in China during the Ming dynasty."},
    {name: "Rat Terrier", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/AmRatTerr2_wb.jpg/440px-AmRatTerr2_wb.jpg", 
        description: "The Rat Terrier is a hunting dog originating in the United States for catching rodents and as a family pet."},
    {name: "Rhodesian Ridgeback", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Male_Rhodesian_ridgeback_IMG_6800.JPG/1024px-Male_Rhodesian_ridgeback_IMG_6800.JPG", 
        description: "The Rhodesian Ridgeback is a hunting dog developed in the Southern Africa region. It comes from the ridged hunting dogs used by the Khoikhoi people."},
    {name: "Rottweiler", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Rottweiler_standing_facing_left.jpg/440px-Rottweiler_standing_facing_left.jpg", 
        description: "The Rottweiler is a large dog used to herd livestock originally.  They are now also used as search and rescue dogs, guard dogs, and police dogs."},
    {name: "Samoyed", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Samojed00.jpg/389px-Samojed00.jpg", 
        description: "The Samoyed is a medium sized herding dog with a thick, white, double-layered coat.  It originated in Siberia from the Samoyedic people."},
    {name: "Schipperke", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Schipperke_gismo_12.jpg/440px-Schipperke_gismo_12.jpg", 
        description: "The Schipperke is a Belgian dog used originally to herd sheep. They are stubborn and mischevious, but excel at obedience and agility competitions."},
    {name: "Scottish Terrier", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Scottish_Koira_2013.JPG/440px-Scottish_Koira_2013.JPG", 
        description: "The Scottish Terrier is a small terrier originating in the Scottish Highlands to hunt rodents and badgers."},
    {name: "Shar Pei", 
        url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Adult_sharpei.jpg", 
        description: "The Shar Pei is a dog breed from southern China known for it's wrinkly appearance."},
    {name: "Shetland Sheepdog", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shetland_Sheepdog_600.jpg/440px-Shetland_Sheepdog_600.jpg", 
        description: "The Shetland Sheepdog, also known as the Sheltie, is a herding dog originating in Scotland. They are known for their intelligence."},
    {name: "Shiba Inu", 
        url: "https://i.imgur.com/mcXucoW.jpg", 
        description: "The Shiba Inu is a medium sized Japanese hunting spitz. They are small, alert, and very energetic. This is my Shiba Inu named Goku and he's the best boy!"},
    {name: "Shih Tzu", 
        url: "https://upload.wikimedia.org/wikipedia/commons/d/df/Shihtzu_%28cropped%29.jpg", 
        description: "The Shih Tzu is a small toy breed of dog developed in Tibet."},
    {name: "Siberian Husky", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Black-Magic-Big-Boy.jpg/440px-Black-Magic-Big-Boy.jpg", 
        description: "The Siberian Husky is a working dog originating in Northeast Asia by the Chukchi people for sled-pulling and companionship."},
    {name: "Staffordshire Bull Terrier", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Staffordshire-bull-terrier-white-2748733.jpg/440px-Staffordshire-bull-terrier-white-2748733.jpg", 
        description: "The Staffordshire Bull Terrier, sometimes called the Staffy, is a medium sized dog originally bred for fighting and rat-baiting."},
    {name: "Teddy Roosevelt Terrier", 
        url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Teddyterrier.jpg", 
        description: "The Teddy Roosevelt Terrier is a small hunting terrier closely related to the Rat Terrier.  They are traced to the terrier owned by Teddy Roosevelt."},
    {name: "Tibetan Mastiff", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/WangdurivoiraTM.jpg/440px-WangdurivoiraTM.jpg", 
        description: "The Tibetan Mastiff is a large mastiff originally used to guard flocks in the high altitudes of the Himalayas and the Tibetan Plateau."},
    {name: "Treeing Walker Coonhound", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Treeing-walker-coonhound-standing.jpg/440px-Treeing-walker-coonhound-standing.jpg", 
        description: "The Treeing Walker Coonhound, also called a Walker, is a hound dog originating in the United states for hunting."},
    {name: "Weimaraner", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Weimaraner_Amigo.jpg/400px-Weimaraner_Amigo.jpg", 
        description: "The Weimaraner is a large dog originally bred for hunting in Europe.  It is named after the Grand Duke of Saxe-Weimar-Eisenach whose court was located in Weimar."},
    {name: "West Highland White Terrier", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/West_Highland_White_Terrier_Krakow.jpg/440px-West_Highland_White_Terrier_Krakow.jpg", 
        description: "The West Highland White Terrier, also known as the Westie, is a medium sized terrier bred to hunt small rodents on farms in Scotland."},
    {name: "Whippet", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhippetWhiteSaddled_wb.jpg/440px-WhippetWhiteSaddled_wb.jpg", 
        description: "The Whippet is a slender and agile dog descending from Greyhounds. They are smaller than Greyhounds but excel in dog sports."},
    {name: "Xoloitzcuintle", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/BIR_Grupp_5-_MEXIKANSK_NAKENHUND%2C_Lokal_Hero’s_King_Og_Hart’s_Istas_%2823607403303%29.jpg/440px-BIR_Grupp_5-_MEXIKANSK_NAKENHUND%2C_Lokal_Hero’s_King_Og_Hart’s_Istas_%2823607403303%29.jpg", 
        description: "The Xoloitzcuintle, also known as the Xolo and the Mexican Hairless Dog, is a small hairless dog originating in Mexico."},
    {name: "Yorkshire Terrie", 
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Little_tootie.JPG/1920px-Little_tootie.JPG", 
        description: "The Yorkshire Terrier, also known as the Yorkie, is a small energetic dog originating in Yorkshire, England for catching rodents in mills."}
];

const list12 = [
    list[0],
    list[2],
    list[3],
    list[10],
    list[14],
    list[15],
    list[16],
    list[27],
    list[39],
    list[40],
    list[48],
    list[49],
];

const list24 = [
    list[0],
    list[2],
    list[3],
    list[10],
    list[12],
    list[14],
    list[15],
    list[16],
    list[18],
    list[20],
    list[24],
    list[27],
    list[28],
    list[31],
    list[33],
    list[34],
    list[35],
    list[36],
    list[38],
    list[39],
    list[40],
    list[45],
    list[48],
    list[49],
];

const list36 = [
    list[0],
    list[1],
    list[2],
    list[3],
    list[4],
    list[8],
    list[9],
    list[10],
    list[12],
    list[13],
    list[14],
    list[15],
    list[16],
    list[18],
    list[19],
    list[20],
    list[21],
    list[23],
    list[24],
    list[25],
    list[26],
    list[27],
    list[28],
    list[29],
    list[30],
    list[31],
    list[33],
    list[34],
    list[35],
    list[36],
    list[38],
    list[39],
    list[40],
    list[45],
    list[48],
    list[49],
];



export { list12, list24, list36, list }