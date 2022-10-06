import React from "react";
import { Outlet } from "react-router-dom";

const RightContainer = () => {
  return (
    <div className="rightContainer">
      <Outlet />
    </div>
  );
};

export default RightContainer;
