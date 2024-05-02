import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Form data:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 pb-20">
      <h1 className="text-2xl font-bold mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-8">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-8">
          <label htmlFor="message" className="block mb-2">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            style={{ height: "150px" }}
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};  

export default ContactPage;

