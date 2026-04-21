import React from "react";
const Loading = () => {
  return (
    <div className="flex justify-center items-center bg-amber-200 min-h-screen">
      <span className="loading loading-bars loading-lg"></span>
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};

export default Loading;
