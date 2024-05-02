import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="flex items-center">
        <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="About us" className="mb-4 mr-4" />
        <div>
          <p className="mb-4">Welcome to our amazing company!</p>
          <p>We strive to deliver the best products and services.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;


