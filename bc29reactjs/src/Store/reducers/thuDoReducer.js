const DEFAULT_STATE = {
  selectedType: "topclothes",
  model: {
    topclothes: "/images/clothes/topcloth3.png",
    botclothes: "/images/clothes/botcloth2.png",
    shoes: "/images/shoes/shoes2.png",
    handbags: "/images/handbags/handbag2.png",
    necklaces: "/images/necklaces/necklace1.png",
    hairstyle: "/images/hairstyle/hairstyle1.png",
    background: "/images/background/background1.jpg",
  },
};

export const thuDoReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "SET_SELECTED_TYPE": {
      // state.selectedType = payload;

      return { ...state, selectedType: payload };
    }

    case "CHANGE_MODEL": {
      const { type, imgSrc_png } = payload;

      const newModel = { ...state.model };

      newModel[type] = imgSrc_png;

      state.model = newModel;

      return { ...state };
    }

    default:
      return state;
  }
};
