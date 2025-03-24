import React from "react";
import "./Hero.css";
import Profile_img from "../../assets/Profile_img.jpeg";

const Hero = () => {
  return (
    <div className="hero flex flex-col items-center text-center">
      {/* Profile Image */}
      <img
        src={Profile_img}
        alt="profile-image"
        className="rounded-full shadow-lg border-4 border-white"
      />

      {/* Title */}
      <h1 className="text-5xl font-bold leading-snug">
        <span className="hero-highlight">I'm Ankur Kumar,</span> Full Stack Developer Based In India.
      </h1>

      {/* Description */}
      <p className="hero-description">
        I am a Full Stack Developer from Hyderabad, India, with hands-on experience in multiple projects. Passionate about coding and building scalable applications.
      </p>

      {/* Action Buttons */}
      <div className="hero-action flex gap-6">
        <button className="hero-btn">Connect With Me</button>
        <button className="hero-btn">My Resume</button>
      </div>
    </div>
  );
};

export default Hero;
