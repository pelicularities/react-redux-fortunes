import { ADD_FORTUNE } from "../actions";

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
  console.log("inside fortunesReducer");
  switch (action.type) {
    case ADD_FORTUNE: {
      console.log("inside ADD_FORTUNE case");
      return {
        ...state,
        predictions: [...state.predictions, action.payload],
      };
    }
    default:
      return state;
  }
}

export default fortunesReducer;
