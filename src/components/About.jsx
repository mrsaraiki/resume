import React from "react";
import SkillCard from "../layouts/SkillCard";

const About = () => {
  const skill1 = "w-11/12";
  const skill2 = "w-4/5";
  const skill3 = "w-2/3";

  return (
    <div className=" min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 px-5 bg-backgroundColor">
      <div className=" mt-16">
        <h1 className=" text-4xl font-semibold text-center lg:mt-2">
          About Me
        </h1>
      </div>

      <div className=" -mt-10">
        <div className=" mb-10">
          <h2 className=" text-3xl font-semibold">I'm Saleem Abbas</h2>
          <p className=" mt-4 lg:mt-2">
          Hi, I am a MERN Stack developer for small scale websites to large scale eCommerce web applications. (Stripe, Paypal, Coinbase commerce payment gateway integrations too !)
          It all started in 2017 where I first learnt to build static landing pages. Then I came to know about how servers work with the help of JAVA, Python, PHP and now currently Node.js. That expanded my view upon the possibilities of creating huge applications

Then I slowly started engaging myself building single page application development, state management techniques using Redux.js and Context API and sideeffects using Redux-thunk and Redux-Saga, building microservices in Node.js and Express.js and knowing how to connect to databases using MongoDB and MySQL.
          </p>
        </div>

        <div>
          <h2 className=" text-3xl font-semibold ">My Skills</h2>

          <div>
            <SkillCard title="Html" width={skill1} val="95%" />
            <SkillCard title="CSS" width={skill1} val="95%" />
            <SkillCard title="JavaScript" width={skill2} val="70%" />
            <SkillCard title="MERN" width={skill1} val="95%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
