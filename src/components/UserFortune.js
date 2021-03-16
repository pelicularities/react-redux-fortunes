import React from "react";

const UserFortune = ({ name, prediction }) => {
  return (
    <React.Fragment>
      <div>
        <b>{name}</b>: {prediction}
      </div>
    </React.Fragment>
  );
};

export default UserFortune;
