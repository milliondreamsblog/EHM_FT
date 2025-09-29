import { useState } from "react";

const WebinarForm = ({ webinarTitle, isCompleted, recordingLink }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    referral: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Registered for ${webinarTitle}:`, formData);
    alert(`Thank you for registering, ${formData.firstName}!`);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      referral: "",
    });
  };

  // ✅ If webinar is completed → show "Watch Event Recording"
  if (isCompleted) {
    return (
      <div className="w-full max-w-md p-6 border rounded-lg shadow-md bg-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          {webinarTitle}
        </h2>
        <p className="text-gray-600 mb-4">This event has ended.</p>
        <a
          href={recordingLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Watch Event Recording
        </a>
      </div>
    );
  }

  // ✅ Default: Registration form
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-6 border rounded-lg shadow-md bg-white"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Register for this Webinar
      </h2>

      {/* First Name */}
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Last Name */}
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Mobile Number */}
      <input
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Mobile Number"
        className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      {/* Referral Source */}
      <select
        name="referral"
        value={formData.referral}
        onChange={handleChange}
        className="text-gray-400 w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      >
        <option value="">How did you hear about us?</option>
        <option value="social-media">Social Media</option>
        <option value="friends">Friends / Colleagues</option>
        <option value="email">Email Newsletter</option>
        <option value="website">Website</option>
        <option value="other">Other</option>
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default WebinarForm;
