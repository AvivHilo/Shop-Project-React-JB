import "./App.css";
import { React, useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import NewProductPage from "./components/NewProductPage";

import ListProducts from "./components/ListProducts";
import SelectCategory from "./components/SelectCategory";


const apiURL = "http://127.0.0.1:8000/api";

export default function App() {
  const [category, setcategory] = useState(null);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element=
        {<>
        {/*-- Header--*/}
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <SelectCategory setcategory={setcategory} URL={apiURL}/>
        <ListProducts c={category} URL={apiURL}/>
        </>}/>

        <Route path="newproduct" element={<NewProductPage URL={apiURL}/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}