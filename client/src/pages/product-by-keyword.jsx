import React, {useEffect} from 'react';
import ProductStore from "../store/productStore.js";
import {useParams} from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import ProductList from "../product/product-list.jsx";

const ProductByKeyword = () => {

    const {ListByKeywordRequest}=ProductStore();
    const {keyword}=useParams();
    useEffect(() => {
        (async ()=>{
            await ListByKeywordRequest(keyword)
        })()
    }, [keyword]);

    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default ProductByKeyword;