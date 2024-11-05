import React from "react";

const NoData = () => {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-b from-blue-500 to-blue-800 text-white p-5">
        <div className="max-w-md w-full bg-white bg-opacity-10 rounded-lg shadow-lg text-center p-8 space-y-4">
            <h2 className="text-2xl font-bold">No Data</h2>
            <p className="text-sm text-gray-300">Please check your search location</p>
        </div>
    </div>
  );
};

export default NoData;
