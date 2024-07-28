import React from "react";
import { Link } from "react-router-dom";

const BottomWarning = ({ label, buttontext, to }) => {
  return (
    <div className=" flex justify-center py-2 text-sm" >
      <div>{label}</div>
      <Link to={to} className="pl-1 cursor-pointer underline">{buttontext}</Link>
    </div>
  );
};
    
export default BottomWarning;
