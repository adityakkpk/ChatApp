import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex my-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className={`checkbox border-blue-900 ${
              selectedGender === "male" ? "selected" : ""
            }`}
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className={`checkbox border-blue-900 ${
              selectedGender === "female" ? "selected" : ""
            }`}
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

/*
import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex my-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-blue-900" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-blue-900" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

*/
