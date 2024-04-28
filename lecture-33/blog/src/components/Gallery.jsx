import React from "react";
import Profile from "./Profile";

const Gallery = () => {
  return (
    <section>
      <h1 className="mb-4">Amazing scientists</h1>
      <div className="flex justify-center items-center space-x-4">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
};

export default Gallery;
