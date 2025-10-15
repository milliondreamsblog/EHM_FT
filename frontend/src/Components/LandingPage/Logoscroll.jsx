import Marquee from "react-fast-marquee";
import { companies } from "../../Data/Data";
import SectionHeading from "../../Common/SectionHeading";

const LogoScroll = () => {
  const handleCompanyClick = (e, company) => {
    e.preventDefault();
    window.open(company.url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-teal-50 to-white overflow-hidden">
      {/* Decorative subtle glow top & bottom */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/70 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent z-10" />

      <div className="relative container mx-auto text-center z-20 mb-10">
        <SectionHeading>The Leaders We Work With</SectionHeading>
      </div>

      <div className="relative container mx-auto px-6 z-20 overflow-hidden">
        <style>
          {`
            /* Hide scrollbar globally */
            ::-webkit-scrollbar { display: none; }
            html, body {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }

            /* Card style */
            .company-card {
              width: 11rem;
              height: 11rem;
              transition: all 0.35s ease;
              border-radius: 1rem;
              background: white;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 4px 10px rgba(0,0,0,0.05);
              overflow: hidden;
              position: relative;
              transform: scale(0.9);
            }

            .company-card:hover {
              transform: scale(0.96) translateY(-4px);
              box-shadow: 0 10px 20px rgba(13,148,136,0.25);
            }

            .company-logo {
              width: 80%;
              height: 80%;
              object-fit: contain;
              transition: transform 0.35s ease;
              filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
            }

            .company-card:hover .company-logo {
              transform: scale(1.05);
            }

            .company-name {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
              color: white;
              padding: 0.5rem;
              font-size: 0.85rem;
              font-weight: 500;
              opacity: 0;
              transform: translateY(10px);
              transition: all 0.3s ease;
            }

            .company-card:hover .company-name {
              opacity: 1;
              transform: translateY(0);
            }

            @media (min-width: 640px) {
              .company-card { width: 13rem; height: 13rem; }
            }
            @media (min-width: 1024px) {
              .company-card { width: 14rem; height: 14rem; }
            }
          `}
        </style>

        {/* Smooth horizontal marquee */}
        <Marquee
          gradient={false}
          speed={35}
          pauseOnHover={true}
          direction="left"
          className="py-4"
        >
          {companies.map((company, idx) => (
            <div
              key={idx}
              onClick={(e) => handleCompanyClick(e, company)}
              className="company-card group cursor-pointer mx-5"
            >
              <img
                src={`/Client/${company.name}.png`}
                alt={company.name}
                draggable={false}
                className="company-logo"
              />
              <div className="company-name">{company.name}</div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoScroll;
