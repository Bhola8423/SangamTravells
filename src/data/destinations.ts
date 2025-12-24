export interface Destination {
    id: string;
    name: string;
    title: string;
    description: string;
    heroImage: string;
    bestTime: string;
    places: {
        name: string;
        image: string;
        description: string;
    }[];
}

export const destinations: Record<string, Destination> = {
    ayodhya: {
        id: "ayodhya",
        name: "Ayodhya",
        title: "The Birthplace of Lord Rama",
        description: "Ayodhya is a city situated on the banks of the holy river Saryu. It is the administrative headquarters of the Ayodhya district as well as the Ayodhya division. The history of Ayodhya is associated with the broad history of India, dating back to 4000 years. Formerly the area was occupied by the Aryans or the Dasas whose main occupation was agriculture. It was during the Aryan inhabitation that the epics of Mahabharata, Ramayana, Brahmanas and Puranas were written.",
        heroImage: "/assets/seo/ram_janmbhoomi.jpg",
        bestTime: "October to March",
        places: [
            {
                name: "Ram Mandir",
                image: "/assets/seo/ram_janmbhoomi.jpg",
                description: "The Ram Mandir is a Hindu temple built at the site of Ram Janmabhoomi, the birthplace of Rama. According to the Ramayana, Rama is a principal deity of Hinduism. The temple construction is supervised by the Shri Ram Janmabhoomi Teerth Kshetra."
            },
            {
                name: "Hanuman Garhi",
                image: "/assets/seo/hanuman_garhi.jpeg",
                description: "A 10th-century cave temple dedicated to Lord Hanuman. It is one of the most important temples in Ayodhya, housing a beautiful idol of Anjani with young Hanuman on her lap. (Note: Har Ki Pauri text from the source was corrected to Ayodhya context)."
            },
            {
                name: "Kanak Bhawan",
                image: "/assets/seo/kanak_bhawan.jpg",
                description: "One of the finest temples in Ayodhya. It is believed that this Bhawan was gifted to Devi Sita by Kaikeyi immediately after her marriage to Lord Ram. It is a private palace of Devi Sita and Lord Rama, renovated by Vikramaditya and later by Queen of Teekamgarh in 1891."
            },
            {
                name: "Guptar Ghat",
                image: "/assets/seo/saryu_ghats.jpg",
                description: "The sacred ghat on the bank of River Saryu where Lord Rama is believed to have taken Jal Samadhi to leave the earth and return to Vaikunta. It features well-maintained ghats built by Raja Darshan Singh in the 19th century."
            },
            {
                name: "Tomb of Bahu Begum",
                image: "/assets/allImages/tomb_of_bahu_beham.jpg",
                description: "Bahu Begum ka Maqbara is the Tomb of Queen Bride Begum Unmatuzzohra Bano, queen of Nawab Shuja-ud-Daula. It is one of the tallest buildings in Faizabad and a notable example of non-Mughal Muslim architecture."
            },
            {
                name: "Nageshwarnath Temple",
                image: "/assets/seo/nageshwarnath_temple.jpg",
                description: "Located at Ram-ki-Pairi, this temple is dedicated to Lord Shiva and houses one of the 12 jyotirlingas. It is believed to have been raised by Lord Rama’s son, Kush."
            }
        ]
    },
    varanasi: {
        id: "varanasi",
        name: "Varanasi",
        title: "The City of Lights & Moksha",
        description: "Varanasi, or Kashi, is the spiritual capital of India. It centers around the sacred Kashi Vishwanath temple and the eternal flow of the Ganges.",
        heroImage: "/assets/allImages/varanasi_img2.jpg",
        bestTime: "November to February",
        places: [
            {
                name: "Kashi Vishwanath Temple",
                image: "/assets/seo/kashivishwanath_temple.jpg",
                description: "Dedicated to Lord Shiva, known as Vishwanath or Lord of the Universe. It is one of the twelve Jyotirlinga shrines. The current structure was built by Ahilyabai Holkar in 1780."
            },
            {
                name: "Dashashwamedh Ghat",
                image: "/assets/seo/dashawashmedh_ghat.jpg",
                description: "The main ghat in Varanasi, famous for the spectacular evening Ganga Aarti that draws thousands of devotees."
            },
            {
                name: "Sarnath",
                image: "/assets/seo/sarnath.jpg",
                description: "The site of Buddha's first sermon, housing the Dhamekh Stupa and ancient Buddhist relics."
            }
        ]
    },
    prayagraj: {
        id: "prayagraj",
        name: "Prayagraj",
        title: "The Land of Sangam",
        description: "Prayagraj is the 'Place of Sacrifice' where the holy Ganga, Yamuna, and mythical Saraswati meet. It is the most pious confluence in Hinduism.",
        heroImage: "/assets/allImages/prayagraj_img2.jpg",
        bestTime: "October to March",
        places: [
            {
                name: "Triveni Sangam",
                image: "/assets/seo/triveni_img2.jpg",
                description: "The most pious confluence where Ganga, Yamuna and Saraswati meet. Traditionally regarded as the most auspicious place for a holy dip."
            },
            {
                name: "Lete Hanuman Mandir",
                image: "/assets/seo/hanuman_mandir_prayagraj.jpg",
                description: "A unique temple near the Sangam featuring a reclining statue of Lord Hanuman, submerged during peak floods."
            },
            {
                name: "Anand Bhawan",
                image: "/assets/seo/anand_bhawan.png",
                description: "The ancestral home of the Nehru-Gandhi family, reflecting India's modern history."
            }
        ]
    },
    chitrakoot: {
        id: "chitrakoot",
        name: "Chitrakoot",
        title: "The Hill of Many Wonders",
        description: "Where Lord Rama spent 11 years, 11 months, and 11 days of his exile. A place where the supreme gods took incarnation.",
        heroImage: "/assets/allImages/chitrakoot.jpg",
        bestTime: "All year round",
        places: [
            {
                name: "Ramghat",
                image: "/assets/allImages/chitrakoot.jpg",
                description: "The main ghat on the banks of Mandakini river where Lord Ram, Sita and Lakshman took refuge."
            },
            {
                name: "Bharat Milap",
                image: "/assets/allImages/chandrasekhar_azad_park.jpg",
                description: "The spot where Bharat met Lord Rama and requested him to return to Ayodhya and rule the kingdom."
            }
        ]
    }
};
