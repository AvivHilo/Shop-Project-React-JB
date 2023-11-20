import { React, useState, useEffect } from "react";
import axios from 'axios';

import Product from "./Product";

export default function ListProducts(props) {
    const [products, setProducts] = useState(null);

    useEffect(() => 
        {
            get_products(props.c);
        },
        [props.c]
    );

    function get_products(category)
    {
        const suffex = 
            !category || category === "-1" ? "" : `?category=${category}`;

        axios.get(`${props.URL}/product${suffex}`).then
        (res =>{setProducts(res.data)}).catch
        ((error) => {console.error("Failed to fetch products. (Is the server available?)", error)});
    }

    return (
        <>
        {/* <div class="d-flex justify-content-md-center">
            <button onClick={get_products} class="btn btn-light btn-outline-primary w-50"><h3>Get all products</h3></button>
        </div> */}
            {products && 
            (
            <ol class="col col-6 list-group">
                {
                products.map((product, index) => 
                        (
                            <Product index={index} product={product}/>
                        )
                    )
                }
            </ol>
            )
            }
        </>
    );
}
