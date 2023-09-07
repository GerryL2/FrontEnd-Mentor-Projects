import { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Countdown from "react-countdown";


function App() {
  const Completionist = () => <span>You are good to go!</span>;

  const RenderHours = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return 0;
    } else {
      return <span>{hours}</span>;
    }
  };

  const RenderMinutes = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return 0;
    } else {
      return <span>{minutes}</span>;
    }
  };

  const RenderSeconds = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return 0;
    } else {
      return <span>{seconds}</span>;
    }
  };

  const RenderDays = ({ hours, minutes, seconds, completed, days }) => {
    if (completed) {
      return 0;
    } else {
      return <span>{days}</span>;
    }
  };

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(
    () => {
      setIsAnimating(true);
      const animationTimeout = setTimeout(() => {
        setIsAnimating(false);
      }, 50); 

      return () => clearTimeout(animationTimeout);
    }, [] );

    document.body.className = "body"

  return (
    <div className=" background overflow-x-hidden flex flex-col justify-between">
      <main className="text-white uppercase  font-bold flex flex-col justify-center items-center m-auto">
        <h1 className="tracking-[5px] md:text-3xl text-4xl md:w-[100%] w-[70%] text-center mb-[5%]">
          WE'RE LAUNCHING SOON
        </h1>
        <div className="flex items-center flex-wrap  gap-8 justify-center mx-auto">
          <div className="flex flex-col items-center ">
            <div className="font-bold md:text-[5rem] text-[4rem] text-Soft-red counter px-8 py-6 rounded-xl my-5 mb-10 relative count">
              0
              
              <Countdown
                date={Date.now() + 700000000}
                renderer={RenderDays}
                className="number"
              />
              <div className="bg-transparent  rounded-lg my-5 flex justify-between items-center absolute md:top-[35%] top-[32%] right-[0] w-full">
              <div className="rounded-full bg-[#16161e] left-circle"></div>
                <div className="rounded-full bg-[#16161e] right-circle"></div>
              </div>
            </div>
            <p className="tracking-[5px]">Days</p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="font-bold md:text-[5rem] text-[4rem] text-Soft-red counter px-8 py-6 rounded-xl my-5 mb-10 relative">
              <Countdown
                date={Date.now() + 86400000}
                renderer={RenderHours}
                className="gradient-text"
              />
              <div className="bg-transparent  rounded-lg my-5 flex justify-between items-center absolute md:top-[35%] top-[32%] right-[0] w-full">
                <div className="rounded-full bg-[#16161e] left-circle"></div>
                <div className="rounded-full bg-[#16161e] right-circle"></div>
              </div>
            </div>
            <p className="tracking-[5px]">Hours</p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="font-bold md:text-[5rem] text-[4rem] text-Soft-red counter px-8 py-6 rounded-xl my-5 mb-10 relative">
              <Countdown
                date={Date.now() + 90000000}
                renderer={RenderMinutes}
                className="number"
              />
              <div className="bg-transparent  rounded-lg my-5 flex justify-between items-center absolute md:top-[35%] top-[32%] right-[0] w-full">
                <div className="rounded-full bg-[#16161e] left-circle"></div>
                <div className="rounded-full bg-[#16161e] right-circle"></div>
              </div>
            </div>
            <p className="tracking-[5px]">Minutes</p>
          </div>
          <div className="flex flex-col items-center ">
            <div
              className={`font-bold md:text-[5rem] text-[4rem] text-Soft-red overflow-x-hidden counter px-8 py-6 rounded-xl my-5 mb-10 rotate-in-hor relative countdown ${
                isAnimating ? "active" : ""
              }`}
            >
              <Countdown
                date={Date.now() + 50000000000000}
                renderer={RenderSeconds}
                className="number"
              />
              <div className="bg-transparent  rounded-lg my-5 flex justify-between items-center absolute md:top-[35%] top-[32%] right-[0] w-full">
                <div className="rounded-full bg-[#16161e] left-circle"></div>
                <div className="rounded-full bg-[#16161e] right-circle"></div>
              </div>
            </div>
            <div class="partial-circle"></div>
            <p className="tracking-[5px]">Seconds</p>
          </div>
        </div>
      </main>
      <footer
        className="footer flex justify-center items-center gap-5 "
      >
        <FaFacebook className="icon" size={30}/>
        <FaPinterest className="icon" size={30}/>
        <FaInstagram className="icon" size={30}/>
      </footer>
    </div>
  );
}

export default App;
