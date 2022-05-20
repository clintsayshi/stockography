import React from "react";
import { ClockLoader } from "react-spinners";

function QueryResults({ loading, children }) {
  if (loading)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <ClockLoader color="#00ff0f" loading={loading} size={150} />
      </div>
    );

  return <div>{children}</div>;
}

export default QueryResults;
