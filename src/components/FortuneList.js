import React from "react";
import { connect } from "react-redux";
import UserFortune from "./UserFortune";

const FortuneList = ({ fortunes }) => {
  return (
    <div>
      <h1>Fortune List</h1>
      {fortunes.predictions.map((data) => (
        <UserFortune name={data.name} prediction={data.fortune} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { fortunes } = state;
  return { fortunes };
};

export default connect(mapStateToProps)(FortuneList);
