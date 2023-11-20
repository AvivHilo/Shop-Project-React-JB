import { React, useState } from "react"

import SelectCategory from "./SelectCategory";


export default function NewProductPage(props) {
  const [category, setcategory] = useState(null);
  const [name, setname] = useState("");
  const [price, setprice] = useState(0);

  return (
    <>
    <div class="row justify-content-md-center">
        <form class="w-25">
            <h3>New Product</h3>
            <br></br>

            <div class="mb-3">
                <label for="productname" class="form-label">Name</label>
                <input type="text" class="form-control" id="productname" value={name} onChange={(e) => setname(e.value)}></input>
            </div>
            <div class="mb-3">
                <label for="productprice" class="form-label">Price</label>
                <input type="number" step="0.01" class="form-control" id="productprice" value={price} onChange={(e) => setprice(e.value)}></input>
            </div>
            <div class="mb-3">
              <label for="selectcategory" class="form-label">Category</label>
              <SelectCategory id="selectcategory" setcategory={setcategory} URL={props.URL} value={category}/>
            </div>
            <button class="btn btn-primary mb-3">Add Product</button>
        </form>
    </div>
    </>
  );
}