import React from "react";
import man from "../assets/man.png"
import woman from "../assets/woman.png"
import others from "../assets/others.png"
export const MaleAvatar = () => {
  return (
    <div>
      <img src={man} alt="" width="50px"/>
    </div>
  );
};
export const FemaleAvatar = () => {
  return (
    <div>
      <img src={woman} alt="" width="50px" />
    </div>
  );
};
export const OthersAvatar = () => {
  return (
    <div>
      <img src={others} alt="" width="50px" />
    </div>
  );
};
