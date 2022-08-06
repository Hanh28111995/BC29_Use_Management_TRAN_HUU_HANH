const DEFAULT_STATE = {
  count: 30,
};

export const countReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "INCREASE":
      state.count += 1;

      return { ...state };

    case "DECREASE":
      state.count -= 1;

      return { ...state };

    case "RANDOM":
      state.count = action.payload;

      return { ...state };

    default:
      return state;
  }
};
