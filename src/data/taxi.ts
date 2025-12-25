
export interface TaxiRate {
    id: number;
    type: string;
    models: string;
    capacity: string;
    localPrice: number;
    outstationPrice: string;
    image: string;
    features: string[];
    popular?: boolean;
}

export const taxiRates: TaxiRate[] = [
    {
        id: 1,
        type: "Hatchback",
        models: "WagonR / Celerio",
        capacity: "4 Passengers",
        localPrice: 1600,
        outstationPrice: "11/km",
        image: "/assets/allImages/swift_dzire1.jpeg",
        features: ["AC", "Audio System", "Comfortable Seats"]
    },
    {
        id: 2,
        type: "Sedan",
        models: "Dzire / Etios",
        capacity: "4 Passengers",
        localPrice: 1800,
        outstationPrice: "12/km",
        image: "/assets/allImages/switf_dzire2.jpeg",
        features: ["AC", "Large Boot", "Premium Interiors"],
        popular: true
    },
    {
        id: 3,
        type: "SUV / MUV",
        models: "Ertiga / Innova",
        capacity: "6-7 Passengers",
        localPrice: 2400,
        outstationPrice: "16/km",
        image: "/assets/allImages/innova.jpeg",
        features: ["Dual AC", "Captain Seats", "Ample Space"]
    },
    {
        id: 4,
        type: "Premium SUV",
        models: "Innova Crysta",
        capacity: "6-7 Passengers",
        localPrice: 3000,
        outstationPrice: "20/km",
        image: "/assets/allImages/innova2.jpeg",
        features: ["Leather Seats", "Ambient Light", "VIP Comfort"]
    },
    {
        id: 5,
        type: "Tempo Traveller",
        models: "12 / 17 / 26 Seater",
        capacity: "12-26 Passengers",
        localPrice: 5000,
        outstationPrice: "24/km",
        image: "/assets/allImages/tempo_traveller1.jpeg",
        features: ["Pushback Seats", "AC / Non-AC", "Large Luggage Space"],
        popular: false
    }
];
