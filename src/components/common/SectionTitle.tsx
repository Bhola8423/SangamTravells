interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionTitle = ({ title, subtitle, align = "center" }: SectionTitleProps) => {
  return (
    <div
      className="section-header"
      style={{ textAlign: align === "left" ? "left" : "center" }}
    >
      <h2 className={`heading-cursive text-3xl md:text-4xl font-bold tracking-tight text-slate-800 ${align === "center" ? "text-center" : "text-left"}`}>        {title}
      </h2>
      <div className={`${align === "center" ? "mx-auto" : ""} mt-2 h-1 w-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full`} />

      {subtitle && (
        <p className={`mt-2 text-sm md:text-base text-slate-500 ${align === "center" ? "text-center" : "text-left"}`}   >
          {subtitle}
        </p>
      )}

    </div>
  );
};

export default SectionTitle;
