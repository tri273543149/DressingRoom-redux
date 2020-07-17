import list from "../models/getData";

let initialState = list.ListOfTab;

const categoriesRuducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default categoriesRuducer;