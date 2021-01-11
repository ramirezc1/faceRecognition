import React from "react";
import "./ImageLinkForm.css";
const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
  return (
    <div>
      <p className="f2 black">
        {"This AI API will detect human faces in images. Give it a try!"}
      </p>

      <div className="center">
        <div className="form center pa5 br3 shadow-3">
          <input
            className="f4 pa2 w-90 center"
            type="text"
            onChange={onInputChange}
            placeholder="Image URL"
          />

          <button
            className="w-25 grow f3 link ph3 pv2 dib white bg-dark-red"
            onClick={onImageSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
