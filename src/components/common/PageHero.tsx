import React from "react";

interface PageHeroProps {
    title: string | React.ReactNode;
    subtitle?: string;
    backgroundImage: string;
    badges?: React.ReactNode[];
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImage, badges }) => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white/5"></div>
            </div>

            <div className="container-custom relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-2xl leading-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
                        {subtitle}
                    </p>
                )}

                {badges && badges.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white/95">
                        {badges.map((badge, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
                                {badge}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PageHero;
