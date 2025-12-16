import { FaCar, FaCalendarCheck, FaSmile } from "react-icons/fa";

const steps = [
  {
    title: "Choose Service",
    desc: "Select the taxi or travel service that suits your journey.",
    icon: <FaCar />,
  },
  {
    title: "Confirm Booking",
    desc: "Contact us via call or WhatsApp to confirm your plan.",
    icon: <FaCalendarCheck />,
  },
  {
    title: "Enjoy Your Journey",
    desc: "Relax and enjoy a safe, comfortable and timely ride.",
    icon: <FaSmile />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-slate-50 py-14">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8 text-center">
          How It Works
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-white rounded-xl p-6 shadow-sm text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mb-4">
                {step.icon}
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
