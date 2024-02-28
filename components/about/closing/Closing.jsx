import React from "react";
import MixHats from "./MixHats";
import BigPicture from "./BigPicture";
import Responsible from "./Responsible";

function Closing() {
  return (
    <div className="px-4 pt-28 w-full flex flex-col items-center gap-20">
      <MixHats />
      <BigPicture />
      <Responsible />
    </div>
  );
}

export default Closing;
