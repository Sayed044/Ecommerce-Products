import React, {useEffect} from 'react';
import ProductStore from "../store/productStore.js";
import {useParams} from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import ProductList from "../product/product-list.jsx";

const ProductByCategory = () => {
    const {ListByCategoryRequest}=ProductStore();
    const {id}=useParams();
    useEffect(() => {
        (async ()=>{
            await ListByCategoryRequest(id)
        })()
    }, [id]);

    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default ProductByCategory;