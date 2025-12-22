import React from "react";

export interface Vehicle {
    name: string;
    models: string;
    pax: string;
    priceAyodhya: string;
    priceDelhi: string;
    hills: string;
    image: string;
}

interface VehicleCardProps {
    vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
    return (
        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Image container with overlay */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-lg">
                    Premium
                </div>

                {/* Hover overlay content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Available Now
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <h3 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-primary transition-colors">
                            {vehicle.name}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium">
                            {vehicle.models}
                        </p>
                    </div>
                    <div className="bg-primary/10 px-3 py-1 rounded-full">
                        <span className="text-primary font-bold text-sm">{vehicle.pax}</span>
                    </div>
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        AC Available
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        GPS Tracking
                    </div>
                </div>

                {/* Pricing */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Ayodhya:</span>
                        <span className="font-bold text-primary text-lg">{vehicle.priceAyodhya}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Delhi:</span>
                        <span className="font-bold text-gray-800">{vehicle.priceDelhi}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Hills:</span>
                        <span className="font-semibold text-gray-700">{vehicle.hills}</span>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full"></div>
        </div>
    );
};

export default VehicleCard;
