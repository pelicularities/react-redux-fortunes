export const ADD_FORTUNE = "ADD_FORTUNE";

export const addFortune = (id, name, fortune) => {
  console.log("addFortune click");
  return {
    type: ADD_FORTUNE,
    payload: {
      id,
      name,
      fortune,
    },
  };
};
