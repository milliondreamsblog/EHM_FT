import Marquee from "react-fast-marquee";
import { partners } from "../../Data/Data";

const Partners_logo = () => {
  return (
    <div className="pt-10 pb-5 w-full bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* <div className="text-center text-bright-sun-400 text-xl italic mb-10 text-green-800">
        OUR PARTNERS & INCUBATORS
      </div> */}
      <Marquee pauseOnHover={true} autoFill speed={50} gradient={false}>
        {
          partners.map((partner, index) => (
            <div
              key={index}
              className="mx-8 px-2 py-1 rounded-xl cursor-pointer hover:bg-mine-shaft-800 transition-colors duration-300 flex items-center justify-center"
            >
              <img
                className="h-24 w-auto hover:scale-110 transition-transform duration-300"
                src={`/Partners/${partner}.png`}
                alt={partner}
              />
            </div>
          ))
        }
      </Marquee>
    </div>
  );
}

export default Partners_logo;
