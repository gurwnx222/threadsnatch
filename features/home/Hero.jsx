'use client';

import React, { useState } from 'react';
import { AnimatedGradientTextDemo } from './components/AnimatedGradientTextDemo';
import BotRobot from './components/BotRobot';
import rocket from './components/rocket.png';

const Hero = () => {
  const [formData, setFormData] = useState('');
  const [formSubmit, setFormSubmit] = useState(false);

  const handleWaitListForm = e => {
    e.preventDefault();
    // logic of backend
    console.log(formData);

    setFormSubmit(true);
    setFormData('');
  };

  return (
    <section className="m-10 w-auto  h-auto">
      <div className="flex flex-col mx-auto items-center gap-5 text-center pt-10">
        <AnimatedGradientTextDemo text={"Launching soon!"}  img={rocket} />
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-[#BB86FC] to-[#D0A8FF] text-transparent bg-clip-text">
          Reclaim Your Time—Let Bubble Handle <br />
          Your Threads Audience
        </h2>
        <p className="text-[#9F9F9F] text-sm -mt-4">
          Our AI agent delivers your resources directly to your audience’s DMs
          and comments, <br />
          so you can spend more time doing what you love.
        </p>
      </div>

      {/* Form - waitlist */}
      <div className="p-[2px] w-[23%] mx-auto mt-14 rounded-xl bg-gradient-to-r from-purple-400 via-pink-300 to-pink-500">
        <div className="bg-black rounded-lg py-2 text-white flex flex-row gap-2 ">
          <form onSubmit={handleWaitListForm}>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData}
              onChange={e => setFormData(e.target.value)}
              required
              className="pl-2 outline-none border-none bg-transparent"
            />

            <button
              className="ml-6 bg-blue-500 cursor-pointer w-30 rounded-lg "
              type="submit"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>

      {/* Bot Robot data */}
      <BotRobot formData={formData} formSubmit={formSubmit} />
    </section>
  );
};

export default Hero;
