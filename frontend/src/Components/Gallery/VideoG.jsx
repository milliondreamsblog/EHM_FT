// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const VideoG = () => {
//   const [videos, setVideos] = useState([]); // just empty array, no <string[]>

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/videos/videos");

        
//         console.log("Fetched video URLs:", res.data);
//         setVideos(res.data);
//       } catch (err) {
//         console.error("Error fetching videos:", err);
//       }
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Video Gallery</h2>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {videos.length === 0 && <p>No videos found.</p>}
//         {videos.map((url, index) => (
//           <video
//             key={index}
//             src={url}
//             controls
//             width="300"
//             style={{ border: "1px solid #ccc", borderRadius: "8px" }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoG;


import React from "react";

const VideoG = () => {
  const videos = [
   " https://res.cloudinary.com/don5o12hm/video/upload/v1757589348/water_positive_video_onz7dt.mp4",
    "https://res.cloudinary.com/don5o12hm/video/upload/v1757589447/CSJMU_Sustainability_Report_2024-25_yuvijn.mp4",
    "https://res.cloudinary.com/don5o12hm/video/upload/v1757589490/EHM_-_DNTS_Design_-_updated_knrp8i.mp4",
    "https://res.cloudinary.com/don5o12hm/video/upload/v1757589549/water-positive_campus_-2_x7zr67.mp4",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Video Gallery</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {videos.map((url, index) => (
          <video
            key={index}
            src={url}
            controls
            width="300"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoG;
