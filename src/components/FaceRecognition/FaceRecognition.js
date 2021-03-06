import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        {boxes.map(({ topRow, rightCol, bottomRow, leftCol }) => {
          return (
            <div
              key={`box${topRow}${rightCol}`}
              className="bouding-box"
              style={{
                top: topRow,
                right: rightCol,
                bottom: bottomRow,
                left: leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
