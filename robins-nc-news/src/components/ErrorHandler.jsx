import React from "react";
import Sketch from "../utils/sketch";
import P5Wrapper from "react-p5-wrapper";

const ErrorHandler = ({ error }) => {
  return (
    <div className="Error">
      <p>
        Congratulations intrepid explorer you have entered the realms beyond the
        limit of this site!{" "}
      </p>
      <p>
        Sit back relax and watch this simulation of the game of life as a reward
        :D
      </p>
      <p>Status: {error.status}</p>
      <p>{error.msg}</p>
      <div>
        <P5Wrapper sketch={Sketch} className="gol"></P5Wrapper>
      </div>
    </div>
  );
};

export default ErrorHandler;
