import React from "react";
import { Gambar } from "./Gambar";
import homelogo from "../../public/home.jpg"; // Pastikan path ini benar

const Home = ({id}) => {
  return (
    <div id={id}>
      <div id="bg"></div>
      <div id="content" className="flex justify-center m-0 p-0 py-40">
        <div id="text" className="font-semibold">
          <h1 className="text-8xl text-gray-500 z-10">
            Hey You Can Call <br /> Me FAR
            <span className="text-gray-300">KHAN</span>
          </h1>
          <h2 className="text-3xl">
            And I'm a <span className="text-gray-300">Website Developer</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
