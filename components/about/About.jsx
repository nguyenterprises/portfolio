import React from "react";
import Programs from "./Programs";
import CustServ from "./CustServ";
import Animation from "./animation/Animation";
import Closing from "./closing/Closing";

function About() {
  return (
    <div
      id="about"
      className="px-4 py-28 w-full flex flex-col items-center gap-36 bg-sky-50 dark:bg-transparent"
    >
      <div>
        <h1 className="text-center pb-24 text-3xl font-medium uppercase">
          Relevant Skills
        </h1>
        <Programs />
      </div>
      <div>
        <h1 className="text-center pb-24 text-3xl font-medium uppercase">
          Customer Service
        </h1>
        <CustServ />
      </div>
      <div>
        <h1 className="text-center pb-24 text-3xl font-medium uppercase">
          History
        </h1>
        <Animation />
      </div>
      <div>
        <h1 className="text-center pb-0 text-3xl font-medium uppercase">
          Why Hanh
        </h1>
        <Closing />
      </div>
    </div>
  );
}

export default About;
