import { useParams } from "react-router-dom";
import { webinars } from "../../Data/webinars.js";
import WebinarForm from "./WebinarForm";

const WebinarDetails = () => {
  const { id } = useParams();
  const webinar = webinars.find((w) => w.id === parseInt(id));

  if (!webinar) return <p className="p-6 text-red-500">Webinar not found</p>;

  return (
    <div className="bg-gray-50 min-h-screen pt-24 md:pt-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {webinar.title}
          </h1>

          <div className="bg-blue-600 text-white rounded-md p-4 mb-6">
            <p className="mb-2">
              <span className="font-semibold">DATE:</span> {webinar.date}
            </p>
            <p>
              <span className="font-semibold">TIME:</span> {webinar.time}
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {webinar.description || "Join us for this insightful session where experts will share knowledge and ideas."}
          </p>

          <p className="text-teal-800 mb-2 py-6">
              <span className="font-semibold">SPEAKER:</span> {webinar.speaker}
            </p>
          
          <p className="text-teal-900 leading-relaxed ">
            <span className="font-semibold">HOST:</span>  {webinar.host}
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <img
            src={webinar.thumbnail}
            alt={webinar.title}
            className="w-full h-48 md:h-80 object-cover rounded-lg shadow-md mb-6"
          />
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Register
            </h2>
            <WebinarForm 
              webinarTitle={webinar.title}
              isCompleted={webinar.id <= 2}   // first 2 webinars completed
              recordingLink={webinar.link} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarDetails;
