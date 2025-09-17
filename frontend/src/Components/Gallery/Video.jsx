import React, { useEffect, useState } from "react";
import axios from "axios";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/videos"); 
        setVideos(res.data);
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Video Gallery</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {videos.map((url, index) => (
          <video
            key={index}
            src={url}
            controls
            width="300"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
          >
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export default Videos;
