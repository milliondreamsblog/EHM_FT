import { Player } from "@lottiefiles/react-lottie-player";
import Card from "./Card";

export default function PurposeCard({ lottieSrc, title, description }) {
  return (
    <Card className="purpose-card">
      {/* Background circles */}
      <div className="h-[10em] w-[10em] sm:h-[12em] sm:w-[12em] bg-[#19a289] rounded-full absolute bottom-full -left-[6em] group-hover:scale-[850%] z-[-1] duration-[400ms]" />
      <div className="h-[8em] w-[8em] sm:h-[10em] sm:w-[10em] bg-[#138c76] rounded-full absolute bottom-full -left-[5em] group-hover:scale-[650%] z-[-1] duration-[400ms]" />
      <div className="h-[6em] w-[6em] sm:h-[8em] sm:w-[8em] bg-[#0d6d5b] rounded-full absolute bottom-full -left-[4em] group-hover:scale-[500%] z-[-1] duration-[400ms]" />
      <div className="h-[4em] w-[4em] sm:h-[6em] sm:w-[6em] bg-[#08493e] rounded-full absolute bottom-full -left-[3em] group-hover:scale-[400%] z-[-1] duration-[400ms]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <Player
          autoplay
          loop
          src={lottieSrc}
          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
        />
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-4 mb-3 group-hover:text-white transition-colors duration-200">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed group-hover:text-white transition-colors duration-200">
          {description}
        </p>
      </div>
    </Card>
  );
}
