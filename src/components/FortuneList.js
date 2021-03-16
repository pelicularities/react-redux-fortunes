import React, { useState } from "react";
import { connect } from "react-redux";
import UserFortune from "./UserFortune";
import { addFortune } from "../actions";
import { v4 as uuidv4 } from "uuid";

const FortuneList = ({ fortunes }) => {
  const [newName, setNewName] = useState("");
  return (
    <div>
      <h1>Fortune List</h1>
      {fortunes.predictions.map((data) => (
        <UserFortune key={data.id} name={data.name} prediction={data.fortune} />
      ))}
      <div>
        <input
          type="input"
          onChange={(event) => setNewName(event.target.value)}
        />
        <button
          onClick={() => addFortune(uuidv4(), newName, "Some Fortune Here")}
        >
          Get Fortune
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("inside mapStateToProps");
  const { fortunes } = state;
  return { fortunes };
};

const mapDispatchToProps = (dispatch) => ({
  addFortune: (id, name, fortune) => dispatch(addFortune(id, name, fortune)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FortuneList);
