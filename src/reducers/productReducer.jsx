import list from "../models/getData";

let initialState = list.ListOfProduct;

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default productsReducer;