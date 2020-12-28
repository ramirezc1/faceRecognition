import React from "react";
import "./ImageLinkForm.css";
const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This AI API will detect human faces in images. Give it a try!"}
      </p>

      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
            placeholder="URL of Image"
          />

          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
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
