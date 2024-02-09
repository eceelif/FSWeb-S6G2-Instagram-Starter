// Gonderiler.js
import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  const { gonderiyiBegen, data } = props;

  return (
    <div className="posts-container-wrapper">
      {data.map((gonderi) => (
        <Gonderi key={gonderi.id} gonderi={gonderi} />
      ))}
    </div>
  );
};

export default Gonderiler;
