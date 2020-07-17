let initialState = {
  topclothes: "",
  botclothes: "",
  shoes: "",
  handags: "",
  necklaces: "",
  hairstyle: "",
  background: "",
};

const modelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITEM":
      state[action.payload.type] = action.payload.img;
      return { ...state };
    default:
      return { ...state };
  }
};

export default modelReducer;