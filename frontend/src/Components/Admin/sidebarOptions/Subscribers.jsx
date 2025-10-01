import React, { useEffect, useState } from "react";
import API from "../../../api/axios";

export default function Subscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const [loadingSubs, setLoadingSubs] = useState(false);

  useEffect(() => {
    setLoadingSubs(true);
    API.get("/admin/subscribers")
      .then((res) => {
        const sorted = res.data.subscribers.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setSubscribers(sorted);
      })
      .catch(() => {})
      .finally(() => setLoadingSubs(false));
  }, []);

  return (
    <div className="text-[#35582a]">
      <h2 className="text-2xl font-bold mb-4 underline">Subscribers List</h2>
      {loadingSubs ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-auto max-h-[60vh]">
          <table className="min-w-full border border-gray-300 bg-white">
            <thead className="bg-[#4b7735] text-white sticky top-0">
              <tr>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Subscribed At</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((sub, idx) => (
                <tr key={sub._id || idx} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{sub.email}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(sub.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
