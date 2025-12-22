import React from "react";

interface WhyChooseItem {
    title: string;
    desc: string;
    icon: React.ReactNode;
}

interface WhyChooseProps {
    title: string;
    subtitle?: string;
    items: WhyChooseItem[];
    columns?: 2 | 3 | 4;
    backgroundColor?: string;
}

const WhyChoose: React.FC<WhyChooseProps> = ({
    title,
    subtitle,
    items,
    columns = 3,
    backgroundColor = "bg-white"
}) => {
    const columnClass = {
        2: "sm:grid-cols-2",
        3: "sm:grid-cols-2 lg:grid-cols-3",
        4: "sm:grid-cols-2 lg:grid-cols-4"
    }[columns];

    return (
        <section className={`py-20 ${backgroundColor}`}>
            <div className="container-custom px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">{title}</h2>
                    {subtitle && <p className="text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
                </div>

                <div className={`grid gap-8 ${columnClass}`}>
                    {items.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
                            <div className="w-16 h-16 bg-[#fff7ed] rounded-2xl flex items-center justify-center text-primary text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
