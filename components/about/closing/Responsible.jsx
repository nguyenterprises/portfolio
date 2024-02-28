"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFilePdf } from "react-icons/fa6";

function Responsible() {
  const [textColor, setTextColor] = useState("red");

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className="text-2xl text-center text-sky-500 dark:text-sky-400"
        style={
          {
            // fontSize: "35px",
            //   color: textColor,
          }
        }
      >
        <TypeAnimation
          sequence={[
            "Responsive. ",
            800,
            // () => setTextColor("#ffddb5"),
            "Responsive.   Efficient.  ",
            800,
            // () => setTextColor("#ffddb5"),
            "Responsive.   Efficient.   Reliable.",
            1000,
            // () => setTextColor("#ffddb5"),
            "",
          ]}
          repeat={Infinity}
          deletionSpeed={90}
        />
      </div>

      <div className="text-4xl font-medium">Hanh Nguyen</div>
      <div className="mt-3">
        <a
          href="/Resume.pdf"
          alt="resume"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 hover:animate-bounce text-sm"
        >
          <span className="text-red-500 text-6xl">
            <FaFilePdf />
          </span>
          Resume
        </a>
      </div>
    </div>
  );
}

export default Responsible;
