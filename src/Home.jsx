import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Circles } from "react-loader-spinner";

function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center w-full ">
      <div className="mt-5">
      <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
        <h1 className="font-bold text-2xl md:text-5xl  text-gray-500 my-10 mx-5 md:mx-0">
          Here You Can Find Multiple Type Of Form 
        </h1>
        <p className="font-bold text-xl md:text-3xl text-gray-500 mx-3 md:mx-0">
        See top of website for categories
        </p>
      </div>
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
