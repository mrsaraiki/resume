import React from "react";
import img from "../assets/img/saleemabbas.jpg";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight mt-24">
          I'm Rana Saleem Abbas Noon
          <span className=" text-brightColor"> MERN Stack </span>
          Developer
        </h1>
        <p>
          Programming single page application development, state management techniques using Redux.js and Context API and sideeffects using Redux-thunk and Redux-Saga, building microservices in Node.js and Express.js and knowing how to connect to databases using MongoDB and MySQL
        </p>
        <Button title="HIRE ME" />
      </div>
      <div className=" mt-20 ">
        <img className="rounded-[49%] " width={400} src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
