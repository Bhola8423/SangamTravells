import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <a
            href="https://wa.me/919919405400"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-in fade-in slide-in-from-bottom-4"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="text-3xl" />
            <span className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Chat with us
            </span>
        </a>
    );
};

export default WhatsAppWidget;
