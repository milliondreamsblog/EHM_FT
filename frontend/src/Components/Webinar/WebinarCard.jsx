import { PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WebinarCard = ({ webinar }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/resources/webinar/${webinar.id}`);
  };

  return (
    <div
      className="rounded-2xl shadow-lg overflow-hidden bg-white 
                 transform transition duration-300 
                 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={handleClick} // click opens details page
    >
      <div className="relative group">
        <img
          src={webinar.thumbnail}
          alt={webinar.title}
          className="w-full h-full object-cover"
        />
        {/* Hover play button */}
        <div
          className="absolute inset-0 flex items-center justify-center 
                     bg-black/40 opacity-0 group-hover:opacity-100 
                     transition duration-300"
        >
          <PlayCircle className="w-16 h-16 text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {webinar.title}
        </h3>
        <p className="text-sm text-gray-600">{webinar.host}</p>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{webinar.views}</span>
          <span>{webinar.date}</span>
        </div>
      </div>
    </div>
  );
};

export default WebinarCard;
