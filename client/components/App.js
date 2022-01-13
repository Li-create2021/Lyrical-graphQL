import React from "react";

//if react router decides to show the index route "songList" it will be passed to the App component
export default ({ children }) => {
  return <div className="container">{children}</div>;
};
