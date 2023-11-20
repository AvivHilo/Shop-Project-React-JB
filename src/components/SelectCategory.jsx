import { React, useState, useEffect } from "react";
import axios from 'axios';

export default function SelectCategory(props) {
    const [categories, setcategories] = useState(null);

    useEffect(() => 
        {
            get_categories()
        },
        []
    );

    function get_categories()
    {
        axios.get(`${props.URL}/category`).then
        (res=>{setcategories(res.data)}).catch
        ((error) => {console.error("Failed to fetch categories. (Is the server available?)", error)});
    }


  return (
    <>
        {categories &&(
            <select class="form-select" aria-label="Select Category" onChange={(e) => props.setcategory(e.target.value)}>
                <option value={-1}>All</option>
                {categories.map(category => (
                    <option value={category.id}>{category.name}</option>
                        )
                    )
                }
            </select>
        )
        }
    </>
  );
}