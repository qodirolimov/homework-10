"use strict";

const box = document.querySelector(".box");
box.classList.add("card");

const movies=[


  {
   title: "Elizabethtown",
   year: 2005,
   categories: ["Comedy", "Drama", "Romance"],
   imdbId: "tt0368709",
   imdbRating: 6.4,
   runtime: 123,
   language: "English",
   youtubeId: "qyPq2BS8Ug0",
   summary:
     "After causing a loss of almost one billion dollars in his company, the shoe designer Drew Baylor decides to commit suicide. However, in the exact moment of his act of despair, he receives a phone call from his sister telling him that his beloved father had just died in Elizabethtown, and he should bring him back since his mother had problem with the relatives of his father. He travels in an empty red eye flight and meets the attendant Claire Colburn, who changes his view and perspective of life.",
   smallThumbnail: "http://i3.ytimg.com/vi/qyPq2BS8Ug0/hqdefault.jpg",
   bigThumbnail: "http://i3.ytimg.com/vi/qyPq2BS8Ug0/maxresdefault.jpg",
 },

  {
    title: "And Then I Go",
    year: 2017,
    categories: ["Drama"],
    imdbId: "tt2018111",
    imdbRating: 7.6,
    runtime: 99,
    language: "English",
    youtubeId: "8CdIiD6-iF0",
    summary:
      'In the cruel world of junior high, Edwin suffers in a state of anxiety and alienation alongside his only friend, Flake. Misunderstood by their families and demoralized at school daily, their fury simmers quietly until an idea for vengeance offers them a terrifying release. Based on the acclaimed novel "Project X" by Jim Shepard, this unflinching look at adolescence explores how the powerful bonds of childhood friendship and search for belonging can become a matter of life or death.',
    smallThumbnail: "http://i3.ytimg.com/vi/8CdIiD6-iF0/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/8CdIiD6-iF0/maxresdefault.jpg",
  },

  {
    title: "An Extremely Goofy Movie",
    year: 2000,
    categories: ["Animation", "Comedy", "Family", "Sport"],
    imdbId: "tt0208185",
    imdbRating: 6.4,
    runtime: 79,
    language: "English",
    youtubeId: "H8oSvldAGfg",
    summary:
      "It's a big time in Max's life. He's college bound with his friends and finally free of his embarrassing father as he strives to be a top contender for the X-Games. Unfortunately, Goofy loses his job and learns that he cannot get another job without a college degree. To his son's mortification, Goofy decides to join him in his campus to get that degree. Desperate to distract his father, Max talks him into joining the competing Gamma Fraternity team and introduces him to a wonderful librarian who shares his nostalgic love for 1970's pastimes. Unfortunately, things do not go according to plan as events put this father-son relationship to the test.",
    smallThumbnail: "http://i3.ytimg.com/vi/H8oSvldAGfg/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/H8oSvldAGfg/maxresdefault.jpg",
  },

  {
    title: "89",
    year: 2017,
    categories: ["Uncategorized"],
    imdbId: "tt7614404",
    imdbRating: 8.1,
    runtime: 91,
    language: "English",
    youtubeId: "5hfAExhHTMM",
    summary:
      "89 tells the incredible story of one of football's greatest triumphs: when against all odds Arsenal snatched the Championship title from Liverpool at Anfield in the last minute of the last game of the 1988/89 season. It's a universal tale of a band of brothers who, led by a charismatic and deeply respected manager, came together to defy the odds and create history. Mixing archive and previously unseen footage with revealing interviews, insights and memories from the original squad, game officials, famous fans and the people who were there on the night this is the definitive account of a watershed moment in football and a must-watch for any sports fan.",
    smallThumbnail: "http://i3.ytimg.com/vi/5hfAExhHTMM/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/5hfAExhHTMM/maxresdefault.jpg",
  },

  {
    title: "The Foster Boy",
    year: 2011,
    categories: ["Drama"],
    imdbId: "tt2057931",
    imdbRating: 7.4,
    runtime: 107,
    language: "English",
    youtubeId: "E9Qv_XVJ-js",
    summary:
      "The illegitimate orphan child, 12-year-old Max, is sold by the local minister for a basket of food to the B??siger family, who own a mountain farm. Max' initial hope of finally finding a loving home is brutally shattered: The farmer and his wife treat Max like livestock, and their son Jacob humiliates and abuses him. Only the local teacher notices the child suffering on the farm.",
    smallThumbnail: "http://i3.ytimg.com/vi/E9Qv_XVJ-js/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/E9Qv_XVJ-js/maxresdefault.jpg",
  },

  {
    title: "Forever My Girl",
    year: 2018,
    categories: ["Drama", "Music", "Romance"],
    imdbId: "tt4103724",
    imdbRating: 6.4,
    runtime: 108,
    language: "English",
    youtubeId: "3vqcMr1q5Uc",
    summary:
      "After being gone for a decade a country star returns home to the love he left behind.",
    smallThumbnail: "http://i3.ytimg.com/vi/3vqcMr1q5Uc/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/3vqcMr1q5Uc/maxresdefault.jpg",
  },

  {
   title: "The Farthest",
   year: 2017,
   categories: ["Documentary", "History"],
   imdbId: "tt6223974",
   imdbRating: 8.1,
   runtime: 121,
   language: "English",
   youtubeId: "znTdk_de_K8",
   summary:
     "Is it humankind's greatest achievement? 12 billion miles away a tiny spaceship is leaving our Solar System and entering the void of deep space. It is the first human-made object ever to do so. Slowly dying within its heart is a plutonium generator that will beat for perhaps another decade before the lights on Voyager finally go out. But this little craft will travel on for millions of years, carrying a Golden Record bearing recordings and images of life on Earth. In all likelihood Voyager will outlive humanity and all our creations. It could be the only thing to mark our existence. Perhaps some day an alien will find it and wonder. The story of Voyager is an epic of human achievement, personal drama and almost miraculous success. Launched 16 days apart in Autumn 1977, the twin Voyager space probes have defied all the odds, survived countless near misses and almost 40 years later continue to beam revolutionary information across unimaginable distances. With less computing power than a ...",
   smallThumbnail: "http://i3.ytimg.com/vi/znTdk_de_K8/hqdefault.jpg",
   bigThumbnail: "http://i3.ytimg.com/vi/znTdk_de_K8/maxresdefault.jpg",
 },

  {
    title: "New York Doll",
    year: 2005,
    categories: ["Documentary", "Music"],
    imdbId: "tt0436629",
    imdbRating: 7.9,
    runtime: 75,
    language: "English",
    youtubeId: "jwD04NsnLLg",
    summary:
      'A recovering alcoholic and recently converted Mormon, Arthur "Killer" Kane, of the rock band The New York Dolls, is given a chance at reuniting with his band after 30 years.',
    smallThumbnail: "http://i3.ytimg.com/vi/jwD04NsnLLg/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/jwD04NsnLLg/maxresdefault.jpg",
  },

  {
    title: "Patton Oswalt: Annihilation",
    year: 2017,

    categories: ["Uncategorized"],
    imdbId: "tt7026230",
    imdbRating: 7.4,
    runtime: 66,
    language: "English",
    youtubeId: "4hZi5QaMBFc",
    summary:
      "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
    smallThumbnail: "http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/4hZi5QaMBFc/maxresdefault.jpg",
  },

  {
    title: "Tom Segura: Disgraceful",
    year: 2018,
    categories: ["Comedy", "Documentary"],
    imdbId: "tt7379330",
    imdbRating: 7.5,
    runtime: 0,
    language: "English",
    youtubeId: "kYYINJM3lPA",
    summary:
      "Comedian Tom Segura rants about funny things about pop culture and the way of living in 2018.",
    smallThumbnail: "http://i3.ytimg.com/vi/kYYINJM3lPA/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/kYYINJM3lPA/maxresdefault.jpg",
  },

  {
    title: "The Secret Rules of Modern Living: Algorithms",
    year: 2015,
    categories: ["Documentary"],
    imdbId: "tt5818010",
    imdbRating: 7.5,
    runtime: 58,
    language: "English",
    youtubeId: "hpyxmT6KSvw",
    summary:
      "Professor Marcus du Sautoy demystifies the hidden world of algorithms and reveals where these 2,000-year-old problem solvers came from, how they work, and what they have achieved.",
    smallThumbnail: "http://i3.ytimg.com/vi/hpyxmT6KSvw/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/hpyxmT6KSvw/maxresdefault.jpg",
  },

  {
    title: "The Humanity Bureau",
    year: 2017,
    categories: ["Action", "Sci-Fi"],
    imdbId: "tt6143568",
    imdbRating: 6.1,
    runtime: 95,
    language: "English",
    youtubeId: "kUH8JGhRzPY",
    summary:
      "A dystopian thriller set in the year 2030 that sees the world in a permanent state of economic recession and facing serious environmental problems as a result of global warming.",
    smallThumbnail: "http://i3.ytimg.com/vi/kUH8JGhRzPY/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/kUH8JGhRzPY/maxresdefault.jpg",
  },

  {
    title: "Farewell Ferris Wheel",
    year: 2016,
    categories: ["Documentary", "Drama", "News"],
    imdbId: "tt2349677",
    imdbRating: 7.4,
    runtime: 72,
    language: "English",
    youtubeId: "-K2m6AKNB-g",
    summary:
      "Farewell, Ferris Wheel examines the link between America's carnival industry and a small Mexican town that legally provides one third of the carnival's labor. However, increased regulations are compromising this longstanding connection, putting both the industry and its workers in jeopardy.",
    smallThumbnail: "http://i3.ytimg.com/vi/-K2m6AKNB-g/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/-K2m6AKNB-g/maxresdefault.jpg",
  },
  {
    title: "Don't Talk to Irene",
    year: 2017,
    categories: ["Comedy"],
    imdbId: "tt5030452",
    imdbRating: 6.4,
    runtime: 90,
    language: "English",
    youtubeId: "lK48UxWuUho",
    summary:
      'Irene must endure 2 weeks of community service at a retirement home. Following her passion for cheerleading, she secretly signs up the senior residents to audition for a dance-themed reality show to prove that you don\'t need to be physically "perfect" to be perfectly AWESOME.',
    smallThumbnail: "http://i3.ytimg.com/vi/lK48UxWuUho/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/lK48UxWuUho/maxresdefault.jpg",
  },
  {
    title: "Blood Road",
    year: 2017,
    categories: ["Documentary", "History", "Sport"],
    imdbId: "tt6900092",
    imdbRating: 6.9,
    runtime: 96,
    language: "English",
    youtubeId: "XCzVqiN950M",
    summary:
      "The mysteries surrounding her father's death in the Vietnam war lead ultra-endurance mountain biker Rebecca Rusch on an emotional journey as she pedals 1200 miles of the Ho Chi Minh trail.",
    smallThumbnail: "http://i3.ytimg.com/vi/XCzVqiN950M/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/XCzVqiN950M/maxresdefault.jpg",
  },
  {
    title: "Andre the Giant",
    year: 2018,
    categories: ["Documentary"],
    imdbId: "tt6543420",
    imdbRating: 8.2,
    runtime: 85,
    language: "English",
    youtubeId: "f_jTeuajas0",
    summary:
      "A look at the life and career of professional wrestler Andr?? Roussimoff, who gained notoriety in the 1980s as Andre the Giant.",
    smallThumbnail: "http://i3.ytimg.com/vi/f_jTeuajas0/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/f_jTeuajas0/maxresdefault.jpg",
  },
  {
    title: "Dead on Arrival",
    year: 2017,
    categories: ["Thriller"],
    imdbId: "tt5903088",
    imdbRating: 6.9,
    runtime: 97,
    language: "English",
    youtubeId: "8jJ-kC-rq0Q",
    summary:
      "A pharmaceutical sales rep visits a small town in Louisiana on business. He finds himself in a dark world of corruption and murder with 24 hours to live, running from the police, the mob and a sheriff that wants him dead.",
    smallThumbnail: "http://i3.ytimg.com/vi/8jJ-kC-rq0Q/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/8jJ-kC-rq0Q/maxresdefault.jpg",
  },
  {
    title: "Big Time",
    year: 2017,
    categories: ["Documentary"],
    imdbId: "tt7630164",
    imdbRating: 6.2,
    runtime: 93,
    language: "English",
    youtubeId: "VK0mGdMKMW4",
    summary:
      "Bjarke Ingels started out as a young man dreaming of creating cartoons. Now, he has been named \"one of architecture's biggest innovators\" by The Wall Street Journal and one of The 100 Most Influential People on the planet by TIME Magazine. BIG TIME follows Bjarke during the course of 7 years (2009-2016), while he struggles to finish his biggest project so far. We are let into Bjarke's creative processes as well as the endless compromises that his work entails, and we are on the side when his personal life starts putting pressure on him, too. In addition to the recently opened architectural marvel VIA 57 West (625 West 57th Street), Bjarke Ingels' company Bjarke Ingels Group (BIG) was given the task of designing and building one of the skyscrapers which will replace Two World Trade Center in Manhattan. While Bjarke is creating these buildings, which will change the New York skyline, he is hit by health-related issues. The Film offers an intimate look into the innovative and ambitious ...",
    smallThumbnail: "http://i3.ytimg.com/vi/VK0mGdMKMW4/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/VK0mGdMKMW4/maxresdefault.jpg",
  },

  {
    title: "Hostiles",
    year: 2017,
    categories: ["Adventure", "Drama", "Western"],
    imdbId: "tt5478478",
    imdbRating: 7.3,
    runtime: 134,
    language: "English",
    youtubeId: "1M5cj4UmscE",
    summary:
      "In 1892, after nearly two decades of fighting the Cheyenne, the Apache, and the Comanche natives, the United States Cavalry Captain and war hero, Joseph Blocker, is ordered to escort the ailing Cheyenne chief, Yellow Hawk--his most despised enemy--to his ancestral home in Montana's Valley of the Bears. Nauseated with a baleful anger, Joseph's unwelcome final assignment in the feral American landscape is further complicated, when the widowed settler, Rosalie Quaid, is taken in by the band of soldiers, as aggressive packs of marauding Comanches who are still on the warpath, are thirsty for blood. In a territory crawling with hostiles, can the seasoned Captain do his duty one last time?",
    smallThumbnail: "http://i3.ytimg.com/vi/1M5cj4UmscE/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/1M5cj4UmscE/maxresdefault.jpg",
  },

  {
    title: "Outside In",
    year: 2017,
    categories: ["Drama"],
    imdbId: "tt7260048",
    imdbRating: 6.4,
    runtime: 109,
    language: "English",
    youtubeId: "s0SdJfplC80",
    summary:
      "An ex-con struggling to readjust to life in his small town forms an intense bond with his former high school teacher.",
    smallThumbnail: "http://i3.ytimg.com/vi/s0SdJfplC80/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/s0SdJfplC80/maxresdefault.jpg",
  },
  {
    title: "Froning: The Fittest Man in History",
    year: 2015,
    categories: ["Documentary"],
    imdbId: "tt5079382",
    imdbRating: 6.7,
    runtime: 99,
    language: "English",
    youtubeId: "D1ze-f7jS2A",
    summary:
      "Rich Froning Jr. is a legend in CrossFit and the Sport of Fitness. In this biopic, take a look at his childhood, follow his quest for a fourth CrossFit Games title, and see him as a son, a husband and a new father.",
    smallThumbnail: "http://i3.ytimg.com/vi/D1ze-f7jS2A/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/D1ze-f7jS2A/maxresdefault.jpg",
  },

  {
    title: "Peter Rabbit",
    year: 2018,
    categories: ["Adventure", "Animation", "Comedy", "Family", "Fantasy"],
    imdbId: "tt5117670",
    imdbRating: 6.6,
    runtime: 95,
    language: "English",
    youtubeId: "7Pa_Weidt08",
    summary:
      "Based on the books by Beatrix Potter: Peter Rabbit (James Corden;) his three sisters: Flopsy (Margot Robbie,) Mopsy (Elizabeth Debicki) and Cotton Tail (Daisy Ridley) and their cousin Benjamin (Colin Moody) enjoy their days harassing Mr McGregor in his vegetable garden. Until one day he dies and no one can stop them roaming across his house and lands for a full day or so. However, when one of Mr McGregor's relatives inherits the house and goes to check it out, he finds much more than he bargained for. What ensues, is a battle of wills between the new Mr McGregor and the rabbits. But when he starts to fall in love with Bea (Rose Byrne,) a real lover of all nature, his feelings towards them begin to change. But is it too late?",
    smallThumbnail: "http://i3.ytimg.com/vi/7Pa_Weidt08/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/7Pa_Weidt08/maxresdefault.jpg",
  },


  {
    title: "The Other Side of Heaven",
    year: 2001,
    categories: ["Adventure", "Biography", "Drama"],
    imdbId: "tt0250371",
    imdbRating: 6.5,
    runtime: 113,
    language: "English",
    youtubeId: "5dKsHYzIoUI",
    summary:
      "John H. Groberg, a middle class kid from Idaho Falls, crosses the Pacific to become a Mormon missionary in the remote and exotic Tongan island kingdom during the 1950's. He leaves behind a loving family and the true love of his life, Jean. Through letters and musings across the miles, John shares his humbling and sometimes hilarious adventures with \"the girl back home\", and her letters buoy up his spirits in difficult times. John must struggle to overcome language barriers, physical hardship and deep-rooted suspicion to earn the trust and love of the Tongan people he has come to serve. Throughout his adventure-filled three years on the islands, he discovers friends and wisdom in the most unlikely places. John H. Groberg's Tongan odyssey will change his life forever.",
    smallThumbnail: "http://i3.ytimg.com/vi/5dKsHYzIoUI/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/5dKsHYzIoUI/maxresdefault.jpg",
  },

  {
    title: "Black Marigolds",
    year: 2013,
    categories: ["Drama", "Romance"],
    imdbId: "tt2141623",
    imdbRating: 6.1,
    runtime: 84,
    language: "English",
    youtubeId: "gLzRi0wbneI",
    summary:
      "Black Marigolds is a drama steeped in literature. Following writer Ryan Cole and his wife Kate as they move to an off season vacation home on a frigid lake in Northern California so that Ryan can finish his new novel. At first everything is perfect for two people who need only each other to be happy. But soon Kate begins to notice Ryan forgetting things, and as his frustration grows so does her concern for him. While he refuses to seek help, he becomes increasingly volatile and unpredictable. Finally it will be up to Kate to choose between the pleasant past or the terrible future.",
    smallThumbnail: "http://i3.ytimg.com/vi/gLzRi0wbneI/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/gLzRi0wbneI/maxresdefault.jpg",
  },

  {
    title: "Sons of Ben",
    year: 2016,
    categories: ["Biography", "Documentary", "Sport"],
    imdbId: "tt2317088",
    imdbRating: 7.8,
    runtime: 75,
    language: "English",
    youtubeId: "m8I_pgCaRsM",
    summary:
      "After many rumors of an MLS team arriving in Philadelphia never materializing, a small group of soccer fans took matters into their own hands and started a supporters group called the Sons of Ben to help bring a team to their hometown. They were a group without a team to root for and had a modest goal of reaching 100 members by the end of the year. Little did they know they would reach over 1,500 members in less time than that and start a movement that would not only change the soccer landscape in Philadelphia forever, but also help revive a community that had been struggling for decades.",
    smallThumbnail: "http://i3.ytimg.com/vi/m8I_pgCaRsM/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/m8I_pgCaRsM/maxresdefault.jpg",
  },
  {
    title: "12 Strong",
    year: 2018,
    categories: ["Action", "Drama", "History", "War"],
    imdbId: "tt1413492",
    imdbRating: 6.7,
    runtime: 130,
    language: "English",
    youtubeId: "-Denciie5oA",
    summary:
      'The True Story of the Army\'s Special Forces "Green Berets", who within weeks responded to the 9-11 attack. Green Berets, with the help of the 160th SOAR(A), took over the country and allowed other Special Forces and the rest of the conventional military to begin the more publicly visible war.',
    smallThumbnail: "http://i3.ytimg.com/vi/-Denciie5oA/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/-Denciie5oA/maxresdefault.jpg",
  },
  {
    title: "The Commuter",
    year: 2018,
    categories: ["Action", "Crime", "Drama", "Mystery", "Thriller"],
    imdbId: "tt1590193",
    imdbRating: 6.3,
    runtime: 105,
    language: "English",
    youtubeId: "WWexI9YiLSc",
    summary:
      "Now a hard-working life insurance salesman and a caring family man, the former police officer, Michael MacCauley, has taken the commuter rail to New York for the past ten years. But, unexpectedly, things will take a turn for the worse, when on one of his daily journeys, the cryptic passenger, Joanna, makes Michael a generous and tempting offer to locate a single commuter or face grave consequences. Is this a sick joke, or is this indeed a serious situation? As Michael races against the clock to solve this wicked conundrum, everyone aboard is a suspect, in a deal where there's definitely more than meets the eye. Can he decide in time who's the one?",
    smallThumbnail: "http://i3.ytimg.com/vi/WWexI9YiLSc/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/WWexI9YiLSc/maxresdefault.jpg",
  },
  {
    title: "Birdshot",
    year: 2016,
    categories: ["Drama", "Mystery", "Thriller"],
    imdbId: "tt6135042",
    imdbRating: 6.8,
    runtime: 116,
    language: "English",
    youtubeId: "7k8h_X3GjgM",
    summary:
      'Birdshot" is a mystery-thriller film that tells a story of a young Filipina farm girl who wanders into the boundaries of a Philippine reservation forest. Deep within the reservation she mistakenly shoots and kills a critically endangered and protected Philippine Eagle. As the local authorities begin a manhunt to track down the poacher of a national bird, their investigation leads them to an even more horrific discovery.',
    smallThumbnail: "http://i3.ytimg.com/vi/7k8h_X3GjgM/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/7k8h_X3GjgM/maxresdefault.jpg",
  },

  {
    title: "Mary and the Witch's Flower",
    year: 2017,
    categories: ["Adventure", "Animation", "Family", "Fantasy"],
    imdbId: "tt6336356",
    imdbRating: 6.8,
    runtime: 102,
    language: "English",
    youtubeId: "888z3ku4t3I",
    summary:
      'Mary is an ordinary young girl stuck in the country with her Great-Aunt Charlotte and seemingly no adventures or friends in sight. She follows a mysterious cat into the nearby forest, where she discovers an old broomstick and the strange Fly-by-Night flower, a rare plant that blossoms only once every seven years and only in that forest. Together the flower and the broomstick whisk Mary above the clouds and far away to Endor College - a school of magic run by headmistress Madam Mumblechook and the brilliant Doctor Dee. But there are terrible things happening at the school, and, when Mary tells a lie, she must risk her life to try to set things right. Based on Mary Stewart\'s 1971 classic children\'s book "The Little Broomstick", "Mary and The Witch\'s Flower" is an action-packed film full of jaw-dropping imaginative worlds, ingenious characters, and the stirring, heartfelt story of a young girl trying to find a place in the world. Featuring the voices of Ruby Barnhill and Academy ...',
    smallThumbnail: "http://i3.ytimg.com/vi/888z3ku4t3I/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/888z3ku4t3I/maxresdefault.jpg",
  },
  {
    title: "The Last Movie Star",
    year: 2017,
    categories: ["Drama"],
    imdbId: "tt5836316",
    imdbRating: 6.8,
    runtime: 94,
    language: "English",
    youtubeId: "1-f8O118hnE",
    summary:
      "An aging former movie star is forced to face the reality that his glory days are behind him. On its surface, the film is a tale about faded fame. At its core, it's a universal story about growing old.",
    smallThumbnail: "http://i3.ytimg.com/vi/1-f8O118hnE/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/1-f8O118hnE/maxresdefault.jpg",
  },
  {
    title: "Lucky",
    year: 2017,
    categories: ["Comedy", "Drama"],
    imdbId: "tt5859238",
    imdbRating: 7.4,
    runtime: 88,
    language: "English",
    youtubeId: "2KLLkj84GAo",
    summary:
      "Lucky is an old US Navy veteran of rigid habits and attitudes in a small town. When his routine is interrupted by a sudden collapse at home, Lucky finds himself realizing that his remarkably healthy old age is going to face an inevitable decline and he has to accept it. In that difficult reassessment, Lucky must face up to what he believes in and how much it compares to his neighbors' priorities. In doing so, Lucky finds that his life has its positive side as he searches for some meaning that he can accept.",
    smallThumbnail: "http://i3.ytimg.com/vi/2KLLkj84GAo/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/2KLLkj84GAo/maxresdefault.jpg",
  },

  {
    title: "Control",
    year: 2017,
    categories: ["Action", "Crime", "Drama", "Thriller"],
    imdbId: "tt1727497",
    imdbRating: 6.3,
    runtime: 127,
    language: "English",
    youtubeId: "xF99vVf8yv0",
    summary:
      "The once unconditional friendship between police officers Vincke and Verstuyft hits a very rough patch when they come up against a series of gruesome murders. Complicating matters even further, a survivor of the killer drives a wedge between them when Verstuyft falls for her charms. Meanwhile, the serial killer has a new victim in sight...",
    smallThumbnail: "http://i3.ytimg.com/vi/xF99vVf8yv0/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/xF99vVf8yv0/maxresdefault.jpg",
  },

  {
    title: "All the Money in the World",
    year: 2017,
    categories: ["Biography", "Crime", "Drama", "Mystery", "Thriller"],
    imdbId: "tt5294550",
    imdbRating: 6.9,
    runtime: 132,
    language: "English",
    youtubeId: "KXHrCBkIxQQ",
    summary:
      "Rome, 1973. Masked men kidnap a teenage boy named John Paul Getty III (Charlie Plummer). His grandfather, Jean Paul Getty (Christopher Plummer), is the richest human in the world, a billionaire oil magnate, but he's notoriously miserly. His favorite grandson's abduction is not reason enough for him to part with any of his fortune. All the Money in the World (2017) follows Gail, (Michelle Williams), Paul's devoted, strong-willed mother, who unlike Getty, has consistently chosen her children over his fortune. Her son's life in the balance with time running out, she attempts to sway Getty even as her son's mob captors become increasingly more determined, volatile and brutal. When Getty sends his enigmatic security man Fletcher Chace (Mark Wahlberg) to look after his interests, he and Gail become unlikely allies in this race against time that ultimately reveals the true and lasting value of love over money.",
    smallThumbnail: "http://i3.ytimg.com/vi/KXHrCBkIxQQ/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/KXHrCBkIxQQ/maxresdefault.jpg",
  },

  {
   title: "Paddington 2",
   year: 2017,
   categories: ["Adventure", "Animation", "Comedy", "Family", "Fantasy"],
   imdbId: "tt4468740",
   imdbRating: 8,
   runtime: 103,
   language: "English",
   youtubeId: "sw7RElt-SvE",
   summary:
     "Paddington is happily settled with the Brown family in Windsor Gardens, where he has become a popular member of the community, spreading joy and marmalade wherever he goes. While searching for the perfect present for his beloved Aunt Lucy's 100th birthday, Paddington spots a unique pop-up book in Mr. Gruber's antique shop, and embarks upon a series of odd jobs to buy it. But when the book is stolen, it's up to Paddington and the Browns to unmask the thief.",
   smallThumbnail: "http://i3.ytimg.com/vi/sw7RElt-SvE/hqdefault.jpg",
   bigThumbnail: "http://i3.ytimg.com/vi/sw7RElt-SvE/maxresdefault.jpg",
 },

  {
    title: "Believe in Me",
    year: 2006,
    categories: ["Drama", "Sport"],
    imdbId: "tt0419491",
    imdbRating: 7.1,
    runtime: 0,
    language: "English",
    youtubeId: "IHatBd-2lLI",
    summary:
      "Girls? The thought of coaching them seems preposterous to Clay Driscoll (earnest newcomer Jeffrey Donovan), who travels to Middleton, Okla., in the 1960s prepared to coach the varsity boys' team. But that position is filled, so he's forced to coach the girls' team -- the Lady Cyclones. Faced with an under-performing crew of untrained players, the coach begins to treat the girls like boys. They run laps in a closed gym and practice shots and plays they've never tried before -- and eventually their \"old-fashioned grit\" leads them to a Cinderella season culminating with the state championships. Along their way, Driscoll and the girls overcome several obstacles, most of all, gaining a fan base. Meanwhile, big man in town Ellis Brawley (Bruce Dern) can't stand Driscoll and his newfangled idea of empowering female athletes. Of course, the Lady Cyclones are up to the task of proving Brawley wrong. Driven by their caring young coach, the girls determine to play as hard as the boys, even ...",
    smallThumbnail: "http://i3.ytimg.com/vi/IHatBd-2lLI/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/IHatBd-2lLI/maxresdefault.jpg",
  },

  {
    title: "The Greatest Showman",
    year: 2017,
    categories: ["Biography", "Drama", "Musical", "Romance"],
    imdbId: "tt1485796",
    imdbRating: 7.8,
    runtime: 105,
    language: "English",
    youtubeId: "AXCTMGYUg9A",
    summary:
      "Orphaned, penniless but ambitious and with a mind crammed with imagination and fresh ideas, the American Phineas Taylor Barnum will always be remembered as the man with the gift to effortlessly blur the line between reality and fiction. Thirsty for innovation and hungry for success, the son of a tailor will manage to open a wax museum but will soon shift focus to the unique and peculiar, introducing extraordinary, never-seen-before live acts on the circus stage. Some will call Barnum's wide collection of oddities, a freak show; however, when the obsessed showman gambles everything on the opera singer Jenny Lind to appeal to a high-brow audience, he will somehow lose sight of the most important aspect of his life: his family. Will Barnum risk it all to be accepted?",
    smallThumbnail: "http://i3.ytimg.com/vi/AXCTMGYUg9A/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/AXCTMGYUg9A/maxresdefault.jpg",
  },

  {
    title: "Along for the Ride",
    year: 2016,
    categories: ["Documentary"],
    imdbId: "tt3986978",
    imdbRating: 7,
    runtime: 90,
    language: "English",
    youtubeId: "oGXol1CI26k",
    summary: "A documentary about Dennis Hopper.",
    smallThumbnail: "http://i3.ytimg.com/vi/oGXol1CI26k/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/oGXol1CI26k/maxresdefault.jpg",
  },
  {
    title: "Centre of My World",
    year: 2016,
    categories: ["Drama"],
    imdbId: "tt4932154",
    imdbRating: 7.3,
    runtime: 115,
    language: "English",
    youtubeId: "u-PTAF5wgS0",
    summary:
      "After a summer spent with his his best friend Kat to escape his family, Phil goes back to school and starts to question his feelings towards Nicholas, a new classmate.",
    smallThumbnail: "http://i3.ytimg.com/vi/u-PTAF5wgS0/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/u-PTAF5wgS0/maxresdefault.jpg",
  },

  {
    title: "The Nile Hilton Incident",
    year: 2017,
    categories: ["Crime", "Drama", "Thriller"],
    imdbId: "tt5540188",
    imdbRating: 6.9,
    runtime: 111,
    language: "English",
    youtubeId: "G1njw7sUFoQ",
    summary:
      "Set against the backdrop of the Egyptian Revolution, the thriller features a police officer who investigates the murder of a woman. What initially seems to be a killing of a prostitute turns into a more complicated case involving the very elite of Egypt.",
    smallThumbnail: "http://i3.ytimg.com/vi/G1njw7sUFoQ/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/G1njw7sUFoQ/maxresdefault.jpg",
  },
  {
    title: "Star Wars: The Last Jedi",
    year: 2017,
    categories: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    imdbId: "tt2527336",
    imdbRating: 7.4,
    runtime: 152,
    language: "English",
    youtubeId: "Q0CbN8sfihY",
    summary:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
    smallThumbnail: "http://i3.ytimg.com/vi/Q0CbN8sfihY/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/Q0CbN8sfihY/maxresdefault.jpg",
  },

  {
    title: "The Outsider",
    year: 2018,
    categories: ["Crime", "Drama", "Mystery", "Thriller"],
    imdbId: "tt2011311",
    imdbRating: 6.3,
    runtime: 120,
    language: "English",
    youtubeId: "QNNcl2mEHzQ",
    summary:
      "An epic set in post-WWII Japan and centered on an American former G.I. who joins the yakuza.",
    smallThumbnail: "http://i3.ytimg.com/vi/QNNcl2mEHzQ/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/QNNcl2mEHzQ/maxresdefault.jpg",
  },

  {
    title: "Hotel Salvation",
    year: 2016,
    categories: ["Comedy", "Drama"],
    imdbId: "tt5997928",
    imdbRating: 7.3,
    runtime: 102,
    language: "English",
    youtubeId: "Que1V8IEcEU",
    summary:
      "Faced with his father's untimely and bizarre demand to go and die in the holy city of Varanasi and attain Salvation, a son is left with no choice but to embark on this journey.",
    smallThumbnail: "http://i3.ytimg.com/vi/Que1V8IEcEU/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/Que1V8IEcEU/maxresdefault.jpg",
  },

  {
    title: "Dark Blue World",
    year: 2001,
    categories: ["Action", "Drama", "Romance", "War"],
    imdbId: "tt0244479",
    imdbRating: 7.3,
    runtime: 112,
    language: "English",
    youtubeId: "AJTz9VozSYI",
    summary:
      "March 15, 1939: Germany invades Czechoslovakia. Czech and Slovak pilots flee to England, joining the RAF. After the war, back home, they are put in labor camps, suspected of anti-Communist ideas. This film cuts between a post-war camp where Franta is a prisoner and England during the war, where Franta is like a big brother to Karel, a very young pilot. On maneuvers, Karel crash lands by the rural home of Susan, an English woman whose husband is MIA. She spends one night with Karel, and he thinks he's found the love of his life. It's complicated by Susan's attraction to Franta. How will the three handle innocence, Eros, friendship, and the heat of battle? When war ends, what then?",
    smallThumbnail: "http://i3.ytimg.com/vi/AJTz9VozSYI/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/AJTz9VozSYI/maxresdefault.jpg",
  },


];

movies.forEach((e, i, a) => {
  const div = document.createElement("div");
  div.classList.add("card2");

  div.innerHTML = `<img src="${e.smallThumbnail}" class="rasm1" alt="${e.title}">
<h2 class="title_first">${e.title}</h2>
<h4 class="title_second" >${e.year}</h4>
<p class="text_first">${e.imdbRating}</p>
<p class="text_second">${e.language}</p>
<button class="button_second"> ${e.categories}</button>`;

  box.appendChild(div)
});
