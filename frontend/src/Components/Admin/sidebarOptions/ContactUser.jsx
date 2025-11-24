import React, { useEffect, useState } from "react";
import API from "../../../api/axios";

export default function ContactUsers() {
  const [contacts, setContacts] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(false);

  useEffect(() => {
    setLoadingContacts(true);
    API.get("/admin/contacts")
      .then((res) => {
        const sorted = res.data.contacts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setContacts(sorted);
      })
      .catch((err) => {
        console.error("Error fetching contacts:", err);
      })
      .finally(() => setLoadingContacts(false));
  }, []);

  return (
    <div className="text-[#35582a]">
      <h2 className="text-2xl font-bold mb-4 underline">Contact Messages</h2>
      {loadingContacts ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-auto max-h-[60vh]">
          <table className="min-w-full border border-gray-300 bg-white">
            <thead className="bg-[#4b7735] text-white sticky top-0">
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Mobile</th>
                <th className="py-2 px-4 border-b">Interested In</th>
                <th className="py-2 px-4 border-b">Message</th>
                <th className="py-2 px-4 border-b">Received At</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, idx) => (
                <tr key={contact._id || idx} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{contact.name}</td>
                  <td className="py-2 px-4 border-b">{contact.email}</td>
                  <td className="py-2 px-4 border-b">{contact.mobile || "N/A"}</td>
                  <td className="py-2 px-4 border-b capitalize">{contact.interestedIn}</td>
                  <td className="py-2 px-4 border-b max-w-xs truncate" title={contact.message}>
                    {contact.message}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(contact.createdAt).toLocaleString()}
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