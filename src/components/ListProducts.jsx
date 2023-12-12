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
            {/*-- Section--*/}
            {products && 
            (
            <section class="py-5">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div class="col mb-5">
                            {
                            products.map((product, index) => 
                                    (
                                        <Product index={index} product={product}/>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
            )
            }
        </>
    );
}
