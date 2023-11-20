import "./App.css";
import { React, useState } from "react";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";

import NewProductPage from "./components/NewProductPage";

import ListProducts from "./components/ListProducts";
import SelectCategory from "./components/SelectCategory";


const hostURL = "http://127.0.0.1:8000";

export default function App() {
  const [category, setcategory] = useState(null);

  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element=
        {<>
        <div class="container-md">
          <div class="row justify-content-md-center">
            <div class="col col-6">
            <SelectCategory setcategory={setcategory} URL={hostURL}/>
            </div>
          </div>

          <br></br>

          <div class="row justify-content-md-center">
            <Link to="newproduct" class="col col-6">
              <button class="btn btn-success fs-5 fw-bold">+</button>
            </Link>
          </div>

          <br></br><br></br>

          <div class="row justify-content-md-center" id="productList">
            <ListProducts c={category} URL={hostURL}/>
          </div>
        </div>
        </>}/>

        <Route path="newproduct" element={<NewProductPage URL={hostURL}/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}