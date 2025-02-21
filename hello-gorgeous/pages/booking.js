import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    date: "",
    service: "Bridal Makeup", // Default service
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.date} - ${formData.service}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-pink-600">Book a Makeup Session</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Date Selection */}
          <label className="block text-gray-700">Select Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-2"
          />

          {/* Service Selection */}
          <label className="block mt-4 text-gray-700">Choose Makeup Service:</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
          >
            <option>Bridal Makeup</option>
            <option>Casual Glam</option>
            <option>Photoshoot Makeup</option>
            <option>Special Event</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded mt-6"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
