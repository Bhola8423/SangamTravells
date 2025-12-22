import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

interface EmptyStateProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    actionLabel?: string;
    actionLink?: string;
    showHomeLink?: boolean;
    type?: "error" | "search" | "neutral";
}

const EmptyState: React.FC<EmptyStateProps> = ({
    title,
    description,
    icon,
    actionLabel = "Back to Home",
    actionLink = "/",
    showHomeLink = false,
    type = "neutral",
}) => {
    const isError = type === "error";

    const defaultIcon = isError ? (
        <FaExclamationTriangle className="text-5xl text-red-200" />
    ) : (
        <div className="w-3 h-3 bg-primary rounded-full absolute top-0"></div>
    );

    return (
        <div className="min-h-[70vh] flex items-center justify-center py-20 bg-slate-50 relative overflow-hidden">
            {/* Decorative Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="container-custom relative z-10 text-center px-4">
                <div className="max-w-md mx-auto bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-12 border border-slate-100 group transition-all duration-500 hover:shadow-2xl">
                    <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner border relative ${isError ? "bg-red-50 border-red-50" : "bg-slate-50 border-slate-100"
                        }`}>
                        <div className="group-hover:scale-110 transition-transform duration-500">
                            {icon || defaultIcon}
                        </div>
                        {!isError && (
                            <div className="absolute -top-1 -right-1">
                                <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
                                <div className="w-3 h-3 bg-primary rounded-full absolute top-0"></div>
                            </div>
                        )}
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-secondary mb-4">{title}</h2>
                    <p className="text-slate-600 mb-10 leading-relaxed">
                        {description}
                    </p>

                    <div className="space-y-4">
                        <Link to={actionLink} className="btn btn-primary w-full py-4 flex items-center justify-center gap-2 group/btn">
                            <FaArrowLeft className="text-sm group-hover/btn:-translate-x-1 transition-transform" />
                            {actionLabel}
                        </Link>

                        {showHomeLink && actionLink !== "/" && (
                            <Link to="/" className="w-full py-4 text-slate-500 font-semibold hover:text-primary transition-colors flex items-center justify-center gap-2">
                                <FaHome className="text-sm" />
                                Go to Home Page
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyState;
