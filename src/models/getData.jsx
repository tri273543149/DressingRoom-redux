import Product from "./product";
import Tab from "./tab";
import List from "./list";
import ProductsData from "./productsData";
import TabData from "./tabData";

let list = new List();
for (let product of ProductsData) {
  let id = product.id;
  let type = product.type;
  let name = product.name;
  let desc = product.desc;
  let imgSrc_jpg = product.imgSrc_jpg;
  let imgSrc_png = product.imgSrc_png;

  let newProduct = new Product(id, type, name, desc, imgSrc_jpg, imgSrc_png);
  list.addNewProduct(newProduct);
}
for(let tab of TabData){
    let tabName = tab.tabName;
    let showName = tab.showName;
    let type = tab.type;

    let newTab = new Tab(tabName, showName, type);
    list.addNewTab(newTab);
}

export default list;
