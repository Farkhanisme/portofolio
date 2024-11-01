import React from "react";
import html from "../../public/html.png";
import bootstrap from "../../public/bootstrap.png";
import tailwind from "../../public/tailwind.png";
import mysql from "../../public/mysql.png";
import profil from "../../public/profil.jpg";

const About = ({ id }) => {
  return (
    <div id={id} className="p-28 flex-wrap space-y-10">
      <div id="text" className="flex space-x-10 justify-evenly">
        <div id="desc" className="w-1/2">
          <h1 className="font-semibold text-6xl">About Me</h1>
          <br />
          <p className="font-medium text-base">
            I am a fifth-semester student at Al-Quran Science University in
            Wonosobo. I am a junior full-stack web developer, and I am
            proficient in HTML & CSS, PHP, JavaScript, Bootstrap, and MySQL.
            Currently, I am studying React.js, Node.js, Laravel, and MongoDB.
          </p>
        </div>
        <img src={profil} alt="Profile" className="w-40 h-fit" />
      </div>
      <div id="skill" className="flex justify-center items-center">
        <img src={html} alt="HTML, CSS, JavaScript" className="w-72 h-fit" />
        <img src={bootstrap} alt="Bootstrap" className="w-36 h-fit" />
        <img src={tailwind} alt="Tailwind" className="w-24 h-fit me-5" />
        <img src={mysql} alt="MySQL" className="w-24 h-fit" />
      </div>
    </div>
  );
};

export default About;
