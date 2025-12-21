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
        heroImage: "https://images.unsplash.com/photo-1706606995654-20ec8b1b5e34?q=80&w=1920&auto=format&fit=crop",
        bestTime: "October to March",
        places: [
            {
                name: "Ram Janmabhoomi",
                // Grand Mandir / Temple view
                image: "https://images.unsplash.com/photo-1710609333935-77b5a805cc07?q=80&w=800&auto=format&fit=crop",
                description: "The sacred site believed to be the birthplace of Lord Rama, now home to the magnificent Ram Mandir."
            },
            {
                name: "Hanuman Garhi",
                // Temple / Saffron flag theme
                image: "https://images.unsplash.com/photo-1591632761823-3db4bd37f287?q=80&w=800&auto=format&fit=crop",
                description: "A 10th-century temple dedicated to Lord Hanuman, perched on a hillock."
            },
            {
                name: "Saryu Ghat",
                // River / Ghat evening view
                image: "https://images.unsplash.com/photo-1598522303036-7c91e77f0d06?q=80&w=800&auto=format&fit=crop",
                description: "Famous for the evening Aarti and holy dips, the banks of the Sarayu river are spiritually uplifting."
            },
            {
                name: "Kanak Bhawan",
                // Intricate Temple Architecture
                image: "https://images.unsplash.com/photo-1628067986064-16a2468dbf84?q=80&w=800&auto=format&fit=crop",
                description: "A beautiful temple gifted to Goddess Sita by Kaikeyi, known for its intricate architecture."
            }
        ]
    },
    varanasi: {
        id: "varanasi",
        name: "Varanasi",
        title: "The City of Lights & Moksha",
        description: "Varanasi, or Kashi, is older than history, older than tradition, older even than legend. It is the spiritual capital of India, famous for its ghats, temples, and the mesmerizing Ganga Aarti.",
        // Varanasi Ghats Main Landscape
        heroImage: "https://images.unsplash.com/photo-1561361513-35e022c87b32?q=80&w=1920&auto=format&fit=crop",
        bestTime: "November to February",
        places: [
            {
                name: "Kashi Vishwanath Temple",
                // Temple Spire / Spiritual
                image: "https://images.unsplash.com/photo-1563503253303-34e2cbb12361?q=80&w=800&auto=format&fit=crop",
                description: "One of the 12 Jyotirlingas, this is the most sacred temple dedicated to Lord Shiva."
            },
            {
                name: "Dashashwamedh Ghat",
                // Evening Aarti
                image: "https://images.unsplash.com/photo-1596707297920-d3cb0175b282?q=80&w=800&auto=format&fit=crop",
                description: "The main ghat in Varanasi on the Ganga River, famous for the spectacular evening Ganga Aarti."
            },
            {
                name: "Sarnath",
                // Stupa
                image: "https://images.unsplash.com/photo-1549646876-0f8c85eb8ae7?q=80&w=800&auto=format&fit=crop",
                description: "Where Lord Buddha gave his first sermon. A peaceful contrast to the bustle of Varanasi."
            },
            {
                name: "Assi Ghat",
                // Ghat Life / Boats
                image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=800&auto=format&fit=crop",
                description: "The southernmost ghat, known for being a place where long-term foreign students, researchers, and tourists live."
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
                image: "https://images.unsplash.com/photo-1622303036894-3be88349463e?q=80&w=800&auto=format&fit=crop",
                description: "The holy confluence of three rivers. taking a dip here is believed to wash away all sins."
            },
            {
                name: "Anand Bhawan",
                // Historical Building
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Anand_Bhawan%2C_Allahabad.jpg/800px-Anand_Bhawan%2C_Allahabad.jpg",
                description: "The ancestral home of the Nehru-Gandhi family, now a museum showcasing India's freedom struggle."
            },
            {
                name: "Hanuman Mandir",
                // Temple / Statue
                image: "https://images.unsplash.com/photo-1605634509797-2a0756598583?q=80&w=800&auto=format&fit=crop",
                description: "A famous temple near the Sangam featuring a reclining statue of Lord Hanuman."
            },
            {
                name: "Allahabad Fort",
                // Fort Walls
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Allahabad_Fort_View_from_River_Yamuna.jpg/800px-Allahabad_Fort_View_from_River_Yamuna.jpg",
                description: "Built by Emperor Akbar in 1583, this majestic fort stands on the banks of the Yamuna."
            }
        ]
    }
};
