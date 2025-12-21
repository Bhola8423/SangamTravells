import { FaCar, FaSmile, FaPhoneAlt } from "react-icons/fa";

const steps = [
  {
    title: "Choose Your Ride",
    desc: "Select the perfect vehicle for your group size and comfort needs.",
    icon: <FaCar />,
    step: "01"
  },
  {
    title: "Book Instantly",
    desc: "Call or WhatsApp us to confirm your booking in minutes.",
    icon: <FaPhoneAlt />,
    step: "02"
  },
  {
    title: "Safe Journey",
    desc: "Our verified driver picks you up for a safe and memorable trip.",
    icon: <FaSmile />,
    step: "03"
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-yellow rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-4">
            How It Works
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Booking your pilgrimage transport has never been easier. Just 3 simple steps to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-primary/30 z-0"></div>

          {steps.map((step) => (
            <div
              key={step.title}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center text-4xl text-primary mb-8 group-hover:scale-110 transition-transform duration-300 relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center border-2 border-white">
                  {step.step}
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
