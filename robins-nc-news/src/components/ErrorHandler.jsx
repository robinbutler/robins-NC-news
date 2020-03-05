import React from "react";

const ErrorHandler = ({ error }) => {
  return (
    <div>
      <p>
        Congratulations entrepid explorer you have entered the realms beyond the
        limit of this site!{" "}
      </p>
      <p>Status: {error.status}</p>
      <p>{error.msg}</p>
    </div>
  );
};

export default ErrorHandler;
