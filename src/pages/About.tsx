import ReadyToPlan from "../components/common/ReadyToPlan";

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-[#fff7f2] to-[#f8fffb] my-10 py-10">
        <div className="container pt-20 pb-24">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            About Sangam Tour & Travels
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 text-base md:text-lg">
            A trusted travel partner for pilgrimage tours, taxi services,
            and unforgettable spiritual journeys across India.
          </p>
        </div>

        {/* <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[40px]" /> */}
      </section>

      {/* STORY */}
      <section className="container py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Our Story
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Sangam Tour & Travels was founded with a simple mission — to make
              pilgrimage journeys comfortable, safe, and spiritually fulfilling.
              What started as a small local taxi service has grown into a trusted
              name for yatras, group tours, and customized travel experiences.
            </p>
            <p className="text-slate-600 leading-relaxed">
              With years of experience and thousands of satisfied travelers,
              we focus on reliability, transparency, and heartfelt service.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Our Journey"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-slate-50 py-14">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Pilgrimage & Yatra Tours",
              "Local & Outstation Taxi Services",
              "Group & Family Travel",
              "VIP Darshan Arrangements",
              "Custom Travel Planning",
              "Corporate & Event Travel",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <div className="text-primary text-xl mb-3">✔</div>
                <div className="font-semibold">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container py-14">
        <h2 className="text-2xl font-bold mb-8">
          Why Choose Sangam Tour & Travels
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Trusted & Experienced",
              desc: "Years of experience with verified drivers and guides.",
            },
            {
              title: "Comfort & Safety",
              desc: "Well-maintained vehicles and safety-first approach.",
            },
            {
              title: "Transparent Pricing",
              desc: "No hidden charges — honest and fair pricing.",
            },
            {
              title: "24×7 Support",
              desc: "Always available to assist you during your journey.",
            },
            {
              title: "Customized Plans",
              desc: "Travel itineraries designed as per your needs.",
            },
            {
              title: "Customer Satisfaction",
              desc: "Thousands of happy pilgrims and travelers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary text-white py-6">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-gradient-to-r from-[#a84c32] to-[#1160bf] rounded-md ">
          {[
            { label: "Happy Travelers", value: "1,000+" },
            { label: "Years of Experience", value: "10+" },
            { label: "Pilgrimage Routes", value: "50+" },
            { label: "Vehicles Available", value: "30+" },
          ].map((stat) => (
            <div key={stat.label} className="py-10">
              <div className="text-3xl font-extrabold ">
                {stat.value}
              </div>
              <div className="text-sm opacity-90 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <ReadyToPlan />
    </>
  );
};

export default About;
