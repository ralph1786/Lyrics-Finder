import React from "react";
import Loader from "react-loader-spinner";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-centered">
      <Loader type="Puff" color="#8273A3" height={80} width={80} />
    </div>
  );
};

export default Spinner;
