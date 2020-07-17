import React from 'react';
import './App.css';

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Categories from "./components/left-components/top/Categories";
import Products from "./components/left-components/bottom/Products";
import Model from "./components/right-components/Model";

function App() {
  return (
    <div className="App">
      <div className="container-fluid text-center">
        <Header />
        <hr className="style13" />
        <div className="row">
          <div className="col-6">
            <div className="container-fluid">
              <Categories />
              <Products />
            </div>
          </div>
          <div className="col-6">
            <Model />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
