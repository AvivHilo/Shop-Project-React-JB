import React from "react";

export default function Product(props) {
  return (
    <>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="fw-bold t-color">{props.product.name}</div>
            <div class="me-auto">
                <br></br>
                <p class= "fw-normal lh-8">
                price: <span class= "fw-light">{props.product.price}</span>
                <br></br>
                Stock: <span class= "fw-light">{props.product.stock}</span>
                </p>
            </div>
            <span class="badge bg-secondary rounded-pill">{props.index+1}</span>
        </li>
    </>
  );
}
