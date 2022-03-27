import React, {useEffect, useState} from "react";
import api from "../../../Services/api";
import {Category} from "./Category/Category";

export function Categories(){
    const {REACT_APP_CATEGORY_COLLECTION} = process.env;

    let [categories, setCategories] = useState([]);

    function fetchCategories(){
        let stubbedCategories = [];

        stubbedCategories.push({
            $id: 'asdadasdasd',
            name: 'Test Forum',
            description: "We're going to need a bigger boat"
        });

        return stubbedCategories;
    }

    useEffect(() => {
        setCategories(fetchCategories());
    }, []);


    return categories.map((category) => (
        <Category key={category.$id} name={category.name} description={category.description} />
    ));
}
