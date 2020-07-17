let initialState = "topclothes";

const chosenCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default chosenCategoryReducer;
