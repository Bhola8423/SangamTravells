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
        description: "Ayodhya, situated on the banks of the Sarayu River, is one of the seven most sacred cities in India. It is the birthplace of Lord Rama and the setting of the epic Ramayana. The city is currently undergoing a massive transformation with the grand Ram Mandir at its heart.",
        // Ram Mandir / Ayodhya Theme
        heroImage: "/assets/seo/ram_janmbhoomi.jpg",
        bestTime: "October to March",
        places: [
            {
                name: "Ram Janmabhoomi",
                image: "/assets/seo/ram_janmbhoomi.jpg",
                description: "The sacred site believed to be the birthplace of Lord Rama, now home to the magnificent Ram Mandir."
            },
            {
                name: "Hanuman Garhi",
                image: "/assets/seo/hanuman_garhi.jpeg",
                description: "A 10th-century temple dedicated to Lord Hanuman, perched on a hillock."
            },
            {
                name: "Saryu Ghat",
                image: "/assets/seo/saryu_ghats.jpg",
                description: "Famous for the evening Aarti and holy dips, the banks of the Sarayu river are spiritually uplifting."
            },
            {
                name: "Kanak Bhawan",
                image: "/assets/seo/kanak_bhawan.jpg",
                description: "A beautiful temple gifted to Goddess Sita by Kaikeyi, known for its intricate architecture."
            },
            {
                name: "Nageshwarnath Temple",
                image: "/assets/seo/nageshwarnath_temple.jpg",
                description: "Established by Kush, the son of Lord Rama, this is one of the oldest Shiva temples in Ayodhya."
            }
        ]
    },
    varanasi: {
        id: "varanasi",
        name: "Varanasi",
        title: "The City of Lights & Moksha",
        description: "Varanasi, or Kashi, is older than history, older than tradition, older even than legend. It is the spiritual capital of India, famous for its ghats, temples, and the mesmerizing Ganga Aarti.",
        // Varanasi Ghats Main Landscape
        heroImage: "/assets/seo/varanasi_hero.jpg",
        bestTime: "November to February",
        places: [
            {
                name: "Kashi Vishwanath Temple",
                image: "/assets/seo/kashivishwanath_temple.jpg",
                description: "One of the 12 Jyotirlingas, this is the most sacred temple dedicated to Lord Shiva."
            },
            {
                name: "Dashashwamedh Ghat",
                image: "/assets/seo/dashawashmedh_ghat.jpg",
                description: "The main ghat in Varanasi on the Ganga River, famous for the spectacular evening Ganga Aarti."
            },
            {
                name: "Sarnath",
                image: "/assets/seo/sarnath.jpg",
                description: "Where Lord Buddha gave his first sermon. A peaceful contrast to the bustle of Varanasi."
            },
            {
                name: "Assi Ghat",
                image: "/assets/seo/assi_ghat.jpg",
                description: "The southernmost ghat, known for being a place where long-term foreign students, researchers, and tourists live."
            },
            {
                name: "Manikarnika Ghat",
                image: "/assets/seo/manikarnika_ghat.jpg",
                description: "The primary cremation ghat in Varanasi, reflecting the eternal cycle of life and death in Hinduism."
            }
        ]
    },
    prayagraj: {
        id: "prayagraj",
        name: "Prayagraj",
        title: "The Land of Sangam",
        description: "Prayagraj (formerly Allahabad) is famous for the Triveni Sangam, the confluence of the Ganges, Yamuna, and the mythical Saraswati rivers. It is a major pilgrimage center and the host of the Maha Kumbh Mela.",
        // Kumbh / Sangam view
        heroImage: "https://images.unsplash.com/photo-1619854406117-d7e108608e8b?q=80&w=1920&auto=format&fit=crop",
        bestTime: "October to March (especially Jan-Feb for Magh Mela)",
        places: [
            {
                name: "Triveni Sangam",
                // Boats at Sangam
                image: "/assets/seo/triveni_img2.jpg",
                description: "The holy confluence of three rivers. taking a dip here is believed to wash away all sins."
            },
            {
                name: "Anand Bhawan",
                // Historical Building
                image: "/assets/seo/anand_bhawan.png",
                description: "The ancestral home of the Nehru-Gandhi family, now a museum showcasing India's freedom struggle."
            },
            {
                name: "Hanuman Mandir",
                // Temple / Statue
                image: "/assets/seo/hanuman_mandir_prayagraj.jpg",
                description: "A famous temple near the Sangam featuring a reclining statue of Lord Hanuman."
            },
            {
                name: "Allahabad Fort",
                // Fort Walls
                image: "/assets/seo/prayagraj_fort.jpg",
                description: "Built by Emperor Akbar in 1583, this majestic fort stands on the banks of the Yamuna."
            },
            {
                name: "Khusro Bagh",
                image: "/assets/seo/khushro_bagh.jpg",
                description: "A large walled garden housing the tombs of Prince Khusrau and his family, examples of Mughal architecture."
            }
        ]
    }
};
