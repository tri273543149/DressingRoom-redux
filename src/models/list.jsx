class List {
  constructor() {
    this.ListOfProduct = [];
    this.ListOfTab = [];
  }
  addNewProduct = (newProduct) => {
    this.ListOfProduct = [...this.ListOfProduct, newProduct];
  };
  addNewTab = (newTab) => {
    this.ListOfTab = [...this.ListOfTab, newTab];
  };
}
export default List;
