import React from "react";

export default function Product(props) {
  return (
    <>
        <div class="card h-100">
            {/*-- Product image--*/}
            <img class="card-img-top" src={props.product.imageURL} alt="..." />
            {/*-- Product details--*/}
            <div class="card-body p-4">
                <div class="text-center">
                    {/*-- Product name--*/}
                    <h5 class="fw-bolder">{props.product.name}</h5>
                    {/*-- Product price--*/}
                    {props.product.price}
                </div>
            </div>
            {/*-- Product actions--*/}
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">buy</a></div>
            </div>
        </div>
    </>
  );
}
