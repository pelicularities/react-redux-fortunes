const initialState = {
  predictions: [
    {
      id: 0,
      name: "John",
      fortune: "Over self-confidence is equal to being blind.",
    },
    {
      id: 1,
      name: "Alice",
      fortune:
        "Happiness isn't something you remember, it's something you experience.",
    },
  ],
};

function fortunesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default fortunesReducer;
