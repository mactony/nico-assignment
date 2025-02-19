import Image from "next/image";

const contacts = [
  { name: "Salem University", image: "/logos/salem.png" },
  { name: "Southern Nazarene", image: "/logos/southern-nazarene.svg" },
  { name: "Strayer University", image: "/logos/strayer-university.svg" },
  { name: "UC Davis", image: "/logos/uc-davis.svg" },
  { name: "University of Texas", image: "/logos/university-texas.svg" },
  {
    name: "Kent State University",
    image: "/logos/Kent_State_University_Logo.svg",
  },
  {
    name: "Southern New Hampshire University",
    image: "/logos/Southern_New_Hampshire_University.svg",
  },
  { name: "Montana State", image: "/logos/Montana_State_University_Logo.svg" },
  {
    name: "North Dakota",
    image: "/logos/North_Dakota_State_University_wordmark.svg",
  },
];

export default function UniversityMarquee() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-6 md:py-8 lg:py-10 border-x xl:border-x border-[#00000021]">
        <div className="overflow-hidden">
          <div className="flex gap-12">
            <div className="flex whitespace-nowrap animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
              {[...contacts, ...contacts].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start gap-16 pr-16 lg:gap-20 lg:pr-20"
                >
                  <figure className="grid gap-4 w-24">
                    <div className="relative">
                      <Image
                        alt={contact.name}
                        height={80}
                        width={100}
                        src={contact.image}
                        className="w-full object-cover"
                      />
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
