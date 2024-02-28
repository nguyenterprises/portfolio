"use client";
import { useState, useEffect, useRef } from "react";
import English from "./English";
import School from "./School";
import Brief from "./Brief";
import Career from "./Career";
import { FaPauseCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";

const pickDisplay = (second) => {
  switch (true) {
    case second === 1:
      return <English />;
    case second === 2:
      return <School />;
    case second === 3:
      return <Brief />;
    case second === 4:
      return <Career />;
    default:
      return <English />;
  }
};

function Animation() {
  const eleRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [seconds, setSeconds] = useState(1);
  const [display, setDisplay] = useState();
  const [playOn, setPlayOn] = useState(true);

  const checkInView = () => {
    const rect = eleRef.current.getBoundingClientRect();
    setIsInView(rect.top < window.innerHeight && rect.bottom >= 0);
  };
  useEffect(() => {
    checkInView();
  }, []);
  useEffect(() => {
    document.addEventListener("scroll", checkInView);
    return () => {
      document.removeEventListener("scroll", checkInView);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        seconds >= 4 ? setSeconds(1) : setSeconds(seconds + 1);
      }, 4000); // clearing interval
      return () => clearInterval(timer);
    }
  });
  useEffect(() => {
    if (playOn) {
      setDisplay(pickDisplay(seconds));
    }
  }, [playOn, seconds]);

  const forward = () => {
    setSeconds(seconds === 4 ? 1 : seconds + 1);
  };
  const reverse = () => {
    setSeconds(seconds === 1 ? 4 : seconds - 1);
  };

  return (
    <div className="w-full flex flex-col items-center relative">
      <div ref={eleRef} className="h-[40vh] sm:h-[34vh]">{display}</div>
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 flex items-center gap-2">
        <button onClick={reverse}>
          <div className="text-base text-gray-400">
            <FaBackward />
          </div>
        </button>
        <button onClick={() => setPlayOn(!playOn)}>
          {playOn ? (
            <div className="text-base text-gray-400">
              <FaPauseCircle />
            </div>
          ) : (
            <div className="text-base text-gray-400">
              <FaPlayCircle />
            </div>
          )}
        </button>
        <button onClick={forward}>
          <div className="text-base text-gray-400">
            <FaForward />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Animation;
