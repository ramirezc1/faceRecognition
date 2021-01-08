import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3 ">{`${name}, you have submitted... ${entries} images`}</div>
    </div>
  );
};

export default Rank;
